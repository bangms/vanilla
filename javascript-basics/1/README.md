# 드디어 자바스크립트 퀴즈입니다!

### 안내문

- 우선 브라우저에서 specRunner.html을 열어보세요. 마구 마구 빨간 글씨가 떠있죠? 이제 하나 하나 차근 차근 빨간 녀석들을 초록색으로 통과시켜 나갈겁니다!

- 방금 열어보신 specRunner.html을 보면 1-4번까지 해당 문제가 적혀있죠? `lib` 디렉토리안을 보시면 4가지의 문제가 들어있습니다.

    1. `sumArray.js`
    2. `reverseArray.js`
    3. `reservedString.js`
    4. `commonFactors.js`
    5. `largestNumber.js`
    6. `secondLargestNumber.js`

- 문제를 푸는 순서는 마음대로 하셔도 됩니다!

- 각각의 문제에 대한 설명과 예제는 해당 파일에서 찾으실 수 있고, 차근 차근 생각을 잘 하시고 한번 풀어보세요!

- 지금까지 배우신 loop이라던지, 기본적인 variable, array, object, string에 대한 개념만 있으면 충분히 풀수 있는 문제입니다!

- 힌트
```
** Array **

// Loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 배열 관련 참고 자료
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

Array.prototype.slice
Array.prototype.splice
Array.prototype.push
Array.prototype.pop
Array.prototype.shift
Array.prototype.unshift


** String **

// Loop
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// 스트링 관련 참고 자료
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
```

**인터넷에서 자바스크립트 문서를 참고하실때는 항상 [Mozilla Developer Network](https://developer.mozilla.org/ko/docs/Web/JavaScript)를 사용하세요!**

---

### 작업 순서

1. 우선 [여기에서](https://github.com/vanilla-coding/Javascript-Basics-1) 에서 본인 계정으로 fork를 하세요!
2. `clone or download` 라는 초록색 버튼을 누르시면, https://로 시작하는 url이 나올겁니다. 복사하세요!
3. 터미널을 오픈하셔서, `git clone 방금복사한_URL`을 실행하세요!
4. `cd Javascript-Basics-1` 이라는 명령어를 실행하셔서 해당 디렉토리로 이동하세요!
5. `npm install` 을 실행하세요!
6. `specRunner.html` 파일을 브라우저에서 열어보세요!
7. `lib/` 디렉토리안에 있는 문제들을 하나 하나 푸시면서, specRunner.html을 새로 고침하시면서 브라우저에서 확인하시면 됩니다!
8. 모두 모두 초록색으로 뜨게 문제들을 풀어주세요!
9. 화이팅!

---

### 참고자료

1. npm 이란?
  - 우리는 지금 모든 작업을 node.js기반으로 하고 있습니다. 이 부분은 나중에 더 설명을 해드릴테니, 우선은 우리가 node.js라는 프로그램을 이용하여 작업을 한다고만 이해하셔도 충분합니다.
  - node.js에는 npm(node package modules)라는 시스템이 존재합니다. 이 시스템을 이용하면 이 지구상의 누군가가 이미 만들고 npm에 등록해놓은 코드 패키지를 우리가 편하게 사용할 수 있는 것이랍니다!
  - package.json이란 파일을 보시면 devDependencies(혹은 dependencies)라는 부분에 우리가 필요로 하는 npm module들을 제가 적어놨습니다.
  - npm install이라는 명령어를 실행하게 되면, package.json에 나열된 npm module들이 우리 컴퓨터에 설치가 됩니다. 그래서 우리 컴퓨터에서 사용할 수 있게 되죠! 그래서 항상 npm을 이용하여 개발하는 프로젝트를 우리 컴퓨터에 새로 clone하였거나 설치하였을 경우, npm install이라는 명령어를 통해 작업 환경에 필요한 소프트웨어들을 설치하는 과정이 필요한 것이랍니다!
