// CommonJS 모듈 테스트
const { FlipCount } = require('../dist/flip-count.cjs.js');

console.log('CommonJS 테스트:');
console.log('FlipCount:', typeof FlipCount);
console.log('FlipCount function:', typeof FlipCount === 'function');

if (typeof FlipCount === 'function') {
  console.log('✅ CommonJS 모듈이 정상적으로 로드되었습니다.');
} else {
  console.log('❌ CommonJS 모듈 로드에 실패했습니다.');
}

// React 컴포넌트 props 확인
console.log('FlipCount.displayName:', FlipCount.displayName);
console.log('FlipCount.name:', FlipCount.name);