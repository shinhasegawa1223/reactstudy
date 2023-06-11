import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompTodos } from "./components/IncompTodos";
import { CompTodos } from "./components/CompTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomp, setIncomp] = useState([]);
  const [comp, setComp] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  // input add
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomp, todoText];
    setIncomp(newTodos);
    setTodoText("");
  };
  //del
  const onClickDel = (index) => {
    const newTodos = [...incomp];
    newTodos.splice(index, 1);
    setIncomp(newTodos);
  };

  //back
  const onClickBack = (index) => {
    const newCompTodos = [...incomp];
    newCompTodos.splice(index, 1);

    const newInCompTodos = [...incomp, comp[index]];
    setComp(newCompTodos);
    setIncomp(newInCompTodos);
  };

  const onClickComp = (index) => {
    const newInCompTodos = [...incomp];
    newInCompTodos.splice(index, 1);
    const newCompTodos = [...comp, incomp[index]];
    setIncomp(newInCompTodos);
    setComp(newCompTodos);
  };

  return (
    <>
      {/* input */}

      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {/* in comp */}

      <IncompTodos
        todos={incomp}
        onClickComp={onClickComp}
        onClickDel={onClickDel}
      />
      {/* comp */}
      <CompTodos todos={comp} onClickBack={onClickBack} />
    </>
  );
};
