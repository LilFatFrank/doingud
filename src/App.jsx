import { CssBaseline, ThemeProvider } from "@mui/material";
import { Web3ReactProvider } from "@web3-react/core";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Web3 from "web3/dist/web3.min.js";
import { AppContextProvider } from "./context/Context";
import "./style/app.scss";
import { theme } from "./style/styles";
import Wrapper from "./wrapper/Wrapper";

function App() {
  function getLibrary(provider) {
    return new Web3(provider);
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path="/" element={<Wrapper />} />
              <Route path="/:address" element={<Wrapper />} />
            </Switch>
          </Router>
        </ThemeProvider>
      </AppContextProvider>
    </Web3ReactProvider>
  );
}

export default App;
