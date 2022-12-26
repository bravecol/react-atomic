import { Router } from "./components/router/Router";
import { UserProvider } from "./providers/UserProviders";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
