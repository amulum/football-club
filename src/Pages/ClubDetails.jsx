import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions, store } from '../store/store'
import { Grid } from '@material-ui/core'
import CardArea from '../Components/CardArea'
import Header from '../Components/Layout/Header'
import CardClub from '../Components/CardClub'

class ClubDetails extends Component {
  componentDidMount = async () => {
    if (!this.props.selectedTeamData.length){
      console.log('masuk if ga')
      await this.props.getClub(this.props.match.params.club)
      this.props.history.replace(this.props.nextPath)
    }
    console.log(this.props.listPlayer)
    this.props.history.replace(this.props.nextPath)
    console.log('team data di detail', this.props.selectedTeamData)
  }
  handleClickClub = async (name, id) => {
    let selectedPlayer = await this.props.listPlayer.filter(item => 
      item.id === id
    )
    store.setState({ selectedPlayer })
    this.props.history.push(`/player/${id}`)
  }
  render() {
    console.log('masuk render?')
    if (!this.props.match.params.club) {
      console.log('masuk if Redirect')
      return <Redirect to="/" />
    } else {
      return (
        <Fragment>
          <Header />
          <Grid container spacing={2} padding={1} alignItems="center">
          <CardClub data={this.props.selectedTeamData}/>
          </Grid>
        </Fragment>
      )
    }
  }
}

export default connect('selectedTeamData, listPlayer, nextPath, selectedPlayer', actions )(withRouter(ClubDetails))