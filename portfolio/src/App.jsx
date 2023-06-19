import './App.css'
import About from './About/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectsPage from './Projects/ProjectsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
