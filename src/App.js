// App.js
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/Home'
import About from './components/about'
import Contact from './components/Contact'
import Project from './components/projects/project'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
      </Route>
    </Routes>
  )
}

export default App
