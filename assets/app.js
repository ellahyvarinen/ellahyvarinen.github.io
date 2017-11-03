var message = "Web design and other stuff... Made by Ella";
var msgCount = 0;
var messageLabel = document.getElementById("messageLabel");

var timer1, timer2, timer3;

function textFunc() {
    messageLabel.innerHTML = message.substring(0, msgCount);
    if (msgCount == message.length) {
        clearInterval(timer1);
    } else {
        msgCount++;
    }
}
var code = "< head >" + '<br />' + " Something " + '<br />' + "< / head >" + '<br />' + "< body >" + '<br />' + " Cool stuff " + '<br />' + "< / body >";
var codeCount = 0;
var codeLabel = document.getElementById("codeLabel");

function codeFunc() {
    codeLabel.innerHTML = code.substring(0, codeCount);
    if (codeCount == code.length) {
        clearInterval(timer2);
    } else {
        codeCount++;
    }
}

var data = "> Big data" + '<br />' + "> Map it" + '<br />' + "> Reduce it" + '<br />' + "> Informative data";
var dataCount = 0;
var dataLabel = document.getElementById("dataLabel");

function dataFunc() {
    dataLabel.innerHTML = data.substring(0, dataCount);
    if (dataCount == data.length) {
        clearInterval(timer3);
    } else {
        dataCount++;
    }
}


timer1 = setInterval("textFunc()", 150);
timer2 = setInterval("codeFunc()", 100);
timer3 = setInterval("dataFunc()", 100);



$(function () {
    //console.log("ready!");

    var prev = 0;
    var $window = $(window);
    var nav = $('#navigation');
    $window.on('scroll', function () {
        var scrollTop = $window.scrollTop();
        nav.toggleClass('is-hidden', scrollTop > prev);
        prev = scrollTop;
    });

    var navTop = $('#navigation').offset().top;
    $window.on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        if ($(window).scrollTop() >= navTop) {
            $('#navigation').css({
                backgroundColor: 'rgba(255, 255, 255, 0.9)'
            });
        } else {
            $('#navigation').css({
                backgroundColor: 'rgba(255, 255, 255, 0.9)'
            });
        }
    });

    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

});
