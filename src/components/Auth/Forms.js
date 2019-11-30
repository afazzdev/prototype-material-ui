import React from "react";

import { Container } from "@material-ui/core";
import ButtonStyled from "../ButtonStyled/Button";
import InputStyled from "../InputStyled/InputStyled";

const Forms = ({
  whatFor,
  Auth,
  values,
  error,
  complete,
  handleChange,
  handleClickShowPassword,
  handleSubmit
}) => {
  return (
    <>
      <Container>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            placeItems: "center",
            gridAutoFlow: "row"
          }}
        >
          <InputStyled
            whatFor={whatFor}
            Auth={Auth}
            values={values}
            error={error}
            complete={complete}
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            handleSubmit={handleSubmit}
          />
          <ButtonStyled variant="contained" color="primary" type="submit">
            Submit
          </ButtonStyled>
        </form>
      </Container>
    </>
  );
};

export default Forms;
