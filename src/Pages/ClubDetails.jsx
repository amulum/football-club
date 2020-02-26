import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions, store } from '../store/store'
import { Grid } from '@material-ui/core'
import CardArea from '../Components/CardArea'

class ClubDetails extends Component {
  componentDidMount = async () => {
    if (!this.props.selectedTeamData.length){
      console.log('masuk if ga')
      await this.props.getClub(this.props.match.params.club)
      this.props.history.replace(this.props.nextPath)
    }
    this.props.history.replace(this.props.nextPath)
  }
  render() {
    let loopSquad = this.props.selectedTeamData.squad
    if (loopSquad === undefined) {
      return <Redirect to="/" />
    } else {
      loopSquad = loopSquad.map(item => {
        return (
          <CardArea value={item.name} id={item.id} handleClick={this.handleClickClub}/>
      )
      })
      return (
        <Fragment>
          <div>Club Page</div>
          <Grid container spacing={2} padding={1} alignItems="center">
          {loopSquad}
          </Grid>
        </Fragment>
      )
    }
  }
}

export default connect('selectedTeamData', actions )(withRouter(ClubDetails))