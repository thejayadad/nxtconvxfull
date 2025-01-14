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




export const updateBookTitle = mutation({
  args: {
    id: v.id("book"), // The book ID to update
    title: v.string(), // The new title
  },
  handler: async (ctx, { id, title }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not Authenticated");
    }

    const book = await ctx.db.get(id);
    if (!book) {
      throw new Error("Book not found");
    }

    // Ensure the user is the owner of the book
    if (book.userId !== identity.subject) {
      throw new Error("You do not have permission to update this book");
    }

    // Update the book's title
    await ctx.db.patch(id, {
      title,
    });

    return { success: true };
  },
});

export const updateBookSummary = mutation({
  args: {
    id: v.id("book"), // The book ID to update
    summary: v.string(), // The new title
  },
  handler: async (ctx, { id, summary }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not Authenticated");
    }

    const book = await ctx.db.get(id);
    if (!book) {
      throw new Error("Book not found");
    }

    // Ensure the user is the owner of the book
    if (book.userId !== identity.subject) {
      throw new Error("You do not have permission to update this book");
    }

    // Update the book's title
    await ctx.db.patch(id, {
      summary,
    });

    return { success: true };
  },
});
