import { Footer } from "../atoms/header/Footer";
import { Header } from "../atoms/header/Header";

export const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
