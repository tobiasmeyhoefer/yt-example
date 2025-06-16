import { Suspense } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
async function fetchUser() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data = await response.json()
  return data
}

async function fetchTodos() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data
}

const ServerComponentExample = async () => {
  return (
    <div className="p-10">
      <Suspense fallback={<div>Loading...</div>}>
        <Greeting />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  )
}

const Greeting = async () => {
  const user = await fetchUser()
  return (
    <h1 className="text-2xl font-bold mb-4">
      Good Evening {user.name}, How are you?
    </h1>
  )
}

const Todos = async () => {
  const todos = await fetchTodos()
  return (
    <ul className="list-disc list-inside">
      {todos.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default ServerComponentExample
