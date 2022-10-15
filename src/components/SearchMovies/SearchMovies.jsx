import React, {useState} from "react";
import {Input, Table, Tag} from "antd";
import classes from './SearchMovies.module.scss';
import {listOfMovies} from "../../constants/constants";

const { Search } = Input;

const SearchMovies = () => {

    const header = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (name) => <p>{name}</p>,
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'genre',
            render: (year) => <p>{year}</p>,
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
            render: (text) => <Tag color="default">{text}</Tag>,
        }
    ]

    const [query, setQuery] = useState('/');

    const newData = listOfMovies;

    return (
        <div>
        <div className={classes['search-section']}>
            <div>
                <Search
                    placeholder="What movie are you looking for ?"
                    size="large"
                    allowClear
                    onSearch={(value) => setQuery(value)}
                    style={{
                        width: 400,
                    }}
                />
            </div>

        </div>

            {newData.some(movie => movie['name'].toString().toLowerCase().includes(query.toLowerCase())) ?
                <div className={'results'}>
                    <Table
                        columns={header}
                        dataSource={listOfMovies.filter(user => user['name'].toString().toLowerCase().includes(query.toLowerCase()))}
                        pagination={{ defaultPageSize: 7, showSizeChanger: true, pageSizeOptions: ['7', '10']}}
                    />
                </div>
                :
                <div></div>
            }

        </div>
    )
}

export default SearchMovies;