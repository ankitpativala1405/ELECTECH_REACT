import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavbarHeader from "./Components/navbar";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import AllRoutes from "./Routes/AllRoutes";
// import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <Header />
      <NavbarHeader />
      <AllRoutes />

      {/* <SignUp /> */}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
