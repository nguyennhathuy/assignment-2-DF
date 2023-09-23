function DeleteModal() {
    return (
        <div class="modal-delete hide">
            <div class="modal-delete-inner">
                <div class="modal-delete-inner__header">
                    <span>Delete Book</span>
                    <img src="./close-icon.png" />
                </div>
                <div class="modal-delete-inner__body">
                    Do you want to delete Refactoring book?
                </div>
                <div class="modal-delete-inner__footer">
                    <button class="delete-button">Delete</button>
                    <button class="cancel-button">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal