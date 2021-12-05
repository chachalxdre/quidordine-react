import React from 'react'
import "../index.css"

//Display a search bar

function Search({ handleInput, search }){
    return (
       <section className="searchBox">
           <input type="text"
           placeholder="&#x1F50D; Rechercher un film"
           className="searchInput"
           onChange={handleInput}
           onKeyPress={search}/>
       </section>
    )
}

export default Search
