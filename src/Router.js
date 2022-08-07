import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'

function Router() {

    const [loading, setLoading] = useState(true)
    return (

        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>

    )
}

export default Router