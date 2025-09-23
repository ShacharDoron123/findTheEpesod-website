import { HashRouter as Router, Route, Routes } from 'react-router';
import HomePage from './src/pages/HomePage.jsx'
import { Layout } from './src/Layout.jsx';
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
