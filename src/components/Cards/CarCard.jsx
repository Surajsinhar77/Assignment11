import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";

function CarCard({ item }) {

    return (
        <div className='maincarCard border rounded-2xl shadow-sm shadow-gray-400 '>
            <div className="mainImage">
                <img className='p-4 h-80 object-cover w-full rounded-3xl' src={item.image} alt="image of car" />
            </div>

            <div className='h-2/4 flex flex-col justify-evenly'>
                <div className="nameAndYear flex text-xl justify-between px-5">
                    <h1 className='text-3xl'>{item.name}</h1>
                    <h1 className='border-2 border-dashed px-2 text-center border-blue-300 rounded-2xl'>{item.year}</h1>
                </div>

                <div className="carInfoItem px-5 grid grid-cols-1 md:grid-cols-2 text-blue-400">
                    {
                        // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
                        item.carInfo.map((item, index) =>
                            <div key={index}>
                                <div className='flex m-3 items-center'><span className='mr-3 text-3xl'>{item.icon}</span> <span className='text-gray-600 font-medium text-xl'>{item.name}</span> </div>
                            </div>
                        )
                    }
                </div>

                <div className="borderLine px-6 border-t p-4">
                    {/* <hr />s */}

                    <div className="cardBoundry flex items-center justify-between my-auto">
                        <div className="prize text-2xl">
                            <span>${item.prize} / monthly</span>
                        </div>
                        <div className="wishListAndRentBtn flex items-center">
                            <span className='text-3xl text-blue-400 mr-4'> <AiOutlineHeart /> </span>
                            <span>
                                <button className='border border-blue-400 px-4 py-2 rounded-lg '>Rent Now</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard