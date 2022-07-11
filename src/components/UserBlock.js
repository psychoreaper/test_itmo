import {useDispatch} from "react-redux";
import {Grid, Link} from "@mui/material";
import avatar from "../avatar.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../styles/UserBlock.css';

const UserBlock = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch({type: "logout"});
    }

    return (
        <>
            <Grid container xl={6}>
                <Grid container xl={12} height={60}>
                    <Grid item xl={3}>
                        <div className="user-avatar">
                            <img src={avatar} alt="avatar" className="user-avatar_picture" width={50}
                                 style={{"borderRadius": "10px"}}/>
                        </div>
                    </Grid>

                    <Grid item xl={9}>
                        <div className="user-text_name">User/1</div>
                    </Grid>
                </Grid>
                <Grid container xl={12}>
                    <Grid item xl={3}>

                    </Grid>
                    <Grid item xl={9} className="user-text_logout" onClick={logoutHandler}>
                        <ArrowForwardIcon/>
                        Logout
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default UserBlock;