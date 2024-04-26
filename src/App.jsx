import './App.css'
import './nav'
import NavBar from './nav'
import HomePage from './home';
import Resource from './resource';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <div className='content'> 
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/resource" element={<Resource/>}/>

        </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
