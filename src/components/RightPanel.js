import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import UserBlock from "./UserBlock";

const RightPanel = () => {
    const isAuth = useSelector(state => state.isAuth);

    return (
        <>
            <h2>Welcome to the ...</h2>
            {!isAuth && <SignIn/>}
            {isAuth && <UserBlock/>}
        </>
    )
}

export default RightPanel;