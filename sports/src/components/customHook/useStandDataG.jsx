import React from "react";
import useAxiosSecure from "./../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStandDataG = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: standDataG_A = [] } = useQuery({
        queryKey: ["standDataG"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/standing/g`);
            return result.data;
        },
    });

    return [standDataG_A, refetch];
};

export default useStandDataG;
