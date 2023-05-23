//----------------------------------------//
//---------- ### AOS LIBRARY ### ---------//
//----------------------------------------//
AOS.init();

//----------------------------------------//
//------------- ### API ### --------------//
//----------------------------------------//

async function getRegions() {
  let allRegions = await fetch("http://localhost:8000/api/getRegion", {
    method: "GET",
  }).then((data) => data.json());
  return allRegions.data;
}

async function getTerritorys() {
  let allTerritorys = await fetch("http://localhost:8000/api/getTerritory", {
    method: "GET",
  }).then((data) => data.json());
  return allTerritorys.data;
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

async function getAllPlaceForTerritory() {
  let result = await fetch("http://localhost:8000/api/getAllPlaceForTerritory", {
    method: "GET",
  }).then((data) => data.json());
  return result;
}

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

function renderRegion(userID) {
  let dataRegions = getRegions();
  dataRegions.then((data) => {
    if (data.length > 0) {
      let Regions = `
                <div class="header-title">
                    <span class="big-title">Miền</span>
                    <p class="details-title">
                        Được phân chia dựa trên địa lý, văn hóa, lịch sử và đặc điểm kinh tế
                    </p>
                </div>
                <div class="body-content">
                    <div class="items">
            `;

      for (const [index, region] of Object.entries(data)) {
        Regions += `
                        <div class="item">
                            <div class="item-box">
                                <div class="item-img item-img--region" data-id="${region._id}">
                                    <img
                                        src="${region.image}"
                                        alt=""
                                    />
                                </div>
                                <div class="name-of-img">${region.name}</div>
                            </div>
                        </div>
                `;
      }

      Regions += `
                    </div>
                </div>
            `;
      $(".regions-in-vietnam").html(Regions);

      let groupBtnRegion = document.querySelectorAll('.item-img--region');
      groupBtnRegion.forEach(btn => {
        $(btn).click(() => {
            let regionID = $(btn).data().id;
            if (!userID) {
                window.location = `/region.html?regionID=${regionID}`;
                return;
            }
            window.location = `/region.html?userID=${userID}&regionID=${regionID}`;
        });
      });
    }
  });
}

function renderTerritory(userID) {
  let dataTerritorys = getTerritorys();
  dataTerritorys.then((data) => {
    if (data.length > 0) {
        getAllPlaceForTerritory().then((dataPlace) => {
            const dataPlaceResult = dataPlace.data;
            let Territorys = `
                        <div class="header-title">
                            <span class="big-title">Vùng</span>
                            <p class="details-title">
                                Mỗi vùng có những đặc trưng riêng về địa lý, khí hậu, văn hóa, lịch sử, kinh tế và ẩm thực
                            </p>
                        </div>
                        <div class="body-content">
                            <div class="items">
            `;

            for (const [index, Place] of Object.entries(dataPlaceResult)) {
                Territorys += `
                    <div class="item">
                        <div class="item-box">
                            <div class="item-img item-img--territory" data-id="${Place.territoryID}">
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

            Territorys += `
                    </div>
                </div>
            `;
            $(".regions-in-the-territory").html(Territorys);

            let groupBtnRegion = document.querySelectorAll('.item-img--territory');
            groupBtnRegion.forEach(btn => {
                $(btn).click(() => {
                    let territoryID = $(btn).data().id;
                    if (!userID) {
                        window.location = `/territory.html?territoryID=${territoryID}`;
                        return;
                    }
                    window.location = `/territory.html?userID=${userID}&territoryID=${territoryID}`;
                });
            });
        });
    }
  });
}

function renderPosts(userID) {
  let Posts = `
        <div class="header-title">
            <span class="big-title">Bài Viết</span>
            <p class="details-title">
                Cùng nhau chia sẻ vẻ đẹp của núi rừng, biển đảo
            </p>
            <a class="view-all-stories" href="#">View All Stories</a>
        </div>
        <div class="body-content">
            <div class="items">
                <div class="item">
                    <div class="item-box">
                        <div class="item-img">
                        <img
                            src="https://cdn.discordapp.com/attachments/1089123119668658206/1091253516120637516/Hinh-anh-nen-Ha-Noi.png"
                            alt=""
                        />
                        </div>
                        <div class="group-details-post">
                            <div class="group-address-and-date">
                                <div class="address">
                                <span>Mumbai, India</span>
                                </div>
                                <div class="date">
                                <div class="day">
                                    <span>Feb 27, 2023</span>
                                </div>
                                <div class="dot"></div>
                                <div class="time">
                                    <span>8 min read</span>
                                </div>
                            </div>
                        </div>
                        <div class="detail-title">
                            <span>A Wonderful Journey to India</span>
                        </div>
                        <div class="detail-content">
                            I had always been interested in spirituality, so I decided
                            to take a year-long journey to India to explore various
                            religious practices and traditions.
                        </div>
                        <a class="btn-view-post"
                            >Read Full Post <i class="fa-solid fa-arrow-right"></i
                        ></a>
                    </div>
                </div>
            </div>
        </div>
    `;
  $(".top-travel-stories").html(Posts);
}

function addEventScrollToRegion() {
    $(document).scrollTop(1938);
}

function addEventScrollToTerritory() {
    $(document).scrollTop(2730);
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

function renderProfile(userID) {
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
                            <li><a href="home.html">Đăng Xuất</a></li>
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

function renderPage(userID) {
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
                        <li><span onclick="addEventScrollToRegion()">Miền</span></li>
                        <li><span onclick="addEventScrollToTerritory()">Vùng</span></li>
                        <li><a href="#">Bài Viết</a></li>
                    </ul>
                    <form class="searching-form">
                        <input type="text" placeholder="Tìm kiếm...">
                        <label for=""><i class="fa-solid fa-magnifying-glass"></i></label>
                    </form>
                    <div class="group-login-language"></div>
                </div>
                </div>

                <div class="h1-text-shadow">VIETNAM</div>
                <div class="h1-text-title">VIETNAM</div>
                <div class="slogan">
                    <p>
                        Đích đến của chúng ta không phải là một vùng đất, mà là một cách nhìn mới
                    </p>
                </div>
            </div>
            </div>
        </section>
    `;

    base += `
        <section>
            <div class="no2-page">
                <div class="content">
                    <div class="container">
                        <div class="content-box">
                            <div class="left-content">
                                <div class="content-title">
                                    <span class="header-content-title">Tổng quan về Việt Nam</span>
                                    <span>
                                        &ensp;&ensp;Việt Nam là quốc gia đông dân nhất ở
                                        Đông Nam Á, nằm ở phía đông nam của châu Á. Nó có một
                                        diện tích khoảng 331.210 km² và được chia thành 3
                                        khu vực: Bắc, Trung, Nam. Những khu vực này là
                                        chia thành 8 vùng địa lý: Trung du Bắc Bộ
                                        và miền núi, Đồng bằng sông Hồng, Bắc Trung Bộ, Nam Bộ
                                        duyên hải miền Trung, Tây Nguyên, Đông Bắc, Tây Bắc và
                                        Đồng bằng sông Cửu Long.
                                        <br /><br />&ensp;&ensp;Việt Nam có 63 tỉnh thành, trong đó
                                        5 thành phố trực thuộc Trung ương: Hà Nội, Thành phố Hồ Chí Minh,
                                        Hải Phòng, Đà Nẵng, Cần Thơ. Ngoài ra, có
                                        các tỉnh khác có quy mô lớn và có nhiều
                                        các địa điểm du lịch hấp dẫn như Huế, Hội An, Nha
                                        Trang, Đà Lạt, Đà Nẵng, Sapa, Hạ Long, Phú Quốc, Hà
                                        Giang. <br /><br />&ensp;&ensp;Với địa hình đa dạng,
                                        Việt Nam có nhiều điểm du lịch đa dạng và hấp dẫn
                                        điểm đến. Du khách có thể tận hưởng những bãi biển đẹp, tham quan
                                        di tích lịch sử văn hóa, ngắm cảnh đẹp núi non
                                        phong cảnh, hoặc khám phá những khu phố cổ độc đáo của thành phố. Ngoài ra,
                                        Việt Nam còn nổi tiếng với những nét đặc trưng và
                                        ẩm thực đa dạng, được đánh giá cao ở Đông Nam Bộ
                                        khu vực Châu Á.
                                    </span>
                                </div>
                            </div>
                            <div class="right-content">
                                <div class="img">
                                    <img
                                    src="https://cdn.discordapp.com/attachments/1089123119668658206/1091234753044295680/905012.png"
                                    alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

  // BODY CONTENT:
  base += `
        <div class="no3-page">
            <div class="container">
            <div class="group-content regions-in-vietnam"></div>

            <div class="group-content regions-in-the-territory"></div>

            <div class="group-content top-travel-stories"></div>
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
  renderProfile(userID);
  renderRegion(userID);
  renderTerritory(userID);
  renderPosts(userID);
}

$(document).ready(function () {
    let userID = getUrlParameter("userID");
    renderPage(userID);
});