describe('6. 배열에서 두번째로 큰 숫자 찾기 (lib/secondLargestNumber.js)', function () {
    it('주어진 인자가 배열이 아닌 경우, 에러를 내야한다.', function () {
        expect(function () {
            secondLargestNumber(3);
        }).to.throw(Error);

        expect(function () {
            secondLargestNumber("hello, I am wrong!");
        }).to.throw(Error);

        expect(function () {
            secondLargestNumber(null);
        }).to.throw(Error);

        expect(function () {
            secondLargestNumber();
        }).to.throw(Error);

        expect(function () {
            secondLargestNumber({});
        }).to.throw(Error);

        expect(function () {
            secondLargestNumber(function(){});
        }).to.throw(Error);
    });

    it('주어진 배열에 두개 미만의 숫자가 들어있을 경우, 에러를 내야한다.', function () {
        expect(function () {
            secondLargestNumber([5]);
        }).to.throw(Error);

        expect(function () {
            secondLargestNumber([]);
        }).to.throw(Error);
    });

    it('주어진 배열에 숫자가 아닌 것이 있을 경우, 에러를 내야한다.', function () {
        expect(function () {
            secondLargestNumber([1,3,45, 'hello, vanilla coding.']);
        }).to.throw(Error);

        expect(function () {
            secondLargestNumber([5, {}, []]);
        }).to.throw(Error);

        expect(function () {
            secondLargestNumber([null, {}]);
        }).to.throw(Error);
    });

    it('주어진 배열에서 두번째로 큰 숫자를 찾아서, 리턴하여야 한다.', function () {
        expect(secondLargestNumber([1,2,3,4,5])).to.equal(4);
        expect(secondLargestNumber([100, 98, 3, 39, 0, -10, 200])).to.equal(100);
        expect(secondLargestNumber([23, 11, 39483, -2937, 833])).to.equal(833);
        expect(secondLargestNumber([774, -29383, 2, 10, -22])).to.equal(10);
        expect(secondLargestNumber([10, 10, 10, 11])).to.equal(10);
    });
});
