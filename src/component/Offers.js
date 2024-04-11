import React from 'react'
import Offer from "./Offer.js"
//import jsondata from '../data/data.json'
//const offer = jsondata.offer
import '../styles/Offers.css'

const Offers = ({offer}) => {
  if (!offer) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="offersSection">
        {offer.map((item,index)=>(
            <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
  );
}


export default Offers