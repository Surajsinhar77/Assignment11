import React , {useState} from 'react'
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


function Pagnitation() {
    const [active, setActive] = useState(1);

    const getItemProps = (index) =>({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };
    return (
        <div className="searchingBar flex border items-center w-full rounded-3xl shadow-gray-400 shadow-sm p-5 justify-between">
            <div className="leftbox"> 6 from 129 </div>

            <div className="rightbox  text-xl">
                <div className="flex items-center gap-4">
                    <Button
                        variant="text"
                        className="flex items-center gap-2 border p-2"
                        onClick={prev}
                        disabled={active === 1}
                    >
                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                    </Button>
                    <div className="flex items-center gap-2">
                        <IconButton className='border p-2 px-3' {...getItemProps(1)}>1</IconButton>
                        <IconButton className='border p-2 px-3' {...getItemProps(2)}>2</IconButton>
                        <IconButton className='border p-2 px-3' {...getItemProps(3)}>3</IconButton>
                        <IconButton className='border p-2 px-3' {...getItemProps(4)}>4</IconButton>
                        <IconButton className='border p-2 px-3' {...getItemProps(5)}>5</IconButton>
                    </div>
                    <Button
                        variant="text"
                        className="flex items-center gap-2 border p-2"
                        onClick={next}
                        disabled={active === 5}
                    >
                        Next
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Pagnitation