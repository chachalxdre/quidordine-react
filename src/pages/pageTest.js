import Search from '../components/SearchBar'
import UpdateResults from '../components/UpdateResults'
import RecipeCard from '../components/RecipeCard'
import Footer from '../components/Footer'
import "../index.css"

//Website homepage

const PageTest = () => {
    return (
        <div className="Container">

            <header><span>Coucou c'est le header</span></header>

                <h1>Toutes les recettes</h1>

                <div className="SearchBar">coucou c'est la search bar que j'ai aps faite</div>

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

export default PageTest;