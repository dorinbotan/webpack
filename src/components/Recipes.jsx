import { useState } from "react";
import gauntlets from '../images/swc-elven-gauntlets.png';
import shield from '../images/swc-elven-shield.png';

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 2,
};

const Recipes = () => {
    const [ recipe, setRecipe ] = useState({});
    const [ image, setImage ] = useState(undefined);

    const select = recipe => {
        setRecipe(recipe);

        if (recipe === elvenShieldRecipe) {
            setImage(shield);
        } else {
            setImage(gauntlets);
        }
    }

    return (
        <div>
            <h3>Current recipe:</h3>
            <button onClick={() => select(elvenShieldRecipe)}>Elven Shield recipe</button>
            <button onClick={() => select(elvenGauntletsRecipe)}>Elven Gauntlets recipe</button>

            <ul>
                {Object.keys(recipe).map(material => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>

            { image && <img src={image} width="250" /> }
        </div>
    )
}

export default Recipes;
