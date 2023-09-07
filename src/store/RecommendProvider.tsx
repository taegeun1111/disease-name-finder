import React, { ReactNode, useState } from 'react';
import { RecommendContext, RecommendContextObj } from './RecommendContext';
import { RecommendType } from '../types/recommend';

export const RecommendProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recommend, setRecommend] = useState<RecommendType[]>([]);

  const getRecommend = async () => {};

  const TodoContextValue: RecommendContextObj = {
    recommend,
    getRecommend,
  };

  return <RecommendContext.Provider value={TodoContextValue}>{children}</RecommendContext.Provider>;
};
