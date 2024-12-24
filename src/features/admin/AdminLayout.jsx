import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import CustomNavlink from '../../ui/CustomNavLink'
import { HiCollection, HiHome, HiOutlineViewGrid, HiUser } from 'react-icons/hi'

function AdminLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomNavlink to="dashboard">
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavlink>

                <CustomNavlink to="users">
                    <HiUser />
                    <span>کاربران</span>
                </CustomNavlink>

                <CustomNavlink to="proposals">
                    <HiOutlineViewGrid />
                    <span>درخواست ها</span>
                </CustomNavlink>

                <CustomNavlink to="projects">
                    <HiCollection />
                    <span>پروژه ها</span>
                </CustomNavlink>
            </Sidebar>
        </AppLayout>
    )
}

export default AdminLayout