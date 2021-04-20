import React from "react";
import {createGenerateClassName, CssBaseline, makeStyles} from "@material-ui/core";
import Header from "./component/Header";

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },

}))


function App() {
  const classes = useStyles();


  return(
      <div className={classes.root}>
        <CssBaseline />
        <Header />
      </div>
  );
}

export default App;
