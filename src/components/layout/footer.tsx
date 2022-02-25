import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Mail } from "@mui/icons-material";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeSvgIcon from "../fontAwesomeSvgIcon";
import { Component, ReactNode } from "react";

export class Footer extends Component {
  render(): ReactNode {
    return (
      <AppBar component="footer" sx={{ top: "auto", bottom: 0 }}>
        <Box sx={{ width: "100%", backgroundColor: "#2A2A2A" }}>
          <Box sx={{ maxWidth: "lg", margin: "auto" }}>
            <Toolbar>
              <Button
                color="inherit"
                size="large"
                disableRipple
                sx={{
                  "&:hover": {
                    background: "none",
                  },
                  p: 0,
                }}
              >
                <Image
                  alt="Night Devs"
                  src="/logoNDtransperent.svg"
                  width="50"
                  height="50"
                />
                <Typography
                  textTransform="none"
                  fontFamily="'Work Sans', sans-serif"
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="24px"
                >
                  Night Devs
                </Typography>
              </Button>

              <Box
                flexGrow={1}
                textAlign={"center"}
                fontSize={"14px"}
                fontFamily={"'Work Sans', sans-serif"}
              >
                <Link underline={"none"} href={"/"}>
                  Инструкция
                </Link>{" "}
                |{" "}
                <Link underline={"none"} href={"/"}>
                  Условия использования
                </Link>{" "}
                |{" "}
                <Link underline={"none"} href={"/"}>
                  Политика конфиденциальности
                </Link>
              </Box>

              <Stack direction="row">
                <IconButton>
                  <Mail sx={{ opacity: 0.5 }} />
                </IconButton>
                <IconButton>
                  <FontAwesomeSvgIcon icon={faDiscord} sx={{ opacity: 0.5 }} />
                </IconButton>
                <IconButton>
                  <FontAwesomeSvgIcon icon={faGithub} sx={{ opacity: 0.5 }} />
                </IconButton>
              </Stack>
            </Toolbar>
            <Divider variant="middle" />
            <Typography
              textAlign={"center"}
              fontFamily={"'Work Sans', sans-serif"}
              sx={{
                my: 2,
                opacity: 0.5,
              }}
            >
              Copyright © 2021-{new Date().getFullYear()} Night Devs
            </Typography>
          </Box>
        </Box>
      </AppBar>
    );
  }
}
