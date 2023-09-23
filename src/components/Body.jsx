import DataTable from "./DataTable"
import DeleteModal from "./DeleteModal"
import FormModal from "./FormModal"
import SearchBox from "./SearchBox"

function BodyContent() {
    return (
        <article>
          <SearchBox />

          <DataTable />

          <DeleteModal />

          <FormModal />
          
      </article>
    )
}

export default BodyContent