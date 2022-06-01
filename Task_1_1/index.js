const n = Math.floor(Math.random() * 1000);
        
console.log(`Система загадала число от 0 до 999: ${n}`);

while (true) {
    
    let value = +prompt('Система загадала число от 0 до 999.\nУгадайте число?', '');
    
    if (!value) {
        break;
    } else if (value === n) {
        alert(`ПОЗДРАВЛЯЮ, Вы угадали число!!! Система загадала: ${value}`);
        break;
    } else if (value > n) {
        alert(`Искомое число больше, введенного: ${value}`);
    } else if (value < n) {
        alert(`Искомое число меньше, введенного: ${value}`);
    }
    
}   

alert( 'До свидания...' );
