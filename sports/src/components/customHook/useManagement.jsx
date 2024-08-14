import React from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useManagement = () => {
   
    const axiosSecure = useAxiosSecure();
    const {refetch,data:management = [] } = useQuery({
        queryKey:['management'],
        queryFn:async() => {
            const result = await axiosSecure.get(`/management`);
            return result.data;
        }
    })

    return [management,refetch]
};

export default useManagement;