import { createSignal, Match, Show, Switch } from "solid-js"

export type Todo = {
  id: string
  text: string
  completed: boolean
}

export type TodoItemProps = Todo & {
  onToggle: VoidFunction
  onUpdate: (id: string, text: string) => void
}

export const TodoItem = ({
  id,
  text,
  completed,
  onToggle,
  onUpdate,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = createSignal(false)

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const value = new FormData(form).get("text")
    if (value) {
      onUpdate(id, value as string)
      setIsEditing(false)
    }
  }

  return (
    <div class="flex items-center gap-2 w-full h-[60px] bg-white dark:border-white/10">
      <input
        id={id}
        onClick={onToggle}
        type="checkbox"
        class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                  justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                  checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
        name="weekly"
        checked={completed}
      />

      <Switch fallback={<></>}>
        <Match when={!isEditing()}>
          <label class="text-base font-bold text-navy-700 dark:text-white">
            {text}
          </label>
          <button
            type="button"
            onClick={() => {
              setIsEditing(true)
            }}
          >
            Edit
          </button>
        </Match>
        <Match when={isEditing()}>
          <form class="flex gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              class="border border-gray-300 rounded-md px-2 py-1"
              name="text"
            />
            <button type="submit">Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        </Match>
      </Switch>
    </div>
  )
}
