import React, {useEffect, useState} from "react";
import {Input, Table, Tag} from "antd";
import classes from './UserSearch.module.scss';

const { Search } = Input;

const UserSearch = ({title, list = [], search}) => {

    const [query, setQuery] = useState('/');

    useEffect(() => {
        if(query?.length >= 1){
            search(query)
        }else{
            search('/')
        }
    }, [query])

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
        <div className={classes["filter-list"]}>
            <div className={classes['user-search-field']}>
                <Search
                    placeholder={"Search users " + title}
                    size="large"
                    allowClear
                    onSearch={(value) => setQuery(value)}
                    style={{
                        width: 400,
                        borderRadius : "12px"
                    }}
                />
            </div>
            <div className={classes['user-table-results']}>
                <Table
                    columns={header}
                    dataSource={list}
                />
            </div>
    </div>)
}

export default UserSearch;