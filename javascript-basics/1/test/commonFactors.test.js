describe('4. 공통 분모 찾기 (lib/commonFactors.js)', function () {
    it('주어진 인자가 숫자가 아닌 경우, 에러를 내야한다.', function () {
        expect(function () {
            commonFactors('null', 49);
        }).to.throw(Error);

        expect(function () {
            commonFactors(null, null);
        }).to.throw(Error);

        expect(function () {
            commonFactors({}, []);
        }).to.throw(Error);

        expect(function () {
            commonFactors([]);
        }).to.throw(Error);

        expect(function () {
            commonFactors(function(){}, 49);
        }).to.throw(Error);
    });

    it('주어진 두개의 숫자의 공통 분모를 찾아 큰 순서대로 리턴한다.', function () {
        expect(commonFactors(20, 25)).to.eql([5, 1]);
        expect(commonFactors(12, 18)).to.eql([6, 3, 2, 1]);
        expect(commonFactors(100, 10)).to.eql([10, 5, 2, 1]);
        expect(commonFactors(19, 103)).to.eql([1]);
        expect(commonFactors(400, 17)).to.eql([1]);
    });
});
