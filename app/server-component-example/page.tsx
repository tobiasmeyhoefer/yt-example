/* eslint-disable @typescript-eslint/no-explicit-any */
async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data = await response.json()
  return data
}

async function fetchTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data
}

const ServerComponentExample = async () => {
  const user = await fetchUser()
  const todos = await fetchTodos()

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Good Evening {user.name}, How are you?
      </h1>
      <ul className="list-disc list-inside">
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ServerComponentExample
