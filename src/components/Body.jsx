import DataTable from "./DataTable"
import DeleteModal from "./DeleteModal"
import FormModal from "./FormModal"
import SearchBox from "./SearchBox"

function BodyContent({ bookList, isOpenDeleteModal, isOpenAddmodal }) {
    return (
        <article>
          <SearchBox />

          <DataTable bookList={bookList} />

          <DeleteModal isOpenDeleteModal={isOpenDeleteModal}/>

          <FormModal isOpenAddmodal={isOpenAddmodal}/>
          
      </article>
    )
}

export default BodyContent