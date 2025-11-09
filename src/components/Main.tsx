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
            <ul className="ingredient-list">
                {ingredientsListItems}
            </ul>
        </main>
    )
}