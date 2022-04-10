import styled from "styled-components";

const Button = styled.button`
  background-color: #8bc34a;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #41601e;
    transition: background-color .4s linear;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #c1df9d;
  }
`;

export const PrevBtn = styled(Button)`

`
export const NextBtn = styled(Button)`

`

export const PaginationGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
`
export const CurrentPage = styled.p`
  font-size: 14px;
  font-weight: 600;
`