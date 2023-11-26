import React, { useState } from 'react';

const Todos = ({ todos }) => {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
          
        ))}
      </ul>
    </div>
  );
};

export default Todos;
