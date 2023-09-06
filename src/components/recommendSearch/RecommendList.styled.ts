import styled from 'styled-components';

export const StyledRecommendList = styled.div`
  display: flex;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }

  .recommend-icon,
  .recommend-text {
    font-size: 16px;
  }

  .recommend-icon {
    margin-right: 7px;
  }
`;
