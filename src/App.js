import React from "react";
import {createGenerateClassName, CssBaseline, makeStyles} from "@material-ui/core";
import Header from "./component/Header";
import PlaceHolder from "./component/PlaceHolder";

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: 'url(/assets/bg.jpg)',
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
        <PlaceHolder />
      </div>
  );
}

export default App;
