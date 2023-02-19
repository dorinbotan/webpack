import { useState } from "react";

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

    return (
        <div>
            <h3>Current recipe:</h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield recipe</button>
            <button onClick={() => setRecipe(elvenGauntletsRecipe)}>Elven Gauntlets recipe</button>

            <ul>
                {Object.keys(recipe).map(material => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes;
