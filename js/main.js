const menu = document.querySelector(".navbar-icon");
const list = document.querySelector(".navbar");
const navItem = document.querySelectorAll(".navbar-item");
menu.addEventListener("click", function () {
    list.classList.add("active");
    if (menu.classList.contains("active")) {
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-times-circle");
        menu.classList.remove("active");
        list.classList.remove("active");
    } else {
        menu.classList.add("active");
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-times-circle");
    }
});
for (item of navItem) {
    item.addEventListener("click", function () {
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-times-circle");
        menu.classList.remove("active");
        list.classList.remove("active");
    });
}
//Scroll
var sections = document.querySelectorAll("section");
onscroll = function () {
    var top = document.documentElement.scrollTop;
    sections.forEach((section) => {
        var height = section.offsetHeight;
        var offset = section.offsetTop - 100;
        if (top > offset && top < offset + height) {
            activeItem(section.id);
        }
    });
};
function activeItem(id) {
    for (item of navItem) {
        item.classList.remove("active-color");
    }
    document.querySelector(`a[href='#${id}']`).classList.add("active-color");
}

function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            let inc = Math.ceil(finalNumber / (duration / 17))
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber
                clearInterval(interval)
            } else {
                currentNumber += inc
            }
            callback(currentNumber)
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    animateNumber(38500, 1500, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('transaction-count').innerText = formattedNumber
        document.getElementById('transaction-count').style.transition = '0.2s'
    })
})
window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function (e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
            alert("Khum cho xem source code đâu")
            disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
            alert("Khum cho F12 đâu")
            disabledEvent(e);
        }
    }, false);

    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
};


!function() {
  function detectDevTool(allow) {
    if(isNaN(+allow)) allow = 100;
    var start = +new Date(); // Validation of built-in Object tamper prevention.
    var end = +new Date(); // Validates too.
    if(isNaN(start) || isNaN(end) || end - start > allow) {
                debugger;
    }
  }
  if(window.attachEvent) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        detectDevTool();
      window.attachEvent('onresize', detectDevTool);
      window.attachEvent('onmousemove', detectDevTool);
      window.attachEvent('onfocus', detectDevTool);
      window.attachEvent('onblur', detectDevTool);
    } else {
        setTimeout(argument.callee, 0);
    }
  } else {
    window.addEventListener('load', detectDevTool);
    window.addEventListener('resize', detectDevTool);
    window.addEventListener('mousemove', detectDevTool);
    window.addEventListener('focus', detectDevTool);
    window.addEventListener('blur', detectDevTool);
  }
}();