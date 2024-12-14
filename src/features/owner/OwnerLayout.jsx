import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidebar from '../../ui/Sidebar'
import CustomNavlink from '../../ui/CustomNavLink'
import { HiCollection, HiHome } from 'react-icons/hi'

function OwnerLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomNavlink to="/owner/dashboard">
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavlink>

                <CustomNavlink to="/owner/projects">
                    <HiCollection />
                    <span>پروژه ها</span>
                </CustomNavlink>
            </Sidebar>
        </AppLayout>
    )
}

export default OwnerLayout