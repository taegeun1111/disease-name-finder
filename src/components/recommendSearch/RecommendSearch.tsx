import React from 'react';
import { StyledRecommendSearch } from './RecommendSearch.styled';
import RecommendList from './RecommendList';
import { useInput, useRecommend } from '../../store/index';

const RecommendSearch = () => {
  const { recommend, searched } = useRecommend();
  const { selected } = useInput();
  return (
    <StyledRecommendSearch>
      <p className='recommend-title'>추천 검색어</p>

      {searched ? (
        recommend.length === 0 ? (
          <div>검색 결과가 없습니다.</div>
        ) : (
          recommend.map((result, index) => (
            <RecommendList key={result.sickCd} searchResult={result.sickNm} selectedActive={index === selected} />
          ))
        )
      ) : (
        <div>검색어를 입력해주세요</div>
      )}
    </StyledRecommendSearch>
  );
};

export default RecommendSearch;
