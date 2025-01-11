import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users Table
  users: defineTable({
    email: v.string(),
    name: v.string(),
    avatar: v.string(),
    createdAt: v.string(),
  }).index("by_email", ["email"]),

  // Books Table
  book: defineTable({
    title: v.string(),
    userId: v.string(), // References users
    author: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    summary: v.optional(v.string()),
    isPublished: v.boolean(),
    categoryId: v.optional(v.string()), // References categories
  })
    .index("by_user", ["userId"])
    .index("by_category", ["categoryId"]), // Index by category

  // Categories Table
  category: defineTable({
    name: v.string(),
    createdAt: v.string(),
    userId: v.string(), // Categories can be user-specific
  }).index("by_user", ["userId"]),
});
