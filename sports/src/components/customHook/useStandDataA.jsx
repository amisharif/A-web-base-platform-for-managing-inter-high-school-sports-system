import React from "react";
import useAxiosSecure from "./../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStandDataA = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: standDataA_A = [] } = useQuery({
        queryKey: ["standDataA"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/standing/a`);
            return result.data;
        },
    });

 return [standDataA_A, refetch];
};

export default useStandDataA;
