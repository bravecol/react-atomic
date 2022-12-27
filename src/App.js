import { Router } from "./components/router/Router";
import { UserProvider } from "./providers/UserProviders";
import { RecoilRoot } from "recoil";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
