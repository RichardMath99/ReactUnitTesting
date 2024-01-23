import styled from 'styled-components';

export const StyledListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #56a2c2;
`;

export const StyledListTitle = styled.h1`
  font-size: 40px;
  color: #fff;
  margin-bottom: 30px;
`;

export const StyledListModal = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #3699ab;
`;

export const StyledInput = styled.input`
  padding: 8px;
  width: 70%;
`;


export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  background-color: #01b5ae;
  color: white;
  padding: 8px 16px;
  border: 1px solid #01b5ae;
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  color: #fff;
  &:last-child {
    border-bottom: none;
  }
`;

export const StyledRemoveButton = styled.button`
  background-color: #f54444;
  color: white;
  padding: 4px 8px;
  border: 1px solid #f54444;
  border-radius: 4px;
  cursor: pointer;
`;
