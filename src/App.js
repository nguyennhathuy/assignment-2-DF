import { useEffect, useState } from "react";
import BodyContent from "./components/Body";
import Header from "./components/Header";
import "./style/style.css"
import { DUMMY_BOOK, MODAL_TYPE } from "./data/enum";

function App() {
  const [bookList, setBookList] = useState([]);
  const [isOpenAddmodal, setIsOpenAddModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  useEffect(() => {
    const getDatabase = localStorage.getItem("bookList");
    if (!getDatabase) {
      localStorage.setItem("bookList", JSON.stringify(DUMMY_BOOK))
    } else {
      setBookList(JSON.parse(getDatabase))
    }
  }, []);
  function toggleModal(type, id) {
    switch(type) {
      case MODAL_TYPE.MODAL_ADD:
        setIsOpenAddModal(prev => !prev)
        break;
      case MODAL_TYPE.MODAL_DELETE:
        setIsOpenDeleteModal(prev => !prev)
        break;
      default:
        throw new Error("Type is not valid")
    }
  }
  function handleCreateBook(book) {
    setBookList(prev => [...prev, book])
  }
  function handleDeleteBook(id) {
    
  }
  return (
    <>
      <Header />
      <BodyContent
        bookList={bookList}
        isOpenAddmodal={isOpenAddmodal}
        isOpenDeleteModal={isOpenDeleteModal}
        toggleModal={toggleModal}
        handleCreateBook={handleCreateBook}
      />
    </>
  );
}

export default App;
