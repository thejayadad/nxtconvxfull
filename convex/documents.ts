import {v} from "convex/values"
import {mutation, query} from "./_generated/server"
import {Doc, Id} from "./_generated/dataModel"

export const create = mutation({
    args: {
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()
        if(!identity){
            throw new Error("Not Authenicated")
        }
        const userId = identity.subject;
        const document = await ctx.db.insert('documents', {
            title: args.title,
            userId,
            isArchived: false,
            isPublished: false
        })
        return document
    }
})