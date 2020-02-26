import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions, store } from '../store/store'
import CardArea from '../Components/CardArea'
import { Grid } from '@material-ui/core'

class Club extends Component {
  componentDidMount = async () => {
    if (!this.props.listTeams.length){
      console.log('masuk if ga')
      await this.props.getTeams(this.props.match.params.competition)
      this.props.history.replace(this.props.nextPath)
    }
    this.props.history.replace(this.props.nextPath)
  }
  handleClickClub = async (name, id) => {
    await this.props.getClub(id)
    console.log('click club', this.props.selectedTeamData)
    console.log('click club', id)
    this.props.history.push(`/club/${id}`)
  }
  render() {
    let loopClub
    if (!this.props.selectedCompetitionId) {
      return <Redirect to="/" />
    } else {
      loopClub = this.props.listTeams.map(item => {
        return (
          <CardArea value={item.name} id={item.id} handleClick={this.handleClickClub}/>
      )
      })
      return (
        <Fragment>
          <div>Club Page</div>
          <Grid container spacing={2} padding={1} alignItems="center">
          {loopClub}
          </Grid>
        </Fragment>
      )
    }
  }
}

export default connect('selectedCompetitionId, listTeams, selectedTeamId, nextPath, selectedTeamData', actions)(withRouter(Club))