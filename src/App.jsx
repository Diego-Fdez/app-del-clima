import AppClima from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {

  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppClima />
      <footer>┬ęCopyright Diego Fedez</footer>
    </ClimaProvider>
  )
};

export default App;
