import React from "react";
import useAxiosSecure from "./../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStandDataD = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: standDataD_A = [] } = useQuery({
        queryKey: ["standDataD"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/standing/d`);
            return result.data;
        },
    });

    return [standDataD_A, refetch];
};

export default useStandDataD;
