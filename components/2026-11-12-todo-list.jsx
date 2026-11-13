// 2026-11-12 — TodoList: a small todo list with add, toggle-complete and delete.
// Uses useState only; plain JSX, no dependencies beyond React.
import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Ship the daily component', done: false },
    { id: 2, text: 'Review pull requests', done: true },
  ]);
  const [draft, setDraft] = useState('');

  const addTodo = () => {
    const text = draft.trim();
    if (!text) return;
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setDraft('');
  };

  const toggleTodo = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div>
      <h2>Todo List</h2>
      <p>{remaining} of {todos.length} remaining</p>
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Add a todo..."
      />
      <button onClick={addTodo} disabled={!draft.trim()}>
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
