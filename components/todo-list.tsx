'use client'

import { Todo } from '@/db/schema'
import { Button } from './ui/button'
import { Plus, Trash2 } from 'lucide-react'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { createTodo, deleteTodo, updateTodo } from '@/db/actions'

const TodoList = ({ todos }: { todos: Todo[] }) => {
  const [todo, setTodo] = useState('')

  const handleCreateTodo = () => {
    if (todo.trim() === '') return
    createTodo(todo)
    setTodo('')
  }

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id)
  }

  const handleUpdateTodo = (id: string, completed: boolean) => {
    updateTodo(id, completed)
  }

  return (
    <div className="flex flex-col gap-4 bg-foreground/5 min-h-[200px] p-6 rounded-xl">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="flex gap-2">
        <Input
          className="flex-1"
          placeholder="subscribe to tobi tackles tech"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button onClick={handleCreateTodo}>
          <Plus />
          Add Todo
        </Button>
      </div>
      <ul className="max-h-[400px] overflow-y-auto flex flex-col gap-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-2">
            <button
              className="flex-1 text-left"
              onClick={() => handleUpdateTodo(todo.id, !todo.completed)}
            >
              <h3 className={cn(todo.completed && 'line-through')}>
                {todo.title}
              </h3>
            </button>
            <Button variant="outline" onClick={() => handleDeleteTodo(todo.id)}>
              <Trash2 />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
