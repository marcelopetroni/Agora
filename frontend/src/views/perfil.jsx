import React from 'react'
import Sidebar from '../components/sidebar'
import HirerProfile from '../components/hirerProfile'
import ArtistProfile from '../components/artistProfile'

const perfil = ({ userType = "hirer" }) => {
  return (
	<div className='ag-w-full ag-h-full ag-flex ag-flex-row ag-bg-brancohome'>
     <Sidebar userType={userType} />
    <div className='ag-flex ag-flex-col ag-w-full ag-h-full ag-ml-60'>
      {userType === 'hirer' ? (
        <HirerProfile/>
    ) : (
        <ArtistProfile />
      )}
    </div>
  </div>     
  )
}

export default perfil
