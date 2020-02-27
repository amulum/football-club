import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: "1em",
    borderRadius: "20px",
    border: "1.5px solid #306854",
    boxShadow: "1px 0px 6px 3px rgba(224,234,236,0.74)",
    alignItems: "center",
    textAlign: "center",
    fontSize: "1.5em",
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
        className={classes.wrapper}
        onClick={(e) =>props.handleClick(props.value, props.id)}
        fullWidth
      >
        {props.value}
      </Button>
    </Grid>
  );
};

export default CardArea;
