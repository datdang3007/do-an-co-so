// Set max render place:
const placeCount = 3;

//----------------------------------------//
//------------- ### API ### --------------//
//----------------------------------------//
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

function eventClickPlace(group) {
    group.forEach(ele => {
        $(ele).click(() => {
            let ID = $(ele).data().id;
            window.location = `/place.html?placeID=${ID}`;
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

function renderPlace(id) {
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
            eventClickPlace(groupImagePlace);
        };
    });
};

function renderProvince(id) {
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
                    $('#direction_region').attr("href", `/region.html?regionID=${regionID}`);
                }
            })

            getTerritoryByID(territoryID).then(dataTerritory => {
                if (dataTerritory.success) {
                    let data = dataTerritory.data
                    $('#direction_territory').html(data.name);
                    $('#direction_territory').attr("href", `/territory.html?territoryID=${territoryID}`);
                }
            })
        };
    });
};

function renderImageStock() {
    let ImageStock = ``;
    $('.items--image_stock').html(ImageStock);
}

function renderPage(id) {
    // HEADER:
    let base = `
        <div class="header">
            <div class="container">
                <ul class="menu-options">
                    <li><a href="home.html">Trang Chủ</a></li>
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
    `;

    // PROVINCE & PLACE & SERVICE:
    base += `
        <div class="no1-page">
            <div class="container">
                <div class="left-content">
                    <div class="directory">
                        <i class="fa-solid fa-house"></i>
                        <a href="home.html">Trang chủ</a> > 
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
    renderProvince(id);
    renderPlace(id);
    renderImageStock(id);
    renderService();
}

$(document).ready(function () {
    let provinceID = getUrlParameter("provinceID");
    renderPage(provinceID);
});