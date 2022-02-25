import React, { Component, ReactNode } from "react";
import Head from "next/head";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "./header";
import { Footer } from "./footer";
import { theme } from "./theme";
export * from "./theme";
export * from "./header";
export * from "./footer";

export class Layout extends Component {
  render(): ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <title>Eclipse</title>
        </Head>

        <Header />
        {this.props.children}
        <Footer />
      </ThemeProvider>
    );
  }
}
