import React from 'react';
/*import LogoQuidordine from '../components/Logo';*/
import HeartIcon from '../images/IconHeart.png'
import Bouillabaisse from '../images/bouillabaisse.jpg'
import "../index.css"

//Displaying a simple footer that we can add at the end of our pages

const RecipeCard = () => {
    return (

            <div className="RecipeCardContainer">

                <div className="RecipeCardImage">
                    <img src={Bouillabaisse} className="RecipeImage"></img>
                </div>

                <div className="RecipeCardContentContainer">

                    <div className="RecipeContent">

                        <div className="RecipeTitle">
                            <h2>Bouillabaisse</h2>
                            <img src={HeartIcon} className="HeartIcon"></img>
                        </div>

                        <div className="RecipeCategories">
                            <p className="Category">Etiquette</p>
                            <p className="Category">Etiquette</p>
                        </div>

                    </div>

                    <div className="RecipeAddMenu">
                        <a>Ajouter au menu</a>
                    </div>
                    
                </div>
            
            </div>
                
                
    );
};

export default RecipeCard;