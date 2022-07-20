/* eslint-disable jsx-a11y/alt-text */
import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Nav from "../../components/Navbar/Nav";
import "./onboard.css";
const OunBoardUi = () => {
  const genderDetails = [
    { id: 1, type: "Men" },
    { id: 2, type: "Women" },
    { id: 3, type: "More" },
  ];
  const [formData, setFormData] = useState({
    firstName: "",
    dd: "",
    mm: "",
    yyyy: "",
    gender: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const exploreGender = () => {
    return genderDetails.map((gender) => {
      return (
        <>
          <Button
            variant="outlined"
            className={
              formData.gender === gender.type
                ? "active gender_button"
                : "gender_button"
            }
            onClick={() => {
              setFormData((formData) => ({
                ...formData,
                gender: gender.type,
              }));
            }}
          >
            {gender.type}
          </Button>
        </>
      );
    });
  };
  return (
    <>
      <div className="navbar">
        <Nav minimal={true} authUser={true} />
      </div>
      <Typography variant="h4" className="title-text">
        <i>CREATE ACCOUNT</i>
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)} autocomplete="off">
        <div className="getInfo">
          <div className="left_side">
            <Stack spacing={3} width="100%">
              <span>First Name</span>
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                onChange={(e) => {
                  setFormData((formData) => ({
                    ...formData,
                    firstName: e.target.value,
                  }));
                }}
              />
              <span>Birthday</span>
              <Stack direction="row" spacing={3}>
                <TextField
                  label="DD"
                  variant="outlined"
                  name="dd"
                  onChange={(e) => {
                    setFormData((formData) => ({
                      ...formData,
                      dd: e.target.value,
                    }));
                  }}
                />
                <TextField
                  label="MM"
                  variant="outlined"
                  name="mm"
                  onChange={(e) => {
                    setFormData((formData) => ({
                      ...formData,
                      mm: e.target.value,
                    }));
                  }}
                />
                <TextField
                  label="YYYY"
                  variant="outlined"
                  name="yyyy"
                  onChange={(e) => {
                    setFormData((formData) => ({
                      ...formData,
                      yyyy: e.target.value,
                    }));
                  }}
                />
              </Stack>
              <span>Gender</span>
              <Stack direction="row" spacing={3}>
                {exploreGender()}
              </Stack>
              <span>Email address</span>
              <TextField
                onChange={(e) => {
                  setFormData((formData) => ({
                    ...formData,
                    email: e.target.value,
                  }));
                }}
                type="email"
                label="Email Address"
                variant="outlined"
              />
            </Stack>
          </div>
          <div className="right_side">
            <Stack spacing={3}>
              <span className="text-gray">Profile Photo</span>
              <img
                className="selected_images"
                src="https://thumbs.dreamstime.com/b/zero-one-hacker-coding-cracker-tries-to-hack-security-system-steal-destroy-critical-information-ransom-important-129896215.jpg"
              />
              <TextField type="file" size="large" />
            </Stack>
          </div>
        </div>
        <Stack
          mt={10}
          mb={10}
          spacing={3}
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Button type="submit" className="primary_button">
            Continue
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default OunBoardUi;
