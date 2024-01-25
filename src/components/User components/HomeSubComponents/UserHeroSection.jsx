import React, {useState} from 'react'
import "../../../styles/User Styles/UserHero.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { useGlobalContext } from '../../../Hooks/useGlobalContext';




const UserHeroSection = () => {
   const {bedroomCount, decrementBedroom, incrementBedroom} = useGlobalContext()
  return (
        <div className="userhero-section ">
            <h1 className='mt-3 fw-bold '>Find the Perfect Place to Call <br /> Your Own</h1>
            <div className="search-cover mt-4">
               <div className="search-properties">
                 <div className="search-location">
                    <span className='discoverfind' >LOCATION</span>
                    <input type='text' placeholder='eg. Surulere, Benin' />
                 </div>

                 <div className="userhero-lines"></div>

                 <div className="search-location">
                    <span htmlFor="" className='discoverfind'>PROPERTY TYPE</span>
                    <input type='text' placeholder='eg. Duplex, Bedroom Flat' />
                 </div>

                 <div className="userhero-lines"></div>

                 <div className="search-bedroom">
                    <span className='discoverBed'>BEDROOM</span>
                       <div className='addMinus'>
                         <CiCircleMinus onClick={decrementBedroom}/>
                         <span>{bedroomCount}</span>
                         <IoIosAddCircleOutline onClick={incrementBedroom}/>
                       </div>
                 </div>
               </div>
               <button className='userBtn'>Find Property</button>
            </div>
        </div>
  )
}

export default UserHeroSection