import React from "react";
import useAxiosSecure from "./../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStandDataE = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: standDataE_A = [] } = useQuery({
        queryKey: ["standDataE"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/standing/e`);
            return result.data;
        },
    });

    return [standDataE_A, refetch];
};

export default useStandDataE;
