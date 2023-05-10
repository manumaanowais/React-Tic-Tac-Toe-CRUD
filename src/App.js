import './App.css';
import { NoMatch } from './NoMatch';
import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom'
import TicTacToe from './components/TicTacToe';
import FormDataContainer from './containers/FormDataContainer';
import EditFormContainer from './containers/EditFormContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='formdata' element={<FormDataContainer />} />
        <Route path='edit/:index' element={<EditFormContainer />} />
        <Route path='tic-tac-toe' element={<TicTacToe />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      {/* <TicTacToe /> */}
    </div>
  );
}
export default App;
