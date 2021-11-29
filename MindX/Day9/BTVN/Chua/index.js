let colorArr =["#EEEEEE",	"#DDDDDD",	"#CCCCCC",	"#BBBBBB",	"#AAAAAA",	"#999999", "#000088"	,"#000077"	,"#000055",	"#000044"	,"#000022",	"#000011"]
let btnPickColor = document.getElementById("btn")
let bodyHTML = document.querySelector("body")
let content = document.getElementById("content")
btnPickColor.addEventListener("click", randomColor )
function randomColor(){
  let random = Math.floor((Math.random() * 10))
  bodyHTML.style.backgroundColor = colorArr[random]
  content.innerHTML = colorArr[random]
}

