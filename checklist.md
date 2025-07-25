##  1. **Initial Setup**

###  Frontend Environment

* [ ] Set up React project with Vite + TypeScript
* [ ] Install dependencies:

  * [ ] `@tanstack/react-query`
  * [ ] `redux`, `@reduxjs/toolkit`
  * [ ] `react-router-dom@7`
  * [ ] `@emotion/react`, `@emotion/styled`
  * [ ] `react-markdown`
  * [ ] `sonner` (for toasts)
  * [ ] `zod`, `axios`, `clsx`, 
* [ ] Set up Tailwind CSS (optional but helps polish quickly)

###  Backend Environment

* [ ] Initialize `backend/` folder with Node.js + Express
* [ ] Install dependencies:

  * [ ] `express`, `cors`, `dotenv`
  * [ ] `@supabase/supabase-js`
  * [ ] `axios` (for GitHub proxying)
  * [ ] `jsonwebtoken`, `cookie-parser` (for GitHub OAuth/session)
* [ ] Connect to Supabase project:

  * [ ] Add API keys via `.env`
  * [ ] Initialize Supabase client


##  2. **Core Frontend Features**

###  User Profile Section

* [ ] Fetch and display GitHub profile
* [ ] Show avatar, name, bio, location, followers, etc.

###  Repository List

* [ ] Fetch public repositories
* [ ] Add pagination (infinite scroll or buttons)
* [ ] Add filtering and search by name
* [ ] Add sort by:

  * [ ] Stars
  * [ ] Forks
  * [ ] Recently updated

###  Repository Details Page

* [ ] Route: `/repo/:repoName`
* [ ] Show repo metadata (stars, license, etc.)
* [ ] Display README with `react-markdown`
* [ ] Show language usage chart (bar/pie)


##  3. **Authentication**

### GitHub OAuth (Optional)

* [ ] GitHub OAuth App setup (get client ID/secret)
* [ ] `/auth/github` redirect & callback handler
* [ ] Frontend GitHub login button
* [ ] Store session token (cookie or localStorage)
* [ ] Show personalized UI if user is logged in


##  4. **Backend & Supabase Features**

###  User Bookmarks

* [ ] Supabase table: `bookmarks` (`user_id`, `repo_name`, `note`)
* [ ] API:

  * [ ] `GET /user/bookmarks`
  * [ ] `POST /user/bookmarks`
  * [ ] `DELETE /user/bookmarks/:id`
* [ ] Frontend integration:

  * [ ] Add bookmark button to repo cards
  * [ ] Display bookmarks in a dashboard

###  Comparison History

* [ ] Supabase table: `comparisons` (`user_id`, `target_username`, `timestamp`)
* [ ] API:

  * [ ] `GET /user/comparisons`
  * [ ] `POST /user/comparisons`
* [ ] Frontend:

  * [ ] Compare current user vs another GitHub user
  * [ ] Display side-by-side stats
  * [ ] Show past comparison history

###  UI Preferences

* [ ] Supabase table: `preferences` (`user_id`, `theme`, `sortOrder`, etc.)
* [ ] Load/save user settings on login


##  5. **Performance & DX**

* [ ] Use `prefetchQuery()` on hover for repos
* [ ] Add debounce to search input
* [ ] Use `TanStack Devtools` for debugging
* [ ] Add loading & error states for all queries


##  6. **Bonus Features (Optional but Fun)**

###  Personalization & Fun

* [ ] GitHub Avatar hover effects / ASCII mode toggle
* [ ] Easter egg modal (e.g., Konami code, 404 joke)
* [ ] Random GitHub facts on app open
* [ ] Dev quote generator

###  Dashboard & Analytics

* [ ] Contribution heatmap (SVG-style calendar)
* [ ] Top 3 starred repos summary card
* [ ] "Repo of the Day" highlight

###  Shareable Repo Cards

* [ ] Create image preview of repo stats
* [ ] Generate OpenGraph-style card (e.g., with `html2canvas`)
* [ ] Add share buttons for Twitter, LinkedIn

###  Themes & Visuals

* [ ] Theme switcher (Light, Dark, Retro, Hacker)
* [ ] Save theme in Supabase or localStorage
* [ ] Animate loading states (e.g., Lottie)

###  Admin/Dev Mode

* [ ] Add `:godmode` secret toggle
* [ ] Show API response times, request logs
* [ ] Rate limit tracker (remaining calls)

---

##  7. **Deployment Checklist**

* [ ] Deploy frontend to **Vercel** or **Netlify**
* [ ] Deploy backend to **Render**, **Railway**, or **Fly.io**
* [ ] Add environment variables:

  * GitHub API token (backend)
  * Supabase project URL + anon key
* [ ] Set up GitHub OAuth redirect URI
* [ ] Use `.env` in both frontend & backend


##  8. **Documentation & Polish**

* [ ] Finalize `README.md` (you’re already doing great!)
* [ ] Add backend-specific `README.md` in `/backend`
* [ ] Write API docs (or use Swagger if you want!)
* [ ] Include instructions to run dev mode (for both FE + BE)
* [ ] Add screenshots or screen recordings
* [ ] Optional: publish a blog post or Dev.to article on building it!

