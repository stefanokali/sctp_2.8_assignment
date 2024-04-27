import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./routes/Header";
import View from "./routes/View";
import Add from "./routes/Add";
import DefaultPage from "./routes/DefaultPage";
import Item from "./routes/Item";
import { useState } from "react";
import { dummyData } from "./data";
import ItemDefault from "./routes/ItemDefault";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const handlerDeleteProduct = (id) => {
    const newList = list.filter(
      (item) => item.id !== id
    );
    setList(newList);
  }

  const [list, setList] = useState(dummyData);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="view" element={<View list={list} />}>
              <Route index element={<ItemDefault/>}/>
              <Route path=":id" element={<Item list={list} handlerDelete={handlerDeleteProduct}/>} />
            </Route>
            <Route path="add" element={<Add list={list} setList={setList}/>} />
          </Route>
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
