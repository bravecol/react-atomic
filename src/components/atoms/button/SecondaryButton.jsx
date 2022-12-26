import styled from "@emotion/styled";
import { BaseButton } from "./BaseButton";

// ボタン要素のAtom
export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
