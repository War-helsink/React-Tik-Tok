import { useGetUserQuery } from "../../api/api";

export const useUser = (uniqueId: string) => {
	const { data, isLoading } = useGetUserQuery({ uniqueId });

	return { data: data ? data.data : null, isLoading };
};
