import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from '../src/page/Main/Main'
import Info from '../src/page/Info/Info'


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/Info' element={<Info/>} />
        </Routes>
    )
}

export default Router
