// Set max render place recommend:
const placeRecommendCount = 5;

//----------------------------------------//
//------------- ### API ### --------------//
//----------------------------------------//
async function getPlaceByID(id) {
    let place = await fetch("http://localhost:8000/api/getPlaceByID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return place;
}

async function getPlaces() {
    let allPlaces = await fetch("http://localhost:8000/api/getPlace", {
        method: "GET",
    }).then((data) => data.json());
  return allPlaces.data;
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

function getRandomNumberTypeInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function eventClickPlace(group) {
    group.forEach(ele => {
        $(ele).click(() => {
            let ID = $(ele).data().id;
            window.location = `/place.html?placeID=${ID}`;
        });
    });
};

function renderPlace(id) {
    getPlaceByID(id).then(dataPlace => {
        if (dataPlace.success) {
            const data = dataPlace.data;
            const name = data.name;
            const overview = data.overview;
            const image = `
                <img
                    src="${data.image}"
                    alt=""
                />
            `;

            let contentPlus = ``;
            for (const [index, content] of Object.entries(data.content)) {
                contentPlus += `
                    <div class="content-box">
                        <div class="image">
                            <img
                                src="${content.image}"
                                alt=""
                            />
                        </div>
                        <span class="content-plus">
                            ${content.text}
                        </span>
                    </div>
                `;
            }

            // Comment List:
            let commentList = `<span class="Error">Chưa có bình luận nào</span>`;

            $('.image--place').html(image);
            $('.header-city-name').html(name);
            $('.content--overview').html(overview);
            $('.content-box--plus').html(contentPlus);
            $('.comment-list').html(commentList);
        };
    });
};

function renderPlaceRecommend() {
    getPlaces().then(dataPlaces => {
        if (dataPlaces) {
            let placeRecommend = ``;
            const data = dataPlaces;
            for (const [index, place] of Object.entries(data)) {
                if (index < placeRecommendCount) {
                    const placeRandom = data[getRandomNumberTypeInt(0, data.length)]
                    placeRecommend += `
                        <div class="item">
                            <div class="item-box">
                                <div class="img img--place_recommend" data-id="${placeRandom._id}">
                                    <img
                                        src="${placeRandom.image}"
                                        alt=""
                                    />
                                </div>
                                <div class="group-details">
                                    <span class="name">${placeRandom.name}</span>
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
                                    <span class="details">${placeRandom.overview}</span>
                                </div>
                            </div>
                        </div>
                    `;
                }
            };
            $('.items--place_recommend').html(placeRecommend);

            const groupImagePlaceRecommend = document.querySelectorAll('.img--place_recommend');
            eventClickPlace(groupImagePlaceRecommend);
        };
    });

}

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

function renderImageStock(id) {
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
                    <li><a href="region.html">Miền</a></li>
                    <li><a href="territory.html">Vùng</a></li>
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
    `;

    // Place & Place Recommend:
    base += `
        <div class="no1-page">
            <div class="container">
                <div class="left-content">
                    <span class="header-city-name"></span>
                    <div class="image image--place"></div>
                    <div class="content-box">
                        <span class="title">Tổng Quan</span><br />
                        <div class="line"></div>
                        <span class="content content--overview"></span>
                    </div>

                    <div class="content-box--plus"></div>

                    <div class="content-box">
                        <span class="title">Bình Luận & Đánh Giá</span><br />
                        <div class="star-list">
                            <div class="group-star">
                                <span>Đánh giá: </span>
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
                            <div class="group-point">
                                <span class="star-point">
                                    <span style="color: green;">5/5</span>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                                <p>(20 người đánh giá)</p>
                            </div>
                        </div>
                    </div>

                    <div class="content-box">
                        <span class="header-comment">Bình Luận</span>
                        <div class="comment-list"></div>
                    </div>
                </div>

                <div class="right-content">
                    <div class="group-item">
                        <div class="header-title-option">
                            <span class="title">Có Thể Bạn Sẽ Thích</span>
                        </div>
                        <div class="items items--place_recommend"></div>
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
    renderService();
    renderPlace(id);
    renderPlaceRecommend();
    renderImageStock(id);
}

$(document).ready(function () {
    let placeID = getUrlParameter("placeID");
    renderPage(placeID);
});