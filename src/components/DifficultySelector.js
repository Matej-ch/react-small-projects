import difficulties from "../difficulties";

const CategorySelector = ({difficulty, chooseDifficulty}) => {
    return (
        <div>
            <p>Select difficulty</p>
            <select value={difficulty} onChange={e => chooseDifficulty(e.target.value)}>
                {difficulties.map((diff,index) => (
                    <option key={index} value={diff.id} dangerouslySetInnerHTML={{__html:diff.name  }} />
                ))}
            </select>
        </div>
    )
}

export default CategorySelector;