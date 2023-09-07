import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { StyledRecommendList } from './RecommendList.styled';

interface Props {
  searchResult: string;
  selectedActive: boolean;
}

const RecommendList = ({ searchResult, selectedActive }: Props) => {
  return (
    <StyledRecommendList selectedActive={selectedActive}>
      <HiOutlineSearch className='recommend-icon' />
      <div className='recommend-text'>{searchResult}</div>
    </StyledRecommendList>
  );
};

export default RecommendList;
