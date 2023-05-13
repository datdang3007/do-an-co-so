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

function evenClickProvince(group) {
    group.forEach(ele => {
        $(ele).click(() => {
            let ID = $(ele).data().id;
            window.location = `/province.html?provinceID=${ID}`;
        });
    })
}

function renderProvince(id) {
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
            evenClickProvince(groupItemImageProvince);

            var groupItemNameProvince = document.querySelectorAll('.name-of-city');
            evenClickProvince(groupItemNameProvince);
        }
    });
}

function renderPageNumber(id) {
    $('#pageNumber').html(`${currentPage} / ${maxPage}`);
    currentPage == 1 ? $("#btnPrev").attr("disabled", true) : $("#btnPrev").attr("disabled", false);
    currentPage == maxPage ? $("#btnNext").attr("disabled", true) : $("#btnNext").attr("disabled", false);
    renderProvince(id);
}

function setupButtonNextAndBackPage(id) {
    $('#btnPrev').click(function (e) {
        if (currentPage == 1) return;
        currentPage -= 1
        renderPageNumber(id);
    });

    $('#btnNext').click(function (e) { 
        if (currentPage == maxPage) return;
        currentPage += 1
        renderPageNumber(id);
    });
};

function renderTerritory(id) {
    getTerritoryByID(id).then((dataRegion) => {
        let name = dataRegion.data.name;
        let slogan = dataRegion.data.slogan;
        let image = dataRegion.data.image;
        let overview = dataRegion.data.overview;

        $('.h1-text-shadow').html(name);
        $('.h1-text-title').html(name);
        $('.slogan').html(`<p>${slogan}</p>`);
        $('.no1-page').css('background-image', `url(${image})`);
        $('.h1-text-title').css(`background-image`, `url(${image})`);

        let No2Page = `
            <div class="container">
                <h1>${name}</h1>
                <p>${overview}</p>
            </div>
        `
        $('.no2-page').html(No2Page);
    });
}

function addEventForButtonSearch(id) {
    $('#btnSearch').click(() => {
        let searchVal = $('#inputSearchCity').val();
        if (searchVal == "") {
            $('#pagination').show();
            renderPageNumber(id);
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
            evenClickProvince(groupItemImageProvince);

            var groupItemNameProvince = document.querySelectorAll('.name-of-city');
            evenClickProvince(groupItemNameProvince);
        });
    });
}

function renderPage(territoryID) {
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
                                <li><a href="home.html">Trang Chủ</a></li>
                                <li><a href="region.html">Miền</a></li>
                                <li><a href="#">Bài Viết</a></li>
                            </ul>
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

    // <div class="item">
    //     <div class="item-box">
    //         <div class="img">
    //             <img src="https://cdn.discordapp.com/attachments/1089123119668658206/1094288746297426130/868420.png" alt="">
    //         </div>
    //         <div class="group-text">
    //             <span class="name-of-city">Hai Phong</span>
    //             <span class="name-of-territory">The North</span>
    //         </div>
    //     </div>
    // </div>

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
    renderTerritory(territoryID);
    setupButtonNextAndBackPage(territoryID);
    renderPageNumber(territoryID);
    addEventForButtonSearch(territoryID);
};

$(document).ready(function () {
    let territoryID = getUrlParameter("territoryID");
    getMaxPage(territoryID).then(max => {
        maxPage = max;
        renderPage(territoryID);
    });
});