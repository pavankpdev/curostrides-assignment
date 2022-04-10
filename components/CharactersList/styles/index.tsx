import styled from "styled-components";

type ListRowProps =  {
    isHeader?: boolean
}
type ListItemProps =  {
    isOriginUnknown?: boolean,
}

export const List = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const ListHead = styled.thead`
    background-color: #8bc34a;
`;

export const ListBody = styled.tbody`
  background-color: #eeeeee
`;

export const ListRow = styled.tr`
  background-color:
          ${(props:ListRowProps ) =>
                  props.isHeader ? '#8bc34a' : '#eeeeee'
          };
`;

export const ListHeadItem = styled.th`
  padding: 1rem;
  text-align: center;
`;

export const ListItem = styled.td`
  padding: .5rem;
  text-align: center;
  background-color:
          ${(props:ListItemProps ) =>
                  props.isOriginUnknown ? '#ffadad' : '#eeeeee'
          };
  
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 24px;
`



