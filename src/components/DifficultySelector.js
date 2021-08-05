import difficulties from "../difficulties";

const DifficultySelector = ({difficulty, chooseDifficulty}) => {
    return (
        <div className={'w-full'} style={{maxWidth: '150px'}}>
            <label className={'mb-1 inline-block'}>Difficulty</label>
            <select className={'w-full bg-white border-2 p-1 rounded-md'} style={{maxWidth: '150px'}} value={difficulty} onChange={e => chooseDifficulty(e.target.value)}>
                {difficulties.map((diff,index) => (
                    <option key={index} value={diff.id} dangerouslySetInnerHTML={{__html:diff.name  }} />
                ))}
            </select>
        </div>
    )
}

export default DifficultySelector;