import React from 'react'
import OverviewStats from '../../../components/OverviewStats'

const All = () => {
    const stats = [
        { title: 'O‘qituvchilar', value: '2', description: 'O‘qituvchilar soni' },
        { title: 'Talabalar', value: '2', description: 'Talabalar soni' },
    ]

    return (
        <div className="p-6">
            <OverviewStats stats={stats}/>
        </div>
    )
}

export default All