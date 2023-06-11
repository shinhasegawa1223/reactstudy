import React from "react";

export const CompTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className="complate-area">
      <p>完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
