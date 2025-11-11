import Markdown from "react-markdown"

export default function GroqRecipe({ recipe }:{ recipe: string }) {
    return (
        <section className="recommendation-container" aria-live="polite">
            <h2>Meta Chef Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <Markdown>{recipe}</Markdown>
            </article>
        </section>
    )
}