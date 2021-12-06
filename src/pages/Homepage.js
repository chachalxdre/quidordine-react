import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'
import Bouillabaisse from '../images/bouillabaisse.jpg'
import Footer from '../components/Footer'
import BackgroundImageHomepage from '../images/BackgroundImageHomepage.png'
import "../index.css"

//Website homepage

const Homepage = () => {
    return (
        <div className="HomepageContainer">
            <div>
                <img src={BackgroundImageHomepage} className="BackgroundImageHomepage"/>
            </div>

            <header><span>Coucou c'est le header</span></header>

            <div className="Title">
                <h1>Cuisinez comme des chefs</h1>
                <h2>Quidordine vous propose un large choix de recettes de qualité gratuitement</h2>
                <input type="text" placeholder="&#x1F50D; Rechercher une recette" className="SimpleSearchInput"></input>
            </div>

            <div className="RecommendationsContainer">
                <h3>Nos recommandations du moment</h3>
                <div className="RecommendedRecipes">
                    <div className="RecommendedItem">
                        <img src={Bouillabaisse} className="RecommendedRecipeImage"/>
                        <span>Bouillabaisse</span>
                    </div>
                    <div className="RecommendedItem">
                        <img src={Bouillabaisse} className="RecommendedRecipeImage"/>
                        <span>Bouillabaisse</span>
                    </div>
                    <div className="RecommendedItem">
                        <img src={Bouillabaisse} className="RecommendedRecipeImage"/>
                        <span>Bouillabaisse</span>
                    </div>
                    <div className="RecommendedItem">
                        <img src={Bouillabaisse} className="RecommendedRecipeImage"/>
                        <span>Bouillabaisse</span>
                    </div>

                </div>
            </div>

            <div className="BestContainer">
                <h3>Les meilleures recettes</h3>
                <div className="BestRecipes">
                    <div className="BestItem">
                        <img src={Bouillabaisse} className="BestRecipeImage"/>
                        <span>Text</span>
                    </div>
                    <div className="BestItem">
                        <img src={Bouillabaisse} className="BestRecipeImage"/>
                    </div>
                    <div className="BestItem">
                        <img src={Bouillabaisse} className="BestRecipeImage"/>
                    </div>
                    <div className="BestItem">
                        <img src={Bouillabaisse} className="BestRecipeImage"/>
                    </div>
                    <div className="BestItem">
                        <img src={Bouillabaisse} className="BestRecipeImage"/>
                    </div>
                    <div className="BestItem">
                        <img src={Bouillabaisse} className="BestRecipeImage"/>
                    </div>
                    <div className="BestItem">
                        <img src={Bouillabaisse} className="BestRecipeImage"/>
                    </div>
                    <div className="BestItem">
                        <img src={Bouillabaisse} className="BestRecipeImage"/>
                    </div>
                </div>
            </div>

            <div className="FavoritesContainer">
                <h3>Vos recettes préférées</h3>
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

export default Homepage;