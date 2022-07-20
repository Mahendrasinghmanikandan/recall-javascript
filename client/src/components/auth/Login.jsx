/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import "./login.css";
const Login = ({ open, setAuth }) => {
  const [modalOption, setModalOption] = useState(open);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 450,
    bgcolor: "white",
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
    textAlign: "center",
    textIndent: "10px",
  };
  const handleClose = () => {
    setModalOption(!modalOption);
    setAuth(!open);
  };
  return (
    <Modal keepMounted open={modalOption} onClose={handleClose}>
      <Box sx={style}>
        <Stack spacing={2} alignItems="center">
          <img src="./images/logo.jpg" className="login_logo" />
          <Typography variant="h4">
            <i>CREATE ACCOUNT</i>
          </Typography>
          <Typography variant="body2">
            By clicking , you agree to our Terms . Learn how we process your
            data in our Privacy Policy and Cookie Policy
          </Typography>

          <Stack spacing={3} width="100%">
            <TextField variant="standard" label="Email" size="small" />
            <TextField
              variant="standard"
              type="password"
              label="Password"
              size="small"
            />
            <TextField
              variant="standard"
              type="password"
              label="Confirm password"
              size="small"
            />
            <Button variant="outlined" className="primary_button">
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default Login;
