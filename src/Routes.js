import { Routes } from 'react-router-dom/dist/index.js';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
