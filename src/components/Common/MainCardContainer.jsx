import React from 'react';
import CarCard from '../Cards/CarCard';
import picture1 from '../../assets/Image/picture1.jpeg';
import picture2 from '../../assets/Image/picture2.jpeg';
import picture3 from '../../assets/Image/picture3.jpeg';
import picture4 from '../../assets/Image/picture4.jpeg';
import { BsPeople } from "react-icons/bs";
import { BsFuelPump } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { PiSteeringWheelLight } from "react-icons/pi";

function MainCardContainer() {

    const cardInfo = [
        {
            name : "Toyta RAV4",
            image : picture1,
            year : 2013,
            prize : 440,
            carInfo : [
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
                {
                    name : "Hybrid",
                    icon : <BsFuelPump/>,
                },
                {
                    name : "4 People",
                    icon : <BsSpeedometer2/>,
                },
                {
                    name : "4 People",
                    icon : <PiSteeringWheelLight/>,
                },
            ]
        },
        {
            name : "Toyta RAV4",
            image : picture2,
            year : 2014,
            prize : 440,
            carInfo : [
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
                {
                    name : "Hybrid",
                    icon : <BsFuelPump/>,
                },
                {
                    name : "4 People",
                    icon : <BsSpeedometer2/>,
                },
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
            ]
        },
        {
            name : "Toyta RAV4",
            image : picture3,
            year : 2017,
            prize : 440,
            carInfo : [
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
                {
                    name : "Hybrid",
                    icon : <BsFuelPump/>,
                },
                {
                    name : "4 People",
                    icon : <BsSpeedometer2/>,
                },
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
            ]
        },
        {
            name : "Toyta RAV4",
            image : picture4,
            year : 2013,
            prize : 440,
            carInfo : [
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
                {
                    name : "Hybrid",
                    icon : <BsFuelPump/>,
                },
                {
                    name : "4 People",
                    icon : <BsSpeedometer2/>,
                },
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
            ]
        },
        {
            name : "Toyta RAV4",
            image : picture1,
            year : 2018,
            prize : 440,
            carInfo : [
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
                {
                    name : "Hybrid",
                    icon : <BsFuelPump/>,
                },
                {
                    name : "4 People",
                    icon : <BsSpeedometer2/>,
                },
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
            ]
        },
        {
            name : "Toyta RAV4",
            image : picture2,
            year : 2015,
            prize : 440,
            carInfo : [
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
                {
                    name : "Hybrid",
                    icon : <BsFuelPump/>,
                },
                {
                    name : "4 People",
                    icon : <BsSpeedometer2/>,
                },
                {
                    name : "4 People",
                    icon : <BsPeople/>,
                },
            ]
        },
    ]

    return (
        <div className='mainContainer-for-car-card my-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>

            {
                cardInfo.map((item, index)=>
                    <CarCard key={index} item={item}/>
                )
            }
            {/* <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/>
            <CarCard/> */}
        </div>
    )
}

export default MainCardContainer