// Set max render place recommend:
const placeRecommendCount = 5;
let tickedStarScore = null;

//----------------------------------------//
//------------- ### API ### --------------//
//----------------------------------------//
async function getUser() {
    let allUser = await fetch("http://localhost:8000/api/getUser", {
        method: "GET",
    }).then((data) => data.json());
    return allUser;
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

// async function checkExistsName(first_name, last_name) {
//     let result = await fetch("http://localhost:8000/api/checkExistsName", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ first_name: first_name, last_name: last_name }),
//     }).then((data) => data.json());
//     return result;
// }

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

async function addNewComment(data) {
    let info = await fetch("http://localhost:8000/api/addNewComment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
  }).then((data) => data.json());
  return info;
}

async function getAllCommentByTargetID(id) {
    let commentList = await fetch("http://localhost:8000/api/getAllCommentByTargetID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify({ ID: id }),
  }).then((data) => data.json());
  return commentList;
}

async function handleLikeByID(id, userID) {
    let result = await fetch("http://localhost:8000/api/handleLikeByID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify({ ID: id, userID: userID }),
  }).then((data) => data.json());
  return result.success;
}

async function editArrayLikeByID(id, data) {
    let result = await fetch("http://localhost:8000/api/editArrayLikeByID", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify({ ID: id, data: data }),
  }).then((data) => data.json());
  return result.success;
}

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

async function addConnectPlace(id) {
    console.log(id);
    let result = await fetch(
      "http://localhost:8000/api/addConnectPlace",
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

function getRandomNumberTypeInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function compareDate(createdDate) {
//     let currentDate = new Date();
//     let day = currentDate.getDate();
//     let month = currentDate.getMonth() + 1;
//     let year = currentDate.getFullYear();
//     let nowDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);

//     let startDate = new Date(createdDate);
//     let endDate = new Date(nowDate);

//     let timeDiff = endDate.getTime() - startDate.getTime();
//     let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
//     if (daysDiff == 0) {
//         return null
//     }
//     if (daysDiff < 31) {
//         return  `${daysDiff} ngày trước`;
//     }
//     if (daysDiff > 31 && daysDiff < 365) {
//         let monthsDiff = Math.floor(daysDiff / 30.436875);
//         return `${monthsDiff} tháng trước`;
//     } else {
//         let monthsDiff = Math.floor(daysDiff / 30.436875);
//         let yearsDiff = Math.floor(monthsDiff / 12);
//         return `${yearsDiff} năm trước`;
//     }
// }

// function compareTime(createdAt) {
//     let createdTimeSplit = createdAt.split(':');
//     let hoursCreated = +createdTimeSplit[0] + 7;
//     let minutesCreated = createdTimeSplit[1];
//     let secondsCreated = createdTimeSplit[2];
    
//     let currentDate = new Date();
//     let hours = currentDate.getHours();
//     let minutes = currentDate.getMinutes();
//     let seconds = currentDate.getSeconds();

//     if (hours < hoursCreated ? hours = hours + 24 : hours)

//     var hoursDiff = hours - hoursCreated;
//     var minutesDiff = minutes - minutesCreated;
//     var secondsDiff = seconds - secondsCreated;

//     if (hoursDiff == 0 && minutesDiff == 0 && secondsDiff < 60) {
//         return `vài giây trước`;
//     };
//     if (hoursDiff == 0 && minutesDiff > 0 && minutesDiff < 60) {
//         return `${minutesDiff} phút trước`;
//     };
//     if (hoursDiff != 0 && hoursDiff < 24) {
//         return `${hoursDiff} giờ trước`;
//     } else {
//         return null;
//     };
// };

function formatTime(created) {
    let createdDate = new Date(created);
    let currentDate = new Date();
  
    let timeDiff = Math.abs(currentDate - createdDate) / 1000; // Đổi sang giây
  
    if (timeDiff < 60) {
      return `${Math.floor(timeDiff)} giây trước`;
    }
    timeDiff /= 60; // Đổi sang phút
  
    if (timeDiff < 60) {
      return `${Math.floor(timeDiff)} phút trước`;
    }
    timeDiff /= 60; // Đổi sang giờ
  
    if (timeDiff < 24) {
      return `${Math.floor(timeDiff)} giờ trước`;
    }
    timeDiff /= 24; // Đổi sang ngày
  
    if (timeDiff < 31) {
      return `${Math.floor(timeDiff)} ngày trước`;
    }
    timeDiff /= 30.436875; // Đổi sang tháng
  
    if (timeDiff < 12) {
      return `${Math.floor(timeDiff)} tháng trước`;
    }
    
    timeDiff /= 12; // Đổi sang năm
  
    return `${Math.floor(timeDiff)} năm trước`;
}

function eventClickPlace(userID, group) {
    group.forEach(ele => {
        $(ele).click(() => {
            let ID = $(ele).data().id;
            if (userID) {
                window.location = `/place.html?userID=${userID}&placeID=${ID}`;
                return
            }
            window.location = `/place.html?placeID=${ID}`;
        });
    });
};

// COMMENT:

function addEventButtonLikeComment(userID, commentID) {
    const groupBtnLike = document.querySelectorAll('#btnLikeComment');
    groupBtnLike.forEach(btn => {
        $(btn).click(() => {
            if (!userID) {
                alert('Bạn cần đăng nhập để có thể like bình luận của người khác');
                return
            };
            const ID = $(btn).data().id;
            handleLikeByID(ID, userID).then(result => {
                console.log("Call API button Like success: ", result);
                setTimeout(() => {
                    renderCommentList(userID, commentID);
                }, 300);
            });
        });
    });
};

function addEventButtonReplyComment(userID) {
    const groupBtnReply = document.querySelectorAll('#btnReplyComment');
    groupBtnReply.forEach(btn => {
        $(btn).click(() => {
            if (!userID) {
                alert('Bạn cần đăng nhập để có thể trả lời của người khác');
                return
            };
            
            const ID = $(btn).data().id;
            getUserByID(ID).then(dataUser => {
                if (dataUser.success) {
                    let comment = $('#txtComment').val();
                    const name = `${dataUser.data.fist_name}_${dataUser.data.last_name}`
                    $('#txtComment').val(`@${name} ${comment}`);
                };
            });
        });
    });
};

function checkUserTag(comment) {
    return new Promise((resolve, reject) => {
        const regexUserTag = /@\w+/g;
        const userMatchRegex = comment.match(regexUserTag);
        
        if (!userMatchRegex) {
            resolve(comment);
            return
        }

        getUser().then(allUser => {
            if (allUser.success) {
                let listUserTagValidate = [];
                const allUserData = allUser.data;
                for (const [index, user] of Object.entries(allUserData)) {
                    const name = `@${user.fist_name}_${user.last_name}`;

                    if (userMatchRegex.includes(name)) {
                        listUserTagValidate.push(name);
                    }
                }
                const commentWithUserTags = comment.replace(listUserTagValidate, '<span class="user-tag">$&</span>');
                resolve(commentWithUserTags);
            }
        });
    })
};

function renderCommentList(userID, commentID) {
    return new Promise((resolve, reject) => {
        const emptyMsg = `<span class="Error">Chưa có bình luận nào</span>`;
        getAllCommentByTargetID(commentID).then(dataComment => {
            if (!dataComment.success || dataComment.data.length == 0) {
                $('.comment-list-items').before(emptyMsg);
            }

            const data = dataComment.data;
            for (const [index, commentReuslt] of Object.entries(data)) {
                const likeCount = commentReuslt.likeArray.length;
                const txtComment = commentReuslt.comment;

                let commentTime = null;
                const createdTime = commentReuslt.createdAt;
                const createdTimeSplit = createdTime.split('T');
                const date = createdTimeSplit[0];
                const time = createdTimeSplit[1].split('.')[0];
                const fomatTime = formatTime(`${date} ${time}`);

                checkUserTag(txtComment).then(txtCommentAfterCheckUserTag => {
                    let commentItem = `
                        <div class="comment-list-item">
                            <div class="avatar">
                                <img src="https://dulichchat.com/wp-content/uploads/2023/03/C%E1%BA%A7u-H%C3%B4n-Kiss-Bridge-Ph%C3%BA-Qu%E1%BB%91c-5.jpg" alt="">
                            </div>
                            <div class="comment-item--right">
                                <div class="comment-content">
                                    <span>${txtCommentAfterCheckUserTag}</span>
                                </div>
                                <div class="group-comment-option">
                                    <div class="option-comment-box like" id="btnLikeComment" data-id="${commentReuslt._id}">
                                        <span class="like-count">${likeCount}</span>
                                        <i class="fa-solid fa-thumbs-up"></i>
                                    </div>
                                    <div class="option-comment-box reply" id="btnReplyComment" data-id="${commentReuslt.userID}">
                                        <span>Trả lời</span>
                                        <i class="fa-solid fa-reply active"></i>
                                    </div>
                                    <div class="option-comment-box time">
                                        <span>${fomatTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    $('.comment-list-items').append(commentItem);
                });
            };
            resolve();
        });
    });
}

function renderCommentContent(userID, commentID) {
    renderCommentList(userID, commentID).then(() => {
        if (!userID) return;

        const userComment = `
            <div class="comment-list-item">
                <div class="avatar">
                <img src="https://dulichchat.com/wp-content/uploads/2023/03/C%E1%BA%A7u-H%C3%B4n-Kiss-Bridge-Ph%C3%BA-Qu%E1%BB%91c-5.jpg" alt="">
                </div>
                <div class="comment-item--right">
                    <textarea id="txtComment" rows="3" cols="60" name="description" placeholder="Bình luận..."></textarea>
                </div>
            </div>
        `;
        $('.user-comment').html(userComment);

        $('#txtComment').bind('keyup', function(e) {
            // Just click enter not holding shift:
            if (e.keyCode == 13 && !e.shiftKey) {
                let comment = $('#txtComment').val();
                let validComment = /[a-z0-9]/i.test(comment);
    
                if (comment == "" || !validComment) {
                    return;
                }
    
                const dataComment = {
                    userID: userID,
                    comment: comment,
                    targetID: commentID
                }
    
                addNewComment(dataComment).then(result => {
                    if (result.success) {
                        $('.Error').remove();
                        $('#txtComment').val(``);
                        setTimeout(() => {
                            renderCommentList(userID, commentID);
                        }, 300);
                    }
                });
            }
        });

        addEventButtonLikeComment(userID, commentID);
        addEventButtonReplyComment(userID);
    });
}

// STARS:
function showStar(score) {
    var groupStar = document.querySelectorAll(".star");
  
    groupStar.forEach((star) => {
        const star_no = $(star).data().no;
      if (star_no <= score) {
        $(star).addClass("active");
      } else {
        $(star).removeClass("active");
      }
    });
};

function starEvent(userID, id) {
    const groupStars = document.querySelectorAll('.star');
    groupStars.forEach(star => {
        $(star).hover(() => {
            const star_no = $(star).data().no;
            showStar(star_no);
        });

        $(star).mouseleave(() => {
            if (!tickedStarScore) {
                showStar(0);
            } else {
                showStar(tickedStarScore);
            };
        });

        $(star).click(() => {
            if (!userID) {
                alert('Bạn cần đăng nhập để có thể đánh giá địa điểm!');
                return;
            };

            const star_no = $(star).data().no;
            tickedStarScore = star_no;
            showStar(star_no);

            let data = {
                userID: userID,
                score: star_no
            }
            
            editArrayLikeByID(id, data).then(result => {
                if (result) {

                }
            });
        });
    });
}


function renderStarContent(userID, id) {
    getPlaceByID(id).then(dataPlace => {
        if (dataPlace.success) {
            const data = dataPlace.data;
            const dataArrayLike = data.likeArray;
            const reviewerLikeCount = dataArrayLike.length;
            let score = 0;
            if (reviewerLikeCount > 0) {
                let totalScore = 0
                dataArrayLike.map(val => totalScore += val.score);
                score = Math.floor(totalScore / reviewerLikeCount);
            }
            let starList = `
                <div class="group-star">
                    <span>Đánh giá: </span>
                    <div class="star" id="star-no1" data-no="1">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no2" data-no="2">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no3" data-no="3">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no4" data-no="4">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="star" id="star-no5" data-no="5">
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="group-point">
                    <span class="star-point">
                        <span style="color: green;">${score}/5</span>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <p>(${reviewerLikeCount} người đánh giá)</p>
                </div>
            `;

            $('.star-list').html(starList);

            const filteredData = dataArrayLike.filter(val => val.userID == userID);
            const isStared = filteredData.length > 0 ? filteredData[0].score : 0;
            
            if (isStared) {
                tickedStarScore = isStared
                showStar(tickedStarScore);
            };
            starEvent(userID, id);
        };
    });
};

function renderPlace(userID, id) {
    getPlaceByID(id).then(dataPlace => {
        if (dataPlace.success) {
            const data = dataPlace.data;
            const name = data.name;
            const overview = data.overview;
            const commentID = data.commentID;
            const image = `
                <img
                    src="${data.image}"
                    alt=""
                />
            `;
            let regionID = data.regionID;
            let territoryID = data.territoryID;
            let provinceID = data.provinceID;

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
            };

            $('.image--place').html(image);
            $('.header-city-name').html(name);
            $('.content--overview').html(overview);
            $('.content-box--plus').html(contentPlus);

            renderCommentContent(userID, commentID);
            renderStarContent(userID, id);

            getRegionByID(regionID).then(dataRegion => {
                if (dataRegion.success) {
                    let data = dataRegion.data
                    $('#direction_region').html(data.name);

                    if (!userID) {
                        $('#direction_region').attr("href", `/region.html?regionID=${regionID}`);
                    } else {
                        $('#direction_region').attr("href", `/region.html?userID=${userID}&regionID=${regionID}`);
                    }
                };
            });

            getTerritoryByID(territoryID).then(dataTerritory => {
                if (dataTerritory.success) {
                    let data = dataTerritory.data
                    $('#direction_territory').html(data.name);

                    if (!userID) {
                        $('#direction_territory').attr("href", `/territory.html?territoryID=${territoryID}`);
                    } else {
                        $('#direction_territory').attr("href", `/territory.html?userID=${userID}&territoryID=${territoryID}`);
                    }
                };
            });

            getProvinceByID(provinceID).then(dataProvince => {
                if (dataProvince.success) {
                    let data = dataProvince.data
                    $('#direction_province').html(data.name);

                    if (!userID) {
                        $('#direction_province').attr("href", `/province.html?provinceID=${provinceID}`);
                    } else {
                        $('#direction_province').attr("href", `/province.html?userID=${userID}&provinceID=${provinceID}`);
                    }
                };
            });

            if (userID) {
                const groupButtonDirectionHome = document.querySelectorAll('#btnDirectionHome');
                groupButtonDirectionHome.forEach(btn => {
                    $(btn).attr("href", `/home.html?userID=${userID}`);
                });
            };
        };
    });
};

function renderPlaceRecommend(userID) {
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
            eventClickPlace(userID, groupImagePlaceRecommend);
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
    getPlaceByID(id).then(dataPlace => {
        if (dataPlace.success) {
            const image_stock_id = dataPlace.data.imageID;
            getImageStockByID(image_stock_id).then(dataImage => {
                if (dataImage.success) {
                    const ImageStock = dataImage.data.map(val =>
                        `
                        <div class="item">
                            <div class="item-box">
                                <div class="img">
                                    <img src="${val.imageURL}" alt="" />
                                </div>
                            </div>
                        </div>
                      `
                    ).join('');
                    $('.items--image_stock').html(ImageStock);
                };
            });
        };
    });
};

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

function renderProfile(userID, placeID) {
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
                            <li><a href="place.html?placeID=${placeID}">Đăng Xuất</a></li>
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

    // Place & Place Recommend:
    base += `
        <div class="no1-page">
            <div class="container">
                <div class="left-content">
                    <div class="directory">
                        <i class="fa-solid fa-house"></i>
                        <a id="btnDirectionHome" href="home.html">Trang chủ</a> > 
                        <a id="direction_region" href="#">Miền</a> >
                        <a id="direction_territory" href="#">Vùng</a> >
                        <a id="direction_province" href="#">Tỉnh Thành</a>
                    </div>
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
                        <div class="star-list"></div>
                    </div>

                    <div class="content-box">
                        <span class="header-comment">Bình Luận</span>
                        <div class="comment-list">
                            <div class="comment-list-items"></div>
                            <div class="user-comment"></div>
                        </div>
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
    renderProfile(userID, id);
    renderService();
    renderPlace(userID, id);
    renderPlaceRecommend(userID);
    renderImageStock(id);

    // HEADER SEARCH:
    $('.result-searching-form').hide();
    addEventForInputHeaderSearch(userID);
}

$(document).ready(function () {
    const userID = getUrlParameter("userID");
    const placeID = getUrlParameter("placeID");
    addConnectPlace(placeID);
    renderPage(userID, placeID);
});