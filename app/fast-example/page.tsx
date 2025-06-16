import {
  fetchPostsMockAsync,
  fetchTodosMockAsync,
  fetchUsersMockAsync,
} from '@/components/examples/example'

const ExamplePage = async () => {
  const startTime = Date.now()
  const [todos, posts, users] = await Promise.all([
    fetchTodosMockAsync(),
    fetchPostsMockAsync(),
    fetchUsersMockAsync(),
  ])
  const duration = Date.now() - startTime

  console.log(`Fetching data took ${duration}ms`)

  return (
    <div>
      <h1>Example Page</h1>
      <p>Todos: {todos.length}</p>
      <p>Posts: {posts.length}</p>
      <p>Users: {users.length}</p>
    </div>
  )
}

export default ExamplePage
