import DataItem from "./DataItem"

function DataTable({ bookList }) {
    return (
        <div class="data-table">
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
                        bookList.map((item, index) => <DataItem key={index} item={item} />)
                    }
                </tbody>

            </table>
        </div>
    )
}

export default DataTable