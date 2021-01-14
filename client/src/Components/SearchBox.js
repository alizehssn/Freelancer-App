import React from 'react'

 const SearchBox = (props) => {
    return (
        <input className="mt-3 input-shadow"
        type ="search"
        placeholder="search job title"
        onChange={props.handleChange}
        />
    )
}

export default SearchBox