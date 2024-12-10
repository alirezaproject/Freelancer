import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import Loading from "../../ui/Loading";

import DatePickerField from "../../ui/DatePickerField";
import useCategory from "../../hooks/useCategories";
import { TagsInput } from "react-tag-input-component";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditMode = Boolean(editId);
  let editValues = {};
  const {
    title,
    tags: prevTags,
    description,
    budget,
    category,
    deadline,
  } = projectToEdit;

  if (isEditMode) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));

  const { categories } = useCategory();

  const { IsCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditMode) {
      console.log(editId);

      editProject(
        { _id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        },
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: { value: 10, message: "طول عنوان نامعتبر است" },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: { value: 15, message: "حداقل 15 کاراکتر را وارد کنید" },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        required
        options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />

      <div className="!mt-8">
        {IsCreating ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
