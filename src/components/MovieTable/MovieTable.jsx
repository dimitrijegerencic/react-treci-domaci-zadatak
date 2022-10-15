import React, {useState} from "react";
import {Button, Table} from "antd";
import {listOfMovies} from "../../constants/constants";
import {useAppData} from "../../context/AppContext";
import SelectedMovie from "../SelectedMovie/SelectedMovie";
import {Modal} from "antd";
import {Tag} from "antd";
import classes from './MovieTable.module.scss';

const MovieTable = () => {

    const [sortedInfo, setSortedInfo] = useState({});

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
            sorter: (a, b) => a.year - b.year,
            sortOrder: sortedInfo.columnKey === 'year' ? sortedInfo.order : null,
            render: (year) => <p>{year}</p>,
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
            render: (text) => <Tag color="default">{text}</Tag>,
        }
    ]

    //za sortiranje kolone u tabeli

    const setAgeSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'year',
        });
    };

    const clearSorters = () => {
        setSortedInfo({});
    };

    const data = listOfMovies;

    const {setSelectedMovie} = useAppData();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classes['table-section']}>
            <Modal title="Movie info"
                   open={isModalOpen}
                   onCancel={handleCancel}
                   width={"50vw"}
                   maskClosable={false}
                   footer={null}>

                <SelectedMovie/>

            </Modal>

            <Button onClick={setAgeSort}>Sort by year</Button>
            <Button onClick={clearSorters}>Clear</Button>

            <Table
                columns={header}
                dataSource={data}
                className={classes['movie-table']}
                pagination={{ defaultPageSize: 7, showSizeChanger: true, pageSizeOptions: ['7', '10', data.length]}}
                onRow={(r) => ({
                    onClick:()=>{setSelectedMovie(r); showModal()},
                })}/>
        </div>
    )
}

export default MovieTable;