import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.auth.loqout["$post"]>; 
type RequestType = InferRequestType<typeof client.api.auth.loqout["$post"]>; 

export const useLogout = () => {
  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async () => {
      const response = await client.api.auth.loqout["$post"](); 
      return await response.json();
    },
});

  return mutation;
};
  



