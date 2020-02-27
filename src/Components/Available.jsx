import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  active : {
    color: "white",
    fontWeight: "700",
    fontSize: "1.3em",
    backgroundColor: "#e77f67",
    '&:hover' : {
      backgroundColor: "#e77f67"
    }
  },
  passive : {
    backgroundColor: "#ffa801",
    '&:hover' : {
      backgroundColor: "#ffa801"
    }
  },
  word : {
    color: "inherit"
  }
})

function Available (props) {
  const classes = useStyles()
  return (
    <Button 
    variant="contained" 
    onClick={props.handleClick} 
    className={props.isActive? classes.passive : classes.active} 
    style={{
      color: "white",
      fontWeight: "700",
      fontSize: "1.3em",
    }}
    fullWidth>
      <span className={classes.word}>
        {props.isActive?
          "Available For NOW"
        :
          "CLICK ME!! Some Feature still under develop"
        }
      </span>
    </Button>
  )
}

export default Available