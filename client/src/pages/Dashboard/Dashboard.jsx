import React, { useState } from "react";
import { Avatar, Stack, Tab, Tabs, Typography } from "@mui/material";
import "./dashboard.css";
const Dashboard = () => {
  const [tabsStatus, setTabsStatus] = useState(0);
  const handleChange = (e, newValue) => {
    setTabsStatus(newValue);
  };
  return (
    <>
      <div className="dashboard">
        <div className="dashboard_left_side">
          <div className="left_top">
            <Stack
              sx={{ height: "100%" }}
              direction="row"
              justifyContent="start"
              alignItems="center"
              spacing={2}
            >
              <Avatar
                sx={{ width: 60, height: 60 }}
                className="dashboard_avatar"
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
              >
                M
              </Avatar>
              <Typography variant="h6" className="text-white">
                {" "}
                manikandan
              </Typography>
            </Stack>
          </div>
          <div className="left_bottom">
            <Tabs
              value={tabsStatus}
              onChange={handleChange}
              className="dash_tabs"
            >
              <Tab
                label="Matches"
                className="dashboard_tabs text-dark sans-serif"
              />
              <Tab
                label="Messages"
                className="dashboard_tabs text-dark sans-serif"
              />
            </Tabs>
          </div>
        </div>
        <div className="dashboard_right_side"></div>
      </div>
    </>
  );
};

export default Dashboard;
