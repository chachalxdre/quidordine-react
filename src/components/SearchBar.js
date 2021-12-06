import React from 'react'
import "../index.css"

//Display a search bar

function Search(){
    return (

       <div className="SearchBar">
           <input type="text" placeholder="&#x1F50D; Rechercher une recette" className="SearchInput"></input>
           <div className="SearchBarFilters">
               <div className="Filters">
                   <a>Filter</a>
                   <a>Filter</a>
                   <a>Filter</a>
                   <a>Filter</a>
               </div>
               <div className="RecipeShowResults">
                    <a>Effacer tous les filtres</a>
                </div>
           </div>
       </div>

    );
};

export default Search
