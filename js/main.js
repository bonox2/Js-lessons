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
//7,8,9
{
    let str1 = 'Hello,'
    let str2 = 'world'
    let all = str1 + str2
    console.log(all)


    let name = 'illia'
    let age = '15'
    console.log(str1 + name)
    console.log('Mne ' + age + ' let')
}
//10
{
    // let name=prompt('Vashe imya'[1])
}
//11
// {
//     ?????????
// }
//12
{
    let str = 'abcde'
    console.log(str[0])
}
//13
// {
//     ?????
// }
//14,15
{

    let timestamp = 1607652988000
    const dateFormat = new Intl.DateTimeFormat(undefined, {
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
    })
    console.log(dateFormat.format(timestamp))
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
//5,6
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