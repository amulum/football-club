import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  passive : {
    backgroundColor: "green",
    '&:hover' : {
      backgroundColor: "green"
    }
  },
  active : {
    backgroundColor: "none"
  }
})

function Available (props) {
  const classes = useStyles()
  return (
    <Button variant="contained" onClick={props.handleClick} className={props.isActive? classes.passive : classes.active} fullWidth>
      Available For NOW
    </Button>
  )
}

export default Available