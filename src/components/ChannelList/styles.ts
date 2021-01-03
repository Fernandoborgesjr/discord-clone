import styled from "styled-components";
import { Add } from "styled-icons/material";
export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar{
    display:none;
  }
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--grey);
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;

  color: var(--symbol);
  cursor:pointer;
  transition: color 200ms;
  &:hover{
    color:var(--white);
  }
`;
