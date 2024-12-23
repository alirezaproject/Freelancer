import React from 'react'
import FilterDropDown from '../../../ui/FilterDropDown'
import useCategories from "../../../hooks/useCategories.js"
import Filter from '../../../ui/Filter.jsx';


const sortOptions = [
    { label: "مرتب سازی (جدید ترین)", value: "latest" },
    { label: "مرتب سازی (قدیمی ترین)", value: "earliest" },

]

const statusOptions = [
    { label: "همه", value: "ALL" },
    { label: "باز", value: "OPEN" },
    { label: "بسته", value: "CLOSED" },
];

function ProjectHeader() {
    const { transformedCategories } = useCategories();
    return (
        <div className='flex items-center justify-between text-secondary-700 mb-8'>
            <h1 className='text-lg font-bold '>لیست پروژه ها</h1>
            <div className='flex gap-x-8 items-center'>
                <Filter filterFiled="status" options={statusOptions} />
                <FilterDropDown filterField="category" options={[
                    {
                        value: "ALL",
                        label: "دسته بندی ( همه )",
                    },
                    ...transformedCategories,
                ]} />
                <FilterDropDown filterField="sort" options={sortOptions} />
            </div>
        </div>
    )
}

export default ProjectHeader