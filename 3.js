/* 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:*/
let result = String()
for(let i = 1; i <= 5; i++){
    let stringValue = ':)'
    result += stringValue
    console.log(result);
}