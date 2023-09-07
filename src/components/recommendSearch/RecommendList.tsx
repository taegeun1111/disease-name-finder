import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { StyledRecommendList } from './RecommendList.styled';

interface Props {
  searchResult: string;
}

const RecommendList = ({ searchResult }: Props) => {
  return (
    <StyledRecommendList>
      <HiOutlineSearch className='recommend-icon' />
      <div className='recommend-text'>{searchResult}</div>
    </StyledRecommendList>
  );
};

export default RecommendList;
