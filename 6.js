/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)*/
function isPalindrom(word){
    word = word.split(' ').join('')
    for(let i = 0; i < word.length/2; i++){
        if(word[i].toLowerCase() !== word[word.length -1 -i].toLowerCase()){
            return false
        }
        
    }
    return true
}
console.log(isPalindrom('а роза упала на лапу азора'))