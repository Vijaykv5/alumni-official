import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// const errorss =useRef(null);

const Login = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [loged,setLoged]=useState(true);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    localStorage.setItem("username", values.username);
    localStorage.setItem("password", values.password);
    
    axios.post("http://localhost:8000/api/login/", {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        console.log('hi',res);
        setLoged(true);
        localStorage.setItem("token", res.data.token);
        navigate('/');
      })
      .catch(
         (e)=>{
          navigate('/login')
          setLoged(false)
          console.log('hi',e)
        }
      );
      
  };


  useEffect(() => {
    if (token) {
      const config = { headers: { Authorization: "token " + token } };
      axios
        .get("http://127.0.0.1:8000/api/get-feed-posts/", config)
        .then((res) => {
          if (Array.isArray(res.data)) {
            //console.log(res.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [token]);
  

  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <div className="mx-20 ">
                <img
                  className="  pointer-events-none h-16 w-32"
                  src="https://i.ibb.co/DfPV3LQ/Screenshot-2023-09-18-at-7-18-51-PM.png"
                />
              </div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <Field
                name="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex items-center justify-center">
             <button
            
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
            {!loged && !localStorage.getItem("token") && (
              <p className="text-red-500 text-center mt-4 ">User Not Found</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
