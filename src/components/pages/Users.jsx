import styled from "@emotion/styled";
import { userState } from "../../store/userState";
import { useRecoilState } from 'recoil';
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molucules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((num) => {
  return {
    id: num,
    name: `コル${num}`,
    company: { name: "ぬこぬこカンパニー" },
    email: `col${num}@abc.com`,
    phone: "000-9999-8888",
    website: "https://google.com",
    image: "https://source.unsplash.com/iL-5iQu8t-o"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);

  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={ onClickSwitch }>切り替え</SecondaryButton>
      <SUserArea>
        { users.map((user) => (
          <UserCard key={ user.id } user={ user } />
        )) }
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
