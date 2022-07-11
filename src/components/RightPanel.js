import SignIn from "./SignIn";
import {useSelector} from "react-redux";
import UserBlock from "./UserBlock";
import '../styles/RightPanel.css';

const RightPanel = () => {
    const isAuth = useSelector(state => state.isAuth);

    return (
        <>
            <div className="right-panel_title">Welcome to the ...</div>
            <div className="right-panel_parent">
                <div className="right-panel_child">
                    {!isAuth && <SignIn/>}
                    {isAuth && <UserBlock/>}
                </div>
            </div>
        </>
    )
}

export default RightPanel;