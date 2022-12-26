import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProviders";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };

  return (
    <SContainer>
      <h2>トップページ</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者用</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般用</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
