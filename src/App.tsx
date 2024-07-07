import { createSignal, For, type Component } from "solid-js"

import styles from "./App.module.css"
import { Todo, TodoItem } from "./components/TodoItem"
import { Header } from "./components/Header"
import { Add } from "./components/Add"

const App: Component = () => {
  const [todos, setTodos] = createSignal<Todo[]>([])

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleAdd = () => {
    setTodos((prev) => [
      ...prev,
      {
        id: String(Math.random() * 300),
        text: "New Task",
        completed: false,
      },
    ])
  }

  const handleUpdate = (id: string, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    )
  }

  return (
    <div class={styles.App}>
      <div class="flex flex-col justify-center items-center h-[100vh]">
        <Header onAdd={handleAdd} />
        <ul class="px-4 w-full">
          <For
            each={todos()}
            fallback={
              <div class="font-semibold h-[300px] flex items-center justify-center mt-10">
                아직 Task가 없어요.
              </div>
            }
          >
            {(todo) => (
              <TodoItem
                {...todo}
                onToggle={() => handleToggle(todo.id)}
                onUpdate={handleUpdate}
              />
            )}
          </For>
        </ul>
      </div>
    </div>
  )
}

export default App
