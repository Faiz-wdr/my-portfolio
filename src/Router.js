import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import Blog from './Pages/Blog/Blog'
import CreatePost from './Pages/Blog/CreatePost'

function Router() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
    const [loading, setLoading] = useState(true)
    return (

        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Blog" element={<Blog setIsAuth={setIsAuth} />} />
            <Route path="/CreatePost" element={<CreatePost setIsAuth={setIsAuth}/>} />
        </Routes>

    )
}

export default Router