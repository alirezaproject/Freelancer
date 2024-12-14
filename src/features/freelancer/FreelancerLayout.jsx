import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import CustomNavlink from '../../ui/CustomNavLink'
import { HiCollection, HiHome } from 'react-icons/hi'

function FreelancerLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomNavlink to="dashboard">
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavlink>

                <CustomNavlink to="projects">
                    <HiCollection />
                    <span>پروژه ها</span>
                </CustomNavlink>

                <CustomNavlink to="proposals">
                    <HiCollection />
                    <span>درخواست ها</span>
                </CustomNavlink>
            </Sidebar>
        </AppLayout>
    )
}

export default FreelancerLayout