import RecipeCard from '../components/RecipeCard'
import Bouillabaisse from '../images/bouillabaisse.jpg'
import BackgroundImageRecipePage from '../images/Cookies.jpg'
import Footer from '../components/Footer'
import HeartIcon from '../images/IconHeart.png'
import "../index.css"

const Recette = () => {
    return (
        <div className="RecipePageContainer">

            <header><span>Coucou c'est le header</span></header>

            <div>
                <img src={BackgroundImageRecipePage} className="BackgroundImageRecipePage"/>
            </div>

            <div className="RecipePage">
                
                <div className="RecipePageContentContainer">

                    <div className="RecipePageContent">

                        <div className="RecipePageCategories">
                            <p className="PageCategory">Etiquette</p>
                            <p className="PageCategory">Etiquette</p>
                        </div>

                        <div className="RecipePageTitle">
                            <h2>Cookies</h2>
                            <img src={HeartIcon} className="HeartIcon"></img>
                        </div>

                        <div className="RecipePageStepsContainer">
                            <h3>Ingrédients</h3>
                            <div className="RecipePageSteps">
                                <div className="IngredientItem">
                                    <img src={Bouillabaisse} className="IngredientImage"/>
                                    <span>Bouillabaisse</span>
                                </div>
                                <div className="IngredientItem">
                                    <img src={Bouillabaisse} className="IngredientImage"/>
                                    <span>Bouillabaisse</span>
                                </div>
                                <div className="IngredientItem">
                                    <img src={Bouillabaisse} className="IngredientImage"/>
                                    <span>Bouillabaisse</span>
                                </div>
                                <div className="IngredientItem">
                                    <img src={Bouillabaisse} className="IngredientImage"/>
                                    <span>Bouillabaisse</span>
                                </div>
                                <div className="IngredientItem">
                                    <img src={Bouillabaisse} className="IngredientImage"/>
                                    <span>Bouillabaisse</span>
                                </div>
                                <div className="IngredientItem">
                                    <img src={Bouillabaisse} className="IngredientImage"/>
                                    <span>Bouillabaisse</span>
                                </div>

                            </div>

                        </div>

                        <div className="RecipePageStepsContainer">
                            <h3>Recette</h3>
                            <div className="RecipePageStep">
                                <div className="StepItem">
                                    <p>Aliquam ligula eros, luctus nec ex ut, accumsan vehicula nunc. Suspendisse eget urna mollis, dapibus massa non, finibus mauris. Nullam dolor erat, tincidunt et augue eget, condimentum dictum purus. Donec sit amet diam ante. Phasellus lorem augue, feugiat sed diam id, egestas volutpat nibh. Pellentesque odio orci, tempus eget euismod vitae,</p>
                                </div>
                                <div className="StepItem">
                                    <p>consectetur at nibh. Suspendisse et purus nibh. Donec a luctus purus. Curabitur elementum dignissim pretium. Vivamus iaculis, lacus et mattis ullamcorper, eros ante facilisis nisi, sed porttitor arcu ipsum in magna. Phasellus sagittis sed dolor sit amet dignissim. Maecenas bibendum et erat et pellentesque. Duis ante lacus, ullamcorper quis lorem at, fringilla tincidunt ligula. Nam a cursus ante.</p>
                                </div>
                                <div className="StepItem">
                                    <p>Cras scelerisque purus sed quam iaculis euismod. Suspendisse eu varius dolor. Phasellus auctor consectetur mattis. Nam sagittis quis diam sed faucibus. Morbi fringilla imperdiet arcu non rhoncus. Curabitur viverra malesuada magna, vitae rhoncus augue mollis vel. </p>
                                </div>
                                <div className="StepItem">
                                    <p>Curabitur id arcu elit. Suspendisse in tempor nibh. Curabitur sed tellus in sem finibus vulputate ut in libero. In pulvinar aliquam viverra. Curabitur sit amet congue eros, id tempor ligula. Nullam at nisl sit amet massa suscipit rhoncus.</p>
                                </div>
                            </div>
                            


                        </div>

                    </div>

                    <div className="RecipeAddMenu">
                        <a>Ajouter au menu</a>
                    </div>

                    <div className="RecommendationsContainer">
                        <h3>Nos recommandations du moment...</h3>
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

            </div>
                    
            </div>
          
                
            <Footer/>

        </div>
        
    )

}

export default Recette;