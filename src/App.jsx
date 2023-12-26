import Counter from "./Counter";

// Component (Function yang me-return JSX)
//
// Note:
// 1. Nama function harus PascalCase
// 2. Kita pakai JSX karena ada beberapa reserved words seperti class dan for, di JSX bisa pakai className dan htmlFor
function App() {
  return (
    <div>
      <h1>Pets</h1>
      <p>Welcome to pets app</p>
      <Counter />
    </div>
  );
}

export default App;
