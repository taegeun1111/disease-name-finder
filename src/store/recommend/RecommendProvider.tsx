import React, { ReactNode, useState } from 'react';
import { RecommendContext, RecommendContextObj } from './RecommendContext';
import { RecommendType } from '../../types/recommend';
import { finder } from '../../apis/finder';
import { SLICE_END_NUMBER, SLICE_START_NUMBER } from '../../service/constant/constantNumber';

export const RecommendProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recommend, setRecommend] = useState<RecommendType[]>([]);
  const [searched, setSearched] = useState<boolean>(false);

  const getRecommend = async (debouncedValue: string) => {
    console.log(`getRecommend `, recommend);
    if (debouncedValue.length === 0) {
      return setSearched(false);
    }

    const result = await finder(debouncedValue);
    if (result.length >= SLICE_END_NUMBER) {
      const updatedResult = result.slice(SLICE_START_NUMBER, SLICE_END_NUMBER);
      setRecommend(updatedResult);
    } else {
      setRecommend(result);
    }
    setSearched(true);
  };

  const RecommendContextValue: RecommendContextObj = {
    recommend,
    searched,
    getRecommend,
  };

  return <RecommendContext.Provider value={RecommendContextValue}>{children}</RecommendContext.Provider>;
};
