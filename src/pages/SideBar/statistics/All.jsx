import { lazy } from 'react'
import React from 'react'
const OverviewStats = lazy(() => import('../../../components/OverviewStats'))

const Info1 = () => {
    const stats = [
        {
            title: 'Talabalar',
            value: 1250,
            description: 'Faol o‘quvchilar',
        },
        {
            title: 'Bitiruvchilar',
            value: 480,
            description: 'So‘nggi 3 yilda',
        },
        {
            title: 'O‘qituvchilar',
            value: 75,
            description: 'Tajribali ustozlar',
        },
        {
            title: 'Yo‘nalishlar',
            value: 6,
            description: 'Turli IT yo‘nalishlar',
        },
    ]
    return (
        <div className="text-center text-gray-700">
            <OverviewStats stats={stats} />
        </div>
    )
}

export default Info1
