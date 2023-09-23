function FormModal() {
    return (
        <div class="modal-form hide">
            <div class="modal-form-inner">
                <div class="modal-form-inner__header">
                    <span>Add Book</span>
                    <img src="./close-icon.png" />
                </div>
                <div class="modal-form-inner__body">
                    <form id="form1">
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div>
                            <label>Author</label>
                            <input type="text" name="author" id="author" />
                        </div>
                        <div>
                            <label>Topic</label>
                            <select name="topic" id="topic">
                                <option value="">--Please choose an option--</option>
                                <option value="Programming">Programming</option>
                                <option value="Database">Database</option>
                                <option value="DevOps">DevOps</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-form-inner__footer">
                    <button class="create-button" type="submit" form="form1">Create</button>
                </div>
            </div>
        </div>
    )
}

export default FormModal