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

async function getProvinceByRegionID(id) {
    let allProvinceInRegion = await fetch(
      "http://localhost:8000/api/getProvinceByRegionID",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ID: id }),
      }
    ).then((data) => data.json());
    return allProvinceInRegion;
}

async function getAllPlaceByRegionID(id) {
    let allPlaceInRegion = await fetch(
      "http://localhost:8000/api/getAllPlaceByRegionID",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ID: id }),
      }
    ).then((data) => data.json());
    return allPlaceInRegion;
}

async function getAllPlaceForListTerritory(list) {
    let result = await fetch("http://localhost:8000/api/getAllPlaceForListTerritory", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ listID: list }),
    }).then((data) => data.json());
    return result;
}

getProvinceByRegionID

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
  
function getSetListTerritoryID(data) {
    let setListTerritoryID = []
    for (const [index, place] of Object.entries(data)) {
        let territoryID = place.territoryID;
        if (!setListTerritoryID.includes(territoryID)) setListTerritoryID.push(territoryID);
    }
    return setListTerritoryID;
}

function renderRegion(id) {
    getRegionByID(id).then((dataRegion) => {
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

function renderTerritory(id) {
    let Territory = ``;
    getAllPlaceByRegionID(id).then((dataPlace) => {
        if (dataPlace.success) {
            let data = dataPlace.data;
            let setListTerritory = getSetListTerritoryID(data);
            getAllPlaceForListTerritory(setListTerritory).then(dataPlace => {
                if (dataPlace.success) {
                    const dataPlaceResult = dataPlace.data;
                    for (const [index, Place] of Object.entries(dataPlaceResult)) {
                        Territory += `
                            <div class="item">
                                <div class="item-box">
                                    <div class="item-img">
                                    <img
                                        src="${Place.image}"
                                        alt=""
                                    />
                                    </div>
                                    <div class="address-of-img">${Place.name}, ${Place.provinceName}</div>
                                    <div class="name-of-img">${Place.territoryName}</div>
                                </div>
                            </div>
                        `;
                    }
                    $('.items-territory').html(Territory);
                };
            });
        };
    });
};

function renderProvince(id) {
    let Provinces = ``

    getProvinceByRegionID(id).then((dataProvince) => {
        if (dataProvince.success) {
            let min = (currentPage * limit) - limit;
            let max = currentPage * limit;
            for (const [index, Province] of Object.entries(dataProvince.data)) {
                if (index >= min && index < max) {
                    Provinces += `
                        <div class="item">
                            <div class="item-box">
                                <div class="img">
                                    <img src="${Province.image}" alt="">
                                </div>
                                <div class="group-text">
                                    <span class="name-of-city">${Province.name}</span>
                                </div>
                            </div>
                        </div>
                    `;
                };
            };
            $('.items-province').html(Provinces);
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
        // currentPage == 1 ? $("#btnPrev").attr("disabled", true) : $("#btnPrev").attr("disabled", false);
    });

    $('#btnNext').click(function (e) { 
        if (currentPage == maxPage) return;
        currentPage += 1
        renderPageNumber(id);
        // currentPage == maxPage ? $("#btnNext").attr("disabled", true) : $("#btnNext").attr("disabled", false);
    });
};

function renderPage(regionID) {
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
                                <li><a href="territory.html">Vùng</a></li>
                                <li><a href="#">Bài Viết</a></li>
                            </ul>
                            <form class="searching-form">
                                <input type="text" placeholder="Tìm Kiếm...">
                                <label for=""><i class="fa-solid fa-magnifying-glass"></i></label>
                            </form>
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
                    <div class="slogan"></div>
                </div>
            </div>
        </section>
    `;
  
    // OVERVIEW:
    base += `
        <div class="no2-page"></div>
    `;
  
    // TERRITORY:
    base += `
        <div class="no3-page">
            <div class="container">
                <div class="regions-in-the-territory">
                    <div class="header-title">
                        <span class="big-title">Vùng</span>
                        <p class="details-title">
                            Mỗi vùng có những đặc trưng riêng về địa lý, khí hậu, văn hóa, lịch sử, kinh tế và ẩm thực
                        </p>
                    </div>
                    <div class="body-content">
                        <div class="items items-territory"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    base += `
        <div class="no4-page">
            <div class="container">
                <div class="group-city">
                    <div class="header-title">
                        <span class="big-title">Tỉnh Thành</span>
                        <p class="details-title">
                            Mỗi tỉnh thành đều mang trong mình những nét đẹp riêng
                        </p>
                        <div class="group-input">
                            <input type="text" id="inputSearchCity" placeholder="Tìm kiếm...">
                            <label for="inputSearchCity"><i class="fa-solid fa-magnifying-glass"></i></label>
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
    renderRegion(regionID);
    renderTerritory(regionID);
    setupButtonNextAndBackPage(regionID);
    renderPageNumber(regionID)
}

function getMaxPage(id) {
    return new Promise((resolve, reject) => {
        getProvinceByRegionID(id).then((dataProvince) => {
            if (dataProvince.success) {
                let maxPage = Math.ceil(dataProvince.data.length / limit);
                resolve(maxPage);
            };
        });
    });
};

$(document).ready(function () {
    let regionID = getUrlParameter("regionID");
    getMaxPage(regionID).then(max => {
        maxPage = max;
        renderPage(regionID);
    });
});