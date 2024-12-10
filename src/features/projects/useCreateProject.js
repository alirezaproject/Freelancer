import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();
  const { mutate: createProject, isPending: IsCreating } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: () => {
      toast.success("پروژه با موفقیت ایجاد شد");
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => toast.error(err?.response.data.message),
  });

  return { createProject, IsCreating };
}
