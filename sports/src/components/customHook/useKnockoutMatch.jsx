import React from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useKnockoutMatch = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: knockoutMatch = [] } = useQuery({
        queryKey: ["knockoutMatch"],
        queryFn: async () => {
            const result = await axiosSecure.get(`/admin/knockoutmatch`);
            return result.data;
        },
    });

    return [knockoutMatch, refetch];
};

export default useKnockoutMatch;
