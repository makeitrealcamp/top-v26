import { Container } from "@mui/material";
import { GlobalStoreProvider } from "./redux-toolkit/StoreProvider";
import { CustomRouterProvider } from "./router";

import "./App.css";

function App() {
  return (
    <GlobalStoreProvider>
      <Container>
        <CustomRouterProvider />
      </Container>
    </GlobalStoreProvider>
  );
}

export default App;
