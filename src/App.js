import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HEADER from './components/Header/Header.jsx'
import BODY from './components/Body/Body'

function App() {
  return (
    <div>
      <HEADER></HEADER>
      <BODY className='principal'></BODY>
    </div>
  );
}

export default App;
