import React from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePlayers = () => {
  const axiosScure  = useAxiosSecure();
  const {refetch, data:players = [] } = useQuery({
    queryKey: ['players'],
    queryFn:async() => {
       
    }
  })
};

export default usePlayers;