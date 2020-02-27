import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'


const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#34e7e4",
    padding: "2em",
  },
  image: {
    display: "flex",
    justifyContent: "center"
  }
})

function CardClub (props) {
  const classes = useStyles()
  console.log('props di card club', props)
  console.log(props.data.crestUrl)
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.wrapper}
    >
      <Grid item xs={12} className={classes.image}>
        <img src={`${props.data.crestUrl}`} alt="club-logo"/>
      </Grid>
    </Grid>
  )
}

export default CardClub