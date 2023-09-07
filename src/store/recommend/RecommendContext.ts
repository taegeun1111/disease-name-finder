import React from 'react';
import { RecommendType } from '../../types/recommend';

export type RecommendContextObj = {
  recommend: RecommendType[];
  searched: boolean;
  getRecommend: (search: string) => void;
};

export const RecommendContext = React.createContext<RecommendContextObj>({
  recommend: [],
  searched: false,
  getRecommend: () => {},
});
