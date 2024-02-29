import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CourseList from './pages/CourseList'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CourseList />} />
      </Routes>
    </Router>
  )
}

export default App
