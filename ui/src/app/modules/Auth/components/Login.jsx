import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toAbsoluteUrl } from "../../../../theme/helpers";
import { CircularProgress } from "@material-ui/core";
import { login } from "../_redux/authCrud";
import { actions as authActions } from "../_redux/authRedux";

const initialValues = {
  username: "",
  password: ""
};

function Login() {
  const dispatch = useDispatch();
  const [ loading, setLoading ] = React.useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Mínimo 3 carácteres")
      .max(50, "Máximo 50 carácteres"),
    password: Yup.string()
      .min(3, "Mínimo 3 carácteres")
      .max(50, "Máximo 50 carácteres"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        login(values.username, values.password)
          .then(response => {
            setLoading(false);
            const { token, user } = response;
            dispatch(authActions.login(token));
            dispatch(authActions.fulfillUser(user));
          })
          .catch(() => {
            setLoading(false);
            setSubmitting(false);
            setStatus("Usuario o contraseña incorrectos");
          });
      }, 1000);
    }
  });

  return (
    <div className="align-self-center text-center">
      <img alt="HCN logo" src={toAbsoluteUrl("/media/logos/menta4.png")} width="100" height="100" />
      <form
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          id="username"
          name="username"
          className="form-control mt-4"
          placeholder="Nombre de usuario"
          {...formik.getFieldProps("username")}
        />
        <input
          type="password"
          id="password"
          name="password"
          className="form-control mt-2"
          placeholder="Contraseña"
          {...formik.getFieldProps("password")}
        />
        <button
          type="submit"
          className="btn btn-secondary font-weight-bold my-3"
        >
          <span>Iniciar sesión</span>
          {loading && <CircularProgress className="ml-2" size={10} color="inherit" />}
        </button>
      </form>
    </div>
  );  
}
export default Login;
