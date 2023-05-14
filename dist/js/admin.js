//----------------------------------------//
//------------- ### API ### --------------//
//----------------------------------------//

// #REGIONS:
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

async function getRegions() {
    let allRegions = await fetch("http://localhost:8000/api/getRegion", {
        method: "GET",
    }).then((data) => data.json());
  return allRegions.data;
}

async function addNewRegion(data) {
    let info = await fetch("http://localhost:8000/api/newRegion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
  }).then((data) => data.json());
  return info;
}

async function editRegion(data) {
  let result = await fetch("http://localhost:8000/api/editRegion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
  return result.success;
}

async function deleteRegion(id) {
  let result = await fetch("http://localhost:8000/api/deleteRegion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return result.success;
}

// #TERRITORYS:
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

async function getTerritorys() {
    let allTerritorys = await fetch("http://localhost:8000/api/getTerritory", {
        method: "GET",
    }).then((data) => data.json());
  return allTerritorys.data;
}

async function addNewTerritory(data) {
    let info = await fetch("http://localhost:8000/api/newTerritory", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
  }).then((data) => data.json());
  return info;
}

async function editTerritory(data) {
  let result = await fetch("http://localhost:8000/api/editTerritory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
  return result.success;
}

async function deleteTerritory(id) {
  let result = await fetch("http://localhost:8000/api/deleteTerritory", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return result.success;
}

// #PROVINCES:
async function getProvinceWithNameLike(name) {
  let result = await fetch("http://localhost:8000/api/getProvinceWithNameLike", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nameSearching: name }),
  }).then((data) => data.json());
  return result;
};

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

async function getProvinces() {
    let allProvinces = await fetch("http://localhost:8000/api/getProvince", {
        method: "GET",
    }).then((data) => data.json());
  return allProvinces.data;
}

async function addNewProvince(data) {
    let info = await fetch("http://localhost:8000/api/addProvince", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
  }).then((data) => data.json());
  return info;
}

async function editProvince(data) {
  let result = await fetch("http://localhost:8000/api/editProvince", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
  return result.success;
}

async function deleteProvince(id) {
  let result = await fetch("http://localhost:8000/api/deleteProvince", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return result.success;
}

// #PLACE:
async function getPlaceWithNameLike(name) {
  let result = await fetch("http://localhost:8000/api/getPlaceWithNameLike", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nameSearching: name }),
  }).then((data) => data.json());
  return result;
};

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

async function addNewPlace(data) {
    let info = await fetch("http://localhost:8000/api/newPlace", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
  }).then((data) => data.json());
  return info;
}

async function editPlace(data) {
  let result = await fetch("http://localhost:8000/api/editPlace", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());
  return result.success;
}

async function deletePlace(id) {
  let result = await fetch("http://localhost:8000/api/deletePlace", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return result.success;
}

// IMAGE:

async function getImageStockByID(id) {
  let imageList = await fetch("http://localhost:8000/api/getImageStockByID", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return imageList;
}

async function getPlaces() {
  let allPlaces = await fetch("http://localhost:8000/api/getPlace", {
      method: "GET",
  }).then((data) => data.json());
  return allPlaces.data;
}

async function uploadImage(id, image) {
  let result = await fetch("http://localhost:8000/api/uploadImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageID: id, imageURL: image }),
  }).then((data) => data.json());
  return result.success;
}

async function deleteImage(id) {
  let result = await fetch("http://localhost:8000/api/deleteImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return result.success;
}

//----------------------------------------//
//----------- ### FUNCTION ### -----------//
//----------------------------------------//

function closeBoxPlus() {
  $(".box-plus-view").css("display", "none");
}

function eventCloseBoxPlusContent() {
  $("#btnClose").click(() => {
    closeBoxPlus();
  });
}

function randomString(length, specialWord) {
  let result = specialWord || ``;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

// #ADD NEW BOX EVENT

function randomCommentID() {
  return new Promise((resolve, reject) => {
    let dataPlaces = getPlaces();
    let listID = [];
    let randomID = randomString(4, "CMT-");
    dataPlaces.then((data) => {
      for (const [index, place] of Object.entries(data)) {
        listID.push(place.commentID);
      }

      while (listID.includes(randomID)) {
        randomID = randomString(8);
      }
      resolve(randomID);
    });
  });
}

function randomImageID() {
  return new Promise((resolve, reject) => {
    let dataPlaces = getPlaces();
    let listID = [];
    let randomID = randomString(4, "IMG-");
    dataPlaces.then((data) => {
      for (const [index, place] of Object.entries(data)) {
        listID.push(place.imageID);
      }

      while (listID.includes(randomID)) {
        randomID = randomString(8);
      }
      resolve(randomID);
    });
  });
}

function checkRegionInputEmpty() {
  let name = $("#inputName").val();
  let slogan = $("#inputSlogan").val();
  let overview = $("#inputOverview").val();
  let imageURL = $("#inputImageURL").val();

  if (name == "" || slogan == "" || overview == "" || imageURL == "") {
    alert("cannot be empty!");
    return null;
  } else {
    data = {
      name: name,
      slogan: slogan,
      image: imageURL,
      overview: overview,
    };
    return data;
  }
}

function checkTerritoryInputEmpty() {
  let name = $("#inputName").val();
  let slogan = $("#inputSlogan").val();
  let regionID = $("#cb-region").val();
  let overview = $("#inputOverview").val();
  let imageURL = $("#inputImageURL").val();

  if (
    name == "" ||
    slogan == "" ||
    regionID == "" ||
    overview == "" ||
    imageURL == ""
  ) {
    alert("cannot be empty!");
    return null;
  } else {
    data = {
      name: name,
      slogan: slogan,
      regionID: regionID,
      image: imageURL,
      overview: overview,
    };
    return data;
  }
}

function checkProvinceInputEmpty() {
  let dataID = $("#cb-territory").val();
  let name = $("#inputName").val();
  let overview = $("#inputOverview").val();
  let imageURL = $("#inputImageURL").val();

  if (name == "" || dataID == "" || overview == "" || imageURL == "") {
    alert("cannot be empty!");
    return null;
  } else {
    let dataIDClean = dataID.split(",");
    let territoryID = dataIDClean[0];
    let regionID = dataIDClean[1];

    data = {
      name: name,
      territoryID: territoryID,
      regionID: regionID,
      image: imageURL,
      overview: overview,
    };
    return data;
  }
}

function eventButtonAddNew() {
  $("#btnAdd").click(() => {
    let category = $("#btnAdd").data().category;
    if (category == "region") {
      let data = checkRegionInputEmpty();
      if (data != null) {
        addNewRegion(data).then((data) => {
          console.log(data);
        });
        closeBoxPlus();
        alert("success added new region!");
        setTimeout(() => {
          renderRightContent("region");
        }, 400);
      }
    } else if (category == "territory") {
      let data = checkTerritoryInputEmpty();
      if (data != null) {
        addNewTerritory(data).then((data) => {
          console.log(data);
        });
        closeBoxPlus();
        alert("success added new territory!");
        setTimeout(() => {
          renderRightContent("territory");
        }, 400);
      }
    } else if (category == "province") {
      let data = checkProvinceInputEmpty();
      if (data != null) {
        addNewProvince(data).then((data) => {
          console.log(data);
        });
        closeBoxPlus();
        alert("success added new province!");
        setTimeout(() => {
          renderRightContent("province");
        }, 400);
      }
    }
  });
}

function checkPlaceInputEmpty() {
  return new Promise((resolve, reject) => {
    let dataID = $("#cb-province").val();
    let amountContent = $("#inputContent").val();
    let name = $("#inputName").val();
    let overview = $("#inputOverview").val();
    let imageURL = $("#inputImageURL").val();

    if (
      name == "" ||
      dataID == "" ||
      amountContent == "" ||
      overview == "" ||
      imageURL == ""
    ) {
      alert("cannot be empty!");
      resolve(null);
    } else {
      let dataIDClean = dataID.split(",");
      let provinceID = dataIDClean[0];
      let territoryID = dataIDClean[1];
      let regionID = dataIDClean[2];
      randomCommentID()
        .then((result) => {
          let commentID = result;
          randomImageID()
            .then((result2) => {
              let imageID = result2;

              let data = {
                name: name,
                provinceID: provinceID,
                territoryID: territoryID,
                regionID: regionID,
                image: imageURL,
                overview: overview,
                service: false,
                imageID: imageID,
                likeArray: [],
                commentID: commentID,
              };

              let dataCallBack = {
                data: data,
                amount: amountContent,
              };

              resolve(dataCallBack);
            })
            .catch((error2) => {
              resolve(null);
              console.log(error2);
            });
        })
        .catch((error) => {
          resolve(null);
          console.log(error);
        });
    }
  });
}

function eventButtonBackAddNewPLace(dataBackup) {
  $("#btnBack").click(() => {
    $(".box-plus-box").addClass("fadeout");
    setTimeout(() => {
      let dataProvinces = getProvinces();
      dataProvinces.then((dataProvince) => {
        if (dataProvince.length > 0) {
          var addNewBox = `
                        <div class="box-plus-box fadein">
                            <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                            <div class="title">Add New Place</div>
                            <form>
                                <div class="group-input">
                                    <label for="inputName">Name</label>
                                    <input class="label-input" type="text" id="inputName" name="inputName" placeholder="Ha Long">
                                </div>
                                <div class="group-input">
                                    <label for="inputContent">Amount of Content</label>
                                    <input class="label-input" type="number" id="inputContent" name="inputContent" placeholder="Enter the amount of content">
                                </div>
                                <div class="group-combobox">
                                    <span class="label">Province</span>
                                    <select class="label-combobox" name="cb-province" id="cb-province"></select>
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
          $(".box-plus-view").html(addNewBox);
          let CBProvince = ``;
          for (const [index, province] of Object.entries(dataProvince)) {
            let dataID = `${province._id},${province.territoryID},${province.regionID}`;
            CBProvince += `<option value="${dataID}">${province.name}</option>`;
          }
          $("#cb-province").html(CBProvince);
          eventCloseBoxPlusContent();
          eventButtonContinue();

          let provinceBackup = `${dataBackup.data.provinceID},${dataBackup.data.territoryID},${dataBackup.data.regionID}`;
          $("#cb-province").val(provinceBackup).change();
          $("#inputContent").val(dataBackup.amount);
          $("#inputName").val(dataBackup.data.name);
          $("#inputOverview").val(dataBackup.data.overview);
          $("#inputImageURL").val(dataBackup.data.image);
          setTimeout(() => {
            $(".box-plus-box").removeClass("fadein");
          }, 1000);
        } else {
          alert("cannot add new place when province is empty!");
        }
      });
    }, 1000);
  });
}

function changeToContentForm(dataCallBack) {
  let amountContent = dataCallBack.amount;
  let data = dataCallBack.data;
  if (amountContent > 0) {
    $(".box-plus-box").addClass("fadeout");
    setTimeout(() => {
      var addNewBox = `
                <div class="box-plus-box fadein">
                    <span id="btnBack"><i class="fa-solid fa-arrow-right"></i></span>
                    <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                    <div class="title">Chi Tiết Nội Dung</div>
                    <form>
                        <div class="group-combobox">
                            <span class="label">Thứ Tự</span>
                            <select class="label-combobox" name="cb-index" id="cb-index"></select>
                        </div>
                        <div class="group-input">
                            <label for="inputText">Nội Dung</label>
                            <input class="label-input" type="text" id="inputText" name="inputText" placeholder="Nhập nội dung...">
                        </div>
                        <div class="group-input">
                            <label for="inputImageURL">Link Ảnh</label>
                            <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="Nhập link ảnh...">
                        </div>
                        <span id="btnAdd">
                            <i class="fa-solid fa-plus"></i>
                            Xác Nhận
                        </span>
                    </form>
                </div>
            `;
      $(".box-plus-view").html(addNewBox);
      eventCloseBoxPlusContent();
      eventButtonBackAddNewPLace(dataCallBack);

      let dataContent = [];
      let CBIndex = ``;
      for (let i = 1; i <= amountContent; i++) {
        CBIndex += `<option value="${i}">${i}</option>`;
        dataContent[i - 1] = {
          text: "",
          image: "",
        };
      }
      var indexContentSelect = 0;
      $("#cb-index").html(CBIndex);
      $("#cb-index").on("change", () => {
        dataContent[indexContentSelect].text = $("#inputText").val();
        dataContent[indexContentSelect].image = $("#inputImageURL").val();
        indexContentSelect = $("#cb-index").val() - 1;
        let dataContentOnIndex = dataContent[indexContentSelect];
        $("#inputText").val(dataContentOnIndex.text);
        $("#inputImageURL").val(dataContentOnIndex.image);
      });

      $("#btnAdd").click(() => {
        dataContent[indexContentSelect].text = $("#inputText").val();
        dataContent[indexContentSelect].image = $("#inputImageURL").val();
        let canAdd = true;
        let listIndexEmpty = [];
        for (const [index, val] of Object.entries(dataContent)) {
          if (val.text == "" || val.image == "") {
            canAdd = false;
            listIndexEmpty.push(Number(index) + 1);
          }
        }

        if (canAdd) {
          let dataUpload = {
            name: data.name,
            provinceID: data.provinceID,
            territoryID: data.territoryID,
            regionID: data.regionID,
            image: data.image,
            overview: data.overview,
            service: false,
            content: dataContent,
            imageID: data.imageID,
            likeArray: [],
            commentID: data.commentID,
          };
          addNewPlace(dataUpload).then((dataAPI) => {
            console.log(dataAPI);
          });
          closeBoxPlus();
          alert("success added new place!");
          setTimeout(() => {
            renderRightContent("place");
          }, 400);
        } else {
          alert(`content at index [${listIndexEmpty.join(",")}] is error!`);
        }
      });
      setTimeout(() => {
        $(".box-plus-box").removeClass("fadein");
      }, 1000);
    }, 1000);
  } else if (amountContent == 0) {
    let dataUpload = {
      name: data.name,
      provinceID: data.provinceID,
      territoryID: data.territoryID,
      regionID: data.regionID,
      image: data.image,
      overview: data.overview,
      service: false,
      content: null,
      imageID: data.imageID,
      likeArray: [],
      commentID: data.commentID,
    };
    addNewPlace(dataUpload).then((dataAPI) => {
      console.log(dataAPI);
    });
    closeBoxPlus();
    alert("success added new place!");
    setTimeout(() => {
      renderRightContent("place");
    }, 400);
  }
}

function eventButtonContinue() {
  $("#btnContinue").click(() => {
    checkPlaceInputEmpty()
      .then((result) => {
        console.log(result);
        if (result != null) changeToContentForm(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

function addEventForButtonAddNew() {
  let groupButton = document.querySelectorAll("#btnAddNew");
  groupButton.forEach((btn) => {
    $(btn).click(() => {
      let category = $(btn).data().category;
      if (category == "region") {
        var addNewBox = `
                    <div class="box-plus-box">
                        <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                        <div class="title">Thêm Miền</div>
                        <form>
                            <div class="group-input">
                                <label for="inputName">Tên</label>
                                <input class="label-input" type="text" id="inputName" name="inputName" placeholder="Nhập tên...">
                            </div>
                            <div class="group-input">
                                <label for="inputSlogan">Slogan</label>
                                <input class="label-input" type="text" id="inputSlogan" name="inputSlogan" placeholder="Nhập slogan...">
                            </div>
                            <div class="group-input">
                                <label for="inputOverview">Tổng Quan</label>
                                <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Nhập tổng quan...">
                            </div>
                            <div class="group-input">
                                <label for="inputImageURL">Link Ảnh</label>
                                <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="Nhập link ảnh...">
                            </div>
                            <span id="btnAdd" data-category="${category}">Xác Nhận</span>
                        </form>
                    </div>
                `;
        $(".box-plus-view").html(addNewBox);
        $(".box-plus-view").css("display", "block");
        eventCloseBoxPlusContent();
        eventButtonAddNew();
      } else if (category == "territory") {
        let dataRegions = getRegions();
        dataRegions.then((data) => {
          if (data.length > 0) {
            var addNewBox = `
                            <div class="box-plus-box">
                                <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                                <div class="title">Thêm Vùng</div>
                                <form>
                                    <div class="group-input">
                                        <label for="inputName">Tên</label>
                                        <input class="label-input" type="text" id="inputName" name="inputName" placeholder="Nhập tên...">
                                    </div>
                                    <div class="group-input">
                                        <label for="inputSlogan">Slogan</label>
                                        <input class="label-input" type="text" id="inputSlogan" name="inputSlogan" placeholder="Nhập slogan...">
                                    </div>
                                    <div class="group-combobox">
                                        <span class="label">Miền</span>
                                        <select class="label-combobox" name="cb-region" id="cb-region"></select>
                                    </div>
                                    <div class="group-input">
                                        <label for="inputOverview">Tổng Quan</label>
                                        <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Nhập tổng quan...">
                                    </div>
                                    <div class="group-input">
                                        <label for="inputImageURL">Link Ảnh</label>
                                        <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="Nhập link ảnh...">
                                    </div>
                                    <span id="btnAdd" data-category="${category}">Add New</span>
                                </form>
                            </div>
                        `;
            $(".box-plus-view").html(addNewBox);

            let CBRegion = ``;
            for (const [index, region] of Object.entries(data)) {
              CBRegion += `<option value="${region._id}">${region.name}</option>`;
            }
            $("#cb-region").html(CBRegion);

            $(".box-plus-view").css("display", "block");
            eventCloseBoxPlusContent();
            eventButtonAddNew();
          } else {
            alert("cannot add new territory when region is empty!");
          }
        });
      } else if (category == "province") {
        let dataTerritorys = getTerritorys();
        dataTerritorys.then((dataTerritory) => {
          if (dataTerritory.length > 0) {
            var addNewBox = `
                            <div class="box-plus-box">
                                <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                                <div class="title">Thêm Tỉnh Thành</div>
                                <form>
                                    <div class="group-input">
                                        <label for="inputName">Tên</label>
                                        <input class="label-input" type="text" id="inputName" name="inputName" placeholder="Nhập tên...">
                                    </div>
                                    <div class="group-combobox">
                                        <span class="label">Vùng</span>
                                        <select class="label-combobox" name="cb-territory" id="cb-territory"></select>
                                    </div>
                                    <div class="group-input">
                                        <label for="inputOverview">Tổng Quan</label>
                                        <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Nhập tổng quan...">
                                    </div>
                                    <div class="group-input">
                                        <label for="inputImageURL">Link Ảnh</label>
                                        <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="Nhập link ảnh...">
                                    </div>
                                    <span id="btnAdd" data-category="${category}">
                                        <i class="fa-solid fa-plus"></i>
                                        Xác Nhận
                                    </span>
                                </form>
                            </div>
                        `;
            $(".box-plus-view").html(addNewBox);

            let CBTerritory = ``;
            for (const [index, territory] of Object.entries(dataTerritory)) {
              let dataID = `${territory._id},${territory.regionID}`;
              CBTerritory += `<option value="${dataID}">${territory.name}</option>`;
            }
            $("#cb-territory").html(CBTerritory);

            $(".box-plus-view").css("display", "block");
            eventCloseBoxPlusContent();
            eventButtonAddNew();
          } else {
            alert("cannot add new province when territory is empty!");
          }
        });
      } else if (category == "place") {
        let dataProvinces = getProvinces();
        dataProvinces.then((dataProvince) => {
          if (dataProvince.length > 0) {
            var addNewBox = `
                            <div class="box-plus-box">
                                <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                                <div class="title">Thêm Địa Điểm</div>
                                <form>
                                    <div class="group-input">
                                        <label for="inputName">Tên</label>
                                        <input class="label-input" type="text" id="inputName" name="inputName" placeholder="Nhập tên...">
                                    </div>
                                    <div class="group-input">
                                        <label for="inputContent">Nội Dung</label>
                                        <input class="label-input" type="number" id="inputContent" name="inputContent" placeholder="Nhập số lượng nội dung...">
                                    </div>
                                    <div class="group-combobox">
                                        <span class="label">Tỉnh Thành</span>
                                        <select class="label-combobox" name="cb-province" id="cb-province"></select>
                                    </div>
                                    <div class="group-input">
                                        <label for="inputOverview">Tổng Quan</label>
                                        <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Nhập tổng quan...">
                                    </div>
                                    <div class="group-input">
                                        <label for="inputImageURL">Link Ảnh</label>
                                        <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="Nhập link ảnh...">
                                    </div>
                                    <span id="btnContinue">
                                        Tiếp tục &ensp;
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </span>
                                </form>
                            </div>
                        `;
            $(".box-plus-view").html(addNewBox);

            let CBProvince = ``;
            for (const [index, province] of Object.entries(dataProvince)) {
              let dataID = `${province._id},${province.territoryID},${province.regionID}`;
              CBProvince += `<option value="${dataID}">${province.name}</option>`;
            }
            $("#cb-province").html(CBProvince);

            $(".box-plus-view").css("display", "block");
            eventCloseBoxPlusContent();
            eventButtonContinue();
          } else {
            alert("cannot add new place when province is empty!");
          }
        });
      }
    });
  });
}

// #EDIT BOX EVENT

function eventButtonEdit() {
  $("#btnEventEdit").click(() => {
    let btnData = $("#btnEventEdit").data();
    let category = btnData.category;
    if (category == "region") {
      let regionID = btnData.regionid;
      let name = $('#inputName').val();
      let slogan = $('#inputSlogan').val();
      let overview = $('#inputOverview').val();
      let image = $('#inputImageURL').val();

      const data = {
        regionID,
        name,
        slogan,
        image,
        overview
      }
      editRegion(data).then(result => {
        if (result) {
          alert('edit success!');
          closeBoxPlus();
          setTimeout(() => {
            renderRightContent("region");
          }, 300);
        } else {
          alert('edit fail!');
        }
      });
    } else if (category == "territory") {
      let territoryID = btnData.territoryid;
      let name = $('#inputName').val();
      let slogan = $('#inputSlogan').val();
      let overview = $('#inputOverview').val();
      let image = $('#inputImageURL').val();
      let regionID = $("#cb-region").val();

      const data = {
        territoryID,
        name,
        slogan,
        regionID,
        image,
        overview,
      }
      editTerritory(data).then(result => {
        if (result) {
          alert('edit success!');
          closeBoxPlus();
          setTimeout(() => {
            renderRightContent("territory");
          }, 300);
        } else {
          alert('edit fail!');
        }
      });
    } else if (category == "province") {
      let provinceID = btnData.provinceid;
      let name = $('#inputName').val();
      let cbTerritorySplit = $("#cb-territory").val().split(',');
      let territoryID = cbTerritorySplit[0];
      let regionID = cbTerritorySplit[1];
      let image = $('#inputImageURL').val();
      let overview = $('#inputOverview').val();

      const data = {
        provinceID,
        name,
        territoryID,
        regionID,
        image,
        overview,
      }
      editProvince(data).then(result => {
        if (result) {
          alert('edit success!');
          closeBoxPlus();
          setTimeout(() => {
            renderRightContent("province");
          }, 300);
        } else {
          alert('edit fail!');
        }
      });
    }
  });
}

function eventRenderContentInput(bool) {
  if (bool) {
    let contentInputDetail = `
      <div class="group-input">
        <label for="inputText">Nội Dung Content</label>
        <input class="label-input" type="text" id="inputText" name="inputText" placeholder="Nhập nội dung...">
      </div>
      <div class="group-input">
        <label for="inputImageURLContent">Link Ảnh Content</label>
        <input class="label-input" type="text" id="inputImageURLContent" name="inputImageURLContent" placeholder="Nhập link ảnh...">
      </div>
    `;
    $('.group-content-details').append(contentInputDetail);
  } else {
    $('#inputText').parent().remove();
    $('#inputImageURLContent').parent().remove();
  };
}

function pushDataForEditInput(data, type) {
  let name = data.name;
  let overview = data.overview;
  let image = data.image;
  
  if (type == 'region') {
    let slogan = data.slogan;
    $('#inputName').val(name);
    $('#inputSlogan').val(slogan);
    $('#inputOverview').val(overview);
    $('#inputImageURL').val(image);
  } else if (type == "territory") {
    let slogan = data.slogan;
    let cbRegion = data.regionID;
    $('#inputName').val(name);
    $('#inputSlogan').val(slogan);
    $('#inputOverview').val(overview);
    $('#inputImageURL').val(image);
    $("#cb-region").val(cbRegion).change();
  } else if (type == "province") {
    let cbTerritory =  `${data.territoryID},${data.regionID}`;;
    $('#inputName').val(name);
    $('#inputOverview').val(overview);
    $('#inputImageURL').val(image);
    $("#cb-territory").val(cbTerritory).change();
  } else if (type == "place") {
    let dataContent = data.content;
    let cbProvince =  `${data.provinceID},${data.territoryID},${data.regionID}`;
    $('#inputName').val(name);
    $('#inputOverview').val(overview);
    $('#inputImageURL').val(image);
    $('#cb-province').val(cbProvince).change();

    var indexContentSelect = 0;
    $("#cb-index").on("change", () => {
      dataContent[indexContentSelect].text = $("#inputText").val();
      dataContent[indexContentSelect].image = $("#inputImageURLContent").val();
      indexContentSelect = $("#cb-index").val() - 1;
      let dataContentOnIndex = dataContent[indexContentSelect];
      $("#inputText").val(dataContentOnIndex.text);
      $("#inputImageURLContent").val(dataContentOnIndex.image);
    });

    $("#btnEventEdit").click(() => {
      let placeIDUpload = data._id;
      let nameUpload = $('#inputName').val();
      let dataCBProvince = $('#cb-province').val().split(',');
      let provinceIDUpload = dataCBProvince[0];
      let territoryID = dataCBProvince[1];
      let regionID = dataCBProvince[2];
      let imageUpload = $('#inputImageURL').val();
      let overviewUpload = $('#inputOverview').val();
      let imageIDUpload = data.imageID;
      let likeArrayUpload = data.likeArray;
      let commentIDUpload = data.commentID;
      
      let canAdd = true;
      let listIndexEmpty = [];
      if (dataContent) {
        dataContent[indexContentSelect].text = $("#inputText").val();
        dataContent[indexContentSelect].image = $("#inputImageURLContent").val();
        for (const [index, val] of Object.entries(dataContent)) {
          if (val.text == "" || val.image == "") {
            canAdd = false;
            listIndexEmpty.push(Number(index) + 1);
          }
        }
      }
      
      if (canAdd) {
        let dataUpload;
        if (dataContent) {
          dataUpload = {
            placeID: placeIDUpload,
            name: nameUpload,
            provinceID: provinceIDUpload,
            territoryID: territoryID,
            regionID: regionID,
            image: imageUpload,
            overview: overviewUpload,
            service: false,
            content: dataContent,
            imageID: imageIDUpload,
            likeArray: likeArrayUpload,
            commentID: commentIDUpload,
          };
        } else {
          dataUpload = {
            placeID: placeIDUpload,
            name: nameUpload,
            provinceID: provinceIDUpload,
            territoryID: territoryID,
            regionID: regionID,
            image: imageUpload,
            overview: overviewUpload,
            service: false,
            content: null,
            imageID: imageIDUpload,
            likeArray: likeArrayUpload,
            commentID: commentIDUpload,
          };
        }
        editPlace(dataUpload).then((dataAPI) => {
          console.log(dataAPI);
        });
        closeBoxPlus();
        alert("edit success!");
        setTimeout(() => {
          renderRightContent("place");
        }, 400);
      } else {
        alert(`content at index [${listIndexEmpty.join(",")}] is error!`);
      };
    });

    $('#btnAddNewContent').click(() => {
      $('#cb-index').attr("disabled", false);
      $('#cb-index').removeClass('disable');
      $('#btnDeleteContent').removeClass('disable');

      if (!dataContent) {
        eventRenderContentInput(true);
        dataContent = [];
        dataContent[0] = {
          text: "",
          image: "",
        };
      } else {
        dataContent[dataContent.length] = {
          text: "",
          image: "",
        };
      }

      let CBIndex = ``;
      for (let i = 1; i <= dataContent.length; i++) {
        CBIndex += `<option value="${i}">${i}</option>`;
      }
      $("#cb-index").html(CBIndex);
    });

    $('#btnDeleteContent').click(() => {
      dataContent.splice(indexContentSelect, 1);

      if (dataContent.length == 0) {
        dataContent = null
        $('#cb-index').attr("disabled", true);
        $('#cb-index').addClass('disable');
        $('#btnDeleteContent').addClass('disable');
        $("#cb-index").html('');
        eventRenderContentInput(false);
      } else {
        let CBIndex = ``;
        for (let i = 1; i <= dataContent.length; i++) {
          CBIndex += `<option value="${i}">${i}</option>`;
        }
        $("#cb-index").html(CBIndex);

        indexContentSelect = 0;
        let dataContentOnIndex = dataContent[indexContentSelect];
        $("#inputText").val(dataContentOnIndex.text);
        $("#inputImageURLContent").val(dataContentOnIndex.image);
      };
    });

    if (!dataContent) {
      $('#cb-index').attr("disabled", true);
      $('#cb-index').addClass('disable');
      $('#btnDeleteContent').addClass('disable');
    } else {
      eventRenderContentInput(true);
      let CBIndex = ``;
      for (let i = 1; i <= dataContent.length; i++) {
        CBIndex += `<option value="${i}">${i}</option>`;
      }
      $("#cb-index").html(CBIndex);
      $("#inputText").val(dataContent[indexContentSelect].text);
      $("#inputImageURLContent").val(dataContent[indexContentSelect].image);
    };
  };
};

function renderEventButtonEditPlace(ID, category) {
  getPlaceByID(ID).then(dataPlace => {
    if (dataPlace.success) {
      const data = dataPlace.data;
      let dataProvinces = getProvinces();
      dataProvinces.then(dataProvince => {
        if (dataProvince.length > 0) {
          var editBox = `
            <div class="box-plus-box">
              <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
              <div class="title">Sửa Địa Điểm</div>
              <form>
                  <div class="group-input">
                      <label for="inputName">Tên</label>
                      <input class="label-input" type="text" id="inputName" name="inputName" placeholder="Nhập tên...">
                  </div>
                  <div class="group-combobox">
                      <span class="label">Tỉnh Thành</span>
                      <select class="label-combobox" name="cb-province" id="cb-province"></select>
                  </div>
                  <div class="group-input">
                      <label for="inputOverview">Tổng Quan</label>
                      <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Nhập tổng quan...">
                  </div>
                  <div class="group-input">
                      <label for="inputImageURL">Link Ảnh</label>
                      <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="Nhập link ảnh...">
                  </div>

                  <div class="group-content-details">
                    <div class="group-combobox">
                      <span class="label">Thứ Tự Content</span>
                      <select class="label-combobox" name="cb-index" id="cb-index"></select>
                      <span class="btn-option" id="btnAddNewContent"><i class="fa-solid fa-plus"></i></span>
                      <span class="btn-option" id="btnDeleteContent"><i class="fa-solid fa-trash"></i></span>
                    </div>
                  </div>
                  <span id="btnEventEdit" data-category="${category}" data-placeid="${ID}">Xác Nhận</span>
              </form>
            </div>
          `;
          $(".box-plus-view").html(editBox);
          let CBProvince = ``;
          for (const [index, province] of Object.entries(dataProvince)) {
            let dataID = `${province._id},${province.territoryID},${province.regionID}`;
            CBProvince += `<option value="${dataID}">${province.name}</option>`;
          }
          $("#cb-province").html(CBProvince);
          pushDataForEditInput(data, 'place');
          $(".box-plus-view").css("display", "block");
          eventCloseBoxPlusContent();
        } else {
          alert("cannot edit place when province is empty!");
        }
      });
    };
  });
}

function addEventForButtonEdit() {
  let groupButton = document.querySelectorAll("#btnEdit");
  groupButton.forEach(btn => {
    $(btn).click(() => {
      let btnData = $(btn).data();
      let ID = btnData.id;
      let category = btnData.category;
      if (category == "region") {
        getRegionByID(ID).then((dataRegion) => {
          if (dataRegion.success) {
            const data = dataRegion.data;
            var editBox = `
                      <div class="box-plus-box">
                          <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                          <div class="title">Chỉnh Sửa Miền</div>
                          <form>
                              <div class="group-input">
                                  <label for="inputName">Tên</label>
                                  <input class="label-input" type="text" id="inputName" name="inputName" placeholder="Nhập tên...">
                              </div>
                              <div class="group-input">
                                  <label for="inputSlogan">Slogan</label>
                                  <input class="label-input" type="text" id="inputSlogan" name="inputSlogan" placeholder="Nhập slogan...">
                              </div>
                              <div class="group-input">
                                  <label for="inputOverview">Tổng Quan</label>
                                  <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Nhập tổng quan...">
                              </div>
                              <div class="group-input">
                                  <label for="inputImageURL">Link Ảnh</label>
                                  <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="Nhập link ảnh...">
                              </div>
                              <span id="btnEventEdit" data-category="${category}" data-regionid="${ID}">Xác Nhận</span>
                          </form>
                      </div>
            `;
            $(".box-plus-view").html(editBox);
            $(".box-plus-view").css("display", "block");
            eventCloseBoxPlusContent();
            eventButtonEdit();
            pushDataForEditInput(data, 'region');
          };
        });
      } else if (category == "territory") {
        getTerritoryByID(ID).then((dataTerritory) => {
          if (dataTerritory.success) {
            const data = dataTerritory.data;
            let dataRegions = getRegions();
            dataRegions.then((dataRegion) => {
              if (dataRegion.length > 0) {
                var editBox = `
                        <div class="box-plus-box">
                          <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                          <div class="title">Chỉnh Sửa Vùng</div>
                          <form>
                              <div class="group-input">
                                  <label for="inputName">Tên</label>
                                  <input class="label-input" type="text" id="inputName" name="inputName" placeholder="Nhập tên...">
                              </div>
                              <div class="group-input">
                                  <label for="inputSlogan">Slogan</label>
                                  <input class="label-input" type="text" id="inputSlogan" name="inputSlogan" placeholder="Nhập slogan...">
                              </div>
                              <div class="group-combobox">
                                  <span class="label">Miền</span>
                                  <select class="label-combobox" name="cb-region" id="cb-region"></select>
                              </div>
                              <div class="group-input">
                                  <label for="inputOverview">Tổng Quan</label>
                                  <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Nhập tổng quan...">
                              </div>
                              <div class="group-input">
                                  <label for="inputImageURL">Link Ảnh</label>
                                  <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="Nhập link ảnh...">
                              </div>
                              <span id="btnEventEdit" data-category="${category}" data-territoryid="${ID}">Xác Nhận</span>
                          </form>
                      </div>
                `;
                $(".box-plus-view").html(editBox);
                let CBRegion = ``;
                for (const [index, region] of Object.entries(dataRegion)) {
                  CBRegion += `<option value="${region._id}">${region.name}</option>`;
                }
                $("#cb-region").html(CBRegion);
                pushDataForEditInput(data, 'territory');
                $(".box-plus-view").css("display", "block");
                eventCloseBoxPlusContent();
                eventButtonEdit();
              } else {
                alert("cannot edit territory when region is empty!");
              }
            });
          };
        });
      } else if (category == "province") {
        getProvinceByID(ID).then((dataProvince) => {
          if (dataProvince.success) {
            const data = dataProvince.data;
            let dataTerritorys = getTerritorys();
            dataTerritorys.then(dataTerritory => {
              if (dataTerritory.length > 0) {
                var editBox = `
                  <div class="box-plus-box">
                    <span id="btnClose"><i class="fa-solid fa-xmark"></i></span>
                    <div class="title">Chỉnh Sửa Tỉnh Thành</div>
                    <form>
                        <div class="group-input">
                            <label for="inputName">Tên</label>
                            <input class="label-input" type="text" id="inputName" name="inputName" placeholder="Nhập tên...">
                        </div>
                        <div class="group-combobox">
                            <span class="label">Vùng</span>
                            <select class="label-combobox" name="cb-territory" id="cb-territory"></select>
                        </div>
                        <div class="group-input">
                            <label for="inputOverview">Tổng Quan</label>
                            <input class="label-input" type="text" id="inputOverview" name="inputOverview" placeholder="Nhập tổng quan...">
                        </div>
                        <div class="group-input">
                            <label for="inputImageURL">Link Ảnh</label>
                            <input class="label-input" type="text" id="inputImageURL" name="inputImageURL" placeholder="Nhập link ảnh...">
                        </div>
                        <span id="btnEventEdit" data-category="${category}" data-provinceid="${ID}">Xác Nhận</span>
                    </form>
                  </div>
                `;
                $(".box-plus-view").html(editBox);
                let CBTerritory = ``;
                for (const [index, territory] of Object.entries(dataTerritory)) {
                  let dataID = `${territory._id},${territory.regionID}`;
                  CBTerritory += `<option value="${dataID}">${territory.name}</option>`;
                }
                $("#cb-territory").html(CBTerritory);
                pushDataForEditInput(data, 'province');
                $(".box-plus-view").css("display", "block");
                eventCloseBoxPlusContent();
                eventButtonEdit();
              } else {
                alert("cannot edit territory when territory is empty!");
              };
            });
          };
        });
      } else if (category == "place") {
        renderEventButtonEditPlace(ID, category);
      }
    })
  })
}

function labelInputFocus() {
  let groupInput = document.querySelectorAll(".label-input");
  groupInput.forEach((input) => {
    $(input)
      .focus(() => {
        let label = $(input).parent().find("label");
        $(label).css("color", "#4169e1");
      })
      .focusout(() => {
        let label = $(input).parent().find("label");
        $(label).css("color", "#777");
      });
  });

  let groupComboBox = document.querySelectorAll(".label-combobox");
  groupComboBox.forEach((input) => {
    $(input)
      .focus(() => {
        let label = $(input).parent().find(".label");
        $(label).css("color", "#4169e1");
      })
      .focusout(() => {
        let label = $(input).parent().find(".label");
        $(label).css("color", "#777");
      });
  });
}

// #Event Delete:
function addEventForButtonDelete() {
  let groupButton = document.querySelectorAll("#btnDelete");
  groupButton.forEach(btn => {
    $(btn).click(() => {
      let btnData = $(btn).data();
      let ID = btnData.id;
      let category = btnData.category;

      if (category == 'region') {
        let accept = confirm("Bạn chắc chắn muốn xóa miền này?");
        if (!accept) return;
        deleteRegion(ID).then(result => {
          console.log(result);
        });
        setTimeout(() => {
          renderRightContent('region');
        }, 300);
      } else if (category == 'territory') {
        let accept = confirm("Bạn chắc chắn muốn xóa vùng này?");
        if (!accept) return;
        deleteTerritory(ID).then(result => {
          console.log(result);
        });
        setTimeout(() => {
          renderRightContent('territory');
        }, 300);
      } else if (category == 'province') {
        let accept = confirm("Bạn chắc chắn muốn xóa tỉnh thành này?");
        if (!accept) return;
        deleteProvince(ID).then(result => {
          console.log(result);
        });
        setTimeout(() => {
          renderRightContent('province');
        }, 300);
      } else if (category == 'place') {
        let accept = confirm("Bạn chắc chắn muốn xóa địa điểm này?");
        if (!accept) return;
        deletePlace(ID).then(result => {
          console.log(result);
        });
        setTimeout(() => {
          renderRightContent('place');
        }, 300);
      }
    });
  });
};

// #Event Search:
function addEventForButtonSearch(category) {
  if (category == "province") {
    $('#btnSearch').click(() => {
      let searchVal = $('#inputProvince').val();
      getProvinceWithNameLike(searchVal).then(result => {
        if (!result.success) {
          $(".value-table").hide();
          $(".error-empty").show();
        } else {
          $(".error-empty").hide();
          $(".value-table").show();
          let Provinces = ``;
          for (const [index, province] of Object.entries(result.data)) {
            getRegionByID(province.regionID).then((dataRegion) => {
              let regionName = dataRegion.data.name;
              getTerritoryByID(province.territoryID).then((dataTerritory) => {
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
                                              <span id="btnEdit" data-category="province" data-id="${province._id}">Sửa</span>
                                              <span id="btnDetails" data-category="province" data-id="${province._id}">Chi tiết</span>
                                              <span id="btnDelete" data-category="province" data-id="${province._id}">Xóa</span>
                                          </div>
                                      </td>
                                  </tr>
                              `;
                $(".value-table").html(Provinces);
                addEventForButtonEdit();
                addEventForButtonDelete();
              });
            });
          };
        };
      });
    });
  } else if (category == "place") {
    $('#btnSearch').click(() => {
      let searchVal = $('#inputPlace').val();
      getPlaceWithNameLike(searchVal).then(result => {
        if (!result.success) {
          $(".value-table").hide();
          $(".error-empty").show();
        } else {
          $(".error-empty").hide();
          $(".value-table").show();
          let Places = ``;
          for (const [index, place] of Object.entries(result.data)) {
            getRegionByID(place.regionID).then((dataRegion) => {
              let regionName = dataRegion.data.name;
              getTerritoryByID(place.territoryID).then((dataTerritory) => {
                let territoryName = dataTerritory.data.name;
                getProvinceByID(place.provinceID).then((dataProvince) => {
                  let provinceName = dataProvince.data.name;
                  Places += `
                    <tr>
                        <td class="image-name">
                        <div class="group-content">
                            <img src="${place.image}" alt="">
                            <span>${place.name}</span>
                        </div>
                        </td>
                        <td>${regionName}</td>
                        <td>${territoryName}</td>
                        <td>${provinceName}</td>
                        <td class="actions">
                            <div class="action-buttons">
                                <span id="btnEdit" data-category="place" data-id="${place._id}">Sửa</span>
                                <span id="btnDetails" data-category="place" data-id="${place._id}">Chi tiết</span>
                                <span id="btnDelete" data-category="place" data-id="${place._id}">Xóa</span>
                            </div>
                        </td>
                    </tr>
                  `;
                  $(".value-table").html(Places);
                  addEventForButtonEdit();
                  addEventForButtonDelete();
                });
              });
            });
          };
        };
      });
    });
  };
};

// #OPTION BOX EVENT:

function removeAllOptionBoxActive() {
  let groupOptionBox = document.querySelectorAll(".option-box");
  groupOptionBox.forEach((ele) => {
    $(ele).removeClass("active");
  });
}

function setupOptionBoxEvent() {
  let groupOptionBox = document.querySelectorAll(".option-box");
  groupOptionBox.forEach((ele) => {
    $(ele).click(() => {
      let isActive = $(ele).hasClass("active");
      let category = $(ele).data().category;
      if (!isActive) {
        removeAllOptionBoxActive();
        $(ele).addClass("active");
        renderRightContent(category);
      }
    });
  });
}

function setEventButtonLogout() {
  $('#btnLogout').click(() => {
    window.location = "/sign_in.html";
  });
};

// #IMAGE EVENT:
function eventUploadImage() {
  const groupImageInput = document.querySelectorAll('#image-input');
  groupImageInput.forEach(ele => {
    $(ele).change(function() {
      let ID = $(ele).data().id;
      let input = $(this)[0];
      if (input.files && input.files.length > 0) {
        $('.images').empty();
        for (let i = 0; i < input.files.length; i++) {
          let reader = new FileReader();
          reader.onload = function (e) {
            let imageUrl = e.target.result;
            let tempArray = [imageUrl];
            uploadImage(ID, tempArray)
          };
          reader.readAsDataURL(input.files[i]);
          renderImage();
        }
      }
    });
  })
}

function eventSelectImg(ID, bool) {
  const groupImage = document.querySelectorAll('.item-img');
  groupImage.forEach(ele => {
    const parentID = $(ele).parent().data().id;
    if (parentID != ID) return;

    if (!bool) {
      $(ele).off('click');
      return
    }

    $(ele).click(() => {
      const isSelect = $(ele).hasClass('select');
      if (isSelect) {
        $(ele).removeClass('select');
        return
      }
      $(ele).addClass('select');
    })
  });
}

function removeAllSelectImage(ID) {
  const groupImage = document.querySelectorAll('.item-img');
  groupImage.forEach(ele => {
    const parentID = $(ele).parent().data().id;
    if (parentID != ID) return;

    const isSelect = $(ele).hasClass('select');
    if (isSelect) {
      $(ele).removeClass('select');
      return
    }
  });
}

function setEventForButtonDeleteImage(id, btn, bool) {
  if (!bool) {
    btn.off('click');
    return
  }

  btn.click(() => {
    const groupImage = document.querySelectorAll('.item-img');
    groupImage.forEach(ele => {
      const parentID = $(ele).parent().data().id;
      if (parentID != id) return;
  
      const isSelect = $(ele).hasClass('select');
      if (isSelect) {
        let deleteID = $(ele).data().id;
        deleteImage(deleteID);
        btn.off('click');
        return
      }
    });
    renderImage();
  });
};

function eventCheckBoxSelect() {
  const groupcheckBoxSelect = document.querySelectorAll('#checkBoxSelect');
  groupcheckBoxSelect.forEach(ele => {
    $(ele).click(() => {
      const imageStock = $(ele).parent().parent().parent().find('.img--image_stock');
      const btnDelete = $(ele).parent().parent().parent().find('#btnDeleteImage');
      const isChecked = $(ele).is(':checked');

      if (!isChecked) {
        btnDelete.hide();
        imageStock.removeClass('option-select');
        setEventForButtonDeleteImage(imageStock.data().id, btnDelete, false);
        eventSelectImg(imageStock.data().id, false);
        removeAllSelectImage(imageStock.data().id);
        return;
      }

      btnDelete.show();
      imageStock.addClass('option-select');
      setEventForButtonDeleteImage(imageStock.data().id, btnDelete, true);
      eventSelectImg(imageStock.data().id, true);
    });
  });
}

function renderImageStock() {
  const groupImageStock = document.querySelectorAll('.img--image_stock');
  groupImageStock.forEach(ele => {
    const placeID = $(ele).data().id
    getPlaceByID(placeID).then(dataPlace => {
      if (dataPlace.success) {
        let data = dataPlace.data;
        let imageID = data.imageID;
        getImageStockByID(imageID).then(dataImage => {
          if (dataImage.success) {
            let image = ``;
            let imageStock = dataImage.data;
            for (const [index, img] of Object.entries(imageStock)) {
              image += `
                <div class="item-img" data-id="${img._id}">
                  <img src="${img.imageURL}" alt="">
                  <i class="fa-solid fa-check"></i>
                </div>
              `;
            };
            $(ele).html(image);
          }
        })
      }
    })
  })
}

function renderImage() {
  let base = ``;
  const dataPlaces = getPlaces();
  dataPlaces.then((data) => {
    if (data.length > 0) {
      for (const [index, place] of Object.entries(data)) {
        base += `
          <div class="item">
            <div class="group-header">
                <div class="place-name">${place.name}</div>
                <div class="group-input">
                  <input id="checkBoxSelect" type="checkbox">
                  <span id="btnDeleteImage">xóa</span>
                  <input type="file" id="image-input" data-id="${place.imageID}" multiple>
                </div>
            </div>
            <div class="images img--image_stock" data-id="${place._id}"></div>
          </div>
        `
      }
      $('.items--image').html(base);
      eventUploadImage();
      eventCheckBoxSelect();
      renderImageStock();
    }
  });
}

// #RIGHT CONTENT EVENT:

function renderRightContent(category) {
  if (category == "statistics") {
    let rightContent = `
            <div class="header">
                <div class="title">Thống Kê</div>
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
    $(".right-content").html(rightContent);
  } else if (category == "advertisements") {
    let rightContent = `
            <div class="header">
                <div class="title">Bài Quảng Cáo</div>
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
                            <label for="titleOfAds">Tiêu đề</label>
                            <input type="text" id="titleOfAds" placeholder="Nhập tiêu đề...">
                        </div>

                        <div class="group-input">
                            <label for="reviewAds">Nội dung</label>
                            <input type="text" id="reviewAds" style="overflow-wrap: break-word;" placeholder="Nhập nội dung...">
                        </div>

                        <div class="group-double-input">
                            <div class="input-box">
                                <label for="location">Tỉnh thành</label>
                                <input type="text" id="location" placeholder="Nhập tỉnh thành...">
                                <ul class="province-category">
                                    <li>ABC</li>
                                    <li>ABC</li>
                                    <li>ABC</li>
                                    <li>ABC</li>
                                    <li>ABC</li>
                                </ul>
                            </div>

                            <div class="input-box">
                                <label for="date">Thời điểm du lịch</label>
                                <input type="text" id="date" placeholder="Nhập thời gian...">
                            </div>
                        </div>

                        <div class="group-input">
                            <label for="imageURL">Link ảnh</label>
                            <input type="text" id="imageURL" placeholder="Nhập link ảnh...">
                        </div>

                        <div class="group-checkbox">
                            <input type="checkbox" id="checkboxAds">
                            <label for="checkboxAds">Tôi xác nhận rằng thông tin trong bài đánh giá này chỉ dựa trên trải nghiệm của riêng tôi với sản phẩm hoặc dịch vụ được đề cập. Tôi cũng xác nhận rằng tôi không có mối liên hệ cá nhân hoặc nghề nghiệp nào với doanh nghiệp được đề cập và chưa được doanh nghiệp ưu đãi hoặc thanh toán bất kỳ khoản nào để viết bài đánh giá này. Tôi biết rằng các đánh giá giả mạo bị nghiêm cấm.</label>
                        </div>

                        <button id="btnSubmitAds">Đăng Quảng Cáo</button>
                    </form>
                </div>
            </div>
        `;
    $(".right-content").html(rightContent);
  } else if (category == "posts") {
    let rightContent = `

    `;
    $(".right-content").html(rightContent);
  } else if (category == "reviewers") {
    let rightContent = `
        
        `;
    $(".right-content").html(rightContent);
  } else if (category == "region") {
    let dataRegions = getRegions();
    dataRegions.then((data) => {
      let rightContent = `
                <div class="header">
                    <div class="group-text-and-button">
                        <span class="title">Miền</span>
                        <div class="group-button">
                            <span class="button" id="btnAddNew" data-category="region"><i class="fa-solid fa-plus"></i> Thêm</span>
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

                <div class="Regions"></div>
            `;
      $(".right-content").html(rightContent);
      addEventForButtonAddNew();
      if (data.length > 0) {
        $(".error-empty").hide();
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
                                    <span class="region-overview"><strong>Tổng quan:</strong> ${region.overview}</span>
                                </div>

                                <div class="region-group-event">
                                    <span id="btnEdit" data-category="region" data-id="${region._id}">Sửa</span>
                                    <span id="btnDetails" data-category="region" data-id="${region._id}">Chi tiết</span>
                                    <span id="btnDelete" data-category="region" data-id="${region._id}">Xóa</span>
                                </div>
                            </div>  
                        </div>
                    `;
        }
        $(".Regions").html(Regions);
        addEventForButtonEdit();
        addEventForButtonDelete();
      }
    });
  } else if (category == "territory") {
    let dataTerritorys = getTerritorys();
    dataTerritorys.then((data) => {
      let rightContent = `
                <div class="header">
                    <div class="group-text-and-button">
                        <span class="title">Vùng</span>
                        <div class="group-button">
                            <span class="button" id="btnAddNew" data-category="territory"><i class="fa-solid fa-plus"></i> Thêm</span>
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
      $(".right-content").html(rightContent);

      addEventForButtonAddNew();

      if (data.length > 0) {
        $(".error-empty").hide();
        let Territorys = ``;
        for (const [index, territory] of Object.entries(data)) {
          getRegionByID(territory.regionID).then((dataRegion) => {
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
                                        <span class="territory-address"><strong>Miền:</strong> ${regionName}</span>
                                        <span class="territory-overview"><strong>Tổng quan:</strong> ${territory.overview}.</span>
                                    </div>
                
                                    <div class="territory-group-event">
                                        <span id="btnEdit" data-category="territory" data-id="${territory._id}">Sửa</span>
                                        <span id="btnDetails" data-category="territory" data-id="${territory._id}">Chi tiết</span>
                                        <span id="btnDelete" data-category="territory" data-id="${territory._id}">Xóa</span>
                                    </div>
                                </div>  
                            </div>
                        `;
            $(".Territorys").html(Territorys);
            addEventForButtonEdit();
            addEventForButtonDelete();
          });
        }
      }
    });
  } else if (category == "province") {
    let dataProvinces = getProvinces();
    dataProvinces.then((data) => {
      let rightContent = `
                <div class="header">
                    <div class="group-text-and-input">
                        <span class="title">Tỉnh Thành</span>
                        <form>
                            <input type="text" id="inputProvince" placeholder="Tìm kiếm...">
                            <label for="inputProvince" id="btnSearch"><i class="fa-solid fa-magnifying-glass"></i></label>
                            <div class="group-button">
                                <span class="button" id="btnAddNew" data-category="province"><i class="fa-solid fa-plus"></i> Thêm</span>
                            </div>
                        </form>
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

                <div class="Provinces">
                    <table class="header-table">
                        <tr>
                            <td>Tên</td>
                            <td>Miền</td>
                            <td>Vùng</td>
                            <td>Chức Năng</td>
                        </tr>
                    </table>

                    <div class="province-list">
                        <table class="value-table"></table>
                    </div>
                </div>
            `;
      $(".right-content").html(rightContent);

      addEventForButtonAddNew();
      addEventForButtonSearch('province');

      if (data.length > 0) {
        $(".error-empty").hide();
        let Provinces = ``;
        for (const [index, province] of Object.entries(data)) {
          getRegionByID(province.regionID).then((dataRegion) => {
            let regionName = dataRegion.data.name;
            getTerritoryByID(province.territoryID).then((dataTerritory) => {
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
                                            <span id="btnEdit" data-category="province" data-id="${province._id}">Sửa</span>
                                            <span id="btnDetails" data-category="province" data-id="${province._id}">Chi tiết</span>
                                            <span id="btnDelete" data-category="province" data-id="${province._id}">Xóa</span>
                                        </div>
                                    </td>
                                </tr>
                            `;
              $(".value-table").html(Provinces);
              addEventForButtonEdit();
              addEventForButtonDelete();
            });
          });
        }
      }
    });
  } else if (category == "place") {
    let dataPlaces = getPlaces();
    dataPlaces.then((data) => {
      let rightContent = `
                <div class="header">
                    <div class="group-text-and-input">
                        <span class="title">Địa Điểm</span>
                        <form>
                            <input type="text" id="inputPlace" placeholder="Tìm kiếm...">
                            <label for="inputPlace" id="btnSearch"><i class="fa-solid fa-magnifying-glass"></i></label>
                            <div class="group-button">
                                <span class="button" id="btnAddNew" data-category="place"><i class="fa-solid fa-plus"></i> Thêm</span>
                            </div>
                        </form>
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

                <div class="Places">
                    <table class="header-table">
                        <tr>
                            <td>Tên</td>
                            <td>Miền</td>
                            <td>Vùng</td>
                            <td>Tỉnh Thành</td>
                            <td>Chức Năng</td>
                        </tr>
                    </table>

                    <div class="place-list">
                      <table class="value-table"></table>
                    </div>
                </div>
      `;
      $(".right-content").html(rightContent);

      addEventForButtonAddNew();
      addEventForButtonSearch('place');
      
      if (data.length > 0) {
        $(".error-empty").hide();
        let Places = ``;
        for (const [index, place] of Object.entries(data)) {
          getRegionByID(place.regionID).then((dataRegion) => {
            let regionName = dataRegion.data.name;
            getTerritoryByID(place.territoryID).then((dataTerritory) => {
              let territoryName = dataTerritory.data.name;
              getProvinceByID(place.provinceID).then((dataProvince) => {
                let provinceName = dataProvince.data.name;
                Places += `
                                    <tr>
                                        <td class="image-name">
                                        <div class="group-content">
                                            <img src="${place.image}" alt="">
                                            <span>${place.name}</span>
                                        </div>
                                        </td>
                                        <td>${regionName}</td>
                                        <td>${territoryName}</td>
                                        <td>${provinceName}</td>
                                        <td class="actions">
                                            <div class="action-buttons">
                                                <span id="btnEdit" data-category="place" data-id="${place._id}">Sửa</span>
                                                <span id="btnDetails" data-category="place" data-id="${place._id}">Chi tiết</span>
                                                <span id="btnDelete" data-category="place" data-id="${place._id}">Xóa</span>
                                            </div>
                                        </td>
                                    </tr>
                                `;
                $(".value-table").html(Places);
                addEventForButtonEdit();
                addEventForButtonDelete();
              });
            });
          });
        }
      }
    });
  } else if (category == "photo") {
    let rightContent = `
      <div class="header">
        <div class="group-text-and-input">
            <span class="title">Kho Ảnh</span>
            <form>
                <input type="text" id="inputPlace" placeholder="Tìm kiếm...">
                <label for="inputPlace" id="btnSearch"><i class="fa-solid fa-magnifying-glass"></i></label>
            </form>
        </div>
      </div>

      <div class="Photos">
        <div class="items items--image"></div>
      </div>
    `;
    $(".right-content").html(rightContent);

    // RENDER:
    renderImage();
  }
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
    setEventButtonLogout();
    renderRightContent('statistics');
    labelInputFocus();
});