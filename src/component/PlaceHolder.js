import React from 'react'
import {makeStyles} from "@material-ui/core";
import ShowCard from "./ShowCard";
import places from "../static/places";
import useWindowPosition from "../hook/useWindowPosition";

const useStyle=makeStyles((theme)=>({
    root:{
        minHeight:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down("md")]:{
            flexDirection:'column',
        }
    },
}))

export default function PlaceHolder(){

    const classes = useStyle();
    const checked = useWindowPosition('header');

    return(
        <div className={classes.root} id="place-to-visit">
            <ShowCard place={places[0]} checked={checked}/>
            <ShowCard place={places[1]} checked={checked}/>
        </div>
    );

}