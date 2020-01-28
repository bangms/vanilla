var _; //globals

/*
 * 이 파일에서는 underscore라는 라이브러리를 사용합니다.
 * http://underscorejs.org/
 */
describe("Higher Order Functions", function () {

  it("filter", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual([1,3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("map", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual([2,3,4]);
    expect(numbers).toEqual([1,2,3]);
  });

  it("reduce", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0); // ? // 다시보기

    expect(reduction).toBe(6); // ? // 1 + 2 + 3? // 다시보기
    expect(numbers).toEqual([1,2,3]);
  });

  it("forEach", function () { // ? // 다시보기
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

    expect(msg).toEqual("falsetruefalse"); // ? // isEven은 boolean 값 // 다시보기
    expect(numbers).toEqual([1,2,3]);
  });

  it("all", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toBe(true);
    expect(_(mixedBag).all(isEven)).toBe(false);
  });

  it("any" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(true);
    expect(_(mixedBag).any(isEven)).toBe(true);
  });

  it("range", function() { // range ? // 다시보기 
        expect(_.range(3)).toEqual([0,1,2]);
      expect(_.range(1, 4)).toEqual([1,2,3]);
      expect(_.range(0, -4, -1)).toEqual([0,-1,-2,-3]);
  });

  it("flatten", function() { // flatten ? // 중첩된 배열을 병합해서 빈 배열에 연결?
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1,2,3,4]);
  });

  it("chain과 value", function() { // ? // 다시보기
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x+1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();

      expect(result).toEqual(6); //
  });

});

