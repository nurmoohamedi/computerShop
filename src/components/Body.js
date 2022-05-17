import React from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Divider,
    IconButton,
    Table,
    Typography,
    useTheme
} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import soska from "./../assets/img/soska_copy.jpg";

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                NATR1
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color={"secondary"}>Learn More</Button>
        </CardActions>
    </React.Fragment>
);

const Body = () => {
    const theme = useTheme();
    return (
        <div>
            <Table>dwada</Table>
            <Button variant={"outlined"}>Click Me Please!</Button>
            <Box sx={{ minWidth: 275, maxWidth: 500}}>
                <Card variant="outlined">{card}</Card>
            </Box>
            <Divider/>
            <Box sx={{maxWidth: 300}}>
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <IconButton aria-label="previous">
                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                            </IconButton>
                            <IconButton aria-label="play/pause">
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            <IconButton aria-label="next">
                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                            </IconButton>
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={soska}
                        alt="Live from space album cover"
                    />
                </Card>
            </Box>
        </div>
    )

}

export default Body;