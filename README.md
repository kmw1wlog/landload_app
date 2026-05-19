# landload_app

`landload_app`는 Vercel에 자동 배포되는 Next.js 웹앱과 GitHub Actions에서 바로 다운로드 가능한 Android APK 빌드 파이프라인을 함께 갖춘 초기 프로젝트입니다.

## 기술 스택

- Next.js + TypeScript
- Capacitor + Android
- GitHub Actions artifact 배포

## 로컬 실행

```bash
npm install
npm run build
npm run cap:sync
npm run android:debug-apk
```

## 스크립트

- `npm run build`: Next.js production build 및 정적 export 생성
- `npm run export`: 정적 export 생성
- `npm run android:init`: Android 프로젝트가 없으면 생성
- `npm run cap:sync`: Capacitor Android 동기화
- `npm run android:debug-apk`: Android debug APK 빌드

## APK 다운로드 방법

1. GitHub 레포 `kmw1wlog/landload_app`에 접속합니다.
2. `Actions` 탭을 클릭합니다.
3. 최신 `android-build` 실행을 클릭합니다.
4. `Artifacts`에서 `landload-debug-apk`를 다운로드합니다.

## 배포 메모

- Vercel은 `main` 브랜치 푸시를 감지해 웹앱을 배포합니다.
- APK는 Vercel이 아니라 GitHub Actions에서 생성됩니다.
- Android 빌드는 `.github/workflows/android-build.yml`에서 수행됩니다.
