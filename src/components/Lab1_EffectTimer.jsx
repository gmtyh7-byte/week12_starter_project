import { useEffect, useState } from "react";

// LAB 1 (Slide 07): useEffect Timer
export default function Lab1EffectTimer() {
  const [count, setCount] = useState(0);
  console.log("[LAB 1] rendered");

  useEffect(() => {
    // TODO 1: 1초마다 setCount(prev => prev + 1)을 실행할 setInterval 작성
    // TODO 2: 만든 타이머 ID를 보관
    // TODO 3: return Cleanup 함수에서 clearInterval 호출
    // TODO 4: Dependency Array가 []일 때와 생략했을 때의 차이 관찰
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div>
      <p className="hint">1초마다 자동으로 Count가 증가.</p>
      <div className="count">{formatTime(count)}</div>
      <p className="hint">
        Console에서 Render / Effect / Cleanup을 비교하세요.
      </p>
    </div>
  );
}
