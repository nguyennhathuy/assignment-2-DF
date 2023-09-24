function SearchBox() {
    
    return (
        <div className={`search-book `}>
            <input type="text" className="search-book__input" placeholder="Search books" />
            <button className="search-book__button" >Add book</button>
        </div>
    )
    function openAddModal() {
        console.log("openAddModal")
    }
}

export default SearchBox;