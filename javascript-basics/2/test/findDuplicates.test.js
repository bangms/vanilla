describe('1. 중복 요소 찾기 (lib/findDuplicates.js)', function () {
    it('주어진 인자가 배열이 아닌 경우', function () {
        expect(function () {
            findDuplicates(3);
        }).to.throw(TypeError);

        expect(function () {
            findDuplicates("hello, I am wrong!");
        }).to.throw(TypeError);

        expect(function () {
            findDuplicates(null);
        }).to.throw(TypeError);

        expect(function () {
            findDuplicates();
        }).to.throw(TypeError);

        expect(function () {
            findDuplicates({});
        }).to.throw(TypeError);

        expect(function () {
            findDuplicates(function(){});
        }).to.throw(TypeError);
    });

    it('주어진 배열이 텅 비었을 경우', function () {
        expect(findDuplicates([])).to.eql([]);
    });

    it('주어진 배열에 한개의 숫자만 들어있을 경우', function () {
        expect(findDuplicates([1])).to.eql([]);
    });

    describe('한개 이상의 요소가 있는 경우', function () {
        it('중복되는 요소가 없는 경우', function () {
            expect(findDuplicates([1,2,3,4,5])).to.eql([]);
            expect(findDuplicates([3,4,5,6,7])).to.eql([]);
        });

        it('중복되는 요소가 있는 경우', function () {
            expect(findDuplicates([3,4,5,3,6])).to.eql([3]);
            expect(findDuplicates([3,4,4,5,3])).to.eql([4,3]);
            expect(findDuplicates([1,1,1,2,2])).to.eql([1,2]);
            expect(findDuplicates([5,6,4,3,3])).to.eql([3]);
            expect(findDuplicates([6,6,6,6,6])).to.eql([6]);
        });
    });
});
