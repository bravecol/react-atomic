import styled from "@emotion/styled";

// button要素の共通CSS
export const BaseButton = styled.button`
  color: #fff;
  outline: none;
  border: none;
  padding: 6px 24px;
  border-radius: 9999px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
