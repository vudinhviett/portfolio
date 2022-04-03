let ipacces = document.getElementsByClassName('footer')[0];
let ipform = document.getElementById('ipform')
let fetchFnc = async () => {
    let dataFetch = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_aTqX7vsni77vv0Hd4XMXimT2JBkCC`, {
    })
    let dataJSON = await dataFetch.json()
    //   console.log(dataJSON)
    ipacces.innerHTML = `IP truy cập: ${dataJSON.ip} - ISP: ${dataJSON.isp}`
    ipform.value = 'IP: '+  dataJSON.ip + '   ISP: '+ dataJSON.isp + '   Location: ' + dataJSON.location.region;

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