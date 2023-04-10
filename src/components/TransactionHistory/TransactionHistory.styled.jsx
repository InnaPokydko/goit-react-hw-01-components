import styled from '@emotion/styled';

export const TransHisTable = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 600px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const TransHisTrTitle = styled.tr`
  border: 1px solid;
  border: 1px solid #ddd;
  width: 100%;
  height: 40px;
  background-color: #148e96;
  color: white;
`;

export const TransHisTr = styled.tr`
  height: 40px;
  border: 1px solid grey;
  width: 100%;
  padding: 15px auto;
  text-align: center;
  &:nth-child(even){background-color: #f2f2f2;}
`;

export const TransHisTd = styled.td`
  border: 1px solid grey;
  
`;

