import {useDispatch} from "react-redux";
import {Grid} from "@mui/material";
import avatar from "../avatar.png";
import '../styles/UserBlock.css';

const UserBlock = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch({type: "logout"});
    }

    return (
        <>
            <Grid container>
                <Grid container xl={12} height={60}>
                    <Grid item xl={3}>
                        <div className="user-avatar">
                            <img src={avatar} alt="avatar" width={50} style={{"borderRadius": "10px"}}/>
                        </div>
                    </Grid>

                    <Grid item xl={9}>
                        <div className="user-name">User/1</div>
                    </Grid>
                </Grid>
                <Grid container xl={12}>
                    <Grid item xl={3}>

                    </Grid>
                    <Grid item xl={9} className="user-logout" onClick={logoutHandler}>
                        <span>
                        <svg width="20" height="20" viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg">
                            <g data-name="Layer 2">
                                <g data-name="arrow-circle-right">
                                    <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/>
                                    <path
                                        d="M17 12v-.09a.88.88 0 0 0-.06-.28.72.72 0 0 0-.11-.19 1 1 0 0 0-.09-.13l-2.86-3a1 1 0 0 0-1.45 1.38L13.66 11H8a1 1 0 0 0 0 2h5.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.32A1 1 0 0 0 17 12z"
                                        fill="#0298A9"/>
                                    <path
                                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
                                        fill="#0298A9"/>
                                </g>
                            </g>
                        </svg> Logout
                        </span>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default UserBlock;