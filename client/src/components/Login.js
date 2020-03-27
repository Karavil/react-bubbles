import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import axios from "axios";

import styled from "styled-components";

const StyledForm = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 40vh;
`;
export default function Login() {
   const history = useHistory();
   const { register, handleSubmit } = useForm();

   const onSubmit = data => {
      axios
         .post("http://localhost:5000/api/login", {
            ...data
         })
         .then(res => {
            localStorage.setItem("token", res.data.payload);
            history.push("/bubbles");
         })
         .catch(err => {
            console.log(err);
         });
   };

   return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
         <h1>Login in for bubbles!</h1>
         <input
            type="text"
            placeholder="Username"
            name="username"
            ref={register({ required: true, maxLength: 80 })}
         />
         <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true, maxLength: 80 })}
         />
         <input type="submit" />
      </StyledForm>
   );
}
