# 🎬 Netflix Clone

A minimal **React + Vite** movie web app inspired by Netflix.  
It lets users sign up, browse movie lists powered by TMDB, and stream trailers seamlessly — with Firebase authentication and responsive design.  

**Live Demo:** (https://umbra-netflis.netlify.app/)

## 🖼️ Screenshots

![Home Page](docs/screenshots/home.png)  
![Player Page](docs/screenshots/player.png)

---

## Tech Stack

This project was built using the following technologies and tools:

### Core Framework
- **[React](https://react.dev/)** – Frontend library for building dynamic UIs  
- **[Vite](https://vitejs.dev/)** – Modern build tool for lightning-fast development  

### Routing
- **[React Router](https://reactrouter.com/)** – Declarative client-side routing for React  
  - Used `useNavigate` for seamless navigation between pages  

### Authentication & Security
- **[Firebase Authentication](https://firebase.google.com/docs/auth)** – Handles user sign-up, login, and session management using secure tokens  
  - Includes helpers for `signup` and `login` within [`src/firebase.js`](src/firebase.js)
 
    
### Data & APIs
- **[TMDB API](https://www.themoviedb.org/documentation/api)** – Provides live movie lists, posters, and data for the UI  
- **REST API Integration** – Data is fetched using RESTful endpoints from TMDB  
  - Endpoints include:  
    - `GET /movie/popular` – Fetches trending movies  
    - `GET /movie/:id/videos` – Retrieves movie trailers  
  - **Tools Used:** Axios (for requests), Fetch API (optional for native calls)
- **[ESLint](https://eslint.org/)** – For maintaining clean and consistent code style  
- **Vanilla CSS** – Custom handcrafted responsive design for all components  

## Features

- 🔐 **User Authentication** – Firebase-based secure login and registration  
- 🎞️ **Dynamic Movie Lists** – Fetches trending movies directly from TMDB  
- 🎥 **Movie Player Page** – Watch trailers and previews within the app  
- 🚦 **Smooth Routing** – Seamless transitions between Home, Login, and Player pages  
- 📱 **Responsive Design** – Works perfectly across mobile, tablet, and desktop  

