import React from 'react'
import { useNavigate } from 'react-router-dom'
import './search-results.css'
import { SearchResult } from './SearchResult'

export const SearchResults = ({results, handleClickResult}) => {
    const navigate = useNavigate()

    const handleClick = (id) => {
        handleClickResult()
        navigate(`/profile/${id}`)
    }

  return (
    <div className='search-results'>
        {results.map(user => (
            <SearchResult user={user} handleClick={handleClick}/>
        ))}
    </div>
  )
}
