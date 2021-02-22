import categories from '../categories'

const CategorySelector = () => {
    return (
        <div>
            <p>Select category</p>
            <select name="" id="">
                {categories.map((category,index) => (
                    <option key={index} value={category.id}>
                        { category.name }
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CategorySelector;