//----------------------------------------//
//------------- ### AOS LIBRARY ### --------------//
//----------------------------------------//
AOS.init();

//----------------------------------------//
//------------- ### API ### --------------//
//----------------------------------------//

function getRandomNumberTypeInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getRegions() {
    let allRegions = await fetch("http://localhost:5000/api/getRegion", {
        method: "GET",
    }).then((data) => data.json());
    return allRegions.data
}

async function getTerritorys() {
    let allTerritorys = await fetch("http://localhost:5000/api/getTerritory", {
        method: "GET",
    }).then((data) => data.json());
    return allTerritorys.data
}

async function getProvinceByID(id) {
    let province = await fetch("http://localhost:5000/api/getProvinceByID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ID: id}),
    })
    .then((data) => data.json())
    return province
}

async function getAllPlaceByTerritoryID(id) {
    let allPlaceInTerritory = await fetch("http://localhost:5000/api/getAllPlaceByTerritoryID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ID: id}),
    })
    .then((data) => data.json())
    return allPlaceInTerritory
}

//----------------------------------------//
//----------- ### FUNCTION ### -----------//
//----------------------------------------//

function renderRegion() {
    let dataRegions = getRegions();
    dataRegions.then(data => {
        if (data.length > 0) {
            let Regions = `
                <div class="header-title">
                    <span class="big-title">Regions in VietNam</span>
                    <p class="details-title">
                        Making the Most of Your Travel Experience in 2023
                    </p>
                </div>
                <div class="body-content">
                    <div class="items">
            `;
            
            for (const [index, region] of Object.entries(data)) {
                Regions += `
                        <div class="item">
                            <div class="item-box">
                                <div class="item-img" data-id="${region._id}">
                                    <img
                                        src="${region.image}"
                                        alt=""
                                    />
                                </div>
                                <div class="name-of-img">${region.name}</div>
                            </div>
                        </div>
                `;
            };

            Regions += `
                    </div>
                </div>
            `;
            $('.regions-in-vietnam').html(Regions);
        }
    });
};

function renderTerritory() {
    let dataTerritorys = getTerritorys();
    dataTerritorys.then(data => {
        if (data.length > 0) {
            let Territorys = `
                <div class="header-title">
                    <span class="big-title">Regions in the territory</span>
                    <p class="details-title">
                        Here are some of the most visited places in 2023
                    </p>
                </div>
                <div class="body-content">
                    <div class="items">
            `;

            for (const [index, territory] of Object.entries(data)) {
                getAllPlaceByTerritoryID(territory._id).then(dataPlace => {
                    if (dataPlace.success && dataPlace.data.length > 0) {
                        let dataRandomPlace = dataPlace.data[getRandomNumberTypeInt(0, dataPlace.data.length-1)];
                        let placeName = dataRandomPlace.name;
                        let provinceOfPlace = dataRandomPlace.provinceID;
                        getProvinceByID(provinceOfPlace).then(dataProvince => {
                            if (dataProvince.success && dataProvince.data.length > 0) {
                                let provinceName = dataProvince.data.name;
                                Territorys += `
                                    <div class="item">
                                        <div class="item-box">
                                            <div class="item-img">
                                            <img
                                                src="${territory.image}"
                                                alt=""
                                            />
                                            </div>
                                            <div class="address-of-img">Capetown, South Africa</div>
                                            <div class="name-of-img">${territory.name}</div>
                                        </div>
                                    </div>
                                `;
                            };
                        });
                    }
                });
            };

            Territorys += `
                    </div>
                </div>
            `;
            $('.regions-in-the-territory').html(Territorys);
        }
    });

}

function renderPosts() {
    let Posts = `
        <div class="header-title">
            <span class="big-title">Top travel stories</span>
            <p class="details-title">
                Explore our latest stories from our active users
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
    $('.top-travel-stories').html(Posts);
}

function renderPage() {
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
                    <li><a href="region.html">Region</a></li>
                    <li><a href="territory.html">Territory</a></li>
                    <li><a href="#">Posts</a></li>
                    </ul>
                    <form class="searching-form">
                        <input type="text" placeholder="Searching...">
                        <label for=""><i class="fa-solid fa-magnifying-glass"></i></label>
                    </form>
                    <div class="group-login-language">
                    <div class="group-login-register">
                        <a href="sign_up.html" class="btn" id="btnRegister">Sign Up</a>
                        <a href="sign_in.html" class="btn" id="btnLogin">Sign In</a>
                    </div>
                    <div class="language">
                        <i class="fa-solid fa-earth-americas"></i>
                        <span>ENG</span>
                    </div>
                    </div>
                </div>
                </div>

                <div class="h1-text-shadow">VIETNAM</div>
                <div class="h1-text-title">VIETNAM</div>
                <div class="slogan">
                <p>
                    Whether it's the sea or the mountains, it's all in this country
                </p>
                </div>
            </div>
            </div>
        </section>
    `;

    // OVERVIEW:
    base += `
        <section>
            <div class="no2-page">
                <div class="content">
                    <div class="container">
                        <div class="content-box">
                            <div class="left-content">
                                <div class="content-title">
                                    <span class="header-content-title">Overview of Vietnam</span>
                                    <span>
                                    &ensp;&ensp;Vietnam is the most populous country in
                                    Southeast Asia, located in the southeast of Asia. It has an
                                    area of approximately 331,210 km² and is divided into 3
                                    regions: North, Central, and South. These regions are
                                    further divided into 8 geographical zones: Northern Midlands
                                    and Mountains, Red River Delta, North Central Coast, South
                                    Central Coast, Central Highlands, Northeast, Northwest, and
                                    Mekong River Delta.
                                    <br /><br />&ensp;&ensp;Vietnam has 63 provinces, including
                                    5 centrally-administered cities: Hanoi, Ho Chi Minh City,
                                    Hai Phong, Da Nang, and Can Tho. In addition, there are
                                    other provinces that are large in scale and have many
                                    attractive tourist destinations, such as Hue, Hoi An, Nha
                                    Trang, Da Lat, Da Nang, Sapa, Ha Long, Phu Quoc, and Ha
                                    Giang. <br /><br />&ensp;&ensp;With its diverse terrain,
                                    Vietnam has many diverse and attractive tourist
                                    destinations. Visitors can enjoy beautiful beaches, visit
                                    historical and cultural sites, admire the beautiful mountain
                                    scenery, or explore the unique old quarters of cities. In
                                    addition, Vietnam is also famous for its characteristic and
                                    diverse cuisine, which is highly regarded in the Southeast
                                    Asia region.
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

    renderRegion();
    renderTerritory();
    $('body').html(base);
}

$(document).ready(function () {
    renderPage();
});