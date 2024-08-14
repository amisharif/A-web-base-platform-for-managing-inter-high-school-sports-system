import React from "react";
import useAxiosSecure from "./../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStandDataF = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: standDataF_A = [] } = useQuery({
        queryKey: ["standDataF"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/standing/f`);
            return result.data;
        },
    });

    return [standDataF_A, refetch];
};

export default useStandDataF;
