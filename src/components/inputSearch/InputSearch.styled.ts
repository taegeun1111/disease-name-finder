import styled from 'styled-components';

interface Props {
  $focused: boolean;
}

export const StyledInputSearch = styled.div<Props>`
  ${(props) =>
    props.$focused &&
    `
      outline: 2px solid #116aff;
    `}

  width: 80%;
  box-sizing: border-box;
  background-color: white;
  border-radius: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;

  .search-input {
    width: 85%;
    background: none;
    border: none;
    font-size: 20px;
    outline: none;
  }

  .search-btn {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 27px;
    background-color: #116aff;
    color: white;
    border-radius: 150px;
    border: none;
    cursor: pointer;
  }
`;
