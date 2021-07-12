/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1)
    }
    return words.join(' ')
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"