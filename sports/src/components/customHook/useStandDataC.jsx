import React from "react";
import useAxiosSecure from "./../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStandDataC = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: standDataC_A = [] } = useQuery({
        queryKey: ["standDataC"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/standing/c`);
            return result.data;
        },
    });

    return [standDataC_A, refetch];
};

export default useStandDataC;
