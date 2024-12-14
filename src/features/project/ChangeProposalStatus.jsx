import React from "react";
import RHFSelect from "../../ui/RHFSelect";
import { useForm } from "react-hook-form";
import useChangeProposalStatus from "../projects/useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";
const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتضار تایید",
    value: 1,
  },
  {
    label: "تایی شده",
    value: 2,
  },
];
function ChangeProposalStatus({ proposalId, onClose }) {
  const { projectId } = useParams();
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: "project", projectId });
        },
      },
    );
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت درخواست"
          register={register}
          required
          options={options}
        />
        <div className="mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
