/*
 * 주어진 Array에서 중복되는 숫자를 모두 찾아 Array의 형태로 리턴하는 함수를 작성하세요.
 *
 * < Sample >
 *
 * var arr = [3,2,1,3,2];
 * findDuplicates(arr); => [3,2]
 *
 * var arr2 = [5,4,3,3,2,4];
 * findDuplicates(arr2); => [3,4];
 *
 * var arr3 = [6,7,4,2];
 * findDuplicates(arr3); => [];
 *
 * var arr4 = [];
 * findDuplicates(arr4); => []
 *
 * - Vanilla Coding -
 */
function findDuplicates (arr) {
    // 여러분의 코드는 여기에!

    if (!Array.isArray(arr)) {
        throw new TypeError;
    } else {
        if (arr.length <= 1) {
            return [];    		
        } else {

            var dupArg = [];
            var count;

            for (i = 0; i < arr.length; i++) {
                count = 0;
                for (j = 0; j < arr.length; j++) {
                    if (arr[i] === arr[j]) {
                        count++;
                        if (count > 1 && dupArg.indexOf(arr[j]) === -1) {
                            dupArg.push(arr[j]);
                        }
                    }
                }
            }

            return dupArg;

        }
    }

}

