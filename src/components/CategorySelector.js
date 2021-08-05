import categories from '../categories'

const CategorySelector = ({category, chooseCategory}) => {
    return (
        <div className={'w-full'} style={{maxWidth: '150px'}}>
            <label className={'mb-1 inline-block'}>Category</label>
            <select className={'w-full bg-white border-2 p-1 rounded-md'} style={{maxWidth: '150px'}} value={category} onChange={e => chooseCategory(e.target.value)}>
                {categories.map((category,index) => (
                    <option key={index} value={category.id} dangerouslySetInnerHTML={{__html:category.name  }} />
                ))}
            </select>
        </div>
    )
}

export default CategorySelector;