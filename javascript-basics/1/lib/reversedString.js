/**
 *
 * 주어진 두개의 String 값이 거꾸로 뒤집어서 같은 값이 되는지 판단하여 그에 맞는 Boolean을 리턴하세요.
 *
 * < Sample >
 * reversedString('hello', 'olleh') // true
 * reversedString('yellow', 'owlley') // false
 *
 * reverse() method는 금지입니다.
 */

function reversedString (str1, str2) {

	var str3 = "";

    if (typeof str1 === 'string' && typeof str2 === 'string') {

		if (str1 === str2) {

    		return false;

    	} else {

    		for (i = str1.length - 1; i >= 0; i--) {

    			str3 += str1[i]

	    	}

	    	if (str2 === str3) {

	    		return true;

	    	} else {

	    		return false;

	    	}

    	}
	
    } else {

     	throw new Error('문자열이 아닙니다.');

    }
    	
}
