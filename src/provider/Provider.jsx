import App from "../App";
import { ThemeProvider } from "../context/Theme";

const Provider = () => {
  return (
    <ThemeProvider> {/* ThemeProvider deve envolver o App */}
      <App />
    </ThemeProvider>
  );
};

export default Provider;
