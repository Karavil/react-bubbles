import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("should allow demo account to log in", async () => {
   const { getByText, getByPlaceholderText } = render(<App />, {
      wrapper: MemoryRouter,
      route: "/"
   });

   userEvent.type(getByPlaceholderText("Username"), "demo");
   userEvent.type(getByPlaceholderText("Password"), "password");

   fireEvent.click(getByText("Submit"));
});
