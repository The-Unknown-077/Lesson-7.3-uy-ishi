import React from 'react'
import { NavLink } from 'react-router-dom'

const About = ({tabs}) => {
    return (
        <>
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-900">IT College Statistikasi</h2>

            <div className="flex gap-6 border-b border-gray-200 mb-6">
                {tabs.map((tab, index) => (
                    <NavLink
                        key={index}
                        to={tab.to}
                        end
                        className={({ isActive }) =>
                            `pb-2 text-sm sm:text-base font-medium transition-all duration-200 ${isActive
                                ? 'text-indigo-600 border-b-2 border-indigo-600'
                                : 'text-gray-500 hover:text-indigo-600'
                            }`
                        }
                    >
                        {tab.label}
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default About