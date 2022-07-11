import {useFormik} from "formik";
import {Checkbox, Link, TextField} from "@mui/material";

const Registration = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Sign In</h2>
            <TextField
                fullWidth
                id="email"
                name="email"
                label="Email*"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="email"
            />
            <TextField
                fullWidth
                id="password"
                name="password"
                label="Password*"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <Link>Forgot password?</Link>
            <button type="submit">Submit</button>
            <Checkbox label="Remember password" defaultChecked />
        </form>
    );
}

export default Registration;