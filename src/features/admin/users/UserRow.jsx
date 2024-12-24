import React, { useState } from 'react'
import Modal from '../../../ui/Modal';
import Table from '../../../ui/Table';
import ChangeUserStatus from './ChangeUserStatus';

const userStatus = [
    {
        label: "رد شده",
        className: "badge--danger",
    },
    {
        label: "در انتطار تایید",
        className: "badge--secondary",
    },
    {
        label: "تایید شده",
        className: "badge--primary",
    },
];


function UserRow({ user, index }) {
    const [open, setOpen] = useState(false);

    const { status } = user;

    return (
        <Table.Row key={user._id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.role}</td>
            <td>
                <span className={`badge ${userStatus[user?.status]?.className}`}>
                    {userStatus[user.status]?.label}
                </span>
            </td>
            <td>
                <Modal
                    title="تغییر وضعیت کاربر"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <ChangeUserStatus
                        userId={user._id}
                        onClose={() => setOpen(false)}
                    />
                </Modal>
                <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
            </td>



        </Table.Row>
    );
}

export default UserRow