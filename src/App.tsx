import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Routers } from "./services/routes";
import GlobalStyle from "./style/globals";
import { UserProvider } from "./services/contextAPI";


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routers/>
        <GlobalStyle/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
