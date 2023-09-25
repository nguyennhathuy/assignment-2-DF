import { MODAL_TYPE } from "../data/enum"

function DataItem({ item, toggleModal }) {
    
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>{item.topic}</td>
            <td>
                <button onClick={() => toggleModal(MODAL_TYPE.MODAL_DELETE)}>Delete</button>
            </td>
        </tr>
    )
}

export default DataItem