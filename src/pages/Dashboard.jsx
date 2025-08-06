import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
    const { pathname } = useLocation()
    const isShow = pathname.startsWith("/dashboard/orders") || pathname.startsWith("/dashboard/users")
    return (
        <div className='dashboard'>
            <div className='sidebar'>
                <h2 className='text-white text-[30px]'>IT college</h2>
                <ul>
                    <li>
                        <NavLink end={false} className={"sidebar__link"} to={"statistics"}>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink end={false} className={"sidebar__link"} to={"users"}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink end={false} className={"sidebar__link"} to={"books"}>Books</NavLink>
                    </li>
                    <li>
                        <NavLink end={false} className={"sidebar__link"} to={"extras"}>Extras</NavLink>
                    </li>
                    <li>
                        <NavLink end={false} className={"sidebar__link"} to={"timeTable"}>Time table</NavLink>
                    </li>
                    <li>
                        <NavLink end={false} className={"sidebar__link"} to={"teachers"}>Teaachers</NavLink>
                    </li>
                    <li>
                        <NavLink end={false} className={"sidebar__link"} to={"studyQuality"}>Study quality</NavLink>
                    </li>
                    <li>
                        <NavLink end={false} className={"sidebar__link"} to={"restZones"}>Rest zones</NavLink>
                    </li>
                    <li>
                        <NavLink end={false} className={"sidebar__link"} to={"extraClasses"}>Extra classes</NavLink>
                    </li>
                    <li>
                        <NavLink end={false} className={"sidebar__link"} to={"contact"}>Contact us</NavLink>
                    </li>
                </ul>
            </div>
            <div className='content'>
                <div className='main'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard