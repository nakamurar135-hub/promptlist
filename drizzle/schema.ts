import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  /** Stripe Customer ID (cus_xxx) - Stripe APIとの紐付けに使用 */
  stripeCustomerId: varchar("stripeCustomerId", { length: 64 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * サブスクリプション（有料会員プラン）管理テーブル
 * plan: "free" = 無料会員, "premium" = 有料会員
 * stripeSubscriptionId: Stripe Subscription ID (sub_xxx)
 */
export const subscriptions = mysqlTable("subscriptions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  plan: mysqlEnum("plan", ["free", "premium"]).default("free").notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  /** Stripe Subscription ID (sub_xxx) */
  stripeSubscriptionId: varchar("stripeSubscriptionId", { length: 64 }),
  /** Stripe Price ID (price_xxx) */
  stripePriceId: varchar("stripePriceId", { length: 64 }),
  startedAt: timestamp("startedAt").defaultNow().notNull(),
  expiresAt: timestamp("expiresAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Subscription = typeof subscriptions.$inferSelect;
export type InsertSubscription = typeof subscriptions.$inferInsert;
