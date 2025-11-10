import { useState } from "react"

export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>([]);

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(data: FormData) {
        const newIngredient: string = data.get("ingredient") as string
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])

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
            <section className="ingredients-container">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredient-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </main>
    )
}