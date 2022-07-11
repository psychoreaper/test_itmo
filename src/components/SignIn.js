import {useFormik} from "formik";
import {Checkbox, Link, TextField, Button} from "@mui/material";
import {useDispatch} from "react-redux";

const SignIn = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
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
            <Link>Forgot password?</Link>
            <Button variant="contained" type="submit">Sign In</Button>
            <Checkbox label="Remember password" defaultChecked />
        </form>
    );
}

export default SignIn;