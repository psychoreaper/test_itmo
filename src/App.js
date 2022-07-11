import './App.css';
import {Grid} from "@mui/material";
import RightPanel from "./components/RightPanel";
import {useSelector} from "react-redux";
import LeftPanel from "./components/LeftPanel";

function App() {
    const isAuth = useSelector(state => state.isAuth);

    console.log(isAuth);

    return (
        <div className="App">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <LeftPanel />
                </Grid>
                <Grid item xs={3}>
                    <RightPanel />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
