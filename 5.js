/* Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв*/
function getWordStructure(word) {
    let glasnye = 0;
    let soglasnye = 0;
    const arrayOfGlasnye = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я', 'a', 'e', 'i', 'o', 'u', 'y'];
    const arrayOfSoglasnye = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
    if (typeof word != 'string') {
        console.log('word must be a string');
    }
    else {
        for (let i in word) {
            if (arrayOfGlasnye.includes(word[i].toLowerCase())) {
                glasnye++;
            }
            else if (arrayOfSoglasnye.includes(word[i].toLowerCase())) {
                soglasnye++;
            }
        }
    }
    console.log(`Слово ${word} содержит ${glasnye} гласных и  ${soglasnye} согласных`);
}
getWordStructure('ЕПЫФВАОЫВАИИBHBJKFDBDVBOVOII')

