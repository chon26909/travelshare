import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
    return (
        <div>
            <ProSidebar
                collapsed={false}
                rtl={false}
                toggled={false}
                breakPoint="md"
            >
                <Menu iconShape="square">
                    <MenuItem>Dashboard</MenuItem>
                    <SubMenu title="Components" >
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>;
        </div>
    )
}

export default Sidebar;
