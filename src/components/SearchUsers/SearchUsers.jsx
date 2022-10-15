import React, {useReducer, useState} from "react";
import {listOfUsers} from "../../constants/constants";
import UserSearch from "../UserSearch/UserSearch";
import {Button, Dropdown, Menu, Typography} from "antd";
import  classes from './SearchUsers.module.scss';

const { Title } = Typography;

const reducer = (state, action) => {

    switch(action.type){
        case 'search-name':
            return listOfUsers.filter(user => user.firstName.toString().toLowerCase().includes(action.data.toLowerCase()));
        case 'search-surname':
            return listOfUsers.filter(user => user.lastName.toString().toLowerCase().includes(action.data.toLowerCase()));
        case 'search-age':
            return listOfUsers.filter(user => user.age.toString().toLowerCase().includes(action.data.toLowerCase()));
        case 'search-city':
            return listOfUsers.filter(user => user.city.toString().toLowerCase().includes(action.data.toLowerCase()));
        default:
            return listOfUsers;
    }
}

const SearchUsers = () => {

    const [tabInView, setTabInView] = useState("firstName");
    const [list, dispatch] = useReducer(reducer, []);

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a type={'button'}
                           className={tabInView === "firstName" ? classes['tab-active'] : classes['']}
                           onClick={() => setTabInView("firstName")}>
                            First name
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a type={'button'}
                           className={tabInView === "lastName" ? classes['tab-active'] : classes['']}
                           onClick={() => setTabInView("lastName")}>
                            Last name
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a type={'button'}
                           className={tabInView === "age" ? classes['tab-active'] : classes['']}
                           onClick={() => setTabInView("age")}>
                            Age
                        </a>
                    ),
                },
                {
                    key: '4',
                    label: (
                        <a type={'button'}
                           className={tabInView === "city" ? classes['tab-active'] : classes['']}
                           onClick={() => setTabInView("city")}>
                            City
                        </a>
                    ),
                },
            ]}
        />
    );

    return (
        <div className={classes['users-section']}>
            <Title level={2}>Search users</Title>
            <hr/>
            <div className={classes['filter-div']}>
                <Dropdown overlay={menu} placement="bottomLeft">
                    <Button>Filter by</Button>
                </Dropdown>
            </div>

            <div className={classes['search-section']}>

                {tabInView === "firstName" && <UserSearch
                    title="by first name"
                    list={list}
                    search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-name', data: e})}/>}

                {tabInView === "lastName" && <UserSearch
                    title="by last name"
                    list={list}
                    search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-surname', data: e})}/>}

                {tabInView === "age" && <UserSearch
                    title="by age"
                    list={list}
                    search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-age', data: e})}/>}

                {tabInView === "city" && <UserSearch
                    title="by city"
                    list={list} search={(e) => dispatch({type: e?.length === 0 ? '' : 'search-city', data: e})}/>
                }

                {/*<UserSearch*/}
                {/*    title={     tabInView === "city" ? "by city" :*/}
                {/*                tabInView === "firstName" ?  "by first name"  :*/}
                {/*                tabInView === "lastName" ?  "by last name"  :*/}
                {/*                tabInView === "age" ?  "by age" : ""}*/}
                {/*    list = {list}*/}
                {/*    //nisam znao kako search i dispatch da mijenjam, spetljao sam se malo*/}
                {/*/>*/}

            </div>
        </div>
    )
}

export default SearchUsers;