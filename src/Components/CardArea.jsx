import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    padding: "1em",
    backgroundColor: "#63cdda",
    alignItems: "center",
    textAlign: "center",
    fontSize: "1.5em",
    color: "#344a5e",
    minHeight: "5.5em",
    transition: "0.3",
    '&:hover' : {
      backgroundColor: "#344a5e",
      color: "white"
    }
  },
  wrapper: {
    transition: "0.3",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontWeight: "600",
    color: "inherit",
    '&:hover' : {
      color : "inherit"
    },
  }
}));

/**
 * Return Component Box with style already set before
 * @param {value} props component that will wrap inside box 
 */
const CardArea = props => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Button
        className={classes.button}
        onClick={(e) =>props.handleClick(props.value, props.id)}
        fullWidth
      >
        <div className={classes.wrapper}>
          <span style={{fontSize: "3em"}}>
            {props.icon} 
          </span>
          <div>
            {props.value}
          </div>
        </div>
      </Button>
    </Grid>
  );
};

export default CardArea;
