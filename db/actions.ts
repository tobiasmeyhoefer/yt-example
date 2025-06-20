'use server'

import { eq } from 'drizzle-orm'
import { db } from './index'
import { todosTable } from './schema'
import { revalidatePath } from 'next/cache'

export async function createTodo(title: string) {
  await db.insert(todosTable).values({ title })
  revalidatePath('/')
}

export async function updateTodo(id: string, completed: boolean) {
  await db
    .update(todosTable)
    .set({ completed: completed })
    .where(eq(todosTable.id, id))
  revalidatePath('/')
}

export async function deleteTodo(id: string) {
  await db.delete(todosTable).where(eq(todosTable.id, id))
  revalidatePath('/')
}
