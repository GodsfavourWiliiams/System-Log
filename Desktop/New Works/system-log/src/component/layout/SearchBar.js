import React from 'react'

const SearchBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-primary">
    <div className="container-fluid">
        <a className="navbar-brand fw-bold text-white" href="/">Logger</a>
     
        <div className="form-group" >
            <input type="text" className='form-control' />

        </div>
    </div>
</nav>
  )
}

export default SearchBar