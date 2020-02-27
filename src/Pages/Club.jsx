import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { connect } from 'unistore/react'
import { actions } from '../store/store'
// COMPONENTS
import CardArea from '../Components/CardArea'
import Header from '../Components/Layout/Header'

class Club extends Component {
  componentDidMount = async () => {
    if (!this.props.listTeams.length){
      await this.props.getTeams(this.props.match.params.competition)
      this.props.history.replace(this.props.nextPath)
    }
    this.props.history.replace(this.props.nextPath)
    console.log('this props history', this.props.history)
  }
  handleClickClub = async (name, id) => {
    this.props.getClub(id)
    this.props.history.push(`/club/${id}`)
  }
  render() {
    let loopClub
    if (!this.props.match.params.competition) {
      return <Redirect to="/" />
    } else {
      loopClub = this.props.listTeams.map(item => {
        return (
          <CardArea value={item.name} image={item.crestUrl} id={item.id} handleClick={this.handleClickClub}/>
      )
      })
      return (
        <Fragment>
          <Header />
          <Grid container padding={1} alignItems="center">
          {loopClub}
          </Grid>
        </Fragment>
      )
    }
  }
}

export default connect('selectedCompetitionId, listTeams, selectedTeamId, nextPath', actions)(withRouter(Club))