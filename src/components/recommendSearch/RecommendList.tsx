import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { StyledRecommendList } from './RecommendList.styled';

const RecommendList = () => {
  return (
    <StyledRecommendList>
      <HiOutlineSearch className='recommend-icon' />
      <div className='recommend-text'>간세포암</div>
    </StyledRecommendList>
  );
};

export default RecommendList;
