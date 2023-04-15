function checkInputTypeNumber(ele) {
    ele.keyup(() => {
        if (ele.val() != '') {
          let arr = ele.val().split('');
          let correctNumber = [1,2,3,4,5,6,7,8,9,0]
          let correct = false
    
          for (i in arr) {
              for(j in correctNumber) {
                  if (arr[i] == correctNumber[j]) {
                      correct = true;
                  }
              }
          };
          if (!correct) {
            ele.val() = '';
          };
        };
      }).keypress(() => {
        return event.keyCode === 8 || event.charCode >= 48 && event.charCode <= 57
    });
};

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function ValidatePassword(password) {
    let strings = password;
    let i = 0;
    let character = "";
    let number = false;
    let upper = false;
    let lower = false;
  
    while (i <= strings.length) {
      character = strings.charAt(i);
      if (!isNaN(character * 1)) {
        number = true;
      } else {
        if (character == character.toUpperCase()) {
          upper = true;
        }
        if (character == character.toLowerCase()) {
          lower = true;
        }
      }
      i++;
    }
  
    if (number && upper && lower && strings.length >= 8 && strings.length <= 25)
      return true;
    else return false;
};

function unsendElementAlert(ele) {
    if ($(ele).find('#alert-msg').length == 1) {
        $(ele).find('#alert-msg').remove();
    }
}

function sendElementAlert(ele, val) {
    if ($(ele).find('#alert-msg').length == 1) {
        $(ele).find('#alert-msg').remove();
    }
    
    if ($(ele).find('#alert-msg').length == 0) {
        $(ele).append(`<p id="alert-msg">${val}</p>`);
    }
}

function clearAlertInput() {
    let groupInput = document.querySelectorAll('#inputCheck');
    groupInput.forEach(ele => {
        unsendElementAlert(ele);
    });
}

function checkEmptyInput() {
    let groupInput = document.querySelectorAll('#inputCheck');
    groupInput.forEach(ele => {
        let val = $(ele).find('input').val();
        if (val == '') {
            sendElementAlert(ele, `can't empty!`);
        } else {
            unsendElementAlert(ele);
        }
    });
};

async function Register(data) {
    let accounInfo = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((data) => data.json())
    return accounInfo
}

async function checkDuplicateEmail(email) {
    let duplicate = await fetch("http://localhost:5000/api/checkExistsEmail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email}),
    })
    .then((data) => data.json())
    return duplicate.success
}

async function checkDuplicatePhone(phone) {
    let duplicate = await fetch("http://localhost:5000/api/checkExistsPhone", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({phone: phone}),
    })
    .then((data) => data.json())
    return duplicate.success
}

$("#btnSignUp").click((e) => {
    e.preventDefault();
    let f_name = $('#inputFirstName').val();
    let l_name = $('#inputLastName').val();
    let phone = $('#inputPhone').val();
    let email = $('#inputEmail').val();
    let password = $('#inputPassword').val();
    let password2 = $('#inputPasswordTwo').val();
    let acceptPolicy = $('#checkboxAcpPolicy').is(":checked");
    
    if (f_name != '' && l_name != '' && phone != '' && email != '' && password != '' && password2 != '' && acceptPolicy && password == password2 && isEmail(email) && ValidatePassword(password)) {
        clearAlertInput();
        checkDuplicateEmail(email).then(dataEmail => {
            let duplicateEmail = dataEmail;
            checkDuplicatePhone(phone).then(dataPhone => {
                let duplicatePhone = dataPhone;
                if (!duplicateEmail && !duplicatePhone) {
                    const data = {
                        fist_name: f_name,
                        last_name: l_name,
                        phone: phone,
                        email: email,
                        password: password,
                        admin: 0,
                    };
        
                    Register(data).then(data => {
                        console.log(data);
                    });
                } else {
                    if (duplicateEmail && duplicatePhone) {
                        sendElementAlert($('#inputEmail').parent(), `Email has already been registered`);
                        sendElementAlert($('#inputPhone').parent(), `Phone number has already been registered`);
                    } else if (duplicateEmail) {
                        sendElementAlert($('#inputEmail').parent(), `Email has already been registered`);
                    } else if (duplicatePhone) {
                        sendElementAlert($('#inputPhone').parent(), `Phone number has already been registered`);
                    }
                }
            });
        });
    } else {
        if (f_name == '' || l_name == '' || phone == '' || email == '' || password == '' || password2 == '') {
            checkEmptyInput();
        } else {
            if (!isEmail(email)) {
                sendElementAlert($('#inputEmail').parent(), `email is not valid!`);
            } else {
                unsendElementAlert($('#inputEmail').parent());
            }

            if (password != password2) {
                sendElementAlert($('#inputPasswordTwo').parent(), `confirm password doesn't match!`);
            } else {
                unsendElementAlert($('#inputPasswordTwo').parent());
            }

            if (!ValidatePassword(password)) {
                sendElementAlert($('#inputPassword').parent(), `Password must contain uppercase letters, lowercase letters, and numbers (8-25 characters)`);
            } else {
                unsendElementAlert($('#inputPassword').parent());
            }

            if (ValidatePassword(password) && isEmail(email) && password == password2 && !acceptPolicy) {
                alert('you need to accept policy to sign up!')
            }
        }
    }
});

$(document).ready(function () {
    let inputPhone = $('#inputPhone');
    checkInputTypeNumber(inputPhone);
});

// async function APIgetUser() {
//     let allUser = await fetch("http://localhost:5000/api/getuser")
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
//     return allUser
// }