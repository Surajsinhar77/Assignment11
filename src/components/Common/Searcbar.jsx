import React from 'react'

function Searcbar() {
    return (
        <div className="searchingBar flex border items-center w-full rounded-3xl shadow-gray-400 shadow-sm">
            <div className=''>
                <input className='border p-2 m-5 rounded-full pl-5 shadow-sm shadow-gray-300' placeholder='Search..' type="text" />
            </div>

            {/* <div className="filterationOption"> */}
                <button className='ml-3'>Relevance <span></span></button>
                <button className='ml-5'>All Brands <span></span></button>
            {/* </div> */}
        </div>
    )
}

export default Searcbar