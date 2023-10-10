import * as React from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import photo from "../pictures/pfp.png";

const drawerWidth = 300;

export default function NavigationBar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        ".active .MuiButtonBase-root": {
          backgroundColor:
            "#007bff" /* Change this to your desired background color */,
          color: " white" /* Change this to your desired text color */,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <Avatar
        alt="profile picture"
        src={photo}
        sx={{ width: 300, height: 300, borderRadius: "10% 20% 30% 40%" }}
      />
      <List>
        {["Home", "About", "Education"].map((text, index) => (
          <ScrollLink
            key={index}
            activeClass="active"
            to={text.toLowerCase()}
            spy={true}
            smooth={true}
            duration={500}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </ScrollLink>
        ))}
      </List>
    </Drawer>
  );
}
