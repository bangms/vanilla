/*
 * 주어진 String에서 연속으로 중복되는 알파벳을 중복되지 않게 변환하여 리턴하세요.
 *
 * < Sample >
 *
 * var str = 'aaabcccdd';
 * compressString(str); => 'abcd'
 *
 * var str2 = 'aabbbcadddaaa';
 * compressString(str2); => 'abcada';
 *
 * var str3 = 'abcd';
 * compressString(str3); => 'abcd';
 *
 * var str4 = '';
 * compressString(str4); => ''
 *
 * - Vanilla Coding -
 */

function compressString (str) {
	// 여러분의 코드는 여기에!
	if (typeof str !== 'string') {
		throw new TypeError;
	} else {
		if (str.length === 0) {
			return '';
		}

		var str1 = str[0];
		var result = str1 + "";

		for (i = 0; i < str.length; i++) {

			if (str1 === str[i]) {
				str1 = str[i];
			} else {
				result += str[i];
				str1 = str[i];
			}
		}

		return result;
	}

}
