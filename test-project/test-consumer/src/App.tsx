import { useState } from 'react'
import { FlipCount } from 'flip-to-flip'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + FlipCount</h1>
      
      <div className="card">
        <h2>FlipCount 테스트</h2>
        <div style={{ fontSize: '48px', margin: '20px 0', color: '#646cff' }}>
          <FlipCount value={count} duration={600} />
        </div>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => setCount((count) => count - 1)}>
            -1
          </button>
          <button onClick={() => setCount((count) => count + 1)}>
            +1
          </button>
          <button onClick={() => setCount((count) => count + 10)}>
            +10
          </button>
          <button onClick={() => setCount(Math.floor(Math.random() * 1000))}>
            Random
          </button>
          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
        
        <p style={{ marginTop: '20px' }}>
          현재 값: {count}
        </p>
        <p>
          이 프로젝트는 <code>flip-to-flip</code> 라이브러리를 npm install로 설치하여 테스트합니다.
        </p>
      </div>
      
      <div className="card">
        <h3>사용법</h3>
        <pre style={{ textAlign: 'left', fontSize: '14px', background: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
{`import { FlipCount } from 'flip-to-flip';

<FlipCount 
  value={${count}} 
  duration={600}
  style={{ color: '#646cff' }}
/>`}
        </pre>
      </div>
    </>
  )
}

export default App
