import Footer from '../src/components/footer/footer';
import Navbar from '../src/components/Navbar/Navbar';
import Main from './pages/usuario/main';
import api from './components/services/api';
import Routes from "./routes";
import './App.css';

function App() {
  return (
    <div className="App">
<Navbar/>
<Routes />
<Footer />
    </div>
  );
}

export default App;
