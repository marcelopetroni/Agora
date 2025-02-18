import React, { useState } from 'react';
import './CarouselStyle.sass';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Singer from "../assets/singer.jpg";
import Singer2 from "../assets/singer2.jpg";
import Guitarist from "../assets/guitarist2.jpg";
import Woman from "../assets/woman.png";

const Carousel = () => {
    const contents = [
        {
            title: 'Luna Vega',
            roles: ['Cantora', 'Dançarina'],
            imageUrl: Singer,
            description: "Oi, eu sou Luna Vega, uma cantora e dançarina apaixonada, dedicada a criar experiências inesquecíveis para meu público. Desde muito jovem, a música e a dança estiveram no centro da minha vida...",
        },
        {
            title: 'Jade Tori',
            roles: ['Cantora', 'Dançarina'],
            imageUrl: Singer2,
            description: "Oi, eu sou Jade Tori, uma cantora e dançarina apaixonada, dedicada a criar experiências inesquecíveis para meu público. Desde muito jovem, a música e a dança estiveram no centro da minha vida...",
        },
        {
            title: 'Joana de Sá',
            roles: ['Cantora', 'Dançarina'],
            imageUrl: Woman,
            description: "Oi, eu sou Joana de Sá, uma cantora e dançarina apaixonada, dedicada a criar experiências inesquecíveis para meu público. Desde muito jovem, a música e a dança estiveram no centro da minha vida...",
        },
        {
            title: 'Robert Sparks',
            roles: ['Cantor', 'Dançarino'],
            imageUrl: Guitarist,
            description: "Olá, sou um novo artista chamado Robert, um cantor e dançarino apaixonado e dedicado a criar experiências inesquecíveis para o meu público.",
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
                        <button className="see-more-button2">Leia mais</button>
                    </div>
                ))}
            </div>
            <button onClick={next} className="carousel-button2"><IoIosArrowForward/></button>
        </div>
    );
};

export default Carousel;
