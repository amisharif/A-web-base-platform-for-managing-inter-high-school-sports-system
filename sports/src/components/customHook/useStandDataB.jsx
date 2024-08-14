import React from "react";
import useAxiosSecure from "./../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStandDataB = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: standDataB_A = [] } = useQuery({
        queryKey: ["standDataB"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/standing/b`);
            return result.data;
        },
    });

    return [standDataB_A, refetch];
};

export default useStandDataB;
