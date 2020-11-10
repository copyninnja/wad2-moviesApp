import{faUser} from'@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useContext} from "react";

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const HeaderUser = () => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const [auth, setAuth] = React.useState(true);
        const open = Boolean(anchorEl);

        // const movies = context.upcoming.filter((m) => {  // New
        //   return !("watchList" in m);
        // });
        const handleMenu = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };
        return (
            auth &&(
                <div>
                <FontAwesomeIcon
                className="navbar-text text-light"
                icon={faUser}
                size="3x"
                onClick={handleMenu}
            />     
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
            </div>
    )
    )

};

export default HeaderUser; 