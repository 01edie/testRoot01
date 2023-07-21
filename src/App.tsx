import React from "react";
import "./App.css";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  CardHeader,
} from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import InfoIcon from "@mui/icons-material/Info";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Banner from "./components/banner";
// import dhanush from './assets/dhanush.png'

function App() {
  return (
    <Box>
      <Box sx={{ height: 70, bgcolor: "#3D7BF8" }} />
      {/* 59F83D */}
      <Grid container xs={12} p={3} spacing={2}>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12} container spacing={2} mt={2}>
          <Grid item xs={4}>
            <Card sx={{ boxShadow: 5 }}>
              <CardHeader
                avatar={
                  <img
                    src="/dhanush.png"
                    style={{ objectFit: "fill", width: "70px", height: "auto" }}
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                sx={{ mt: "10px" }}
                title="Title 1"
                subheader="July 15, 2023"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis labore asperiores facilis perferendis distinctio
                  cumque sit numquam, in voluptates hic cum iure nisi nemo ex
                  incidunt molestias natus iste id ipsam quo corporis.
                  Necessitatibus mollitia repellat eos, nulla laudantium
                  consequuntur, libero ratione error sint est ex quia possimus
                  quis nisi?
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small" variant="outlined">Learn More</Button> */}
                <IconButton>
                  <InfoIcon />
                </IconButton>
                <IconButton>
                  <CallMissedOutgoingIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ boxShadow: 5 }}>
              <CardHeader
                avatar={
                  <img
                    src="/B2P.png"
                    style={{ objectFit: "fill", width: "auto", height: "40px" }}
                  />
                }
                sx={{
                  mt: "10px",
                  mb:'20px'
                }}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Title 2"
                subheader="June 23, 2023"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis labore asperiores facilis perferendis distinctio
                  cumque sit numquam, in voluptates hic cum iure nisi nemo ex
                  incidunt molestias natus iste id ipsam quo corporis.
                  Necessitatibus mollitia repellat eos, nulla laudantium
                  consequuntur, libero ratione error sint est ex quia possimus
                  quis nisi?
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small" variant="outlined">Learn More</Button> */}
                <IconButton>
                  <InfoIcon />
                </IconButton>
                <IconButton>
                  <CallMissedOutgoingIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ boxShadow: 5 }}>
              <CardHeader
                avatar={
                  <img
                    src="/dhanush.png"
                    style={{ objectFit: "fill", width: "70px", height: "auto" }}
                  />
                }
                sx={{ mt: "10px" }}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Title 3"
                subheader="July 21, 2016"
              />
              <CardContent>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis labore asperiores facilis perferendis distinctio
                  cumque sit numquam, in voluptates hic cum iure nisi nemo ex
                  incidunt molestias natus iste id ipsam quo corporis.
                  Necessitatibus mollitia repellat eos, nulla laudantium
                  consequuntur, libero ratione error sint est ex quia possimus
                  quis nisi?
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small" variant="outlined">Learn More</Button> */}
                <IconButton>
                  <InfoIcon />
                </IconButton>
                <IconButton>
                  <CallMissedOutgoingIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
