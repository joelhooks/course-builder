import { mysqlTable } from '@/db/mysql-table'
import { roles } from '@/db/schemas/roles'
import { users } from '@/db/schemas/users'
import { relations } from 'drizzle-orm'
import {
	boolean,
	index,
	primaryKey,
	timestamp,
	varchar,
} from 'drizzle-orm/mysql-core'

export const userRoles = mysqlTable(
	'userRole',
	{
		userId: varchar('userId', { length: 255 }).notNull(),
		roleId: varchar('roleId', { length: 255 }).notNull(),
		active: boolean('active').notNull().default(true),
		createdAt: timestamp('createdAt', {
			mode: 'date',
			fsp: 3,
		}).defaultNow(),
		updatedAt: timestamp('updatedAt', {
			mode: 'date',
			fsp: 3,
		}).defaultNow(),
		deletedAt: timestamp('deletedAt', {
			mode: 'date',
			fsp: 3,
		}),
	},
	(ur) => ({
		pk: primaryKey({ columns: [ur.userId, ur.roleId] }),
		userIdIdx: index('userId_idx').on(ur.userId),
		roleIdIdx: index('roleId_idx').on(ur.roleId),
	}),
)

export const userRolesRelations = relations(userRoles, ({ one }) => ({
	user: one(users, { fields: [userRoles.userId], references: [users.id] }),
	role: one(roles, { fields: [userRoles.roleId], references: [roles.id] }),
}))
