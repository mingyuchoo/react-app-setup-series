# nyc-02-jasmine-in-javascript

## javascript + jasmine 를 설정하는 방법

이 예제에서는 두 가지 방법이 있습니다. `jasmine.json` 설정파일을 이용합니다.

1. jasmine.json 설정파일을 이용하는 방법
2. jasmine.runner.js 코드를 이용하는 방법

## nyc (구 istanbuljs)를 이용하여 code coverage를 측정

nyc를 사용하고자 할 경우 세 가지 방법이 있는데 이 예제에서는.nycrc.yml 파일을 읽어 들여 사용합니다. .nycrc 와 같은 설정파일을 Typescript를 이용하고자 할 경우 제대로 못 읽는 경향이 있습니다. 참고하세요.

1. package.json의 script 명령으로 나열하는 방법 (예제에 없음)
2. package.json의 stanza(절)에 설정을 기술하는 방법 (예제에 없음)
3. .nycrc.yml과 같은 별도의 파일로 설정하는 방법 (이 예제에서 사용)
