// Số lượng place hiển thị trên mỗi trang
var currentPage = 1;
var limit = 15;
var maxPage = 0;

//----------------------------------------//
//----------- ### AOS LIBRARY ### --------//
//----------------------------------------//
AOS.init();


//----------------------------------------//
//------------- ### API ### --------------//
//----------------------------------------//
async function getUserByID(id) {
    let user = await fetch("http://localhost:8000/api/getUserByID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ID: id }),
    }).then((data) => data.json());
    return user;
}

async function getProvinceByTerritoryID(id) {
    let allProvinceInTerritory = await fetch(
      "http://localhost:8000/api/getProvinceByTerritoryID",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ID: id }),
      }
    ).then((data) => data.json());
    return allProvinceInTerritory;
}

async function getTerritoryByID(id) {
    let territory = await fetch("http://localhost:8000/api/getTerritoryByID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return territory;
}

async function getProvinceWithNameLikeTerritoryID(name, id) {
    let result = await fetch("http://localhost:8000/api/getProvinceWithNameLikeTerritoryID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nameSearching: name, ID: id }),
    }).then((data) => data.json());
    return result;
};

async function addConnectTerritory(id) {
    let result = await fetch(
      "http://localhost:8000/api/addConnectTerritory",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ID: id }),
      }
    ).then((data) => data.json());
    return result;
}

async function getAllCollectionHaveNameLike(searchValue) {
    let result = await fetch("http://localhost:8000/api/getAllCollectionHaveNameLike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchValue: searchValue }),
    }).then((data) => data.json());
    return result;
}

//----------------------------------------//
//----------- ### FUNCTION ### -----------//
//----------------------------------------//
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;
  
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");
  
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
};

function getMaxPage(id) {
    return new Promise((resolve, reject) => {
        getProvinceByTerritoryID(id).then((dataProvince) => {
            if (dataProvince.success) {
                let maxPage = Math.ceil(dataProvince.data.length / limit);
                resolve(maxPage);
            };
        });
    });
};

function evenClickProvince(userID, group) {
    group.forEach(ele => {
        $(ele).click(() => {
            let ID = $(ele).data().id;
            if (!userID) {
                window.location = `/province.html?provinceID=${ID}`;
                return;
            }
            window.location = `/province.html?userID=${userID}&provinceID=${ID}`;
        });
    })
}

function renderProvince(userID, id) {
    let Provinces = ``
    getProvinceByTerritoryID(id).then((dataProvince) => {
        if (dataProvince.success) {
            let min = (currentPage * limit) - limit;
            let max = currentPage * limit;
            for (const [index, Province] of Object.entries(dataProvince.data)) {
                if (index >= min && index < max) {
                    Provinces += `
                        <div class="item">
                            <div class="item-box">
                                <div class="img item-img--province" data-id="${Province._id}">
                                    <img src="${Province.image}" alt="">
                                </div>
                                <div class="group-text">
                                    <span class="name-of-city" data-id="${Province._id}">${Province.name}</span>
                                </div>
                            </div>
                        </div>
                    `;
                };
            };
            $('.items-province').html(Provinces);

            var groupItemImageProvince = document.querySelectorAll('.item-img--province');
            evenClickProvince(userID, groupItemImageProvince);

            var groupItemNameProvince = document.querySelectorAll('.name-of-city');
            evenClickProvince(userID, groupItemNameProvince);
        }
    });
}

function renderPageNumber(userID, id) {
    $('#pageNumber').html(`${currentPage} / ${maxPage}`);
    currentPage == 1 ? $("#btnPrev").attr("disabled", true) : $("#btnPrev").attr("disabled", false);
    currentPage == maxPage ? $("#btnNext").attr("disabled", true) : $("#btnNext").attr("disabled", false);
    renderProvince(userID, id);
}

function setupButtonNextAndBackPage(userID, id) {
    $('#btnPrev').click(function (e) {
        if (currentPage == 1) return;
        currentPage -= 1
        renderPageNumber(userID, id);
    });

    $('#btnNext').click(function (e) { 
        if (currentPage == maxPage) return;
        currentPage += 1
        renderPageNumber(userID, id);
    });
};

function renderTerritory(userID, id) {
    getTerritoryByID(id).then((dataRegion) => {
        let data = dataRegion.data
        let name = data.name;
        let slogan = data.slogan;
        let image = data.image;
        let overview = data.overview;
        let regionID = data.regionID

        $('.h1-text-shadow').html(name);
        $('.h1-text-title').html(name);
        $('.slogan').html(`<p>${slogan}</p>`);
        $('.no1-page').css('background-image', `url(${image})`);
        $('.h1-text-title').css(`background-image`, `url(${image})`);
        $('#direction_region').attr("href", `/region.html?regionID=${regionID}`);

        let No2Page = `
            <div class="container">
                <h1>${name}</h1>
                <p>${overview}</p>
            </div>
        `
        $('.no2-page').html(No2Page);

        if (userID) {
            $('#btnDirectionHome').attr("href", `/home.html?userID=${userID}`);
            $('#direction_region').attr("href", `/region.html?userID=${userID}&regionID=${regionID}`);
            return;
        };
        $('#direction_region').attr("href", `/region.html?regionID=${regionID}`);
    });
}

function addEventForButtonSearch(userID, id) {
    $('#btnSearch').click(() => {
        let searchVal = $('#inputSearchCity').val();
        if (searchVal == "") {
            $('#pagination').show();
            renderPageNumber(userID, id);
            return;
        }

        $('#pagination').hide();
        getProvinceWithNameLikeTerritoryID(searchVal, id).then(result => {
            let Provinces = ``
            for (const [index, Province] of Object.entries(result.data)) {
                Provinces += `
                    <div class="item">
                        <div class="item-box">
                            <div class="img item-img--province" data-id="${Province._id}">
                                <img src="${Province.image}" alt="">
                            </div>
                            <div class="group-text">
                                <span class="name-of-city" data-id="${Province._id}">${Province.name}</span>
                            </div>
                        </div>
                    </div>
                `;
            };
            $('.items-province').html(Provinces);

            var groupItemImageProvince = document.querySelectorAll('.item-img--province');
            evenClickProvince(userID, groupItemImageProvince);

            var groupItemNameProvince = document.querySelectorAll('.name-of-city');
            evenClickProvince(userID, groupItemNameProvince);
        });
    });
}

function addEventButtonUser() {
    $('#userProfile').click(() => {
        const isSelect = $('#userProfile').hasClass('select');

        if (isSelect) {
            $('#userProfile').removeClass('select');
            $('#userOpions').hide();
            return;
        }
        $('#userProfile').addClass('select');
        $('#userOpions').show();
    });
}

function renderProfile(userID, territoryID) {
    if (userID) {
        getUserByID(userID).then(dataUser => {
            if (dataUser.success) {
                const data = dataUser.data;
                const name = data.fist_name + " " + data.last_name;
                let Profile = `
                    <div class="profile" data-id="${data._id}">
                        <span class="user-name">${name}</span>
                        <div class="user" id="userProfile">
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <ul class="user-options" id="userOpions">
                            <li><a href="profile.html">Trang Cá Nhân</a></li>
                            <li><a href="territory.html?territoryID=${territoryID}">Đăng Xuất</a></li>
                        </ul>
                    </div>
                    <div class="language">
                        <i class="fa-solid fa-earth-americas"></i>
                        <span>VN</span>
                    </div>
                `;
                $('.group-login-language').html(Profile);

                addEventButtonUser();
                return;
            };
        });
    };

    let groupLoginAndLanguage = `
        <div class="group-login-language">
            <div class="group-login-register">
                <a href="sign_up.html" class="btn" id="btnRegister">Đăng Ký</a>
                <a href="sign_in.html" class="btn" id="btnLogin">Đăng Nhập</a>
            </div>
            <div class="language">
                <i class="fa-solid fa-earth-americas"></i>
                <span>VN</span>
            </div>
        </div>
    `;
    $('.group-login-language').html(groupLoginAndLanguage);
}

// Header Search:
function addEventForChoseSearchOption(userID) {
    const groupSearchOption = document.querySelectorAll('.result-searching-form__item');
    groupSearchOption.forEach(option => {
        $(option).click(e => {
            e.preventDefault();
            const direction = $(option).data().direction;
            if (!userID) {
                window.location = `${direction}`;
                return;
            }
            window.location = `${direction}&userID=${userID}`;
        });
    });
};

function renderHeaderSearch(userID, searchValue) {
    getAllCollectionHaveNameLike(searchValue).then(result => {
        if (result.success) {
            const dataResult = result.data;
            const regionData = dataResult.regions;
            const territoryData = dataResult.territories;
            const provinceData = dataResult.provinces;
            const placeData = dataResult.places;
            
            let isRegionEmpty = regionData.length == 0 ? true : false;
            let isTerritoryEmpty = territoryData.length == 0 ? true : false;
            let isProvinceEmpty = provinceData.length == 0 ? true : false;
            let isPlaceEmpty = placeData.length == 0 ? true : false;

            if (isRegionEmpty || isTerritoryEmpty || isProvinceEmpty || isPlaceEmpty) {
                $('.result-searching-form').hide();
                return;
            }

            let SearchResult = ``;

            // Region Result:
            if (!isRegionEmpty) {
                SearchResult += `
                    <li class="result-searching-form__items">
                        <span class="header-title">Miền</span>
                `;
                for (const [index, region] of Object.entries(regionData)) {
                    const id = region._id;
                    const image = region.image;
                    const name = region.name;
                    SearchResult += `
                        <div class="result-searching-form__item" data-direction="/region.html?regionID=${id}">
                            <img class="item-img" src="${image}" alt="loading...">
                            <span class="item-name">${name}</span>
                        </div>
                    `;
                };
                SearchResult += `</li>`;
            };

            // Territory Result:
            if (!isTerritoryEmpty) {
                SearchResult += `
                    <li class="result-searching-form__items">
                        <span class="header-title">Vùng</span>
                `;
                for (const [index, territory] of Object.entries(territoryData)) {
                    const id = territory._id;
                    const image = territory.image;
                    const name = territory.name;
                    SearchResult += `
                        <div class="result-searching-form__item" data-direction="/territory.html?territoryID=${id}">
                            <img class="item-img" src="${image}" alt="loading...">
                            <span class="item-name">${name}</span>
                        </div>
                    `;
                };
                SearchResult += `</li>`;
            };

            // Province Result:
            if (!isProvinceEmpty) {
                SearchResult += `
                    <li class="result-searching-form__items">
                        <span class="header-title">Tỉnh Thành</span>
                `;
                for (const [index, province] of Object.entries(provinceData)) {
                    const id = province._id;
                    const image = province.image;
                    const name = province.name;
                    SearchResult += `
                        <div class="result-searching-form__item" data-direction="/province.html?provinceID=${id}">
                            <img class="item-img" src="${image}" alt="loading...">
                            <span class="item-name">${name}</span>
                        </div>
                    `;
                };
                SearchResult += `</li>`;
            };

            // Place Result:
            if (!isPlaceEmpty) {
                SearchResult += `
                    <li class="result-searching-form__items">
                        <span class="header-title">Địa Điểm</span>
                `;
                for (const [index, place] of Object.entries(placeData)) {
                    const id = place._id;
                    const image = place.image;
                    const name = place.name;
                    SearchResult += `
                        <div class="result-searching-form__item" data-direction="/place.html?placeID=${id}">
                            <img class="item-img" src="${image}" alt="loading...">
                            <span class="item-name">${name}</span>
                        </div>
                    `;
                };
                SearchResult += `</li>`;
            };

            $('.result-searching-form').html(SearchResult);
            $('.result-searching-form').show();
            addEventForChoseSearchOption(userID);
        };
    });
}

function addEventForInputHeaderSearch(userID) {
    $('#inputHeaderSearch').on('keypress', (e) => {
        const searchValue = $('#inputHeaderSearch').val();
        if (e.which == 13) {
            e.preventDefault();
            renderHeaderSearch(userID, searchValue);
        };
    });
};

function renderPage(userID, territoryID) {
    // HEADER:
    let base = `
        <section>
            <div
            class="no1-page scroll-trigger"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            và
            data-aos-duration="1500"
            >
                <div class="content">
                    <div class="container">
                        <div class="header">
                            <ul class="menu-options">
                                <li><a id="btnDirectionHome" href="home.html">Trang Chủ</a></li>
                                <li><a id="direction_region">Miền</a></li>
                            </ul>
                            <form class="searching-form">
                                <input type="text" placeholder="Tìm kiếm..." id="inputHeaderSearch">
                                <label for=""><i class="fa-solid fa-magnifying-glass"></i></label>
                                <ul class="result-searching-form"></ul>
                            </form>
                            <div class="group-login-language"></div>
                        </div>
                    </div>

                    <div class="h1-text-shadow"></div>
                    <div class="h1-text-title"></div>
                    <div class="slogan">
                        <p>
                            a land of rich cultural and historical experiences
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
  
    // OVERVIEW:
    base += `
        <div class="no2-page"></div>
    `;

    base += `
        <div class="no3-page">
            <div class="container">
                <div class="group-city">
                    <div class="header-title">
                        <span class="big-title">Tỉnh Thành</span>
                        <p class="details-title">
                            Mỗi tỉnh thành đều mang trong mình những nét đẹp riêng
                        </p>
                        <div class="group-input">
                            <input type="text" id="inputSearchCity" placeholder="Tìm kiếm...">
                            <label for="inputSearchCity" id="btnSearch"><i class="fa-solid fa-magnifying-glass"></i></label>
                        </div>
                    </div>

                    <div class="body-content">
                        <div class="items items-province"></div>
                    </div>

                    <div id="pagination">
                        <button id="btnPrev">&lt; Trang Trước</button>
                        <span id="pageNumber"></span>
                        <button id="btnNext">Trang Sau &gt;</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // FOOTER:
    base += `
          <footer>
              <div class="container">
                  <div class="footer-box">
                      <img class="logo-brand" src="https://cdn.discordapp.com/attachments/1089123119668658206/1092302284886638672/logo_VVVN_WhiteBG.png" alt="">
                      <div class="nav">
                          <ul class="ul-list">
                              <li class="li-list">
                                  <ul class="dropdown-list">
                                      <li><span class="header-dropdown">Region</span></li>
                                      <li><span class="option-dropdown">The Northern</span></li>
                                      <li><span class="option-dropdown">The Central</span></li>
                                      <li><span class="option-dropdown">The Southern</span></li>
                                  </ul>
                              </li>
  
                              <li class="li-list">
                                  <ul class="dropdown-list">
                                      <li><span class="header-dropdown">Land</span></li>
                                      <li><span class="option-dropdown">Northwest</span></li>
                                      <li><span class="option-dropdown">Northeast</span></li>
                                      <li><span class="option-dropdown">Red River</span></li>
                                      <li><span class="option-dropdown">North Central</span></li>
                                      <li><span class="option-dropdown">South Central Coast</span></li>
                                      <li><span class="option-dropdown">Southeast</span></li>
                                      <li><span class="option-dropdown">Mekong River Delta</span></li>
                                      <li><span class="option-dropdown">Southwest</span></li>
                                  </ul>
                              </li>
  
                              <li class="li-list">
                                  <ul class="dropdown-list">
                                      <li><span class="header-dropdown">Posts</span></li>
                                      <li><span class="option-dropdown">Trend</span></li>
                                      <li><span class="option-dropdown">Hot</span></li>
                                      <li><span class="option-dropdown">All</span></li>
                                  </ul>
                              </li>
  
                              <li class="li-list">
                                  <ul class="dropdown-list">
                                      <li><span class="header-dropdown">Help</span></li>
                                      <li><span class="option-dropdown">Q&A</span></li>
                                      <li><span class="option-dropdown">Phone</span></li>
                                      </ul>
                              </li>
  
                              <li class="li-list">
                                  <ul class="dropdown-list">
                                      <li><span class="header-dropdown">Info</span></li>
                                      <li><span class="option-owner">© 2023 vivu-vietnam.vercel.app</span></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </footer>
    `;
    $("body").html(base);
  
    // RENDER:
    renderProfile(userID, territoryID);
    renderTerritory(userID, territoryID);
    setupButtonNextAndBackPage(userID, territoryID);
    renderPageNumber(userID, territoryID);
    addEventForButtonSearch(userID, territoryID);

    // HEADER SEARCH:
    $('.result-searching-form').hide();
    addEventForInputHeaderSearch(userID);
};

$(document).ready(function () {
    const userID = getUrlParameter("userID");
    const territoryID = getUrlParameter("territoryID");
    addConnectTerritory(territoryID);
    getMaxPage(territoryID).then(max => {
        maxPage = max;
        renderPage(userID, territoryID);
    });
});