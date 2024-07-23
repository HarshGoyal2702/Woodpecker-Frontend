import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Map from "./Map"
export default function MediaCard({location,Condition}) {
  return (
    <div className=' mx-[25px]'>
    <Card sx={{ maxWidth: 345 }}>
     <Map position={[28.89,76.6]} isDashboard={true} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Condition}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card></div>
  );
}
