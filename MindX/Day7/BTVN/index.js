document.write("Câu 1: </br>")
for (let i = 1; i <= 7; i++) {
    for (var k = 7; k > i; k--) {
        document.write("&nbsp;&nbsp;")
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
        document.write("1")
    }
    document.write("</br>")
};

document.write("Câu 2: ")
let myArr = [9,7,9,0,7,8,387,123,456]
let chan = myArr%2 ==0 && myArr ==0
let le = myArr != myArr%2 ==0 && myArr ==0
if(myArr%2 ==0 && myArr ==0){
    document.write("Số chẵn: ", chan)
}
else{   
    document.write("Số lẻ: ", le)
};

document.write("</br>Câu 3:")
function anCom() {
    var test = prompt("Em an com chua z", "em an roi")
    if (test = "em an roi") {
        var testone = prompt("Em co an com voi canh khong", "Khong")
        if(testone = "Khong"){
            var test = prompt("Em an com co ngon khong")
        }
    }
}