// Задача 41: Пользователь вводит с клавиатуры M чисел. Посчитайте, сколько чисел больше 0 ввёл пользователь.

// 0, 7, 8, -2, -2 -> 2

// 1, -7, 567, 89, 223-> 3

let m = prompt("Введите числа через запятую");
function getArray(array){
  let arrM = m.split(',')
  let arr = []
  for(let i = 0; i < arrM.length; i++){
    arr[i] = Number(arrM[i])
  }
 return arr
}
console.log(getArray(m));

function countPositiveNum(array){
  let count = 0;
  for(let i = 0;i < array.length; i++){
    if(array[i]>0){
      count++
    }
  }
  return count
}

function main(){
  let createArray = getArray(m)
  let count = countPositiveNum(createArray)
  return count
}

console.log(main());