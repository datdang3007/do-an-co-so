//----------------------------------------//
//------------- ### API ### --------------//
//----------------------------------------//

// #REGIONS:
async function getRegionByID(id) {
    let region = await fetch("http://localhost:5000/api/getRegionByID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ID: id}),
    })
    .then((data) => data.json())
    return region
}

async function getRegions() {
    let allRegions = await fetch("http://localhost:5000/api/getRegion", {
        method: "GET",
    }).then((data) => data.json());
    return allRegions.data
}

async function addNewRegion(data) {
    let info = await fetch("http://localhost:5000/api/newRegion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((data) => data.json())
    return info
}

// #TERRITORYS:
async function getTerritoryByID(id) {
    let territory = await fetch("http://localhost:5000/api/getTerritoryByID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ID: id}),
    })
    .then((data) => data.json())
    return territory
}

async function getTerritorys() {
    let allTerritorys = await fetch("http://localhost:5000/api/getTerritory", {
        method: "GET",
    }).then((data) => data.json());
    return allTerritorys.data
}

async function addNewTerritory(data) {
    let info = await fetch("http://localhost:5000/api/newTerritory", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((data) => data.json())
    return info
}

// #PROVINCES:
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

async function getProvinces() {
    let allProvinces = await fetch("http://localhost:5000/api/getProvince", {
        method: "GET",
    }).then((data) => data.json());
    return allProvinces.data
}

async function addNewProvince(data) {
    let info = await fetch("http://localhost:5000/api/addProvince", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((data) => data.json())
    return info
}

//----------------------------------------//
//----------- ### FUNCTION ### -----------//
//----------------------------------------//

// #ADD NEW BOX EVENT

function closeAddNewView() {
    $('.addnew-view').css('display','none');
}

function eventCloseAddNewContent() {
    $('#btnClose').click(() => {
        closeAddNewView();
    });
}

function checkRegionInputEmpty() {
    let name = $('#inputName').val();
    let slogan = $('#inputSlogan').val();
    let overview = $('#inputOverview').val();
    let imageURL = $('#inputImageURL').val();

    if (name == "" || slogan == "" || overview == "" || imageURL == "") {
        alert('cannot be empty!')
        return null
    } else {
        data = {
            name: name,
            slogan: slogan,
            image: imageURL,
            overview: overview
        }
        return data
    }
}

function checkTerritoryInputEmpty() {
    let name = $('#inputName').val();
    let slogan = $('#inputSlogan').val();
    let regionID = $('#cb-region').val();
    let overview = $('#inputOverview').val();
    let imageURL = $('#inputImageURL').val();

    if (name == "" || slogan == "" || regionID == "" || overview == "" || imageURL == "") {
        alert('cannot be empty!')
        return null
    } else {
        data = {
            name: name,
            slogan: slogan,
            regionID: regionID,
            image: imageURL,
            overview: overview
        }
        return data
    }
}

function checkProvinceInputEmpty() {
    let name = $('#inputName').val();
    let slogan = $('#inputSlogan').val();
    let regionID = $('#cb-region').val();
    let territoryID = $('#cb-territory').val();
    let overview = $('#inputOverview').val();
    let imageURL = $('#inputImageURL').val();

    if (name == "" || slogan == "" || regionID == "" || territoryID == "" || overview == "" || imageURL == "") {
        alert('cannot be empty!')
        return null
    } else {
        data = {
            name: name,
            slogan: slogan,
            territoryID: territoryID,
            regionID: regionID,
            image: imageURL,
            overview: overview
        }
        return data
    }
}

function eventButtonAddNew() {
    $('#btnAdd').click(() => {
        let category = $('#btnAdd').data().category;
        if (category == 'region') {
            let data = checkRegionInputEmpty();
            if (data != null) {
                addNewRegion(data).then(data => {
                    console.log(data);
                });
                closeAddNewView();
                alert('success added new region!');
                setTimeout(() => {
                    renderRightContent('region');
                }, 400);
            }
        } else if (category == 'territory') {
            let data = checkTerritoryInputEmpty();
            if (data != null) {
                addNewTerritory(data).then(data => {
                    console.log(data);
                });
                closeAddNewView();
                alert('success added new territory!');
                setTimeout(() => {
                    renderRightContent('territory');
                }, 400);
            }
        } else if (category == 'province') {
            let data = checkProvinceInputEmpty();
            if (data != null) {
                addNewProvince(data).then(data => {
                    console.log(data);
                });
                closeAddNewView();
                alert('success added new province!');
                setTimeout(() => {
                    renderRightContent('province');
                }, 400);
            }
        } else if (category == 'place') {

        }
    });
}

function addEventForButtonAddNew() {
    let groupButton = document.querySelectorAll('#btnAddNew');
    groupButton.forEach(btn => {
        $(btn).click(() => {
            let category = $(btn).data().category;
            if (category == 'region') {
                var addNewBox = `
                    <div class="addnew-box">
                        <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                        <div class="title">Add New Region</div>
                        <form>
                            <div class="group-input">
                                <label for="inputName">Name</label>
                                <input class="label-input" type="text" id="inputName" name="inputName" placeholder="The Northern">
                            </div>
                            <div class="group-input">
                                <label for="inputSlogan">Slogan</label>
                                <input class="label-input" type="text" id="inputSlogan" name="inputSlogan" placeholder="A land of rich cultural and historical experiences">
                            </div>
                            <div class="group-input">
                                <label for="inputOverview">Overview</label>
                                <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Croatia is a fun destination with a wide range...">
                            </div>
                            <div class="group-input">
                                <label for="inputImageURL">Image URL</label>
                                <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="https://cdn.discordapp.com/halong_bay.png">
                            </div>
                            <span id="btnAdd" data-category="${category}">Add New</span>
                        </form>
                    </div>
                `;
                $('.addnew-view').html(addNewBox);
                $('.addnew-view').css('display','block');
                eventCloseAddNewContent();
                eventButtonAddNew();
            } else if (category == 'territory') {
                let dataRegions = getRegions();
                dataRegions.then(data => {
                    if (data.length > 0) {
                        var addNewBox = `
                            <div class="addnew-box">
                                <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                                <div class="title">Add New Territory</div>
                                <form>
                                    <div class="group-input">
                                        <label for="inputName">Name</label>
                                        <input class="label-input" type="text" id="inputName" name="inputName" placeholder="The Northwest">
                                    </div>
                                    <div class="group-input">
                                        <label for="inputSlogan">Slogan</label>
                                        <input class="label-input" type="text" id="inputSlogan" name="inputSlogan" placeholder="A land of rich cultural and historical experiences">
                                    </div>
                                    <div class="group-combobox">
                                        <span class="label">Region</span>
                                        <select class="label-combobox" name="cb-region" id="cb-region"></select>
                                    </div>
                                    <div class="group-input">
                                        <label for="inputOverview">Overview</label>
                                        <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Northwest is an area located in the northwest of Vietnam...">
                                    </div>
                                    <div class="group-input">
                                        <label for="inputImageURL">Image URL</label>
                                        <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="https://cdn.discordapp.com/halong_bay.png">
                                    </div>
                                    <span id="btnAdd" data-category="${category}">Add New</span>
                                </form>
                            </div>
                        `;
                        $('.addnew-view').html(addNewBox);

                        let CBRegion = ``;
                        for (const [index, region] of Object.entries(data)) {
                            CBRegion += `<option value="${region._id}">${region.name}</option>`
                        }
                        $('#cb-region').html(CBRegion);

                        $('.addnew-view').css('display','block');
                        eventCloseAddNewContent();
                        eventButtonAddNew();
                    } else {
                        alert('cannot add new territory when region is empty!');
                    }
                });
            } else if (category == 'province') {
                let dataRegions = getRegions();
                dataRegions.then(dataRegion => {
                    let dataTerritorys = getTerritorys();
                    dataTerritorys.then(dataTerritory => {
                        if (dataRegion.length > 0 && dataTerritory.length > 0) {
                            var addNewBox = `
                                <div class="addnew-box">
                                    <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                                    <div class="title">Add New Province</div>
                                    <form>
                                        <div class="group-input">
                                            <label for="inputName">Name</label>
                                            <input class="label-input" type="text" id="inputName" name="inputName" placeholder="The Northwest">
                                        </div>
                                        <div class="group-two-element">
                                            <div class="group-combobox">
                                                <span class="label">Region</span>
                                                <select class="label-combobox" name="cb-region" id="cb-region"></select>
                                            </div>
                                            <div class="group-combobox">
                                                <span class="label">Territory</span>
                                                <select class="label-combobox" name="cb-territory" id="cb-territory"></select>
                                            </div>
                                        </div>
                                        <div class="group-input">
                                            <label for="inputOverview">Overview</label>
                                            <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Northwest is an area located in the northwest of Vietnam...">
                                        </div>
                                        <div class="group-input">
                                            <label for="inputImageURL">Image URL</label>
                                            <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="https://cdn.discordapp.com/halong_bay.png">
                                        </div>
                                        <span id="btnAdd" data-category="${category}">
                                            <i class="fa-solid fa-plus"></i>
                                            Add New
                                        </span>
                                    </form>
                                </div>
                            `;
                            $('.addnew-view').html(addNewBox);
    
                            let CBRegion = ``;
                            for (const [index, region] of Object.entries(dataRegion)) {
                                CBRegion += `<option value="${region._id}">${region.name}</option>`
                            }
                            $('#cb-region').html(CBRegion);

                            let CBTerritory = ``;
                            for (const [index, territory] of Object.entries(dataTerritory)) {
                                CBTerritory += `<option value="${territory._id}">${territory.name}</option>`
                            }
                            $('#cb-territory').html(CBTerritory);
    
                            $('.addnew-view').css('display','block');
                            eventCloseAddNewContent();
                            eventButtonAddNew();
                        } else {
                            if (dataRegion.length == 0) {
                                alert('cannot add new province when region is empty!');
                            } else if (dataTerritory.length == 0) {
                                alert('cannot add new province when territory is empty!');
                            }
                        }
                    });
                    
                });
            } else if (category == 'place') {
                var addNewBox = `
                    <div class="addnew-box">
                        <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                        <div class="title">Add New Place</div>
                        <form>
                            <div class="group-input">
                                <label for="inputName">Name</label>
                                <input class="label-input" type="text" id="inputName" name="inputName" placeholder="Ha Long">
                            </div>
                            <div class="group-input">
                                <label for="inputContent">Overview</label>
                                <input class="label-input" type="input" id="inputContent" name="inputContent" placeholder="Enter the amount of content">
                            </div>
                            <div class="group-three-element">
                                <div class="group-combobox">
                                    <span class="label">Region</span>
                                    <select class="label-combobox" name="cb-region">
                                        <option value="north">North</option>
                                        <option value="central">Central</option>
                                        <option value="south central">South Central</option>
                                    </select>
                                </div>
                                <div class="group-combobox">
                                    <span class="label">Territory</span>
                                    <select class="label-combobox" name="cb-territory">
                                        <option value="north">North</option>
                                        <option value="central">Central</option>
                                        <option value="south central">South Central</option>
                                    </select>
                                </div>
                                <div class="group-combobox">
                                    <span class="label">Province</span>
                                    <select class="label-combobox" name="cb-province">
                                        <option value="north">North</option>
                                        <option value="central">Central</option>
                                        <option value="south central">South Central</option>
                                    </select>
                                </div>
                            </div>
                            <div class="group-input">
                                <label for="inputOverview">Overview</label>
                                <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Northwest is an area located in the northwest of Vietnam...">
                            </div>
                            <div class="group-input">
                                <label for="inputImageURL">Image URL</label>
                                <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="https://cdn.discordapp.com/halong_bay.png">
                            </div>
                            <span id="btnContinue">
                                Continue
                                <i class="fa-solid fa-arrow-right"></i>
                            </span>
                        </form>
                    </div>
                `;
                $('.addnew-view').html(addNewBox);
                $('.addnew-view').css('display','block');
                eventCloseAddNewContent();
            }
        });
    })
}

function labelInputFocus() {
    let groupInput = document.querySelectorAll('.label-input');
    groupInput.forEach(input => {
        $(input).focus(() => {
            let label = $(input).parent().find('label');
            $(label).css('color','#4169e1');
        }).focusout(() => {
            let label = $(input).parent().find('label');
            $(label).css('color','#777');
        })
    });

    let groupComboBox = document.querySelectorAll('.label-combobox');
    groupComboBox.forEach(input => {
        $(input).focus(() => {
            let label = $(input).parent().find('.label');
            $(label).css('color','#4169e1');
        }).focusout(() => {
            let label = $(input).parent().find('.label');
            $(label).css('color','#777');
        });
    });
}

// #OPTION BOX EVENT:

function removeAllOptionBoxActive() {
    let groupOptionBox = document.querySelectorAll(".option-box");
    groupOptionBox.forEach(ele => {
        $(ele).removeClass('active');
    });
}

function setupOptionBoxEvent() {
    let groupOptionBox = document.querySelectorAll(".option-box");
    groupOptionBox.forEach(ele => {
        $(ele).click(() => {
            let isActive = $(ele).hasClass('active');
            let category = $(ele).data().category;
            if (!isActive) {
                removeAllOptionBoxActive();
                $(ele).addClass('active');
                renderRightContent(category);
            }
        });
    });
}

// #RIGHT CONTENT EVENT:

function renderRightContent(category) {
    if (category == "statistics") {
        let rightContent = `
            <div class="header">
                <div class="title">Statistics</div>
            </div>
            <div class="statistical">
                <div class="box-statistical">
                    <div class="box">
                        <span class="title-box-statistical">
                            The number of website visits
                        </span>
                        <span class="title-box-content">
                            <i class="fa-solid fa-calendar-check"></i>
                            4543
                        </span>
                    </div>
                </div>

                <div class="box-statistical">
                    <div class="box">
                        <span class="title-box-statistical">
                            The number of website visits
                        </span>
                        <span class="title-box-content">
                            <i class="fa-solid fa-calendar-check"></i>
                            4543
                        </span>
                    </div>
                </div>

                <div class="box-statistical">
                    <div class="box">
                        <span class="title-box-statistical">
                            The number of website visits
                        </span>
                        <span class="title-box-content">
                            <i class="fa-solid fa-calendar-check"></i>
                            4543
                        </span>
                    </div>
                </div>

                <div class="box-statistical">
                    <div class="box">
                        <span class="title-box-statistical">
                            The number of website visits
                        </span>
                        <span class="title-box-content">
                            <i class="fa-solid fa-calendar-check"></i>
                            4543
                        </span>
                    </div>
                </div>

                <div class="box-statistical">
                    <div class="box">
                        <span class="title-box-statistical">
                            The number of website visits
                        </span>
                        <span class="title-box-content">
                            <i class="fa-solid fa-calendar-check"></i>
                            4543
                        </span>
                    </div>
                </div>

                <div class="box-statistical">
                    <div class="box">
                        <span class="title-box-statistical">
                            The number of website visits
                        </span>
                        <span class="title-box-content">
                            <i class="fa-solid fa-calendar-check"></i>
                            4543
                        </span>
                    </div>
                </div>
            </div>
        `;
        $('.right-content').html(rightContent);
    } else if (category == "advertisements") {
        let rightContent = `
            <div class="header">
                <div class="title">Advertisements</div>
            </div>
            <div class="Advertisements">
                <div class="image">
                    <svg width="60" height="60" viewBox="0 0 91 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.5003 65.0208C51.0733 65.0208 55.811 63.0696 59.7135 59.167C63.616 55.2645 65.5658 50.5283 65.5628 44.9583C65.5628 39.3854 63.6116 34.6477 59.709 30.7452C55.8065 26.8426 51.0703 24.8929 45.5003 24.8958C39.9274 24.8958 35.1897 26.8471 31.2872 30.7496C27.3846 34.6522 25.4349 39.3884 25.4378 44.9583C25.4378 50.5312 27.3891 55.269 31.2916 59.1715C35.1942 63.074 39.9304 65.0238 45.5003 65.0208ZM45.5003 60.5625L40.5962 49.8625L29.8962 44.9583L40.5962 40.0542L45.5003 29.3542L50.4045 40.0542L61.1045 44.9583L50.4045 49.8625L45.5003 60.5625ZM9.83367 80.625C7.38158 80.625 5.28171 79.7512 3.53404 78.0035C1.78637 76.2558 0.914028 74.1574 0.917 71.7083V18.2083C0.917 15.7563 1.79083 13.6564 3.5385 11.9087C5.28617 10.161 7.38456 9.28869 9.83367 9.29167H23.8774L32.1253 0.375H58.8753L67.1233 9.29167H81.167C83.6191 9.29167 85.719 10.1655 87.4666 11.9132C89.2143 13.6608 90.0866 15.7592 90.0837 18.2083V71.7083C90.0837 74.1604 89.2098 76.2603 87.4622 78.008C85.7145 79.7556 83.6161 80.628 81.167 80.625H9.83367Z" fill="#040404"/>
                    </svg>
                </div>
                <div class="form-data">
                    <form>
                        <div class="group-input">
                            <label for="titleOfAds">Title of your review</label>
                            <input type="text" id="titleOfAds" placeholder="Summarize your Travel Journey">
                        </div>

                        <div class="group-input">
                            <label for="reviewAds">Your review</label>
                            <input type="text" id="reviewAds" style="overflow-wrap: break-word;" placeholder="A detailed review of your Travel Journey. Travellers will love to know your experience">
                        </div>

                        <div class="group-double-input">
                            <div class="input-box">
                                <label for="location">Province</label>
                                <input type="text" id="location" placeholder="Enter the province">
                                <ul class="province-category">
                                    <li>ABC</li>
                                    <li>ABC</li>
                                    <li>ABC</li>
                                    <li>ABC</li>
                                    <li>ABC</li>
                                </ul>
                            </div>

                            <div class="input-box">
                                <label for="date">When did you travel?</label>
                                <input type="text" id="date" placeholder="Enter the date">
                            </div>
                        </div>

                        <div class="group-input">
                            <label for="imageURL">Image URL</label>
                            <input type="text" id="imageURL" placeholder="Enter link image url">
                        </div>

                        <div class="group-checkbox">
                            <input type="checkbox" id="checkboxAds">
                            <label for="checkboxAds">I certify that the information in this review is based solely on my own experiences with the product or service in question. I also attest that I have no personal or professional affiliation with the business in question and have not been given any incentives or payment from the business to write this review. I am aware that fake reviews are strictly prohibited on Tripadvisor.</label>
                        </div>

                        <button id="btnSubmitAds">Submit Advertisement</button>
                    </form>
                </div>
            </div>
        `;
        $('.right-content').html(rightContent);
    } else if (category == "posts") {
        let rightContent = `

        `
        $('.right-content').html(rightContent);
    } else if (category == "reviewers") {
        let rightContent = `
        
        `
        $('.right-content').html(rightContent);
    } else if (category == "region") {
        let dataRegions = getRegions();
        dataRegions.then(data => {
            let rightContent = `
                <div class="header">
                    <div class="group-text-and-button">
                        <span class="title">Regions</span>
                        <div class="group-button">
                            <span class="button" id="btnAddNew" data-category="region"><i class="fa-solid fa-plus"></i> Add New</span>
                        </div>
                    </div>
                </div>

                <div class="error-empty">
                    <div class="box">
                        <div class="img">
                            <img src="https://cdn.discordapp.com/attachments/1085804453246009374/1098783512649285642/error_empty.png" alt="">
                        </div>
                        <span class="error-text">Error Empty!</span>
                    </div>
                </div>

                <div class="Regions">

                </div>
            `;
            $('.right-content').html(rightContent);
            addEventForButtonAddNew();

            if (data.length > 0) {
                $('.error-empty').remove();
                let Regions = ``;
                for (const [index, region] of Object.entries(data)) {
                    Regions += `
                        <div class="region">
                            <div class="region-box">
                                <div class="region-img">
                                    <img src="${region.image}" alt="">
                                </div>
                                
                                <div class="region-details">
                                    <span class="region-name">${region.name}</span>
                                    <span class="region-slogan">(${region.slogan})</span>
                                    <span class="region-overview"><strong>Overview:</strong> ${region.overview}</span>
                                </div>

                                <div class="region-group-event">
                                    <span id="btnEdit">Edit</span>
                                    <span id="btnDetails">Details</span>
                                    <span id="btnDelete">Delete</span>
                                </div>
                            </div>  
                        </div>
                    `
                };
                $('.Regions').html(Regions);
            };
        });
    } else if (category == "territory") {
        let dataTerritorys = getTerritorys();
        dataTerritorys.then(data => {
            let rightContent = `
                <div class="header">
                    <div class="group-text-and-button">
                        <span class="title">Territorys</span>
                        <div class="group-button">
                            <span class="button" id="btnAddNew" data-category="territory"><i class="fa-solid fa-plus"></i> Add New</span>
                        </div>
                    </div>
                </div>

                <div class="error-empty">
                    <div class="box">
                        <div class="img">
                            <img src="https://cdn.discordapp.com/attachments/1085804453246009374/1098783512649285642/error_empty.png" alt="">
                        </div>
                        <span class="error-text">Error Empty!</span>
                    </div>
                </div>

                <div class="Territorys">

                </div>
            `;
            $('.right-content').html(rightContent);
            addEventForButtonAddNew();

            if (data.length > 0) {
                $('.error-empty').remove();
                let Territorys = ``;
                for (const [index, territory] of Object.entries(data)) {
                    getRegionByID(territory.regionID).then(dataRegion => {
                        let regionName = dataRegion.data.name;
                        Territorys += `
                            <div class="territory">
                                <div class="territory-box">
                                    <div class="territory-img">
                                        <img src="${territory.image}" alt="">
                                    </div>
                                    
                                    <div class="territory-details">
                                        <span class="territory-name">${territory.name}</span>
                                        <span class="territory-slogan">(${territory.slogan})</span>
                                        <span class="territory-address"><strong>Address:</strong> ${regionName}</span>
                                        <span class="territory-overview"><strong>Overview:</strong> ${territory.overview}.</span>
                                    </div>
                
                                    <div class="territory-group-event">
                                        <span id="btnEdit">Edit</span>
                                        <span id="btnDetails">Details</span>
                                        <span id="btnDelete">Delete</span>
                                    </div>
                                </div>  
                            </div>
                        `
                        $('.Territorys').html(Territorys);
                    })
                };
            };
        });
    } else if (category == "province") {
        let dataProvinces = getProvinces();
        dataProvinces.then(data => {
            let rightContent = `
                <div class="header">
                    <div class="group-text-and-input">
                        <span class="title">Provinces</span>
                        <form>
                            <input type="text" id="inputProvince" placeholder="Enter the province">
                            <label for="inputProvince"><i class="fa-solid fa-magnifying-glass"></i></label>
                            <div class="group-button">
                                <span class="button" id="btnAddNew" data-category="province"><i class="fa-solid fa-plus"></i> Add New</span>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="Provinces">
                    <table class="header-table">
                        <tr>
                            <td>Name</td>
                            <td>Region</td>
                            <td>Territory</td>
                            <td>Action</td>
                        </tr>
                    </table>

                    <div class="province-list">
                        <table class="value-table"></table>
                    </div>
                </div>
            `
            $('.right-content').html(rightContent);
            addEventForButtonAddNew();

            if (data.length > 0) {
                $('.error-empty').remove();
                let Provinces = ``;
                for (const [index, province] of Object.entries(data)) {
                    getRegionByID(province.regionID).then(dataRegion => {
                        let regionName = dataRegion.data.name;
                        getTerritoryByID(province.territoryID).then(dataTerritory => {
                            let territoryName = dataTerritory.data.name;
                            Provinces += `
                                <tr>
                                    <td class="image-name">
                                        <div class="group-content">
                                            <img src="${province.image}" alt="">
                                            <span>${province.name}</span>
                                        </div>
                                    </td>
                                    <td>${regionName}</td>
                                    <td>${territoryName}</td>
                                    <td class="actions">
                                        <div class="action-buttons">
                                            <span id="btnEdit">Edit</span>
                                            <span id="btnDetails">Details</span>
                                            <span id="btnDelete">Delete</span>
                                        </div>
                                    </td>
                                </tr>
                            `;
                            $('.value-table').html(Provinces);
                        });
                    });
                };
            };
        });
    } else if (category == "place") {
        let rightContent = `
            <div class="header">
                <div class="group-text-and-input">
                    <span class="title">Places</span>
                    <form>
                        <input type="text" id="inputPlace" placeholder="Enter the place">
                        <label for="inputPlace"><i class="fa-solid fa-magnifying-glass"></i></label>
                        <div class="group-button">
                            <span class="button" id="btnAddNew" data-category="place"><i class="fa-solid fa-plus"></i> Add New</span>
                        </div>
                    </form>
                </div>
            </div>

            <div class="Places">
                <table class="header-table">
                    <tr>
                        <td>Name</td>
                        <td>Region</td>
                        <td>Territory</td>
                        <td>Province</td>
                        <td>Action</td>
                    </tr>
                </table>

                <div class="place-list">
                    <table class="value-table">
                        <tr>
                            <td class="image-name">
                                <div class="group-content">
                                    <img src="https://f55-zpg-r.zdn.vn/589863397397808120/f2e55c877254ae0af745.jpg" alt="">
                                    <span>Ha Long</span>
                                </div>
                            </td>
                            <td>THE NORTHERN</td>
                            <td>THE NORTHERN</td>
                            <td>THE NORTHERN</td>
                            <td class="actions">
                                <div class="action-buttons">
                                    <span id="btnEdit">Edit</span>
                                    <span id="btnDetails">Details</span>
                                    <span id="btnDelete">Delete</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        `
        $('.right-content').html(rightContent);
        addEventForButtonAddNew();
    } else if (category == "service") {
        let rightContent = `
        
        `
        $('.right-content').html(rightContent);
        addEventForButtonAddNew();
    } else if (category == "photo") {
        let rightContent = `
        
        `;
        $('.right-content').html(rightContent);
        addEventForButtonAddNew();
    };
}

// #ADVERTISEMENTS:

// $('#location').focus((e) => { 
//     e.preventDefault();
//     $('.province-category').css('display','block');
// }).focusout((e) => {
//     e.preventDefault();
//     $('.province-category').css('display','none');
// });

$(document).ready(function () {
    setupOptionBoxEvent();
    renderRightContent('statistics');
    // renderRightContent('province');
    labelInputFocus();
});