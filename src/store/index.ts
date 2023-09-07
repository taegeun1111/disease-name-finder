import { useContext } from 'react';
import { RecommendContext } from './recommend/RecommendContext';
import { InputContext } from './input/InputContext';

export const useRecommend = () => useContext(RecommendContext);
export const useInput = () => useContext(InputContext);
