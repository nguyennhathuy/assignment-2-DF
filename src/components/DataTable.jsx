import DataItem from "./DataItem"

function DataTable({ bookList, toggleModal }) {
    return (
        <div className="data-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Topic</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map((item, index) => <DataItem key={index} item={item} toggleModal={toggleModal} />)
                    }
                </tbody>

            </table>
        </div>
    )
}

export default DataTable