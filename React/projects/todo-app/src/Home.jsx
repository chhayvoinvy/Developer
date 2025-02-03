import React, { useEffect } from 'react';

function Home({ addTask }) {
  useEffect(() => {
    function handleKeyDown(e) {
      const _container = document.getElementById("toDo");

      if (e.key === "Escape") {
        _container.classList.remove('open');
      }
      if (e.key === "Enter") {
        addTask(); 
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [addTask]);

  function openTodo() {
    const _container = document.getElementById("toDo");

    if (_container.classList.contains("open")) {
      _container.classList.remove('open');
    } else {
      _container.classList.add('open');
    }
  }

  return (
    <div className="todo-icon">
      <img
        onClick={openTodo}
        src="/logo.webp"
        width={60}
        height={60}
        alt="Open To-Do"
      />
    </div>
  );
}

export default Home;