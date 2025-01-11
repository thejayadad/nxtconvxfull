import {v} from "convex/values"
import {mutation, query} from "./_generated/server"
import {Doc, Id} from "./_generated/dataModel"

export const createBook = mutation({
    args: {
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()
        if(!identity){
            throw new Error("Not Authenicated")
        }
        const userId = identity.subject;

        const bookId = await ctx.db.insert('book', {
            title: args.title,
            userId,
            isPublished: false
        })
        return { id: bookId };
    }
})

export const getBookById = query({
    args: {
        id: v.id("book")
    },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
      },
  });