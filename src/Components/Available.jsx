import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  active : {
    color: "white",
    fontWeight: "700",
    fontSize: "1.3em",
    backgroundColor: "#e77f67",
    transition: "0.3",
    '&:hover' : {
      backgroundColor: "#e77f67"
    }
  },
  passive : {
    transition: "0.3s",
    backgroundColor: "#ffa801",
    '&:hover' : {
      backgroundColor: "#ffa801"
    }
  },
  word : {
    transition: "0.3",
    color: "inherit"
  }
})

/** Return Button Component that will handle spesific function for filter data inside page
 * 
 * @param {isActive} props boolean state inside page that will control color and page condition
 * @param {handleClick} props function that will handle condition for this component
 */
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