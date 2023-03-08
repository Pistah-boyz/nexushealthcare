import React, { useState } from "react";
import { Grid } from "@mui/material";

import { Container, Input, Button, Card } from "../../ui";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnChange = ({ target: { name, value } }) => {
    const tempLoginData = JSON.parse(JSON.stringify(loginData));
    tempLoginData[name] = value;

    setLoginData(tempLoginData);
  };
  const handleSubmit = () => {
    login(loginData);
  };

  return (
    <Container maxWidth={"sm"}>
      <Card title={"Login"}>
        <Input
          label="username"
          name="user"
          value={loginData.user}
          onChange={handleOnChange}
        />
        <Input
          label="password"
          name="password"
          inputProps={{ type: "password" }}
          value={loginData.password}
          onChange={handleOnChange}
        />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="outlined" text="Submit" onClick={handleSubmit} />
        </Grid>
      </Card>
    </Container>
  );
};

export { Login };
