import React from 'react';
import useAxiosSecure from './../useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGroupClone = () => {
   const axiosSecure = useAxiosSecure();
   const { refetch, data: groupClone = [] } = useQuery({
       queryKey: ["groupClone"],
       queryFn: async () => {
           const result = await axiosSecure.get(`/groupclone`);
           return result.data;
       },
   });

   return [groupClone,refetch]
};

export default useGroupClone;