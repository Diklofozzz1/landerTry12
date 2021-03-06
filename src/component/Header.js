import React, {useEffect, useState} from "react";
import {AppBar, Collapse, makeStyles, Toolbar} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        height:'100vh',
      },

    appbar: {
        background:'none',
        fontFamily:'Didact Gothic',
        color: '#151E2B'
    },

    appWrapper: {
        width: '90%',
        margin: '0 auto',
    },

    appbarTitle: {
        flexGrow: '1',
    },

    textColorChanger: {
        color: '#125D8D',
    },

    midTitle:{
        color: '#151E2B',
        fontSize:'3rem',
        fontFamily:'Didact Gothic',
    },

    midTextContainer:   {
        textAlign:'center',
    },

    icon: {
      color:'#151E2B',
    },

    arrowDown:{
        color:'#151E2B',
        fontSize:'2ram',
    },
}));

export default function Header(){

    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        setChecked(true);
    },[])

    return(
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appWrapper}>

                    <h1 className={classes.appbarTitle}>
                        <span className={classes.textColorChanger}>Perfect</span>View.
                    </h1>

                    <IconButton className={classes.icon}>
                        <SortIcon/>
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Collapse in={checked}
                      {...(checked ? { timeout: 3000 } : {})}
                      collapsedHeight={15}>

                <div className={classes.midTextContainer}>

                    <h1 className={classes.midTitle}>?????????? ???????? ??????????????? <br />
                        <span className={classes.textColorChanger}>?????? ?? ??????!</span>
                    </h1>

                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ArrowDownwardIcon  className={classes.arrowDown} />
                        </IconButton>
                    </Scroll>

                </div>
            </Collapse>
        </div>
    );
}