import React, {useState} from "react";
import {Button, Col, Popover, Progress, Row} from "antd";
import { EyeOutlined } from '@ant-design/icons';
import PeopleWhoWatched from "../PeopleWhoWatched/PeopleWhoWatched";
import classes from './MovieCard.module.scss';

const MovieCard = ({
                        title,
                        genre,
                        year,
                        grade,
                        length,
                        image,
                        actors
}) => {

    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    return (
        <div>
            <div className={classes['movie-card']}>
                <div className={classes['movie-poster']}>
                    <img src={image} alt="Movie poster"/>
                </div>
                <div className={classes['movie-info']}>
                    <div className={classes['movie-title']}>
                        <h1>{title}</h1>
                    </div>
                    <div className={classes['cast']}>
                        <span>Starring: </span>
                        {actors.join(', ')}
                    </div>
                    <div className={classes['show-grade']}>
                        <Row>
                            <Col span={12}>
                                <Popover
                                    content={<PeopleWhoWatched/>}
                                    title="People who watched this movie"
                                    trigger="click"
                                    open={open}
                                    onOpenChange={handleOpenChange}
                                >
                                    <Button
                                        type={"danger"}
                                        className={classes['show-button']}
                                        icon={<EyeOutlined />}
                                        shape={"round"}
                                        size={"large"}>
                                        SHOW USERS
                                    </Button>
                                </Popover>
                            </Col>
                            <Col span={12}>
                                <Progress type="circle" percent={grade*10} width={52}/>
                            </Col>
                        </Row>
                    </div>

                    <div className={classes['year-genre']}>
                        <Row>
                            <Col span={8}>
                                {year}
                            </Col>
                            <Col span={8}>
                                {length} min
                            </Col>
                            <Col span={8}>
                                {genre}
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;


