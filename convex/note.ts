import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    // Validate the identity and email
    if (!identity) {
      throw new Error("Not Authenticated");
    }

    const email = identity.email;
    if (!email) {
      throw new Error("Email is missing from identity");
    }

    // Query the user by their email
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    // Insert the note with the correct userId
    const note = await ctx.db.insert("notes", {
      name: args.title, // Use `title` from args
      userId: user._id, // Convex Id<"users">, not a string
      createdAt: new Date().toISOString(),
    });

    return note;
  },
});
