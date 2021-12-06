/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    function primes(n) {
  let res=[];
  if (n <= 2) { return 0}
  for (let i = 2; i <= n; i++) {
    let flag = 1;
    if (i > 2 && i % 2 != 0)
    {
        for (let j = 3; j*j <= i ; j=j+2)
        {
            if (i%j==0)
            {
                flag=0;
                break;
            }
        }
    }
    else if (i != 2) flag = 0;
    if (flag==1) {res.push(i)}
}
   return res.length - 1;
}
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
