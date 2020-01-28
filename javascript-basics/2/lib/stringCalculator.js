/*
* 주어진 String에 따라 더하기를 하여 결과값을 Number로 리턴하는 함수를 작성하세요.
* 숫자와 연산자 사이에는 항상 빈칸이 있습니다.
* 숫자는 항상 자연수입니다.
*
* < Sample >
*
* var str = '3 + 2';
* add(str); => 5
*
* var str2 = '1 + 0';
* add(str2); => 1;
*
* var str3 = '100';
* add(str3); => 100;
*
* var str4 = '';
* add(str4); => 0
*
* - Vanilla Coding -
*/

function add (str) {
// 여러분의 코드는 여기에!
// '1 + 1'
// ['1', '+', '1'];
//'10 + 10'
// ['10', '+', '10']

    if (typeof str !== 'string' ) {
        throw new TypeError;
    } else if (str.length === 0) {
        return 0;
    } else {
        var arr = str.split(' ');
        
        if (arr.length === 1) {
            return Number(arr[0]);
        }
        
        return Number(arr[0]) + Number(arr[2]);
    }

}

// console.log(add('2 + 1')); // 3Kconsole.log(add('33 + 10')); // 43

/*
* 주어진 String에 따라 빼기를 하여 결과값을 Number로 리턴하는 함수를 작성하세요.
* 숫자와 연산자 사이에는 항상 빈칸이 있습니다.
* 숫자는 항상 자연수입니다.
*
* < Sample >
*
* var str = '3 - 2';
* subtract(str); => 5
*
* var str2 = '1 - 10';
* subtract(str2); => -9;
*
* var str3 = '100';
* subtract(str3); => 100;
*
* var str4 = '';
* subtract(str4); => 0
*
* - Vanilla Coding -
*/
function subtract (str) {
// 여러분의 코드는 여기에!
    if (typeof str !== 'string' ) {
        throw new TypeError;
    } else if (str.length === 0) {
        return 0;
    } else {
        var arr = str.split(' ');
    
        if (arr.length === 1) {
            return Number(arr[0]);
        }
        
        return Number(arr[0]) - Number(arr[2]);
    }
}

/*
* 주어진 String에 따라 곱하기를 하여 결과값을 Number로 리턴하는 함수를 작성하세요.
* 숫자와 연산자 사이에는 항상 빈칸이 있습니다.
* 숫자는 항상 자연수입니다.
*
* < Sample >
*
* var str = '3 * 2';
* multiply(str); => 6
*
* var str2 = '1 * 10';
* multiply(str2); => 10;
*
* var str3 = '100';
* multiply(str3); => 100;
*
* var str4 = '';
* multiply(str4); => 0
*
* - Vanilla Coding -
*/
function multiply (str) {
// 여러분의 코드는 여기에!
    if (typeof str !== 'string' ) {
        throw new TypeError;
    } else if (str.length === 0) {
        return 0;
    } else {
        var arr = str.split(' ');

        if (arr.length === 1) {
            return Number(arr[0]);
        }

        return Number(arr[0]) *  Number(arr[2]);
    }
}

/*
* 주어진 String에 따라 나누기를 하여 결과값을 Number로 리턴하는 함수를 작성하세요.
* 숫자와 연산자 사이에는 항상 빈칸이 있습니다.
* 숫자는 항상 자연수입니다.
*
* < Sample >
*
* var str = '3 / 2';
* divide(str); => 6
*
* var str2 = '10 / 1';
* divide(str2); => 10;
* * var str3 = '100';
* divide(str3); => 100;
*
* var str4 = '';
* divide(str4); => 0
*
* - Vanilla Coding -
*/
function divide (str) {
// 여러분의 코드는 여기에!
    if (typeof str !== 'string' ) {
        throw new TypeError;
    } else if (str.length === 0) {
        return 0;
    } else {
        var arr = str.split(' ');

        if (arr.length === 1) {
            return Number(arr[0]);
        }

        return Number(arr[0]) / Number(arr[2]);
    }
}

/*
* 주어진 String에 따라 합계를 계산을 하여 결과값을 Number로 리턴하는 함수를 작성하세요.
* 숫자와 연산자 사이에는 항상 빈칸이 있습니다.
* 숫자는 항상 자연수입니다.
* 곱하기와 나누기는 더하기와 빼기보다 우선됩니다.
*
* < Sample >
*
* var str = '3 * 2 + 10 / 2';
* calculate(str); => 11
*
* var str2 = '1 - 10 * 2 / 4 + 10';
* calculate(str2); => 6;
*
* var str3 = '100';
* calculate(str3); => 100;
*
* var str4 = '';
* calculate(str4); => 0
*
* - Vanilla Coding -
*/
function calculate (str) {
    if (typeof str !== 'string' ) {
        throw new TypeError;
    } else if (str.length === 0) {
        return 0;
    } else {
        var arr = str.split(' ');
        var calculate = 0;

        if (arr.length === 1) {
            return Number(arr[0]);
        }

        for (i = 0; i < arr.length; i++) {
            if (arr[i] === '*' || arr[i] === '/') {
                switch (arr[i]) {
                    case '*' : calculate = Number(arr[i-1]) * Number(arr[i+1]);
                    break;
                    case '/' : calculate = Number(arr[i-1]) / Number(arr[i+1]);
                    break;
                }

                arr.splice(i-1,3,calculate);
                i--;
            }
        }

        for (i = 0; i < arr.length; i++) {
            if (arr[i] === '+' || arr[i] === '-') {
                switch (arr[i]) {
                    case '+' : calculate = Number(arr[i-1]) + Number(arr[i+1]);
                    break;
                    case '-' : calculate = Number(arr[i-1]) - Number(arr[i+1]);
                    break;
                }

                arr.splice(i-1,3,calculate);
                i--;
            }
        }
        return calculate;
    }
}
