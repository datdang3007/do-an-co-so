function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function unsendElementAlert(ele) {
  if ($(ele).find("#alert-msg").length == 1) {
    $(ele).find("#alert-msg").remove();
  }
}

function sendElementAlert(ele, val) {
  if ($(ele).find("#alert-msg").length == 1) {
    $(ele).find("#alert-msg").remove();
  }

  if ($(ele).find("#alert-msg").length == 0) {
    $(ele).append(`<p id="alert-msg">${val}</p>`);
  }
}

function clearAlertInput() {
  let groupInput = document.querySelectorAll("#inputCheck");
  groupInput.forEach((ele) => {
    unsendElementAlert(ele);
  });
}

async function checkExistsEmail(email) {
  let duplicate = await fetch("http://localhost:8000/api/checkExistsEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  }).then((data) => data.json());
  return duplicate;
}

async function checkExistsPhone(phone) {
  let duplicate = await fetch("http://localhost:8000/api/checkExistsPhone", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone: phone }),
  }).then((data) => data.json());
  return duplicate;
}

$("#btnSignIn").click((e) => {
  e.preventDefault();
  let emailOrPhone = $("#inputEmailOrPhone").val();
  let password = $("#inputPassword").val();
  if (emailOrPhone != "" && password != "") {
    clearAlertInput();
    if (isEmail(emailOrPhone)) {
      checkExistsEmail(emailOrPhone).then((data) => {
        let dataUser = data;
        if (dataUser.data == null) {
          sendElementAlert(
            $("#inputEmailOrPhone").parent(),
            `Email has not been registered!`
          );
        } else {
          if (dataUser.data.password != password) {
            sendElementAlert($("#inputPassword").parent(), `Invalid password!`);
          } else {
            if (dataUser.data.admin == 0) {
              window.location = `/home.html?userID=${dataUser.data._id}`;
            } else if (dataUser.data.admin == 1) {
              window.location = "/admin.html?permission=1";
            } else if (dataUser.data.admin == 2) {
              window.location = "/admin.html?permission=2";
            }
          }
        }
      });
    } else {
      checkExistsPhone(emailOrPhone).then((data) => {
        let dataUser = data;
        if (dataUser.data == null) {
          sendElementAlert(
            $("#inputEmailOrPhone").parent(),
            `Phone has not been registered!`
          );
        } else {
          if (dataUser.data.password != password) {
            sendElementAlert($("#inputPassword").parent(), `Invalid password!`);
          } else {
            if (dataUser.data.admin == 0) {
              window.location = `/home.html?userID=${dataUser.data._id}`;
            } else if (dataUser.data.admin == 1) {
              window.location = "/admin.html?permission=1";
            } else if (dataUser.data.admin == 2) {
              window.location = "/admin.html?permission=2";
            }
          }
        }
      });
    }
  } else {
    if (emailOrPhone == "") {
      sendElementAlert($("#inputEmailOrPhone").parent(), `can't empty!`);
    } else {
      unsendElementAlert($("#inputEmailOrPhone").parent());
    }

    if (password == "") {
      sendElementAlert($("#inputPassword").parent(), `can't empty!`);
    } else {
      unsendElementAlert($("#inputPassword").parent());
    }
  }
});
