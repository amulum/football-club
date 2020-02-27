import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions, store } from '../store/store'
import { Grid } from '@material-ui/core'
// COMPONENT
import Header from '../Components/Layout/Header'

class PlayerDetails extends Component {
  state = {
    selectedPlayer : {}
  }
  componentDidMount = async () => {
    let pathPlayer = await this.props.selectedPlayer[0].name.toLowerCase().replace(/ /gi,'-')
    this.props.history.replace(pathPlayer)
  }
  render() {
    if (!this.props.match.params.player) {
      return <Redirect to="/" />
    } else {
      return (
        <Fragment>
          <Header />
          <div>Player Page</div>
          <Grid container spacing={2} padding={1} alignItems="center">
          <p>{JSON.stringify(this.props.selectedPlayer)}</p>
          </Grid>
        </Fragment>
      )
    }
  }
}

export default connect('selectedTeamData, listPlayer, nextPath, selectedPlayer', actions )(withRouter(PlayerDetails))