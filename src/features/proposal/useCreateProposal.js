import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalApi } from "../../services/proposalService";

export default function useCreateProposal() {
  const queryClient = useQueryClient();
  const { mutate: createProposal, isPending: IsCreating } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (err) => toast.error(err?.response.data.message),
  });

  return { createProposal, IsCreating };
}
