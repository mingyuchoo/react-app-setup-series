# nyc-03-jasmine-in-typescript

## typescript + jasmine + nyc 를 이용해서 code coverage 측정

이 예제에서는 두 가지 방법이 있습니다. `npm run test`에서는 jasmine-ts를 실행합니다.

1. jasmine-ts를 이용한 방법
2. ts-node 를 이용해서 jasmine를 실행하는 방법

## nyc (구 istanbuljs)를 typescript + jasmine을 이용하고자 할 때 설정은 세 가지가 있습니다.

1. package.json의 script 명령으로 나열하는 방법 (예제에 없음)
2. package.json의 stanza(절)에 설정을 기술하는 방법 (이 예제에서 사용)
3. .nycrc나 .nycrc.yaml과 같은 별도의 파일로 설정하는 방법 (파일을 읽어들이지 못함)
