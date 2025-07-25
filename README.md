# Project: **OtherMe 2**

A minimal GitHub profile explorer centered around **my GitHub account** – showcasing repositories, project insights, and language breakdowns. Built with **React + TanStack Query**, **Redux Toolkit**, and **Emotion**, this app emphasizes clean UI, smart state management, and developer-focused data views.


##  Tech Stack

| Layer           | Tool/Library              |
|----------------|---------------------------|
| **UI**         | React + Emotion (CSS-in-JS) |
| **Routing**    | React Router v7           |
| **Data Fetching** | TanStack Query (React Query) |
| **State Management** | Redux Toolkit + Redux Saga |
| **Markdown Rendering** | React Markdown |
| **Dev Tools**  | Vite, TypeScript          |


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



##  Future Enhancements

###  User Comparison Mode
- Compare `yehonatal` with another GitHub user
- Side-by-side views of repo stats, contributions, stars

###  Shareable Repo & Stats Cards
- Visual summary cards for repos/user stats
- Export/share to social platforms (image or link)

###  Deep Linking for Repositories
- Navigate directly to `/repo/:repoName`
- Supports route-based or modal-based views


