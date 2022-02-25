import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { Component, ReactNode } from "react";

export class Header extends Component {
  render(): ReactNode {
    return (
      <AppBar
        position="static"
        color="inherit"
        sx={{
          background: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Button
            color="inherit"
            size="large"
            disableRipple
            sx={{
              "&:hover": {
                background: "none",
              },
            }}
          >
            <Image
              alt="Eclipse Avatar"
              src="/eclipse.svg"
              width="40"
              height="50"
            />
            <Typography
              sx={{
                ml: 0.5,
                textTransform: "none",
                fontFamily: "'Work Sans', sans-serif",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "26px",
              }}
            >
              Eclipse
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
