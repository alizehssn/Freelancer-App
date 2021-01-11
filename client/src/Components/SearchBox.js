import React from 'react'

 const SearchBox = (props) => {
    return (
        <input
        type ="search"
        placeholder="search job title"
        onChange={props.handleChange}
        />
    )
}

export default SearchBox