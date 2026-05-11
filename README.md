# DeClone — 양산형 앱 탐지 서비스

> **Khuthon 2026** 해커톤 출품작  
> 구글 플레이의 양산형·클론 앱을 AI로 분석해 사용자가 안전하게 앱을 선택할 수 있도록 돕는 서비스입니다.

---

## 주요 기능

| 기능 | 설명 |
|------|------|
| **앱 검색** | 앱 이름으로 실시간 검색 및 자동완성 |
| **양산형 지수 분석** | 부정 리뷰 비율 · 리뷰 분극화 · 저평점 비율 · 개발사 패턴을 종합한 스팸 점수 |
| **키워드 클라우드** | 리뷰에서 추출한 부정 키워드 시각화 |
| **광고 vs 실제 비교** | 유튜브 광고 영상과 실제 앱 스크린샷을 나란히 비교 |
| **신고하기** | 허위 광고 앱 신고 기능 |
| **URL 직접 분석** | 구글 플레이 URL 붙여넣기로 앱 분석 |

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | React 19 + Vite 8 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| 상태관리 | React 내장 훅 (useState, useEffect) |
| HTTP | fetch API |
| 배포 | Vercel (main 브랜치 자동 배포) |
| 백엔드 | Railway |

---

## 프로젝트 구조

```
src/
├── pages/
│   ├── HomePage.tsx        # 검색 메인 페이지
│   └── ResultPage.tsx      # 분석 결과 페이지
├── components/
│   ├── ui/                 # Background, Footer, Toast, ModalShell 등
│   └── features/           # SearchBar, IndexAnalysis, CompareModal 등
├── hooks/
│   ├── useVerify.ts        # 앱 분석 상태 관리
│   ├── useToast.ts         # 토스트 알림
│   ├── useBarFill.ts       # 바 애니메이션
│   ├── useCountUp.ts       # 숫자 카운트 애니메이션
│   └── useGaugeReveal.ts   # 게이지 애니메이션
├── lib/api/
│   └── verify.ts           # 검색 · 분석 요청 · 상태 폴링 · 결과 조회
└── types/
    └── index.ts            # 공통 타입 정의
```

---

## 로컬 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행 (localhost:5173)
npm run dev

# 빌드
npm run build

# 타입 체크
node_modules/.bin/tsc -p tsconfig.app.json --noEmit
```

백엔드 연동을 위해 `.env.local` 파일을 생성하세요:

```env
VITE_API_BASE_URL=http://localhost:8080
```

Vite proxy가 `/api` 경로를 백엔드로 자동 포워딩합니다.

---

## 팀

| 역할 | 이름 |
|------|------|
| 백엔드 | 강동규 |
| 프론트엔드 | 강희진 |
| 프론트엔드 | 김현정 |
| 백엔드 | 차민수 |
