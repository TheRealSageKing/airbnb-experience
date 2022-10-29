import React from "react"; 
import star from '../images/star.png';
// import Image from '../images/image12.png'; 

export default function Card(props)
{
    let badgeText = '';
    if (props.openSpot === 0 )
    {
        badgeText = 'SOLD OUT';
    }else if (props.location === 'Online')
    {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {(props.openSpot === 0 || props.location === "Online") && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.img}`} className="card--image" alt=""/>
            <div className="card--stats">
                <img src={star} className="card--star" alt=""/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}