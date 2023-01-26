import React from 'react'

export const SearchResult = ({user, handleClick}) => {

  return (
    <div className='search-result' onClick={(e) => handleClick(user._id)}>
        <p className='user-name'>{`${user.name} ${user.surname}`}</p>
        <p className='user-title'>{user.title}</p>
        <div className='img-container'>
            <img src={user.image} className="profile-img" />
        </div>
    </div>
  )
}
