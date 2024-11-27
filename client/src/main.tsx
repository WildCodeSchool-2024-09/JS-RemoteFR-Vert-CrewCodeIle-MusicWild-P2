// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";
// Import the main app component
import AlbumsDetails from "./components/AlbumsDetails";
import ArtistDetails from "./components/ArtistDetails/ArtistDetails";
import CatalogDetails from "./components/CatalogDetails";
import CatalogDetailsAlbums from "./components/CatalogDetailsAlbums";
import AlbumsPage from "./pages/AlbumsPage";
import ArtistPage from "./pages/ArtistPage";
import ErrorPage from "./pages/ErrorPage";
import CatalogPage from "./pages/GenrePage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/artist",
        element: <ArtistPage />,
      },
      {
        path: "/albums",
        element: <AlbumsPage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "/catalog/artist/:id",
        element: <CatalogDetails />,
      },
      {
        path: "/catalog/artist/albums/:id",
        element: <CatalogDetailsAlbums />,
      },

      {
        path: "/artist/:id",
        element: <ArtistDetails />,
      },
      {
        path: "/albums/:id",
        element: <AlbumsDetails />,
      },
      {
        path: "/SearchPage/:categorySearch/:textSearch",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
