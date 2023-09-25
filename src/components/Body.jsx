import DataTable from "./DataTable"
import DeleteModal from "./DeleteModal"
import FormModal from "./FormModal"
import SearchBox from "./SearchBox"

function BodyContent({ bookList, isOpenDeleteModal, isOpenAddmodal, toggleModal, handleCreateBook }) {
    return (
        <article>
          <SearchBox 
            toggleModal={toggleModal}
          />

          <DataTable
            bookList={bookList} 
            toggleModal={toggleModal}
          />

          <DeleteModal 
            isOpenDeleteModal={isOpenDeleteModal}
            toggleModal={toggleModal}
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