import React from "react";
import { Typography } from 'antd';
import MovieTable from "../MovieTable/MovieTable";
import classes from './MoviesSection.module.scss';

const { Title } = Typography;

const MoviesSection = () => {

    return (
        <div className={classes['movie-section']} id={'movie-section'}>
            <Title level={2}>Movies</Title>
            <hr/>
            <MovieTable />
        </div>
    )

}

export default MoviesSection;