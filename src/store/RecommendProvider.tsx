import React, { ReactNode, useState } from 'react';
import { RecommendContext, RecommendContextObj } from './RecommendContext';
import { RecommendType } from '../types/recommend';
import { finder } from '../apis/finder';

export const RecommendProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recommend, setRecommend] = useState<RecommendType[]>([]);

  const getRecommend = async (debouncedValue: string) => {
    const result = await finder(debouncedValue);

    if (result.length >= 10) {
      const updatedResult = result.slice(0, 9);
      console.log(updatedResult);
      setRecommend(updatedResult);
    } else {
      setRecommend(result);
    }
    //FIXME
    console.log(result);
  };

  const TodoContextValue: RecommendContextObj = {
    recommend,
    getRecommend,
  };

  return <RecommendContext.Provider value={TodoContextValue}>{children}</RecommendContext.Provider>;
};
