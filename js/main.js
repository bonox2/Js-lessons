//lesson2
// tasc 2
{
    let a = (60 * 60)
    console.log(a);
}
//3
{
    let num = 1;
    num += 12;
    num -= 14;
    num *= 5;
    num /= 7;
    num++;
    num--;
    console.log(num);
}
//работа с переменными

//1
{
    let num = 3
    console.log(num)
}
//2
{
    let a = 10
    let b = 2
    let plas = a + b
    let minus = a - b
    let = a * b
    let /= a / b
    console.log(plas);
    console.log(minus)
}
//3
{
    let c = 15
    let d = 2
    let result = c + d
    console.log(result)
}
//4
{
    let a = 10
    let b = 2
    let c = 15
    let result = a + b + c
    console.log(result)
}
//5
{
    let a = 17
    let b = 10
    let c = a - b
    let d = 7
    let result = c + d
}
//6
{
    let str = 'Привет,Мир'
    console.log(str)
}
//7,8
{
    let strH = 'Hello,'
    let strWorld = 'World'
    let txt = strH + strWorld
    console.log(txt)}
//9
{
    let hi ='Hello'
    let name = 'Illia'
    let age = '15'
    console.log(hi + name)
    console.log('Мне ' + age + ' лет')
}
//15
{
    let hour = 2
    let minute = 46
    let second = 35
    console.log(`${hour}:`,`${minute}:`,second)
}
//18
{
    let num = 10;
num += 1;
num += + 1;
num -= 1;
console.log(num);
}
//Lesson 3
//1,2,3
{
    let arr = ['a', 'b', 'c', 'd']
    console.log(`${arr[0]}+${arr[1]},${arr[2]}+${arr[3]}`)
}
//4
{
    let arr = [2, 5, 3, 9]
    let a = 2 * 5
    let b = 3 * 9
    let result = a + b
    console.log(result)
}
//6
{
    let obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };
    console.log(obj['Коля'])
    console.log(obj.Коля)
}
//7,8
{
    let obj = { 'Mon': '1', 'Tue': '2', 'Wed': '3', 'Thu': '4', 'Fri': '5' }
    let day = obj.Mon
    console.log(day)
}
//9
{
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    console.log(arr[1][0])
}
//10
{
    let obj = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' }
    console.log(obj.js[0])
}
//11,12
{
    let arr = [['Mon', 'Tue', 'Wed','Thu', 'Fri'],['Пн', 'Вт', 'Ср', 'Чт', 'Пт']]
    console.log(arr[0][0],arr[1][2])
    let lang = 'en'
    let day = 5
    console.log(arr[0][4])
}

//lesson4
//1
{
    let a = 0;
if (a == 0) {
	console.log('Верно');
} else {
	console.log('Неверно');
}
}
//2
{
    let a = 1;
if (a > 0) {
	console.log('Верно');
} else {
	console.log('Неверно');
}
}
//3
{
    let a = -1;
if (a < 0) {
	console.log('Верно');
} else {
	console.log('Неверно');
}

}
//4
{
    let a = 0;
if (a >= 0) {
	console.log('Верно');
} else {
	console.log('Неверно');
}
}
//5
{
    let a = 0;
if (a <= 0) {
	console.log('Верно');
} else {
	console.log('Неверно');
}
}
//6
{
    let a = 1;
if (a != 0) {
	console.log('Верно');
} else {
	console.log('Неверно');
}
}
//7
{
    let a = 'test';
if (a == 'test') {
	console.log('Верно');
} else {
	console.log('Неверно');
}
}
//8
{
    let a = '1';
if (a == '1') {
	console.log('Верно');
} else {
	console.log('Неверно');
}
}
//9
{
    let test = true;
if (test == true) {
	console.log('Верно');
} else {
	console.log('Неверно');
}
}
//10
{
    let test = false;
if (test !== true) {
	console.log('Верно');
} else {
	console.log('Неверно');
}
}
//11
{
    let a = 2;
if (a > 0 && a < 5) {
	console.log('Верно');
} else {
	console.log('Неверно');
}
}
//12
{
    let a = 2;
if (a == 0 || a == 2) {
	console.log(a+7);
} else {
	console.log(a/10);
}
}
//13
{
    let a = 1;
    let b = 5
if (a == 1 || a < 1 && b >= 3) {
	console.log(a+b);
} else {
	console.log(a-b);
}
}
//14
{
    let a = 7;
    let b = 10
if (a > 2 && a < 11 || b >= 6 && b<14) {
	console.log('Верно');
} else {
	console.log('Неверно')
}
}
//switch
//15
{
    let num = 1;
if (min == 1) {
	console.log('Зима');
}
if (min == 2) {
	console.log('Весна');
}
if (min == 3) {
	console.log('Лето');
}
if (min == 4) {
	console.log('Осень')
}
}
//16,17??????