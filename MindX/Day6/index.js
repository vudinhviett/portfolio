// ----------Array: mảng-------------

let arr = [1,"hello",121, true]
// Khai báo array bằng cặp ngoặc vuông; array chứa các phần tử bên trong; các phần tử được ngăn cách bởi dấu phẩy
// index trong mảng bắt đầu từ 0; độ dài của mảng bằng số phần tử bên trong nó. -->Vĩ dụ: mảng có n phần tử thì index từ 0 -> n-1

console.log("Giá trị phần tử thứ 2 là:",arr[2])
console.log(arr.length)
console.log(arr)
arr[2] = 151
console.log(arr)
// -------------Object-------------
let obj = {
    name: "Việt",
    age: "15",
    addr: "Hanoi",
}
// Các phần tử trong Object ngăn cách bởi dấu phẩy; lưu trữ dữ liệu ở dạng ket: value
console.log("Tên: ",obj.name)
console.log(obj.length)
// Object không length được

let student = [
    {
    name: "Tùng",
    age: "16",
    addr: "HN",
    },
    {
    name: "Dũng",
    age: "14",
    },
]

let studentScore = [
    [10,80],
    [100,80,1]
]

// Mảng đa chiều: array chứa bên trong những array khác

console.log(student)

// ----------For loops---------
// for(điều kiện thực hiện){
//     thực hiện
// }
for(let i=0; i< 10; i+=2){
    console.log("Xin chào các bạn")
}
// i++ ~ i +=1 <=> biến i được gán lại giá trị bằng 0+1

for(let i=0; i< arr.length; i++ ){
    console.log(arr[i])
}