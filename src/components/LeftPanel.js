import Button from "../UI/Button";
import {useSelector} from "react-redux";
import "../styles/LeftPanel.css";

const LeftPanel = () => {
    const buttons = ["market", "projects", "user"];
    const isAuth = useSelector(state => state.isAuth);

    return (
        <div className="leftpanel">
            <div className="buttons-container">
                {buttons.map(i => <Button buttonText={i} disabled={!isAuth}/>)}
            </div>
        </div>
    )
}

export default LeftPanel;