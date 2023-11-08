import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {
    const [token, setToken] = useState("");
    const [posts, setPosts] = useState([]);

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    localStorage.setItem('username', values.username);
    localStorage.setItem('password', values.password);

  };

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/login/", { "username": "vijaykv", "password": "admin1234@" })
      .then(res => {
        console.log(res.data);
        //setToken(res.data.token);
      })
      .catch(err => console.log("Error :", err));
  }, []);

  useEffect(() => {
    if (token) {
      const config = { headers: { 'Authorization': 'token ' + token } };
      axios
        .get("http://127.0.0.1:8000/api/get-feed-posts/", config)
        .then(res => {
          if (Array.isArray(res.data)) {
            //console.log(res.data);
          }
        })
        .catch(err => console.log(err));
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
                <div className='mx-20 '><img className='  pointer-events-none h-16 w-32' src='https://i.ibb.co/DfPV3LQ/Screenshot-2023-09-18-at-7-18-51-PM.png'/></div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <Field
                name="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Username"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-xs" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <Field
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
