// var globalVar = "Hello World"
// console.log(globalVar)

// console.log(window.globalVar)

//===== Arrow function

// const myFunction = (param1, param2) => {
//     return param1 + param2  
// }

// const add = (a, b) => a + b 
// console.log(add(1, 2))

//Es6 - Template Literals

// const name = "Pikachu"
// const level = 10
// const message = `Pokemon ${name} đạt cấp độ ${level}.`
// console.log(message)

// const a = 5
// const b = 10
// const result = `Tổng của ${a} và ${b} là ${a + b}`
// console.log(result)

// const product = "Laptop"
// const price = 1500
// const VAT = 10
// const totalPrice = price + (price * VAT / 100)
// console.log(`Sản phẩm: ${product}.`)
// console.log(`Giá: $${price}.`)
// console.log(`VAT: ${VAT}%.`)
// console.log(`Tổng thanh toán: $${totalPrice}.`)

//===== Ôn tập về arry(mảng)

//===== Push

// let fruit = ['apple', 'banana']
// fruit.push('orange')
// console.log(fruit)

//===== Pop

// let fruit = ['apple', 'banana', 'orange']
// fruit.pop()
// console.log(fruit)

//===== Splice (add)

// let fruit = ['apple', 'banana', 'orange']
// fruit.splice(1, 0, 'kiwi')
// console.log(fruit)

//===== Splice (remove)

// let fruit = ['apple', 'banana', 'orange']
// fruit.splice(1, 1)
// console.log(fruit)

//===== Map

// const number = [1, 2, 3, 4]
// const theUpdateNumber = number.map(num => num * 2)
// console.log(number)
// console.log(theUpdateNumber)

//===== Filter

// const number = [1, 2, 3, 4]
// const theFilterNumber = number.filter(num => num > 2)
// console.log(number)
// console.log(theFilterNumber)

//===== Find

// const number = [1, 2, 3, 4]
// const theFindNumber = number.find(num => num > 2)
// console.log(number)
// console.log(theFindNumber)

const students = [
  {
    name: "An",
    scores: {
      Toan: { score: 7.4, evaluation: "Đ" },
      NguVan: { score: 8.9, evaluation: "Đ" },
      NgoaiNgu: { score: 8.5, evaluation: "Đ" },
      VatLy: { score: 9.0, evaluation: "Đ" },
      HoaHoc: { score: 3.9, evaluation: "KĐ" },
      SinhHoc: { score: 5.0, evaluation: "Đ" },
      LichSu: { score: 8.3, evaluation: "Đ" },
      DiaLy: { score: 9.4, evaluation: "Đ" },
      GDCD: { score: 6.6, evaluation: "Đ" },
    },
  },
  {
    name: "Binh",
    scores: {
      Toan: { score: 3.4, evaluation: "KĐ" },
      NguVan: { score: 5.9, evaluation: "Đ" },
      NgoaiNgu: { score: 5.4, evaluation: "Đ" },
      VatLy: { score: 7.4, evaluation: "Đ" },
      HoaHoc: { score: 9.3, evaluation: "Đ" },
      SinhHoc: { score: 8.6, evaluation: "Đ" },
      LichSu: { score: 5.2, evaluation: "Đ" },
      DiaLy: { score: 7.1, evaluation: "Đ" },
      GDCD: { score: 6.7, evaluation: "Đ" },
    },
  },
  {
    name: "Chi",
    scores: {
      Toan: { score: 5.5, evaluation: "Đ" },
      NguVan: { score: 3.7, evaluation: "KĐ" },
      NgoaiNgu: { score: 3.9, evaluation: "KĐ" },
      VatLy: { score: 8.1, evaluation: "Đ" },
      HoaHoc: { score: 7.4, evaluation: "Đ" },
      SinhHoc: { score: 7.6, evaluation: "Đ" },
      LichSu: { score: 3.9, evaluation: "KĐ" },
      DiaLy: { score: 8.4, evaluation: "Đ" },
      GDCD: { score: 5.2, evaluation: "Đ" },
    },
  },
  {
    name: "Dung",
    scores: {
      Toan: { score: 9.1, evaluation: "Đ" },
      NguVan: { score: 5.5, evaluation: "Đ" },
      NgoaiNgu: { score: 4.4, evaluation: "KĐ" },
      VatLy: { score: 4.6, evaluation: "KĐ" },
      HoaHoc: { score: 6.4, evaluation: "Đ" },
      SinhHoc: { score: 3.2, evaluation: "KĐ" },
      LichSu: { score: 6.3, evaluation: "Đ" },
      DiaLy: { score: 9.4, evaluation: "Đ" },
      GDCD: { score: 8.7, evaluation: "Đ" },
    },
  },
  {
    name: "Em",
    scores: {
      Toan: { score: 7.1, evaluation: "Đ" },
      NguVan: { score: 9.2, evaluation: "Đ" },
      NgoaiNgu: { score: 8.7, evaluation: "Đ" },
      VatLy: { score: 4.4, evaluation: "KĐ" },
      HoaHoc: { score: 6.4, evaluation: "Đ" },
      SinhHoc: { score: 3.0, evaluation: "KĐ" },
      LichSu: { score: 5.0, evaluation: "Đ" },
      DiaLy: { score: 9.8, evaluation: "Đ" },
      GDCD: { score: 7.0, evaluation: "Đ" },
    },
  },
  {
    name: "Phuc",
    scores: {
      Toan: { score: 5.5, evaluation: "Đ" },
      NguVan: { score: 4.7, evaluation: "KĐ" },
      NgoaiNgu: { score: 4.2, evaluation: "KĐ" },
      VatLy: { score: 6.5, evaluation: "Đ" },
      HoaHoc: { score: 3.5, evaluation: "KĐ" },
      SinhHoc: { score: 8.1, evaluation: "Đ" },
      LichSu: { score: 6.4, evaluation: "Đ" },
      DiaLy: { score: 7.0, evaluation: "Đ" },
      GDCD: { score: 8.0, evaluation: "Đ" },
    },
  },
  {
    name: "Giau",
    scores: {
      Toan: { score: 5.8, evaluation: "Đ" },
      NguVan: { score: 6.3, evaluation: "Đ" },
      NgoaiNgu: { score: 3.1, evaluation: "KĐ" },
      VatLy: { score: 9.0, evaluation: "Đ" },
      HoaHoc: { score: 7.4, evaluation: "Đ" },
      SinhHoc: { score: 7.7, evaluation: "Đ" },
      LichSu: { score: 5.5, evaluation: "Đ" },
      DiaLy: { score: 5.3, evaluation: "Đ" },
      GDCD: { score: 5.6, evaluation: "Đ" },
    },
  },
  {
    name: "Hieu",
    scores: {
      Toan: { score: 6.9, evaluation: "Đ" },
      NguVan: { score: 7.7, evaluation: "Đ" },
      NgoaiNgu: { score: 6.3, evaluation: "Đ" },
      VatLy: { score: 3.7, evaluation: "KĐ" },
      HoaHoc: { score: 6.8, evaluation: "Đ" },
      SinhHoc: { score: 6.3, evaluation: "Đ" },
      LichSu: { score: 3.5, evaluation: "KĐ" },
      DiaLy: { score: 7.9, evaluation: "Đ" },
      GDCD: { score: 9.6, evaluation: "Đ" },
    },
  },
  {
    name: "Hoang",
    scores: {
      Toan: { score: 5.5, evaluation: "Đ" },
      NguVan: { score: 7.3, evaluation: "Đ" },
      NgoaiNgu: { score: 7.0, evaluation: "Đ" },
      VatLy: { score: 5.8, evaluation: "Đ" },
      HoaHoc: { score: 7.5, evaluation: "Đ" },
      SinhHoc: { score: 5.2, evaluation: "Đ" },
      LichSu: { score: 7.6, evaluation: "Đ" },
      DiaLy: { score: 3.8, evaluation: "KĐ" },
      GDCD: { score: 9.9, evaluation: "Đ" },
    },
  },
  {
    name: "Khanh",
    scores: {
      Toan: { score: 7.0, evaluation: "Đ" },
      NguVan: { score: 3.7, evaluation: "KĐ" },
      NgoaiNgu: { score: 10.0, evaluation: "Đ" },
      VatLy: { score: 7.7, evaluation: "Đ" },
      HoaHoc: { score: 9.0, evaluation: "Đ" },
      SinhHoc: { score: 4.6, evaluation: "KĐ" },
      LichSu: { score: 6.4, evaluation: "Đ" },
      DiaLy: { score: 6.6, evaluation: "Đ" },
      GDCD: { score: 5.9, evaluation: "Đ" },
    },
  },
];



//====== 1
console.log("Yêu cầu 1")

var total = 0
var count = 0

for (let i = 0; i < students.length; i++){
  for (let subject in students[i].scores){
    total += students[i].scores[subject].score
    count += 1
  }
  students[i].averageScore = Number((total / count).toFixed(1))
  total = 0
  count = 0
  console.log(`${students[i].name} có điểm trung bình học kì là: ${students[i].averageScore}`)
}

//====== 2
console.log("Yêu cầu 2")

let studentsSort = [...students].sort((a, b) => b.averageScore - a.averageScore)

console.log(studentsSort[0], studentsSort[1], studentsSort[2])

//====== 3
console.log("Yêu cầu 3")

let studentsReverse = [...students].sort((a, b) => a.averageScore - b.averageScore)

console.log(studentsReverse[0])

//====== 4
console.log("Yêu cầu 4")

var total_2 = 0
var count_2 = 0

for (let i = 0; i < students.length; i++){
  total_2 += students[i].averageScore
  count_2 += 1
}

let averageScore_Class = Number((total_2 / count_2).toFixed(1))

console.log(`Điểm trung bình của cả lớp: ${averageScore_Class}`)

//====== 5
console.log("Yêu cầu 5")

var total_3 = 0
var count_3 = 0

for (let i = 0; i < students.length; i++){
  if (students[i].averageScore >= 8){
    students[i].rating = "Giỏi"
  }
  else if (6.5 <= students[i].averageScore < 8){
    students[i].rating = "Khá"
  }
  else if (5 <= students[i].averageScore < 6.5){
    students[i].rating = "Trung Bình"
  }
  else if (students[i].averageScore < 5){
    students[i].rating = "Yếu"
  }
  console.log(`${students[i].name} xếp loại: ${students[i].rating}`)
}

console.log(students)

//====== 6
console.log("Yêu cầu 6")

let students_2 = [...students].filter(n => n.averageScore >= 7)

for (let i = 0; i < students_2.length; i++){
  console.log(`${students_2[i].name}`)
}

console.log(students_2)


