import { MODAL_TYPE } from "../data/enum";

function SearchBox({ toggleModal }) {
    
    return (
        <div className={`search-book `}>
            <input type="text" className="search-book__input" placeholder="Search books" />
            <button className="search-book__button" onClick={() => toggleModal(MODAL_TYPE.MODAL_ADD)}>Add book</button>
        </div>
    )
}

export default SearchBox;