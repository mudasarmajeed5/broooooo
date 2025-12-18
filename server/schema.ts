import { pgTable, integer, text, varchar, timestamp, bigint, primaryKey } from "drizzle-orm/pg-core";

// Users table
export const users = pgTable("users", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }),
    emailVerified: timestamp("emailVerified"),
    image: text("image"),
});

// Accounts table
export const accounts = pgTable("accounts", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    userId: integer("userId"), // FK reference, nullable by default
    type: varchar("type", { length: 255 }),
    provider: varchar("provider", { length: 255 }),
    providerAccountId: varchar("providerAccountId", { length: 255 }),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: bigint("expires_at", { mode: "number" }),
    id_token: text("id_token"),
    scope: text("scope"),
    session_state: text("session_state"),
    token_type: text("token_type"),
});

// Sessions table
export const sessions = pgTable("sessions", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    userId: integer("userId"),
    expires: timestamp("expires"),
    sessionToken: varchar("sessionToken", { length: 255 }),
});

// Verification tokens table
export const verification_tokens = pgTable(
  "verification_token",
  {
    identifier: text("identifier"),
    token: text("token"),
    expires: timestamp("expires"),
  },
  (table) => ([
    primaryKey({columns: [table.identifier, table.token]})
  ])
);