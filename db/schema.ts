import { boolean, pgTable, text } from 'drizzle-orm/pg-core'

export const todosTable = pgTable('todos', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text().notNull(),
  completed: boolean().notNull().default(false),
})

export type InsertTodo = typeof todosTable.$inferInsert
export type Todo = typeof todosTable.$inferSelect
