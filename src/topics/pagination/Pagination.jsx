import { Axios } from "axios";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css"




const Pagination = () => {
  const [todos, setTodo] = useState([]);
  const [todoPerPage, setTodoPages] = useState(10);
  const [currentpage, setCurrentPage] = useState(1);


  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTodo(data);
  };

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/todos")
    // .then((res) => setTodo(res.data));
    fetchData();
  }, []);

  const numberOfPages = Math.ceil(todos.length / todoPerPage);

  const pages = [...Array(numberOfPages + 1).keys()].slice(1);

  const indexOfLastTodo = currentpage * todoPerPage;
  const indexofFirstTodo = indexOfLastTodo - todoPerPage;

  const visibleTodos = todos.slice(indexofFirstTodo, indexOfLastTodo);

  const nextHandler = () => {
    if (currentpage !== numberOfPages) {
      setCurrentPage(currentpage + 1)
    }
  }
  const prevHandler = () => {
    if (currentpage !==1) {
      setCurrentPage(currentpage - 1)
    }
  }

 
  return (
  <>
  <h1>Todos With Paggination</h1>
    <select onChange={(e) => setTodoPages(e.target.value)}>
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
    </select>
    <div>
      {visibleTodos.map((todo) => (
        <div>
          <p key={todo.id}>{todo.title}</p>
        </div>
      ))}
      <span onClick={prevHandler} style={{cursor:"pointer"}}>Prev</span>
      <p>
        {pages.map((page) => (
          <span
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`${currentpage === page ? "active" :""}`}
          style={{ cursor: "pointer" }}
          >{`${page} |`}</span>
          ))}
      </p>
      <span onClick={nextHandler} style={{cursor:"pointer"}}>Next</span>
    </div>
          </>
  );
};

export default Pagination;
