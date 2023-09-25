import { MODAL_TYPE } from "../data/enum"

function DeleteModal({ isOpenDeleteModal, toggleModal }) {
    return (
        <div className={`modal-delete ${!isOpenDeleteModal ? "hide" : ""}`}>
            <div className="modal-delete-inner">
                <div className="modal-delete-inner__header">
                    <span>Delete Book</span>
                    <img src="./close-icon.png" onClick={() => toggleModal(MODAL_TYPE.MODAL_DELETE)}/>
                </div>
                <div className="modal-delete-inner__body">
                    Do you want to delete Refactoring book?
                </div>
                <div className="modal-delete-inner__footer">
                    <button className="delete-button">Delete</button>
                    <button className="cancel-button" onClick={() => toggleModal(MODAL_TYPE.MODAL_DELETE)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal