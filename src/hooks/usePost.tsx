import { useContext } from 'react';

import { PostContext } from '../contexts/PostContext';

export function usePost() {
  const value = useContext(PostContext);
  return value;
}