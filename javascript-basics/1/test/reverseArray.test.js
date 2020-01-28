describe('2. 배열 뒤집기 (lib/reverseArray.js)', function () {
    it('주어진 인자가 배열이 아닌 경우, 에러를 내야한다.', function () {
        expect(function () {
            reverseArray(3);
        }).to.throw(Error);

        expect(function () {
            reverseArray("hello, I am wrong!");
        }).to.throw(Error);

        expect(function () {
            reverseArray(null);
        }).to.throw(Error);

        expect(function () {
            reverseArray();
        }).to.throw(Error);

        expect(function () {
            reverseArray({});
        }).to.throw(Error);

        expect(function () {
            reverseArray(function(){});
        }).to.throw(Error);
    });

    it('주어진 배열이 텅 비었을 경우, 뒤집은 배열은 결국 빈 배열이다.', function () {
        expect(reverseArray([])).to.eql([]);
    });

    it('주어진 배열에 한개의 아이템만 들어있을 경우, 뒤집은 배열은 그대로이다.', function () {
        expect(reverseArray([1])).to.eql([1]);
        expect(reverseArray(['hello'])).to.eql(['hello']);
        expect(reverseArray([null])).to.eql([null]);
        expect(reverseArray([{}])).to.eql([{}]);
    });

    it('주어진 배열속 아이템들의 순서를 거꾸로 뒤집어 리턴하여야 한다.', function () {
        expect(reverseArray([1,2,3,4,5])).to.eql([5,4,3,2,1]);
        expect(reverseArray([100, 'hello', 3, null])).to.eql([null, 3, 'hello', 100]);
        expect(reverseArray([null, 444, 49, undefined])).to.eql([undefined, 49, 444, null]);
        expect(reverseArray([774, -29383, 2, 10, -22])).to.eql([-22, 10, 2, -29383, 774]);
    });
});
