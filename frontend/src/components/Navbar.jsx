import React, { useState } from 'react'
import ProfileInfo from './ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate;

  const onLogout = () => {
    navigate('/login')
  }

  const onClearSearch = () => {
    setSearchQuery("");
  }

  const handleSearch = () => {

  }

  return (
    <div className='bg-[var(--secondary)] flex items-center justify-between drop-shadow py-2 px-6'>
        <h2 className='text-xl font-medium text-[var(--primary)] py-2'>Inkspire</h2>

        <SearchBar
          value={searchQuery}
          onChange={({target}) => {
          setSearchQuery(target.value);
          }}
          onClearSearch={onClearSearch}
          handleSearch={handleSearch}
        />

        <ProfileInfo onLogout={onLogout} />
    </div>
  )
}

export default Navbar