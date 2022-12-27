import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProviders";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const navigate = useNavigate();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };
  const onClickApi = () => {
    navigate("/api");
  };

  return (
    <SContainer>
      <h2>トップページ</h2>
      <SecondaryButton onClick={ onClickAdmin }>管理者用</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={ onClickGeneral }>一般用</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={ onClickApi }>API通信テスト</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
