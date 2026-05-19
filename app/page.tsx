const highlights = [
  {
    title: "웹으로 바로 배포",
    description: "Next.js 정적 export 구조로 만들어 Vercel이 main 브랜치 푸시 후 자동 배포할 수 있습니다."
  },
  {
    title: "APK 자동 생성",
    description: "Capacitor Android 프로젝트와 GitHub Actions workflow가 연결되어 push마다 디버그 APK를 빌드합니다."
  },
  {
    title: "바로 다운로드",
    description: "GitHub Actions 실행 결과의 Artifacts에 landload-debug-apk 이름으로 APK가 업로드됩니다."
  }
];

const checklist = [
  "Vercel 연결용 main 브랜치 배포 구조",
  "Capacitor 기반 Android 프로젝트",
  "APK artifact 업로드용 GitHub Actions",
  "README에 다운로드 방법 문서화"
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">landload_app</p>
        <h1>웹 배포와 APK 배포를 한 번에 시작하는 초기 프로젝트</h1>
        <p className="lede">
          이 프로젝트는 Vercel용 Next.js 웹앱과 GitHub Actions용 Android APK 빌드 파이프라인을 함께 갖춘
          실행 가능한 스타터입니다.
        </p>

        <div className="hero-actions">
          <a className="primary-link" href="https://github.com/kmw1wlog/landload_app">
            GitHub 저장소 보기
          </a>
          <a className="secondary-link" href="#download-guide">
            APK 받는 방법
          </a>
        </div>
      </section>

      <section className="grid-section" aria-label="핵심 기능">
        {highlights.map((item) => (
          <article className="feature-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="status-panel">
        <div>
          <p className="section-label">현재 구성</p>
          <h2>main 브랜치 푸시만으로 웹과 Android 빌드가 이어지도록 설계했습니다.</h2>
        </div>

        <ul>
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="download-guide" id="download-guide">
        <p className="section-label">APK 다운로드</p>
        <h2>GitHub Actions에서 바로 받기</h2>
        <ol>
          <li>저장소의 Actions 탭으로 이동합니다.</li>
          <li>최신 `android-build` 실행 기록을 엽니다.</li>
          <li>`Artifacts` 영역에서 `landload-debug-apk`를 다운로드합니다.</li>
        </ol>
      </section>
    </main>
  );
}
