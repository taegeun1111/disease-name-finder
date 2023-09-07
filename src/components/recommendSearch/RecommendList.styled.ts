import styled from 'styled-components';

interface Props {
  $selectedActive: boolean;
}

export const StyledRecommendList = styled.div<Props>`
  ${(props) =>
    props.$selectedActive &&
    `
    background-color: #116aff;
    color: white;
  `}
  display: flex;
  margin-bottom: 12px;
  padding: 10px 10px;
  border-radius: 5px;

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
