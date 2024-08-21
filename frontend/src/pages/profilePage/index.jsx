import React from 'react';
import ArtistProfile from '../../components/ArtistProfile.jsx';
import HunterProfile from '../../components/HunterProfile';

const getAccountType = () => {

return 'talent_hunter';

};

const Profile = () => {
  const accountType = getAccountType();

  if (accountType === 'artist') {
    return <ArtistProfile />;
  } else if (accountType === 'talent_hunter') {
    return <HunterProfile />;
  } else {
    return <div>Invalid account type.</div>;
  }
};

export default Profile;