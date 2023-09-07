import styled from 'styled-components';

export const StyledErrorPage = styled.div`
  width: 30%;
  display: flex;
  min-height: 100vh;
  margin: 0 auto;

  .error {
    width: 100%;
    margin: auto;
    padding: 100px 0;
    box-sizing: border-box;
    text-align: center;
  }

  .error-title {
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 25px;
  }
  .back-btn {
    color: white;
    font-size: 18px;
    text-decoration: none;
    padding: 10px 15px;
    background-color: #116aff;
    border-radius: 10px;
    font-weight: 300;
  }
`;
