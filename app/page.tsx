import TodoList from '@/components/todo-list'
import { db } from '@/db'
import { todosTable } from '@/db/schema'

export default async function Home() {
  const todos = await db.select().from(todosTable)
  return (
    <div className="flex items-center justify-center h-screen">
      <TodoList todos={todos} />
    </div>
  )
}
