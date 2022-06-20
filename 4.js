/*2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)*/

function printSmile(stringValue, numberOfRows){
    let result  = String()
    for(let i = 1; i <= numberOfRows; i++){
        result += stringValue
        console.log(result)
    }
}
printSmile(':)', 7)