import { useEffect, useState } from "react";
import BodyContent from "./components/Body";
import Header from "./components/Header";
import "./style/style.css"
import { DUMMY_BOOK } from "./data/enum";

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
  return (
    <>
      <Header />
      <BodyContent
        bookList={bookList}
        isOpenAddmodal={isOpenAddmodal}
        isOpenDeleteModal={isOpenDeleteModal}
      />
    </>
  );
}

export default App;
