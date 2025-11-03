export default function Main() {
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. rice"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
        </main>
    )
}