import './App.css';
import {Grid} from "@mui/material";
import RightPanel from "./components/RightPanel";
import LeftPanel from "./components/LeftPanel";

function App() {
    return (
        <div className="App">
            <Grid container xl={12}>
                <Grid item xs={6}>
                    <LeftPanel/>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={2}>
                    <RightPanel/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
