describe('1. 배열의 합 구하기 (lib/sumArray.js)', function () {
    it('주어진 인자가 배열이 아닌 경우, 에러를 내야한다.', function () {
        expect(function () {
            sumArray(3);
        }).to.throw(Error);

        expect(function () {
            sumArray("hello, I am wrong!");
        }).to.throw(Error);

        expect(function () {
            sumArray(null);
        }).to.throw(Error);

        expect(function () {
            sumArray();
        }).to.throw(Error);

        expect(function () {
            sumArray({});
        }).to.throw(Error);

        expect(function () {
            sumArray(function(){});
        }).to.throw(Error);
    });

    it('주어진 배열이 텅 비었을 경우, 합은 0이다.', function () {
        expect(sumArray([])).to.equal(0);
    });

    it('주어진 배열에 한개의 숫자만 들어있을 경우, 합은 그 숫자이다.', function () {
        expect(sumArray([1])).to.equal(1);
        expect(sumArray([29])).to.equal(29);
        expect(sumArray([392])).to.equal(392);
        expect(sumArray([993])).to.equal(993);
        expect(sumArray([9])).to.equal(9);
    });

    it('주어진 배열에 숫자가 아닌 것이 있을 경우, 에러를 내야한다.', function () {
        expect(function () {
            sumArray([1,3,45, 'hello, vanilla coding.']);
        }).to.throw(Error);

        expect(function () {
            sumArray([5, {}, []]);
        }).to.throw(Error);

        expect(function () {
            sumArray([null, {}]);
        }).to.throw(Error);
    });

    it('주어진 배열의 모든 숫자의 합을 더하여, 리턴하여야 한다.', function () {
        expect(sumArray([1,2,3,4,5])).to.equal(15);
        expect(sumArray([100, 98, 3, 39, 0, -10, 200])).to.equal(430);
        expect(sumArray([23, 11, 39483, -2937, 833])).to.equal(37413);
        expect(sumArray([774, -29383, 2, 10, -22])).to.equal(-28619);
        expect(sumArray([10, 10, 10, 11])).to.equal(41);
    });
});
