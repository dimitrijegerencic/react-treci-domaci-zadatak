import React from "react";
import {useAppData} from "../../context/AppContext";
import {Table, Tag} from "antd";

const PeopleWhoWatched = () => {

    const {selectedMovie} = useAppData();

    const header = [
        {
            title: 'First name',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (firstName) => <p>{firstName}</p>,
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'lastName',
            render: (lastName) => <p>{lastName}</p>,
        },

        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            render: (text) => <Tag color="default">{text}</Tag>,
        }
    ]

    return (
        <div>
            <Table
                columns={header}
                dataSource={selectedMovie?.users}
                pagination={{ defaultPageSize: 2, showSizeChanger: true, pageSizeOptions: ['2', selectedMovie?.users.length]}}
            />
        </div>
    )
}

export default PeopleWhoWatched;