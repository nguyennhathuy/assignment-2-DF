function DataItem({ item }) {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>{item.topic}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default DataItem