import { useState } from "react"
import GroqRecipe from "./GroqRecipe.tsx";
import IngredientsList from "./IngredientsList";
import { getRecipeFromAI } from "../AI.ts"

export default function Main() {
    const [ingredients, setIngredients] = useState<string[]>(["rice", "chicken", "paprika", "chinese style sausages"]);
    const [recipeShown, setRecipeShown] = useState<boolean>(false);
    const [recipe, setRecipe] = useState<string>('')

    function addIngredient(data: FormData) {
        const newIngredient: string = data.get("ingredient") as string
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function getRecipe() {
        setRecipeShown(prev => !prev)
        const instructions: string = await getRecipeFromAI(ingredients)
        setRecipe(instructions)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>


            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
            {recipeShown && <GroqRecipe recipe={recipe}/>}
        </main>
    )
}