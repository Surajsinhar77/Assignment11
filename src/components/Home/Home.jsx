import React from 'react'
import Searchbar from '../Common/Searcbar';
import MainCardContainer from '../Common/MainCardContainer';
import Pagnitation from '../Common/Pagnitation';


function Home() {
    return (
        <div className='bg-slate-50'>
            <div className="mainContainer p-6">
                {/* Search and Filter Bar components start */}
                    <Searchbar/>
                {/* Search and Filter Bar components  end */}


                {/* Car and card components Start*/}
                    <MainCardContainer/>
                {/* Car and card components End*/}


                {/* Pagnation and nubring components Start */}
                    <Pagnitation/>
                {/* Pagnation and nubring components End */}
            </div>
        </div>
    )
}

export default Home