import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  passive : {
    backgroundColor: "blue",
  },
  active : {
    backgroundColor: "green"
  }
})

function Available (props) {
  const classes = useStyles()
  return (
    <Button variant="contained" onClick={props.handleClick} className={props.isActive? classes.passive : classes.active}>
      Available For Now
    </Button>
  )
}

export default Available