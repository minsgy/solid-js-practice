import { Add } from "./Add"

export const Header = ({ onAdd }: { onAdd: VoidFunction }) => {
  return (
    <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
      <div class="relative flex flex-row justify-between">
        <div class="flex items-center">
          <h4 class="ml-4 text-xl font-bold text-navy-700 dark:text-white">
            Tasks
          </h4>
        </div>
        <button
          class="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 rounded-lg"
          onClick={onAdd}
        >
          <Add />
        </button>
      </div>
    </div>
  )
}
