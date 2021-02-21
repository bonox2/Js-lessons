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
//lesson 10
//1
{
    
    function number(num) {
        return num * num
    }
}
//2
{
    let a = 2
    let b = 4
    function number(a,b) {
        
        return num + num
        
    }
}
//3
{
    let a = 4
    let b = 16
    let c = 2
    function number(a,b) {
        
        return a - b / c
        
    }
}
//4
{
    // let arr = [1,2,3,4,5,6,7]
    // function number(arr) {
        
    //     return arr[0]
        
    // }
}
//lesson 11
//1
{
    let str = '1,2,3,4,5,6,7,8,9,0'
    let regexp = /5/gi
    console.log(regexp.test(str))
}
//2
// {
//     let num = 31
//     let regexp = /31/gi
//     console.log(regexp.test(arr))
// }
//3
{
    let str = '1 2 3 4 5 6 7 8 9 0'
    let regexp = /1 1/gi
    console.log(regexp.test(str))
}

//lesson 12
//1.2.3
{
    let a = 2
    let b = 2
    function num(a,b) {
        a = b
        return boolean
    }
}
//lesson 13
//1
// {
//     let i = 0
//     for ( ;i < 10; ) {
//         let str = i
//         console.log(i++);
//       }
// }
//2
{
    
    for ( let i = 0 ;i < -10; ) {
        let str = i
        console.log(i--);
      }
}

