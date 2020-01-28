/*
 * 숫자들이 담겨있는 배열이 주어집니다.
 * 배열에 담긴 숫자중 가장 큰 숫자를 찾으면 됩니다.
 *
 * example 1: largestNumber([1, 2, 3]); // => 3
 * example 2: largestNumber([4, -1, 5]); // => 5
 * example 3: largestNumber([10, -11, 11]); // => 11
 *
 * .sort() method 사용 금지
 *
 * Vanilla Coding
 */

function largestNumber (arr) {
    // 여러분의 코드는 여기에!

    if (!Array.isArray(arr)) {

    	throw new Error('배열이 아닙니다.'); // throw new TypeError('argument should be an array.')
     
    } else {

        
    	if (arr.length === 0) {

    		return null;

    	} 

        if (arr.length === 1) { // 하나 일 경우 가장 큰 숫자는 그 숫자

            return arr[0];

        }

        // [5,4,3,2,1] // [4,5,6,3,2] // 상황 확인 
		for (i = 0; i < arr.length; i++) {

			if (isNaN(arr[i])) {
				
				throw new Error('숫자가 아닙니다.');
			
			}

            if (!largestNum) { // 지금 largestNum의 값은 없는 상태
        
                largestNum = arr[i]; // 초깃값을 넣어주기

            } else if (largestNum < arr[i]) { // 배열안에 값이 더 클 경우 

                largestNum = arr[i]; // 갱신

            } 

		}

        return largestNum;

	}
	
}

