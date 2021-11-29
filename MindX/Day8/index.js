// --------Function--------

// Function: một hàm số bao gồm những đoạn sử dụng nhiều lần
// Function giúp cho chương trình trở lên dễ nhìn hơn, dễ hiểu và dễ tìm ra lỗi sai 
// Function có thể 0, 1 hoặc nhiều tham số
// cách khai báo function:
// function tên hàm (các tham số)(
//     các câu lệnh JS
// )

// tên hàm(các tham số)
// 1. Hàm cơ bản
function sayHello() {
    console.log("Hello World")
}
function sayHello1() {
    document.write("Hello JSB01")
}
sayHello1()

// 2. Hàm có tham số truyền vào
// function getsum(a,b){
//     document.write("Tông 2 số là: ", (a*b))
// }
// getsum(10,15)

// 3. Hàm số có tham số mặc định
function getsum1(x = 15, y = 25) {
    console.log("Tổng 2 số là: ", (x + y))
}
getsum1()

// 4. Hàm trả về giá trị
function dientichHCN(a, b) {
    return a * b
}

var z = dientichHCN(4, 6)
console.log(z)


// Ex:
var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// Lập 1 hàm tính tổng các số chẵn trong mảng trên. Lưu ý sử dụng các kiến thức đã học: For loop, if else

function tongsochan(myArr) {
    var sum = 0
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i] % 2 == 0) {
            sum += myArr[i]
        }
    }
    console.log("Tổng các số chãn là:", sum)
}
tongsochan(myArr)
// Ex2:
// Lập 1 hàm tính diện tích hình thoi, biết tham số là độ dài 2 dường chéo
function dientichhinhthoi(x, y) {
    return (m * n / 2)
}
var s = dientichhinhthoi(15, 20)
console.log("Diện tích hình thoi: ", s)

// ------DOM------
// event: sự kiện khi chúng ta thực hiện hành động gì đố với trang web
// Dom có thể truy cập vào và chỉnh sửa nội dung HTML 
// Luôn có document  
// getElementById: truy cập vào một phần tử dựa trên id duy nhất.
// getElementByTagName: trả về kết quả là một array, chứa toàn bộ phần tử có trong thẻ trùng tên nhau
// querrySelector: thì có thể truy cậoo và cả tag-name lẫn id, class nhưng luôn trả về phần tử đầu tiên tìm được


// console.log(h1Tag)
// let h1Tag = document.getElementById("h1Tag")
// function changeinnerHTML() {
//     h1Tag.innerHTML = "Tìm hiểu DOM"
// }
// C1: onclick 
// C2: addEventListener
h1Tag.addEventListener("click", function changeinnerHTML1() {
    h1Tag.innerHTML = "Tìm hiểu DOM"
})
// Đối với addEventListener là không có "on" và không chạy function

// Btap: Mỗi khi bấm vào thẻ h1Tag, có sự hiển thị qua lại giữa hai câu nói

// BTVN: