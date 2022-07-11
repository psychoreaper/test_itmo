import Button from "../UI/Button";
import {useSelector} from "react-redux";

const LeftPanel = () => {
    const buttons = ["market", "projects", "user"];
    const isAuth = useSelector(state => state.isAuth);

    return (
        <>
            {buttons.map(i => <Button buttonText={i} disabled={!isAuth}/>)}
        </>
    )
}

export default LeftPanel;