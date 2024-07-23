import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Map from "./Map";

export default function MediaCard({
  location,
  weather,
  coordinates,
  last_disaster,
}) {
  return (
    <div className="mx-[25px]">
      <Card sx={{ minWidth: 350, minHeight: 200 }}>
        <Map position={coordinates} isDashboard={true} />
        <div
          className="flex justify-center items-center"
          style={{ height: "100px" }}
        >
          <Card
            className="flex flex-row border-b-[0.5px] border-solid"
            sx={{ width: "100%", boxShadow: "none" }}
          >
            <CardContent className="flex-1 flex flex-col justify-center items-center border-r-[1px] border-solid">
              <Typography gutterBottom variant="h6" component="div">
                {location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {weather}
              </Typography>
            </CardContent>
            <CardContent className="flex-1 flex flex-col justify-center items-center">
              <Typography gutterBottom variant="h6" component="div">
                Last Disaster
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span className="text-red-700">{last_disaster.type}</span> - {last_disaster.date}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <CardActions sx={{ boxShadow: "none" }}>
          <Button size="small">Know More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
