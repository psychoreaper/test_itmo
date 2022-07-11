import './App.css';
import Button from "./UI/Button";
import {Grid} from "@mui/material";
import RightPanel from "./components/RightPanel";

function App() {
    const buttons = ["market", "projects", "user"];

    return (
        <div className="App">
            <div className="background"/>
            {/*<img src="../public/hex.png" alt="bg" className="background"/>*/}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    {/*{buttons.map(i => <Button buttonText={i}/>)}*/}
                </Grid>
                <Grid item xs={3}>
                    <RightPanel />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
