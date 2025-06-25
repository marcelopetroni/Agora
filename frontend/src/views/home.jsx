import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/sidebar'
import { FaUser } from "react-icons/fa";
import Banner from '../assets/homeBanner.png'
import ArtistCard from '../components/artistCard';

const home = () => {

  const [talents, setTalents] = useState([
    {
      id: 1,
      name: "Luna Vega",
      roles: [
        { label: "Cantora",  variant: "yellow" },
        { label: "Dançarina", variant: "purple" },
      ],
      description:
        "Oi, eu sou Luna Vega, uma cantora e dançarina apaixonada, dedicada a criar experiências inesquecíveis para meu público. Desde muito jovem, a música e a dança estiveram no centro da minha vida...",
      avatarUrl: "https://placehold.co/600x400",
    },
    {
      id: 2,
      name: "Jade Tori",
      roles: [
        { label: "Cantora",  variant: "yellow" },
        { label: "Dançarina", variant: "purple" },
      ],
      description:
        "Oi, eu sou Jade Tori, uma cantora e dançarina apaixonada, dedicada a criar experiências inesquecíveis para meu público. Desde muito jovem, a música e a dança estiveram no centro da minha vida...",
      avatarUrl: "https://placehold.co/600x400",
    },
    {
      id: 2,
      name: "Jade Tori",
      roles: [
        { label: "Cantora",  variant: "yellow" },
        { label: "Dançarina", variant: "purple" },
      ],
      description:
        "Oi, eu sou Jade Tori, uma cantora e dançarina apaixonada, dedicada a criar experiências inesquecíveis para meu público. Desde muito jovem, a música e a dança estiveram no centro da minha vida...",
      avatarUrl: "https://placehold.co/600x400",
    },
    {
      id: 2,
      name: "Jade Tori",
      roles: [
        { label: "Cantora",  variant: "yellow" },
        { label: "Dançarina", variant: "purple" },
      ],
      description:
        "Oi, eu sou Jade Tori, uma cantora e dançarina apaixonada, dedicada a criar experiências inesquecíveis para meu público. Desde muito jovem, a música e a dança estiveram no centro da minha vida...",
      avatarUrl: "https://placehold.co/600x400",
    },
    {
      id: 2,
      name: "Jade Tori",
      roles: [
        { label: "Cantora",  variant: "yellow" },
        { label: "Dançarina", variant: "purple" },
      ],
      description:
        "Oi, eu sou Jade Tori, uma cantora e dançarina apaixonada, dedicada a criar experiências inesquecíveis para meu público. Desde muito jovem, a música e a dança estiveram no centro da minha vida...",
      avatarUrl: "https://placehold.co/600x400",
    },
    {
      id: 2,
      name: "Jade Tori",
      roles: [
        { label: "Cantora",  variant: "yellow" },
        { label: "Dançarina", variant: "purple" },
      ],
      description:
        "Oi, eu sou Jade Tori, uma cantora e dançarina apaixonada, dedicada a criar experiências inesquecíveis para meu público. Desde muito jovem, a música e a dança estiveram no centro da minha vida...",
      avatarUrl: "https://placehold.co/600x400",
    },

    ]);

  return (
	<div className='ag-w-full ag-h-full ag-flex ag-flex-row ag-bg-brancohome'>
    <Sidebar />
    <div className='ag-flex ag-flex-col ag-ml-60'>
      <div className='ag-flex ag-flex-row ag-my-10 ag-mr-20 ag-pb-10 ag-h-fit ag-justify-between ag-items-center ag-border-b ag-border-gray-300'>
        <div className='ag-flex ag-flex-col ag-ml-32'>
          <h1 className='ag-font-amiko ag-text-3xl ag-font-bold'>Olá, User!</h1>
          <p className='ag-font-amiko ag-text-md ag-font-normal ag-tracking-widest'>Encontre talentos que você procura aqui!</p>
        </div>
        <div className='ag-flex ag-h-fit ag-w-20 ag-rounded-full'>
          <img src="https://placehold.co/400" alt="placeholder" className='ag-rounded-full'/>
        </div>
      </div>
      <div className='ag-mr-20 ag-ml-32'>
        <img src={Banner} alt="banner" className='ag-w-auto' />
      <div className="ag-grid ag-grid-cols sm:ag-grid-cols-2 ag-gap-6 ag-mt-12 ag-mb-20">
        {talents.map((t) => (
          <ArtistCard
            key={t.id}
            name={t.name}
            roles={t.roles}
            description={t.description}
            avatarUrl={t.avatarUrl}
          />
        ))}
      </div>
      </div>
    </div>
  </div>
  )
}

export default home
