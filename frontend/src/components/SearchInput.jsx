import React from 'react'
import { IoMdSearch } from "react-icons/io";
import Arrow from '../assets/arrow';
import "./Search.sass";

const SearchInput = ({placeholderContent}) => {
  return (
    <div className="search-container2">
        <input className="search2" type="text" id="search" placeholder={placeholderContent}/>
        <IoMdSearch
            className='lupa2'
            size={20}
            color="rgba(155, 114, 67, 0.66)"
        />
        <div className="arrow-icon2">
            <Arrow/>
        </div>
    </div>
  )
}

export default SearchInput