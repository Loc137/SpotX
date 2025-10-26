// function test() {
//     if (true) {
//         var a = 20
//         let b = 60
//     }
//     console.log(a)
//     console.log(b)
// }
// test()

let score = Number(prompt("Type random score from 0 to 100"))
if (0 <= score <= 49){
    alert("Yeu")
}
else if (50 <= score <= 69){
    alert("Trung binh")
}
else if (70 <= score <= 79){
    alert("Kha")
}
else if (80 <= score <= 100){
    alert("Gioi")
}
else{
    alert("Please add valid score")
}

let day = Number(prompt("Type random day from 2 to 7"))
switch(day){
    case 2:
        alert("2")
        break   
    case 3:
        alert("3")
        break
    case 4:
        alert("4")
        break
    case 5:
        alert("5")
        break
    case 6:
        alert("6")
        break
    case 7:
        alert("7")
        break
    default: 
        alert("Please add valid day")
}