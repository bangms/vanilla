describe('3. 계산하기 (lib/stringCalculator.js)', function () {
    describe('a. 더하기', function () {
        it('주어진 인자가 스트링이 아닌 경우', function () {
            expect(function () {
                add(66);
            }).to.throw(TypeError);

            expect(function () {
                add(null);
            }).to.throw(TypeError);

            expect(function () {
                add({});
            }).to.throw(TypeError);

            expect(function () {
                add([]);
            }).to.throw(TypeError);

            expect(function () {
                add(function(){});
            }).to.throw(TypeError);
        });

        it('주어진 String이 텅 비었을 경우', function () {
            expect(add('')).to.equal(0);
        });

        it('주어진 String에 숫자가 하나인 경우', function () {
            expect(add('10')).to.equal(10);
            expect(add('100')).to.equal(100);
        });

        it('더하기 계산이 주어졌을 경우', function () {
            expect(add('1 + 2')).to.equal(3);
            expect(add('10 + 20')).to.equal(30);
            expect(add('100 + 200')).to.equal(300);
            expect(add('1000 + 2000')).to.equal(3000);
            expect(add('1000000 + 2')).to.equal(1000002);
        });
    });

    describe('b. 빼기', function () {
        it('주어진 인자가 스트링이 아닌 경우', function () {
            expect(function () {
                subtract(66);
            }).to.throw(TypeError);

            expect(function () {
                subtract(null);
            }).to.throw(TypeError);

            expect(function () {
                subtract({});
            }).to.throw(TypeError);

            expect(function () {
                subtract([]);
            }).to.throw(TypeError);

            expect(function () {
                subtract(function(){});
            }).to.throw(TypeError);
        });

        it('주어진 String이 텅 비었을 경우', function () {
            expect(subtract('')).to.equal(0);
        });

        it('주어진 String에 숫자가 하나인 경우', function () {
            expect(subtract('10')).to.equal(10);
            expect(subtract('100')).to.equal(100);
        });

        it('빼기 계산이 주어졌을 경우', function () {
            expect(subtract('3 - 2')).to.equal(1);
            expect(subtract('10 - 20')).to.equal(-10);
            expect(subtract('200 - 100')).to.equal(100);
            expect(subtract('6000 - 200')).to.equal(5800);
            expect(subtract('1000000 - 2')).to.equal(999998);
        });
    });

    describe('c. 곱하기', function () {
        it('주어진 인자가 스트링이 아닌 경우', function () {
            expect(function () {
                multiply(66);
            }).to.throw(TypeError);

            expect(function () {
                multiply(null);
            }).to.throw(TypeError);

            expect(function () {
                multiply({});
            }).to.throw(TypeError);

            expect(function () {
                multiply([]);
            }).to.throw(TypeError);

            expect(function () {
                multiply(function(){});
            }).to.throw(TypeError);
        });

        it('주어진 String이 텅 비었을 경우', function () {
            expect(multiply('')).to.equal(0);
        });

        it('주어진 String에 숫자가 하나인 경우', function () {
            expect(multiply('10')).to.equal(10);
            expect(multiply('100')).to.equal(100);
        });

        it('곱하기 계산이 주어졌을 경우', function () {
            expect(multiply('3 * 2')).to.equal(6);
            expect(multiply('10 * 20')).to.equal(200);
            expect(multiply('200 * 100')).to.equal(20000);
            expect(multiply('6000 * 2')).to.equal(1200);
            expect(multiply('1000000 * 2')).to.equal(2000000);
        });
    });

    describe('d. 나누기', function () {
        it('주어진 인자가 스트링이 아닌 경우', function () {
            expect(function () {
                divide(66);
            }).to.throw(TypeError);

            expect(function () {
                divide(null);
            }).to.throw(TypeError);

            expect(function () {
                divide({});
            }).to.throw(TypeError);

            expect(function () {
                divide([]);
            }).to.throw(TypeError);

            expect(function () {
                divide(function(){});
            }).to.throw(TypeError);
        });

        it('주어진 String이 텅 비었을 경우', function () {
            expect(divide('')).to.equal(0);
        });

        it('주어진 String에 숫자가 하나인 경우', function () {
            expect(divide('10')).to.equal(10);
            expect(divide('100')).to.equal(100);
        });

        it('나누기 계산이 주어졌을 경우', function () {
            expect(divide('6 / 2')).to.equal(3);
            expect(divide('40 / 20')).to.equal(2);
            expect(divide('200 / 100')).to.equal(2);
            expect(divide('6000 / 200')).to.equal(30);
            expect(divide('1000000 / 2')).to.equal(500000);
        });
    });

    describe('e. 통합 계산', function () {
        it('주어진 인자가 스트링이 아닌 경우', function () {
            expect(function () {
                calculate(66);
            }).to.throw(TypeError);

            expect(function () {
                calculate(null);
            }).to.throw(TypeError);

            expect(function () {
                calculate({});
            }).to.throw(TypeError);

            expect(function () {
                calculate([]);
            }).to.throw(TypeError);

            expect(function () {
                calculate(function(){});
            }).to.throw(TypeError);
        });

        it('주어진 String이 텅 비었을 경우', function () {
            expect(calculate('')).to.equal(0);
        });

        it('주어진 String에 숫자가 하나인 경우', function () {
            expect(calculate('10')).to.equal(10);
            expect(calculate('100')).to.equal(100);
        });

        it('여러가지 계산이 주어졌을 경우', function () {
            expect(calculate('1 + 1')).to.equal(2);
            expect(calculate('1 - 1')).to.equal(0);
            expect(calculate('1 * 3')).to.equal(3);
            expect(calculate('9 / 3')).to.equal(3);
            expect(calculate('2 + 2 - 3')).to.equal(1);
            expect(calculate('2 - 2 + 3')).to.equal(3);
            expect(calculate('2 * 2 / 4')).to.equal(1);
            expect(calculate('2 / 2 * 3')).to.equal(3);
            expect(calculate('1 + 3 * 2')).to.equal(7);
            expect(calculate('1 + 3 * 2 - 5')).to.equal(2);
            expect(calculate('6 / 3 + 2 * 5 - 10')).to.equal(2);
            expect(calculate('6 / 3 + 2 * 5 - 10 + 50 / 5')).to.equal(12);
        });
    });
});
