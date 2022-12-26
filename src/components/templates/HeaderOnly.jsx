import { Header } from "../atoms/header/Header";

export const HeaderOnly = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
