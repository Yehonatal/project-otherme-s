# Project: **OtherMe 2**

A minimal GitHub profile explorer centered around **my GitHub account** – showcasing repositories, project insights, and language breakdowns. Built with **React + TanStack Query**, **Redux Toolkit**, and **Emotion**, this app emphasizes clean UI, smart state management, and developer-focused data views.


##  Tech Stack

| Layer           | Tool/Library              |
|----------------|---------------------------|
| **UI**         | React + Emotion (CSS-in-JS) |
| **Routing**    | React Router v7           |
| **Toast**      | Sonner                    |
| **PreFetching**      | Debounce and prefetchQuery(tanstack query)                    |
| **Data Fetching** | TanStack Query (React Query) |
| **State Management** | Redux Toolkit + Redux Saga |
| **Markdown Rendering** | React Markdown |
| **Dev Tools**  | Vite, TypeScript          |


**Backend** : To support persistence, personalization, and authenticated access, the app includes a backend powered by **Node.js**, **Express**, and **Supabase**.

| Layer            | Stack / Service              |
|------------------|------------------------------|
| **Backend Server** | Node.js + Express            |
| **Database**      | Supabase (PostgreSQL + Auth) |
| **Data Access**   | Supabase SDK + SQL queries   |
| **Deployment**    | Render     |


##  Core API Endpoints

- **User Profile Information**  
  `GET https://api.github.com/users/yehonatal`

- **Public Repositories**  
  `GET https://api.github.com/users/yehonatal/repos`

- **Specific Repository Details**  
  `GET https://api.github.com/repos/yehonatal/{repo}`

- **Repository README.md**  
  `GET https://raw.githubusercontent.com/yehonatal/{repo}/main/README.md`

- **Repository Language Breakdown**  
  `GET https://api.github.com/repos/yehonatal/{repo}/languages`

- **Get Search suggestion based on user input**  
  `GET https://api.github.com/search/users?q=yehonatal`

##  Features

###  User Profile Section
- Avatar, name, bio
- Email, company, location (if available)
- Followers / Following counts
- GitHub profile link

###  Repository List
- Paginated list of public repositories
- Filter/search by name
- Sort options:
  - Stars
  - Forks
  - Recently updated

###  Repository Details View
- Project metadata: stars, forks, license, open issues
- Language usage breakdown (pie/bar chart)
- Embedded `README.md` via **react-markdown**
- Bookmark feature using Redux

### Backend Features

- **Optional GitHub OAuth Login**  
  Allows users to authenticate using GitHub and unlock:
  - Secure session management
  - Personalized features tied to user accounts

- **Persistent Personalization**
  - Bookmark & star repositories across devices
  - Save GitHub user comparisons for future access
  - Store UI preferences (e.g., theme, sort order)

- **Secure GitHub API Proxy**
  - All GitHub requests routed through Express
  - Enables token security, response caching, and request throttling

##  Future Enhancements

- User Comparison Mode
  - Compare `my account for example` with another GitHub user
  - Side-by-side views of repo stats, contributions, stars

- Shareable Repo & Stats Cards
  - Visual summary cards for repos/user stats
  - Export/share to social platforms (image or link)

- Deep Linking for Repositories
  - Navigate directly to `/repo/:repoName`
  - Supports route-based or modal-based views


## Fun Bonus Hidden Features 
- Type :godmode in the search bar to enable dev-only stats:
  - API response time
  - Number of requests made
  - Rate limit countdown
- Random repo of the day
- Customizable themes 
  - “Pro Hacker (Dark)”
  - “Retro Terminal”
  - “Minion Mode” (fun yellow + emoji overload)