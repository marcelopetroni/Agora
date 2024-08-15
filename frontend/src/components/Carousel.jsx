import React, { useState } from 'react';
import './CarouselStyle.sass';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Singer from "../assets/singer.jpg";

const Carousel = () => {
    const contents = [
        {
            title: 'Luna Vega',
            roles: ['Singer', 'Dancer'],
            imageUrl: Singer,
            description: "Hi, I'm Luna Vega, a passionate singer and dancer dedicated to creating unforgettable experiences for my audience. From a young age, music and dance have been at the center of...",
        },
        {
            title: 'Jade Tori',
            roles: ['Singer', 'Dancer'],
            imageUrl: Singer,
            description: "Hi, I'm Jade Tori, a passionate singer and dancer dedicated to creating unforgettable experiences for my audience. From a young age, music and dance have been at the center of...",
        },
        {
            title: 'Joana de Sá',
            roles: ['Singer', 'Dancer'],
            imageUrl: Singer,
            description: "Hi, I'm Joana de Sá, a passionate singer and dancer dedicated to creating unforgettable experiences for my audience. From a young age, music and dance have been at the center of...",
        },
        {
            title: 'Robert Sparks',
            roles: ['Singer', 'Dancer'],
            imageUrl: Singer,
            description: "Hi, I'm a new artist called Robert, a passionate singer and dancer dedicated to creating unforgettable experiences for my audience.",
        },
    ];

    const [index, setIndex] = useState(0);
    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % contents.length);
    };

    const prev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + contents.length) % contents.length);
    };

    const getVisibleIndices = () => {
        return [
            index % contents.length,
            (index + 1) % contents.length,
            (index + 2) % contents.length
        ];
    };

    const visibleIndices = getVisibleIndices();

    return (
        <div className="carousel-container2">
            <button onClick={prev} className="carousel-button2"><IoIosArrowBack/></button>
            <div className="carousel-content2">
                {visibleIndices.map((i) => (
                    <div key={i} className="carousel-item2">
                        <div className="carousel-image2">
                            <img src={contents[i].imageUrl} alt={"Profile Image"} className='profile-carousel'/>
                        </div>
                        <div className="carousel-title2"><b>{contents[i].title}</b></div>
                        <div className="carousel-buttons2">
                            {contents[i].roles.map((role, index) => (
                               <button
                               key={index}
                               className={index === 0 ? 'role-button2' : 'role-button3'}
                             >
                               {role}
                             </button>
                            ))}
                        </div>
                        <div className="carousel-description2">{contents[i].description}</div>
                        <button className="see-more-button2">See more</button>
                    </div>
                ))}
            </div>
            <button onClick={next} className="carousel-button2"><IoIosArrowForward/></button>
        </div>
    );
};

export default Carousel;
