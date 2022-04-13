
import './App.css';
import { ThemeProvider } from './context/themeContext';
import Register from './pages/Register';

function App() {
  return (
    <ThemeProvider> 
    <div className="App">
     <Register/>
    </div>
    </ThemeProvider>
  );
}

export default App;
