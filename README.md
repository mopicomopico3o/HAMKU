# LED 작업실

공연 LED 작업 트래커. GitHub Pages로 올리고, 내용과 사진은 Firebase(Firestore)에 저장합니다.

## 파일
- `index.html` : 앱 전체 (한 파일)
- `firebase-config.js` : Firebase 구성값을 넣는 곳. `null`이면 동기화 없이 그 브라우저에만 저장
- `firestore.rules` : Firebase 콘솔의 Firestore > 규칙에 붙여 넣는 보안 규칙
- `manifest.webmanifest`, `sw.js`, `icons/` : 바탕화면·홈 화면에 앱으로 설치하기 위한 파일
- 글꼴 파일 3개

## 연결 순서
1. (프로젝트 주인) https://console.firebase.google.com 에서 프로젝트 추가. 애널리틱스는 꺼도 됩니다.
2. 빌드 > Firestore Database > 데이터베이스 만들기 > 위치 `asia-northeast3 (서울)` > 프로덕션 모드.
3. Firestore > 규칙 탭에 `firestore.rules` 내용을 붙여 넣고, 이메일 두 개를 실제 구글 계정으로 바꾼 뒤 게시.
4. 빌드 > Authentication > 시작하기 > 로그인 방법 > Google 사용 설정.
5. Authentication > 설정 > 승인된 도메인에 `<깃헙아이디>.github.io` 추가.
6. 프로젝트 설정(톱니바퀴) > 내 앱 > 웹 앱(</>) 추가 > 나오는 `firebaseConfig` 값을 `firebase-config.js`의 `null` 자리에 넣기.
7. GitHub 저장소 Settings > Pages > Branch `main` / `(root)` 저장.

## 앱으로 설치
- 윈도우 크롬·엣지: 주소창 오른쪽의 설치 아이콘 > 설치. 바탕화면에 아이콘이 생깁니다.
- 아이폰 사파리: 공유 > 홈 화면에 추가. 안드로이드 크롬: 메뉴 > 앱 설치.

## 한도
Firestore 무료 구간은 저장 1GiB입니다. 앱의 "백업 · 가져오기"에서 사용량을 볼 수 있습니다.
