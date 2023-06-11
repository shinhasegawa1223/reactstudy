import React from "react";

export const IncompTodos = (props) => {
  const { todos, onClickComp, onClickDel } = props;

  return (
    <div className="imcomplate-area">
      <p>未完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComp(index)}>comp</button>
              <button onClick={() => onClickDel(index)}>del</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
