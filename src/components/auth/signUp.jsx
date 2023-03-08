import React, { useState } from "react";
import { Grid } from "@mui/material";

import { Input, Button, Container, Card, queryClient } from "../../ui";
import { QUERY_KEYS } from "../../constants";

const SignUp = () => {
  const handleSignUp = () => {
    queryClient.setQueryData(QUERY_KEYS.SIGNUP, true);
  };

  return (
    <Container maxWidth={"sm"}>
      <Card title={"SignUp"}>
        <Input label="username" name="user" />
        <Input
          label="password"
          name="password"
          inputProps={{ type: "password" }}
        />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="outlined" text="SignUp" onClick={handleSignUp} />
        </Grid>
      </Card>
    </Container>
  );
};

export { SignUp };
