import {useFormik} from "formik";
import {Checkbox, TextField, FormControlLabel} from "@mui/material";
import {useDispatch} from "react-redux";
import '../styles/SignIn.css';

const SignIn = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: () => {
            dispatch({type: "login"});
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Sign In</h2>
            <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="email"
                margin="normal"
                required="true"
            />
            <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required="true"
            />
            <p>Forgot password?</p>
            <button className="signin_button" type="submit">Sign In</button>
            <FormControlLabel control={
                <Checkbox defaultChecked sx={{
                    '&.Mui-checked': {
                        color: "#0298A9",
                    },
                }}/>
            } label="Remember password" size="small"/>
        </form>
    );
}

export default SignIn;