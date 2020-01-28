/**
 * 주어진 배열에 있는 아이템들의 순서를 거꾸로 바꾸어서 리턴하세요.
 * 사용 금지 - Array.prototype.reverse().
 *
 * < Sample >
 * reverseArray([1, 8, 39, null, 2, 9, 'bob']) // ['bob', 9, 2, null, 39, 8, 1]
 */

function reverseArray (arr) {

	var arrlength = arr.length;
	var newArr = new Array();

    if (!Array.isArray(arr)) {

    	throw new Error('배열이 아닙니다.');
     
    } else {

    	for (i = arrlength-1; i >= 0 ; i--) {

	    	newArr.push(arr[i]);

	    }

    	return newArr;

    }
    
}

