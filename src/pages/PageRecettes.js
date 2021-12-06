import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'
import Footer from '../components/Footer'
import "../index.css"

//Website homepage

const PageRecettes = () => {
    return (
        <div className="PageRecettesContainer">

            <header><span>Coucou c'est le header</span></header>

                <h1>Toutes les recettes</h1>

                <SearchBar/>
                

                <div className="ResultsContainer">

                    <div className="RecipeActions">
                        <h2>1234 recettes</h2>
                        <div className="RecipeShowResults">
                            <a>Afficher tous les résultats</a>
                        </div>

                    </div>
                    <div className="RecipeContainer">
                        <RecipeCard/>
                        <RecipeCard/>
                    </div>
                    <div className="RecipeContainer">
                        <RecipeCard/>
                        <RecipeCard/>
                    </div>
                    <div className="RecipeContainer">
                        <RecipeCard/>
                        <RecipeCard/>
                    </div>
                    <div className="RecipeContainer">
                        <RecipeCard/>
                        <RecipeCard/>
                    </div>
                    <div className="RecipeContainer">
                        <RecipeCard/>
                        <RecipeCard/>
                    </div>
                </div>
              <Footer/>
            
        </div>
        
        
    )

}

export default PageRecettes;