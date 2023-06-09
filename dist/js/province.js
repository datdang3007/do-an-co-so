// Set max render place:
const placeCount = 3;

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

async function getProvinceByID(id) {
    let province = await fetch("http://localhost:8000/api/getProvinceByID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return province;
}

async function getAllPlaceByProvinceID(id) {
    let allPlaceInProvince = await fetch(
      "http://localhost:8000/api/getAllPlaceByProvinceID",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ID: id }),
      }
    ).then((data) => data.json());
    return allPlaceInProvince;
}

async function getRegionByID(id) {
    let region = await fetch("http://localhost:8000/api/getRegionByID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return region;
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

async function getAllImageInProvince(id) {
    let allImageStockForProvince = await fetch(
      "http://localhost:8000/api/getAllImageInProvince",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ID: id }),
      }
    ).then((data) => data.json());
    return allImageStockForProvince;
}

async function addConnectProvince(id) {
    let result = await fetch(
      "http://localhost:8000/api/addConnectProvince",
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

function eventClickPlace(userID, group) {
    group.forEach(ele => {
        $(ele).click(() => {
            let ID = $(ele).data().id;
            
            if (!userID) {
                window.location = `/place.html?placeID=${ID}`;
                return;
            }
            window.location = `/place.html?userID=${userID}&placeID=${ID}`;
        });
    });
};

function renderService() {
    const Service = `
        <div class="item">
            <div class="item-box">
                <div class="img-service">
                <a href="https://www.traveloka.com/vi-vn/" target="_blank" alt="traveloka">
                    <img
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg"
                    alt=""
                    />  
                </a>
                </div>
                <div class="group-details">
                <span class="name">Traveloka</span>
                <div class="group-star">
                    <div class="star" id="star-no1">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no2">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no3">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no4">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no5">
                    <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <span class="details">
                    Traveloka là một công ty kỳ lân có trụ sở tại Indonesia, chuyên cung cấp dịch vụ đặt vé máy bay và đặt phòng khách sạn trực tuyến, hiện đang mở rộng nhanh chóng sang Đông Nam Á và Úc.
                </span>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="item-box">
                <div class="img-service ivivu">
                <a href="https://www.ivivu.com/" target="_blank" alt="ivivu">
                    <img
                    src="https://res.ivivu.com/hotel/img/logo-2023n.svg"
                    alt=""
                    />  
                </a>
                </div>
                <div class="group-details">
                <span class="name">Ivivu</span>
                <div class="group-star">
                    <div class="star" id="star-no1">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no2">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no3">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no4">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no5">
                    <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <span class="details">
                    Ivivu cung cấp hệ thống đặt phòng khách sạn trực tuyến cung cấp giải pháp tìm kiếm, đặt phòng, xác nhận và giữ phòng tức thời. Họ cung cấp phương thức thanh toán đa dạng và dịch vụ chăm sóc khách hàng chuyên nghiệp.
                </span>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="item-box">
                <div class="img-service intertour">
                <a href="https://intertour.vn/" target="_blank" alt="intertour">
                    <img
                    src="https://intertour.vn/wp-content/uploads/2022/05/Logo-Intertour2.png"
                    alt=""
                    />  
                </a>
                </div>
                <div class="group-details">
                <span class="name">Intertour</span>
                <div class="group-star">
                    <div class="star" id="star-no1">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no2">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no3">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no4">
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no5">
                    <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <span class="details">
                    Intertour tự hào là một đơn vị đối tác chiến lược trong việc cung cấp các dịch vụ du lịch phù hợp nhất.
                </span>
                </div>
            </div>
        </div>
    `;
    $('.items--service').html(Service);
}

function renderPlace(userID, id) {
    let Place = ``;
    getAllPlaceByProvinceID(id).then(dataPlace => {
        if (dataPlace.success) {
            const data = dataPlace.data;
            for (const [index, place] of Object.entries(data)) {
                if (index <= placeCount) {
                    Place += `
                        <div class="item">
                            <div class="item-box">
                                <div class="img img--place" data-id="${place._id}">
                                    <img
                                        src="${place.image}"
                                        alt=""
                                    />
                                </div>
                                <div class="group-details">
                                    <span class="name">${place.name}</span>
                                    <div class="group-star">
                                        <div class="star" id="star-no1">
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="star" id="star-no2">
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="star" id="star-no3">
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="star" id="star-no4">
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="star" id="star-no5">
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <span class="details">
                                        ${place.overview}
                                    </span>
                                </div>
                            </div>
                        </div>
                    `;
                };
            };
            $('.items--place').html(Place);

            const groupImagePlace = document.querySelectorAll('.img--place');
            eventClickPlace(userID, groupImagePlace);
        };
    });
};

function renderProvince(userID, id) {
    getProvinceByID(id).then(dataProvince => {
        if (dataProvince.success) {
            let data = dataProvince.data;
            let Name = data.name;
            let Overview = data.overview;
            let image = `
                <img
                    src="${data.image}"
                    alt=""
                />
            `;
            let regionID = data.regionID;
            let territoryID = data.territoryID;
            
            $('.header-city-name').html(Name);
            $('.image--province').html(image);
            $('.content--overview').html(Overview);

            getRegionByID(regionID).then(dataRegion => {
                if (dataRegion.success) {
                    let data = dataRegion.data
                    $('#direction_region').html(data.name);
                    if (!userID) {
                        $('#direction_region').attr("href", `/region.html?regionID=${regionID}`);
                    } else {
                        $('#direction_region').attr("href", `/region.html?userID=${userID}&regionID=${regionID}`);
                    }
                }
            })

            getTerritoryByID(territoryID).then(dataTerritory => {
                if (dataTerritory.success) {
                    let data = dataTerritory.data
                    $('#direction_territory').html(data.name);
                    if (!userID) {
                        $('#direction_territory').attr("href", `/territory.html?territoryID=${territoryID}`);
                    } else {
                        $('#direction_territory').attr("href", `/territory.html?userID=${userID}&territoryID=${territoryID}`);
                    }
                }
            })

            if (userID) {
                const groupButtonDirectionHome = document.querySelectorAll('#btnDirectionHome');
                groupButtonDirectionHome.forEach(btn => {
                    $(btn).attr("href", `/home.html?userID=${userID}`);
                });
            };
        };
    });
};

function renderImageStock(id) {
    getAllImageInProvince(id).then(dataImageStock => {  
        if (dataImageStock.success) {
            let ImageStock = ``;
            const data = dataImageStock.data;
            for (const [index, value] of Object.entries(data)) {
                const place_name = value.name;
                const image_stock = value.imageStock;
                ImageStock += image_stock.map(val => (
                    `<div class="item">
                        <div class="item-box">
                            <div class="img">
                                <img
                                src="${val.imageURL}"
                                alt=""
                                />
                            </div>
                            <div class="group-details">
                                <span>${place_name}</span>
                            </div>
                        </div>
                    </div>`)
                ).join('');
            };
            $('.items--image_stock').html(ImageStock);
        };
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

function renderProfile(userID, provinceID) {
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
                            <li><a href="province.html?provinceID=${provinceID}">Đăng Xuất</a></li>
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

function renderPage(userID, id) {
    // HEADER:
    let base = `
        <div class="header">
            <div class="container">
                <ul class="menu-options">
                    <li><a id="btnDirectionHome" href="home.html">Trang Chủ</a></li>
                </ul>
                <form class="searching-form">
                    <input type="text" placeholder="Tìm kiếm..." id="inputHeaderSearch">
                    <label for=""><i class="fa-solid fa-magnifying-glass"></i></label>
                    <ul class="result-searching-form"></ul>
                </form>
                <div class="group-login-language"></div>
            </div>
        </div>
    `;

    // PROVINCE & PLACE & SERVICE:
    base += `
        <div class="no1-page">
            <div class="container">
                <div class="left-content">
                    <div class="directory">
                        <i class="fa-solid fa-house"></i>
                        <a id="btnDirectionHome" href="home.html">Trang chủ</a> > 
                        <a id="direction_region" href="#">Miền</a> >
                        <a id="direction_territory" href="#">Vùng</a>
                    </div>
                    <span class="header-city-name"></span>
                    <div class="image image--province"></div>
                    <div class="overview">
                        <span class="title">Tổng Quan</span><br />
                        <div class="line"></div>
                        <span class="content content--overview"></span>
                    </div>
                </div>

                <div class="right-content">
                    <div class="group-item">
                        <div class="header-title-option">
                            <span class="title">Địa Điểm Nổi Bật</span>
                            <a class="view-more" href="#">xem thêm</a>
                        </div>
                        <div class="items items--place"></div>
                    </div>

                    <div class="group-item">
                        <div class="header-title-option">
                            <span class="title">Dịch Vụ</span>
                        </div>
                        <div class="items items--service"></div>
                    </div>
                </div>
            </div>
        </div>    
    `;

    // IMAGE STOCK:
    base += `
        <div class="no2-page">
            <div class="container">
                <div class="header-no2-page">
                    <div class="header-title">Kho ảnh</div>
                    <a class="view-all-image-stock" href="#">Xem tất cả</a>
                </div>
                <div class="items items--image_stock"></div>
            </div>
        </div>
    `

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
    renderProfile(userID, id);
    renderProvince(userID, id);
    renderPlace(userID, id);
    renderImageStock(id);
    renderService();

    // HEADER SEARCH:
    $('.result-searching-form').hide();
    addEventForInputHeaderSearch(userID);
}

$(document).ready(function () {
    const userID = getUrlParameter("userID");
    const provinceID = getUrlParameter("provinceID");
    addConnectProvince(provinceID);
    renderPage(userID, provinceID);
});