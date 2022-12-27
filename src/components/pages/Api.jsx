import styled from "@emotion/styled";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import axios from 'axios';

export const Api = () => {
  const onClickAll = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data);
    }).catch((err) => console.log(err));
  }

  const onClickUser = () => {
    axios.get('https://jsonplaceholder.typicode.com/users?id=1').then((res) => {
      console.log(res.data);
    }).catch((err) => console.log(err));
  }

  return (
    <SContainer>
      <h2>API通信テスト(axios)</h2>
      <SecondaryButton onClick={ onClickAll }>ユーザー情報全取得</SecondaryButton>
      <br />
      <SecondaryButton onClick={ onClickUser }>ユーザー情報取得（No.1のみ）</SecondaryButton>
    </SContainer>
  )
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
