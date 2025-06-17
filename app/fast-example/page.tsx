import {
  fetchPostsMockAsync,
  fetchTodosMockErrorAsync,
  fetchUsersMockAsync,
} from '@/components/examples/example'

const ExamplePage = async () => {
  const startTime = Date.now()
  const [posts, todos, users] = await Promise.all([
    fetchPostsMockAsync(),
    fetchTodosMockErrorAsync(),
    fetchUsersMockAsync()
  ])

  const duration = Date.now() - startTime

  console.log(`Fetching data took ${duration}ms`)

  return (
    <div>
      <h1>Example Page</h1>
      <p>Posts: {posts.length}</p>
      <p>Users: {users.length}</p>
    </div>
  )
}

export default ExamplePage
