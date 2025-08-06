import { lazy } from 'react'
import React from 'react'
import { Outlet } from 'react-router-dom'
const Header = lazy(() => import('../components/Header'))
import { useLocation } from 'react-router-dom'

const Home = () => {
    const {pathname} = useLocation()
    return (
        <>
            <Header />
            {
                pathname === "" ?
                <p className='z-[-1]'>Welcome to our IT college</p>
                :
                <></>
            }
            <div className=""></div>
            <Outlet />
        </>
    )
}

export default Home