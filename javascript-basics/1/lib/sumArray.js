/*
 * 자, 몸 좀 풀어볼까요?
 * 숫자들이 담겨있는 배열이 주어집니다.
 * 배열에 포함된 모든 숫자의 합을 계산하시면 됩니다. 간단하죠?
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([4, -1, 5]); // => 8
 * example 3: sumArray([10, -11, 11]); // 10
 *
 * 참고: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * Vanilla Coding
 */

function sumArray (arr) {

	if (Array.isArray(arr)) {
		
		if (arr.length === 0) {

			return 0;

		}

    	var sum = 0;

        for ( i = 0; i < arr.length; i++ ) {
	     		
	     	if (isNaN(arr[i])) {

	     		throw new Error('숫자가 아닙니다.');

	     	}

	     	sum += arr[i];

	    }

	    return sum;

    } else {

     	throw new Error('배열이 아닙니다.');
     	
    }
    
}
