import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.auth.loqout["$post"]>; 

export const useLogout = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    ResponseType,
    Error
  >({
    mutationFn: async () => {
      const response = await client.api.auth.loqout["$post"](); 
      return await response.json();
    },
});

  return mutation;
};
  



