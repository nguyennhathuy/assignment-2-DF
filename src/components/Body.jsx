import DataTable from "./DataTable"
import DeleteModal from "./DeleteModal"
import FormModal from "./FormModal"
import SearchBox from "./SearchBox"

function BodyContent({ bookList, isOpenDeleteModal, isOpenAddmodal, toggleModal, handleCreateBook, handleDeleteBook, handleSearchBook }) {
    return (
        <article>
          <SearchBox 
            toggleModal={toggleModal}
            handleSearchBook={handleSearchBook}
          />

          <DataTable
            bookList={bookList} 
            toggleModal={toggleModal}
          />

          <DeleteModal 
            isOpenDeleteModal={isOpenDeleteModal}
            toggleModal={toggleModal}
            handleDeleteBook={handleDeleteBook}
          />

          <FormModal 
            isOpenAddmodal={isOpenAddmodal}
            toggleModal={toggleModal}
            handleCreateBook={handleCreateBook}
          />
          
      </article>
    )
}

export default BodyContent