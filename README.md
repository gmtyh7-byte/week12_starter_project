# OSS Week 12 — React Hooks Playground (Student Starter)

## 실행 방법
Node.js 20.19+ 또는 22.12+ 권장. 프로젝트 폴더에서 실행:

```bash
npm install
npm run dev
```

브라우저에 터미널의 Local URL을 열고 LAB 탭을 이동하세요. 제출 전 `npm run build`도 실행하세요.

## 수행 방법
1. `src/components/` 아래의 LAB 1~4 파일에 있는 `TODO`를 직접 완성합니다.
2. `src/App.jsx`, `src/App.css`는 공통 화면이므로 가급적 수정하지 않습니다.
3. 각 LAB의 동작 화면과 콘솔 결과를 기록합니다.
4. 한 LAB에서 다른 LAB으로 탭을 전환하면 기존 컴포넌트가 언마운트됩니다. Cleanup 결과를 관찰합니다.


## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?

# Project Information: 
- 프로젝트 소개
- Starter Project 정보
# Installation: 설치·실행 방법 및 실행 화면
# Source Code Exploration: 
## Project Structure: App.jsx와 주요 Lab 컴포넌트의 역할
1. App.jsx: UI 랜더링, Lab 컴포넌트 동적 마운트, 언마운트
2. Lab1: UseEffect 사용해서 마운트시 바로 실행되는 카운터 구현
3. Lab2: running 상태를 Dependency Array에 넣어 타이머 제어
4. Lab3: useRef로 input Dom에 직접 접근, 포커스 및 초기화 구현
5. Lab4: ureRef로 타이머 ID 보관, 이벤트 핸들러에서 타이머 제어
## useEffect: Effect, Dependency Array 및 Cleanup의 동작 원리
1. Effect: 컴포넌트가 화면에 렌더링된 직후 실행하는 콜백함수
2. Dependency Array: Effect가 다시 실행되는 순간을 결정하는 배열 
3. Cleanup: Effect 안에서 반환하는 함수, 다음 Effect 실행전, 컴포넌트 언마운트때 호출
## useRef: .current 속성과 useState의 차이
1. .current: useRef 안의 값. 화면 갱신은 안됨
2. useState와의 차이: useState는 화면에 보이는 값, useRef는 내부에 저장되는 값
## Code Analysis: useEffect와 useRef 관련 주요 코드 각 1개(5~15줄)를 선택하여 동작 원리 설명
1. useEffect:
  useEffect(() => {
    if (!running) return;
    
    const id = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [running]);
- running이 false면 if(!running)return; 으로 종료, running 이 true일때 setInterval 등록, prev + 1 fh 1초마다 카운트 1 증가, clearInterval로 타이머 종료, Dependency Array에 running이 들어있고 Start/Stop 버튼으로 running 상태 바뀔때 Effect 동작
2. useRef:
  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stop = () => {
    ClearInterval(timerRef.current);
    timerRef.current = null;
  };
  - start 호출때 timeRef.current !== null로 중복시작 검증, 새로운 interval ID timerRef.current에 보관, stop 호출때 timeRef.current에 저장된 ID로 clearInterval 실행 및 timerRef.current null로 초기화
# Lab Implementation: 4개 Lab 구현 내용 및 실행 결과
1. dependency array가 []인 useEffect에 setInterval 작성, cleanup함수에 clearInterval(id) 작성, 1초마다 카운트 증가
2. [running]으로 true일때 타이머 실행 false일때 반환 그리고 리셋 구현, start 클릭시 1초씩 증가 stop 클릭시 멈춤, reset 클릭시 카운트 0으로
3. useRef(null)로 inputRef 생성, focusInput, clearInput에서 inputRef.current.focus(), inputRef.current.value로 조작, focus 버튼 클릭하면 입력창에 커서, clear 버튼 클릭하면 입력값 지워지고 포커스
4. timerRef = useRef(null)에 ID저장, start, stop, reset 구현, start,stop,reset기능, useRef로 불필요 렌더링 제거
# Lab Comparison: STEP 3의 비교 분석 질문 4개에 대한 답변
1. Effect가 실행되는 시점을 결정해 Effect의 쓸모없는 재실행을 제어하기때문에 
2. 컴포넌트가 언마운트 됨, Effect를 다시 실행 시킬때 이전 setInterval이 종료가 안되서 백그라운드에서 계속 실행됨.
3. 값 변경시 useState는 컴포넌트 리렌더링, useRef는 값을 유지
4. Lab 2는 running 상태로 useEffect, cleanup이 타이머 자동 생성, 중지. Lab 4는 useRef에 타이머 ID 저장해 이벤트 핸들러로 타이머 직접 제어.
# Customizing: 
## 수정 내용
- 제목 수정
- 탭별 설명 수정
- 선택 탭 강조 색상 변경
- 타이머 폰트 크기, 색상 변경
- panel에 포인트 라인
- TimerCount를 분/초 형식으로 표현
## 파일명
- App.css
- App.jsx
- Lab1_EffectTimer.jsx
- Lab2_TimerControl.jsx
- Lab3_inputFocus.jsx
- Lab4_RefTimper.jsx
# Deployment: 실제 접근 가능한 Vercel URL
- https://week12-starter-project-3j7w.vercel.app
# Weekly Review:
## 새롭게 배운 내용 3가지
1. useEffect의 Dependency Array와 Cleanup의 구조와 사용방법을 배웠습니다.
2. useState와 useRef의 차이점을 배웠습니다.
3. Lab 2와 Lab 4를 비교하면서 상태기반 제어와 Ref 기반 제어의 차이점을 배웠습니다.
## 어려웠던 점과 해결 방법
- 다른 과제들과 마찬가지로 처음에 코드 이해하고 분석하는 것과 새로운 기능 넣는 것이 가장 어려웠던것 같습니다.
- AI에게 모르는 것을 디테일하게 물어보면서 코드를 이해하면서 해결했습니다.
## AI 활용 내용 및 느낀 점
- 코드 분석과 이해에 디테일 적인 부분과 헷갈리는 부분에 도움을 받았습니다.
- 디버깅을 하다가 막혀서 진전이 없을때 도움을 받았습니다.
- 새로운 기능 추가할때 어떤식으로 접근해야되는지 조언을 받았습니다.