import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Collapse} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 545,
        background: 'rgba(7,38,76,0.5)',
        margin: '5vh'
    },

    media: {
        height: 360,
    },

    title: {
        fontFamily:'Didact Gothic',
        fontSize:'2rem',
        color:'#E3E1E1',
    },

    description:{
        fontFamily:'Didact Gothic',
        color:'#ddd',
    },
});

export default function ShowCard({place, checked}) {
    const classes = useStyles();

    return (
        <Collapse in={checked}
                  {...(checked ? { timeout: 2000 } : {})} >
            <Card className={classes.root}>

                    <CardMedia
                        className={classes.media}
                        image={place.imageURL}
                        title="Contemplative Reptile"
                    />

                    <CardContent>
                        <Typography gutterBottom
                                    variant="h5"
                                    component="h2"
                                    className={classes.title}>
                            {place.title}
                        </Typography>

                        <Typography variant="body2"
                                    color="textSecondary"
                                    component="p"
                                    className={classes.description}>
                            {place.description}
                        </Typography>
                    </CardContent>
            </Card>
        </Collapse>
    );
}