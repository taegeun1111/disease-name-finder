import React, { ReactNode, useState } from 'react';
import { RecommendContext, RecommendContextObj } from './RecommendContext';
import { RecommendType } from '../types/recommend';
import { finder } from '../apis/finder';

export const RecommendProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recommend, setRecommend] = useState<RecommendType[]>([]);

  const getRecommend = async (debouncedValue: string) => {
    const result = await finder(debouncedValue);
    setRecommend(result);
    console.log(result);
  };

  const TodoContextValue: RecommendContextObj = {
    recommend,
    getRecommend,
  };

  return <RecommendContext.Provider value={TodoContextValue}>{children}</RecommendContext.Provider>;
};
