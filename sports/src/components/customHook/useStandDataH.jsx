import React from "react";
import useAxiosSecure from "./../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStandDataH = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: standDataH_A = [] } = useQuery({
        queryKey: ["standDataH"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/standing/h`);
            return result.data;
        },
    });

    return [standDataH_A, refetch];
};

export default useStandDataH;
