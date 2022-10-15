import React from "react";
import {Button, PageHeader} from "antd";

const Navbar = () => {

    return (
        <PageHeader
            ghost={false}
            title="Movies App"
            extra={[
                <Button key="2" type={"danger"}>Movies</Button>,
                <Button key="1" type={"danger"}>Search</Button>,
            ]}
        />
    )
}

export default Navbar;