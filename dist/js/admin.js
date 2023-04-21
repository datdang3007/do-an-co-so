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
            if (!isActive) {
                removeAllOptionBoxActive();
                $(ele).addClass('active');
            }
        });
    });
}

$('#location').focus((e) => { 
    e.preventDefault();
    $('.province-category').css('display','block');
}).focusout((e) => {
    e.preventDefault();
    $('.province-category').css('display','none');
});

$(document).ready(function () {
    setupOptionBoxEvent();
});