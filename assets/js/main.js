let ipacces = document.getElementsByClassName('footer')[0];
let ipform = document.getElementById('ipform')
let fetchFnc = async () => {
    let dataFetch = await fetch(`https://api.freegeoip.app/json/?apikey=e5abd1c0-b422-11ec-85f1-17d3d89c994b`, {
    })
    let dataJSON = await dataFetch.json()
    //   console.log(dataJSON)
    ipacces.innerHTML = `Your IP: ${dataJSON.ip} - Location: ${dataJSON.city}, ${dataJSON.country_name}`
    ipform.value = 'IP: '+  dataJSON.ip +  '   Location: ' + dataJSON.city + ', ' + dataJSON.region_name + ', ' + dataJSON.country_name + ', ' + dataJSON.country_code + ', ' + dataJSON.latitude + ', ' + dataJSON.longitude;

}
fetchFnc()
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
            disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
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
const devtools = {
    isOpen: false,
};

const threshold = 160;

const emitEvent = (isOpen, orientation) => {
    globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange', {
        detail: {
            isOpen,
            orientation,
        },
    }));
};

const main = ({ emitEvents = true } = {}) => {
    const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold;
    const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold;
    const orientation = widthThreshold ? 'vertical' : 'horizontal';

    if (
        !(heightThreshold && widthThreshold)
        && ((globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
    ) {
        if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
            emitEvent(true, orientation);
        }

        devtools.isOpen = true;
        devtools.orientation = orientation;
    } else {
        if (devtools.isOpen && emitEvents) {
            emitEvent(false, undefined);
        }

        devtools.isOpen = false;
        devtools.orientation = undefined;
    }
};
setInterval(function () {
   if (devtools.isOpen) {
        window.location.replace("https://facebook.com/hacked")
    }
}, 1);

main({ emitEvents: false });
!function() {
function detectDevTool(allow) {
if(isNaN(+allow)) allow = 100;
var start = +new Date(); // Validation of built-in Object tamper prevention.
debugger;
var end = +new Date(); // Validates too.
if(isNaN(start) || isNaN(end) || end - start > allow) {
// input your code here when devtools detected.
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