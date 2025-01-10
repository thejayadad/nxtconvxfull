# CREATE THE APP
- package.json
- home page css
- daisyui


# CLERK
- follow docs
- set jwt template

# CONVEX
- install it first
- schema file
- users.ts file
- wrap the app
- add the sync user function
- run the app
- check database
- add custom spinner


# LAYOUT
- update the page
- add a layout inside dashboard
- tailwind css file
- build components and global css
- start with sidebar

# HEROSECTION
- build layout
- add nav
- logo
- search 
- userbutton
- hero section
- framer motion build out

# SCHEMA BACKEND
- user logs in
-- book schema
```
// Book Schema

Book {
  id: string; // Unique identifier for the book
  title: string; // Title of the book
  author: string; // Author's name
  description: string; // A short summary or description of the book
  genre: string[]; // List of genres (e.g., ["poetry", "fiction"])
  coverImage: string; // URL for the book's cover image
  createdBy: string; // User ID of the creator
  createdAt: Date; // Timestamp for when the book was created
  updatedAt: Date; // Timestamp for the last update
  favoriteCount: number; // Number of times the book is favorited
  isPublished: boolean; // Boolean flag to indicate if the book is published
}
Chapter {
  id: string; // Unique identifier for the chapter
  bookId: string; // Foreign key linking to the associated book
  title: string; // Title of the chapter
  summary: string; // Optional summary or description of the chapter
  order: number; // Chapter order within the book
  createdAt: Date; // Timestamp for when the chapter was created
  updatedAt: Date; // Timestamp for the last update
}
Page {
  id: string; // Unique identifier for the page
  chapterId: string; // Foreign key linking to the associated chapter
  content: string; // Text or content of the page
  pageNumber: number; // Page order within the chapter
  createdAt: Date; // Timestamp for when the page was created
  updatedAt: Date; // Timestamp for the last update
}
ReadingProgress {
  id: string; // Unique identifier for the progress entry
  userId: string; // User ID of the reader
  bookId: string; // Foreign key linking to the associated book
  chapterId: string | null; // Foreign key linking to the associated chapter (optional)
  pageId: string | null; // Foreign key linking to the associated page (optional)
  progressType: string; // e.g., "book", "chapter", "page"
  progressPercentage: number; // Percentage progress (0 to 100)
  lastAccessedAt: Date; // Timestamp for when this progress was last updated
}
Favorite {
  id: string; // Unique identifier for the favorite
  userId: string; // User ID of the person who favorited
  bookId: string | null; // The book that is favorited (null if not a book)
  chapterId: string | null; // The chapter that is favorited (null if not a chapter)
  pageId: string | null; // The page that is favorited (null if not a page)
  favoritedAt: Date; // Timestamp for when the favorite was added
}


```

# ADMIN DASHBOARD
- build the route group
- add the admin page
- layout.ts


# CREATE BOOK

