# 🌐 Personal Blog – HTML, CSS & JavaScript

A clean, dynamic, and fully customizable static blog — perfect for learning, portfolios, and educational projects.

## 📌 About This Project

This project is a simple blog system built using only **HTML, CSS, and JavaScript**, without any backend or database.

All posts are managed through a single **JSON file**, which works as a "mini database." This makes the blog extremely easy to use, edit, and expand.

It was originally created for English-learning assignments, but its structure is flexible enough for anyone to build their own blog.

---

## 🧩 How the Blog Works

The blog is built with three essential components:

### 1️⃣ HTML – Post Structure

Each post is an individual HTML file stored in:
```
/posts
```

All posts use the same base template:
```
posts/template.html
```

This template includes:
- A banner
- A main content area
- Styled text (h1–h4, p)
- Images
- YouTube videos
- Audio players
- Galleries
- Previous/Next navigation

**To create a new post:**
1. Copy `template.html`
2. Rename it (example: `my-new-post.html`)
3. Replace the content with your own

All styles will automatically apply.

---

### 2️⃣ JSON – Post Database

`posts/posts.json` contains all the information needed to display posts on the site.

Each entry looks like this:
```json
{
  "banner": "my-family.jpg",
  "resources": "family-hobbies",
  "title": "My Family and Hobbies",
  "description": "In this post, I talk about my family, my favorite hobbies, and how these activities help me relax and keep learning English.",
  "file": "family-hobbies.html"
}
```

This JSON controls:
- The blog post list on `blog.html`
- The recent posts section
- The post navigation system (Previous / Next)

**To add a new post:** ➡️ Just add a new object to this JSON file.

---

### 3️⃣ JavaScript – Dynamic Blog Features

JavaScript makes the blog fully dynamic.

#### 📄 blog-list.js
Loads all posts from `posts.json` and creates the cards on the blog homepage.
```javascript
const response = await fetch('posts/posts.json');
const posts = await response.json();
```

#### 🕒 recent-posts.js
Shows the three most recent posts at the bottom of each post.
```javascript
const recentPosts = posts.slice(-3).reverse();
```

#### ↔️ post-navigation.js
Automatically generates the Previous and Next links at the bottom of every post.
```javascript
const currentIndex = posts.findIndex(post => post.file === currentFile);
```

If there is no previous/next post, the button disappears.

---

## 🎨 Styling (CSS)

All blog styles are located in:
```
styles/style.css
```

Includes:
- Responsive layout
- Post grid (1, 2, or 3 columns)
- Typography rules
- Image formatting
- Video & audio containers
- Galleries
- Navigation buttons

Everything is modular — simply apply the provided classes in your post and the layout will adapt automatically.

---

## 🛠️ How to Create a New Post (Step-by-Step)

### 1. Create a resources folder

Inside:
```
posts/resources/
```

Create a folder:
```
posts/resources/my-new-post/
```

Add your images, audio, or videos there.

### 2. Copy the template

Duplicate:
```
posts/template.html
```

Rename it:
```
my-new-post.html
```

### 3. Edit the content

Replace:
- Title
- Images
- Text
- Videos
- Audio
- Galleries
- Author section

### 4. Add the post to the JSON

Open:
```
posts/posts.json
```

Add:
```json
{
  "banner": "banner.jpg",
  "resources": "my-new-post",
  "title": "My New Post",
  "description": "A short summary of my new blog entry.",
  "file": "my-new-post.html"
}
```

**And you're done! 🎉** Your post will automatically appear on the homepage.

---

## 🚀 How to Use This Project

### Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
```

### Open the project

Just open:
```
index.html
```

No server or backend required.

### Deploying to GitHub Pages (optional)

Go to:
```
Repository → Settings → Pages → Deploy
```

Your blog will be published online automatically.

---

## 🧑‍💻 Technologies Used

- HTML5
- CSS3 (Responsive layout)
- Vanilla JavaScript
- JSON
- GitHub Pages (optional hosting)

---

## 📬 Contact

If you need help customizing the template or adding new features, feel free to reach out!

⭐ **If you like this project, don't forget to leave a star on GitHub!**