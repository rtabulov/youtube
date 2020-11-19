import React, { useState, useEffect } from 'react'

export default function SearchBar({ onTermSubmit }) {
  const [term, setTerm] = useState('')

  useEffect(() => {
    onTermSubmit(term)
  }, [term])

  return (
    <div className="ui segment search-bar">
      <form onSubmit={(e) => e.preventDefault()} className="ui form">
        <div className="field">
          <label htmlFor="search-input">Search for a video</label>
          <input
            id="search-input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}
