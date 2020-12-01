import Header from '../src/components/header/header';
import Footer from '../src/components/footer/footer';
import Navbar from '../src/components/Navbar/Navbar';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import Routes from './routes';
import ReactDOM from 'react-dom'
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
