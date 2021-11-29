var fruits = ["Táo", "Chuối", "Cam", "Ổi", "Nho"]
// a. Tìm số lượng phần tử trong mảng
// b. Tìm phần tử thứ 3 trong mảng
// c. Xoá phần tử cuối trong mảng 
// d. Thêm "Xoài" và "Lê" vào mảng
// e. Xoá phần tử đầu tiên trong mảng
// f. Thêm "Bưởi" vào đầu mảng
// g. Thay "Cam" bằng "quýt"
// h. Đảo ngược thứ tự các phần tử trong mảng

// document.write("a. Số lượng phần tử trong mảng: ", fruits.length + "</br>")
// document.write("b. Phần tử thứ 3 trong mảng là: ", fruits[2] + "</br>")
// document.write("c. Xoá phần tử cuối: " )
// fruits.pop
// document.write(fruits + "</br>")
// document.write("d. Thêm xoài lê vào mảng: ",)
// fruits.push("Xoài","Lê")
// document.write(fruits)
// document.write("e. ")

// Lập 1 hàm tính tổng 2 số do người dùng nhập vào
function tinhtong() {
        var x = parseInt(document.getElementById("so1").value)
        var y = parseInt(document.getElementById("so2").value)
        var z = x + y
        confirm("Tổng là:" + z)
}