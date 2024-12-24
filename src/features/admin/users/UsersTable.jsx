import React from 'react'
import useUsers from '../useUsers';
import Loading from '../../../ui/Loading';
import Empty from '../../../ui/Empty';
import Table from '../../../ui/Table';
import UserRow from './UserRow';

function UsersTable() {
    const { isLoading, users } = useUsers();

    if (isLoading) return <Loading />;

    if (!users) return <Empty resourceName="کاربری" />;

    return (
        <Table>
            <Table.header>
                <th>#</th>
                <th>نام</th>
                <th>ایمیل</th>
                <th>شماره موبایل</th>
                <th>نقش</th>
                <th>وضعیت</th>
                <th>عملیات</th>

            </Table.header>
            <Table.body>
                {users.map((user, index) => (
                    <UserRow user={user} index={index} key={user._id} />
                ))}
            </Table.body>
        </Table>
    );
}

export default UsersTable