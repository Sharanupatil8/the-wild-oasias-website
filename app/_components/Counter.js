
"use client";

import { useState } from "react";

export default function Counter({users}){
  const [count, setCount] = useState(1);



  return (
    <div className="flex space-x-4">
      <button
        className="bg-green-600 text"
        onClick={() => setCount((count) => count - 1)}
      >
        -
      </button>
      <div>{count}</div>
      <button
        className="bg-green-600 text"
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}