import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'
import Admin from './pages/Admin'
import { useEffect, useState } from 'react'

function App() {
  const [blogs, setBlogs] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home blogs={blogs} setBlogs={setBlogs} />} />
          <Route path='/blogs/:blogId' element={<BlogDetail blogs={blogs} setBlogs={setBlogs}/>}/>
          <Route path='/admin' element={<Admin blogs={blogs} setBlogs={setBlogs}/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
