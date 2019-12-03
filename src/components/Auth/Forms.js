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
  const forAuth = () => {
    const a = Object.keys(values);
    const b = Object.keys(values[whatFor.toLowerCase()]);
    const c = a.map(e => {
      return { [`${e}`]: b };
    });
    // console.log(values);
    // const c = Object.keys(values[b])
    return c;
  };

  const z = {
    values: Object.assign({}, forAuth())
  };

  return (
    <>
      {console.log(z)}
      <Container>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            placeItems: "center",
            gridAutoFlow: "row"
          }}
          name={whatFor.toLowerCase()}
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
          <ButtonStyled
            variant="contained"
            color="primary"
            type="submit"
            disabled={values.disabled}
          >
            Submit
          </ButtonStyled>
        </form>
      </Container>
    </>
  );
};

export default Forms;
