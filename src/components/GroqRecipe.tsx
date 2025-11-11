export default function GroqRecipe({ recipe }:{ recipe: string }) {
    return (
        <section className="recommendation-container">
            <h2>Meta Chef Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                {recipe}
            </article>
        </section>
    )
}