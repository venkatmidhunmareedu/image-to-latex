import React, { useState } from 'react'
import HistoryCard from '../components/HistoryCard'

const History = () => {
    const history = JSON.parse(localStorage.getItem("history"))
    return (
        <div className='flex-col justify-center text-center my-10 md:mx-40 mx-5'>
            { !history.length == 0 && 
                history.map(h => <HistoryCard content={h} />)
            }
            
        </div>
    )
}

export default History