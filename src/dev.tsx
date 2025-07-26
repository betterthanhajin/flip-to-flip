import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import FlipCount from './FlipCount';

const DevApp: React.FC = () => {
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(600);

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Flip-to-Flip 개발 테스트</h1>
      
      <div style={{ 
        fontSize: '48px', 
        fontWeight: 'bold', 
        margin: '40px 0',
        textAlign: 'center',
        color: '#007acc'
      }}>
        <FlipCount value={count} duration={duration} />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button 
          onClick={() => setCount(count - 1)}
          style={{ margin: '0 5px', padding: '10px 20px', fontSize: '16px' }}
        >
          -1
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ margin: '0 5px', padding: '10px 20px', fontSize: '16px' }}
        >
          +1
        </button>
        <button 
          onClick={() => setCount(count + 10)}
          style={{ margin: '0 5px', padding: '10px 20px', fontSize: '16px' }}
        >
          +10
        </button>
        <button 
          onClick={() => setCount(Math.floor(Math.random() * 1000))}
          style={{ margin: '0 5px', padding: '10px 20px', fontSize: '16px' }}
        >
          Random
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{ margin: '0 5px', padding: '10px 20px', fontSize: '16px' }}
        >
          Reset
        </button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <label>
          애니메이션 속도: {duration}ms
          <br />
          <input 
            type="range" 
            min="100" 
            max="2000" 
            step="100"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            style={{ width: '300px', margin: '10px' }}
          />
        </label>
      </div>

      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '40px'
      }}>
        <h3>테스트 정보</h3>
        <p><strong>현재 값:</strong> {count}</p>
        <p><strong>애니메이션 시간:</strong> {duration}ms</p>
        <p><strong>컴포넌트:</strong> FlipCount</p>
        
        <h4>사용법:</h4>
        <pre style={{ 
          backgroundColor: '#333', 
          color: '#fff', 
          padding: '15px', 
          borderRadius: '4px',
          overflow: 'auto'
        }}>
{`import { FlipCount } from 'flip-to-flip';

<FlipCount 
  value={${count}} 
  duration={${duration}}
  className="custom-class"
  style={{ color: '#007acc' }}
/>`}
        </pre>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<DevApp />);
}