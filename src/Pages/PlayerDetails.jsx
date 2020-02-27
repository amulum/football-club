import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions, store } from '../store/store'
import { Grid } from '@material-ui/core'
import CardArea from '../Components/CardArea'
import Header from '../Components/Layout/Header'

class PlayerDetails extends Component {
  state = {
    selectedPlayer : {}
  }
  componentDidMount = async () => {
    // if (!this.props.selectedTeamData.length){
    //   console.log('masuk if ga')
    //   await this.setState({})
    //   this.props.history.replace(this.props.nextPath)
    // }
    // console.log('pathplayer', this.props.nextPath)
    let pathPlayer = await this.props.selectedPlayer[0].name.toLowerCase().replace(/ /gi,'-')
    console.log(this.props.selectedPlayer[0].name)
    this.props.history.replace(pathPlayer)
  }
  render() {
    console.log('masuk render?')
    if (!this.props.match.params.player) {
      console.log('masuk if Redirect')
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