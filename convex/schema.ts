import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    avatar: v.string(),
    createdAt: v.string(),
  }).index("by_email", ["email"]),

  notes: defineTable({
    userId: v.id("users"), // Reference to the `users` table
    name: v.string(), // Name of the note
    createdAt: v.string(), // Timestamp for note creation
  }).index("by_user", ["userId"]),
});
