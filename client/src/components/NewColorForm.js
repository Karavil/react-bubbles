import React from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";

const StyledForm = styled.form`
   display: flex;
   width: 100%;
   justify-content: flex-start;
   align-items: center;
`;
export default function Login({ addColor }) {
   const { register, handleSubmit } = useForm();

   const onSubmit = data => {
      addColor(data.name, data.hex);
   };

   return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
         <h4>Add a new color:</h4>
         <input
            type="text"
            placeholder="Color name"
            name="name"
            ref={register({ required: true, maxLength: 80 })}
         />
         <input
            type="text"
            placeholder="Hex Code"
            name="hex"
            ref={register({ required: true })}
         />
         <input type="submit" />
      </StyledForm>
   );
}
