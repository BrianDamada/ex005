import { useContext } from "react";
import "./App.css";
import Header from './components/Header/Header'
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./context/Theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <div
        className={`flex w-full h-[100vh] flex-col justify-between ${theme}`}
      >
        <Header />
        <div className="">
          <h1 className="text-center">HOME</h1>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
