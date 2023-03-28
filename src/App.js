
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter />
      <itemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
