import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy";
import { RefundPolicy } from "./components/RefundPolicy/RefundPolicy";
import { Contact } from "./components/Contact/Contact";
import { Rentals } from "./components/Rentals/Rentals";
import { Products } from "./components/Products/Products";
import { Buy } from "./components/Buy/Buy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/privacypolicy",
      element: (
        <>
          <Navbar />
          <PrivacyPolicy />
        </>
      ),
    },
    {
      path: "/refundpolicy",
      element: (
        <>
          <Navbar />
          <RefundPolicy />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/rentals",
      element: (
        <>
          <Navbar />
          <Rentals />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Navbar />
          <Products />
        </>
      ),
    },
    {
      path: "/payment-gateway",
      element: (
        <>
          <Navbar />
          <Buy />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
