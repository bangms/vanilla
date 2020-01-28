/*
 * 주어진 두개의 숫자의 공통 분모를 모두 찾으세요.
 * 찾은 공통 분모를 큰 숫자부터 작은 숫자의 순서로 나열하여 리턴하세요.
 *
 * < Sample >
 *  12와 18의 공통 분모 찾기
 *  12 의 분모 12, 6, 5, 3, 2, 1
 *  18 의 분모 18, 9, 6, 3, 2, 1
 *  12 과 18 의 공통 분모는 6, 3, 2, 1 (큰 숫자 먼저, 작은 숫자는 뒤에)
 *
 * < Sample 2 >
 *  var common = commonFactors(12, 18);
 *  console.log(common); // [6, 3, 2, 1]
 *
 * < Sample 3 >
 *  var common = commonFactors(25, 20);
 *  console.log(common); // [5, 1]
*/

function commonFactors (num1, num2) {
    // 여러분의 코드는 여기에!

    if (typeof num1 === 'number' && typeof num1 === 'number') {

    	var arr1 = [];
    	var arr2 = [];
    	var commonArr = [];
 
		for (i = num1; i > 0; i--) {

			if (num1 % i === 0) {

				arr1.push(i);

			}

		}

		for (j = num2; j > 0; j--) {

			if (num2 % j === 0) {

				arr2.push(j);

			}

		}

		for (k = 0; k < arr1.length; k++) {

			for (m = 0; m < arr2.length; m++) {

				if (arr1[k] === arr2[m]) {

					commonArr.push(arr1[k]);
				}
			}

		}

		return commonArr;
		
    } else {

    	throw new Error('숫자가 아닙니다.');

    }

}
