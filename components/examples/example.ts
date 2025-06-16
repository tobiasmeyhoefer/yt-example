// simple example of using async/await
export async function fetchTodoAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  return data
}




















// ugly example of using Promise
export function fetchTodoPromise() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then(resolve)
      .catch(reject)
  })
}

// ------------------------------------------------------------

export async function fetchPostsAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data
}

export async function fetchTodosAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data
}

export async function fetchUsersAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return data
}

export async function fetchPostsMockAsync() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return 'data'
}

export async function fetchTodosMockAsync() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return 'data'
}

export async function fetchUsersMockAsync() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return 'data'
}

export async function fetchTodosMockErrorAsync() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  throw new Error('Error fetching todos')
}
