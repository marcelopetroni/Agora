import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/sidebar'
import { FaUser } from "react-icons/fa";
import HirerHome from '../components/hirerHome';
import ArtistHome from '../components/artistHome';


const home = ({ userType = "artist" }) => {

  return (
	<div className='ag-w-full ag-h-full ag-flex ag-flex-row ag-bg-brancohome'>
     <Sidebar userType={userType} />
    <div className='ag-flex ag-flex-col ag-w-full ag-ml-60'>
      {userType === 'hirer' ? (
        // integrar dentro desse arquivo
        <HirerHome/>
    ) : (
        <ArtistHome/>
    )}
    </div>
  </div>
  )
}

export default home
