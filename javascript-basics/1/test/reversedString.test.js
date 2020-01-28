describe('3. String 뒤집기 (lib/reversedString.js)', function () {
    it('주어진 인자가 String이 아닌 경우, 에러를 내야한다.', function () {
        expect(function () {
            reversedString(3, 3);
        }).to.throw(Error);

        expect(function () {
            reversedString(null);
        }).to.throw(Error);

        expect(function () {
            reversedString();
        }).to.throw(Error);

        expect(function () {
            reversedString({});
        }).to.throw(Error);

        expect(function () {
            reversedString(function(){});
        }).to.throw(Error);
    });

    it('주어진 인자 두개 모두가 String이 아닌 경우, 에러를 내야한다.', function () {
        expect(function () {
            reversedString(3, 3);
        }).to.throw(Error);

        expect(function () {
            reversedString(null, 'hello');
        }).to.throw(Error);

        expect(function () {
            reversedString('null', 40);
        }).to.throw(Error);

        expect(function () {
            reversedString({}, 'undefined');
        }).to.throw(Error);

        expect(function () {
            reversedString(function(){}, 'yep');
        }).to.throw(Error);
    });

    it('주어진 두개의 String값이 같을 경우, false를 리턴한다.', function () {
        expect(reversedString('hello', 'hello')).to.equal(false);
        expect(reversedString('vanilla coding', 'vanilla coding')).to.equal(false);
    });

    it('주어진 String값을 뒤집어 비교하여 Boolean 올바른 값을 리턴하여야 한다.', function () {
        expect(reversedString('string', 'gnirts')).to.equal(true);
        expect(reversedString('hello world', 'dlrow olleh')).to.equal(true);
        expect(reversedString('I am a doctor.', '.rotcod a ma I')).to.equal(true);
        expect(reversedString('You are a girl.', '.lrig a era uoY')).to.equal(true);
        expect(reversedString('How are you doing?', '?gniod uoy era woH')).to.equal(true);
        expect(reversedString('hfusfhuer fisufisud s fsfhsyeye ww ee', 'ee ww eyeyshfsf s dusifusif reuhfsufh')).to.equal(true);
    });
});
