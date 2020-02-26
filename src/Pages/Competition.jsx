import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions } from '../store/store'
import { Grid } from '@material-ui/core'
// COMPONENTS
import CardArea from '../Components/CardArea'
import Available from '../Components/Available'

class Competition extends Component {
  state = {
    available : false
  }
  componentDidMount = async () => {
    console.log('countrycode di Competition', this.props.listCountryCode)
    console.log('params',this.props.match.params.area)
    console.log(this.props.selectedRegion)
  }
  handleSetAvailable = async () => {
    if (this.state.available) {
      this.setState({available: false})
    } else {
      this.setState({available: true})
    }
    console.log('available', this.state.available)
  }
  render() {
    // let availableArea = this.props.parentAreaFree
    // console.log(availableArea)
    // let filteredArea = this.state.listAllArea.filter(item => 
    //   availableArea.includes(item.parentArea)
    // );
    // console.log('filteredArea di render', filteredArea)
    let filteredCompetition, loopCompetition
    if (this.props.selectedRegion) {
      filteredCompetition = this.props.listAllCompetitions.filter(item => {
        return (
          this.props.listCountryCode.includes(item.area.id)
        )
      })
    } else {
      return <Redirect to="/"/>
    }
    if (this.state.available) {
      filteredCompetition = filteredCompetition.filter(item =>
        this.props.idCompetitionFree.includes(item.id)
      )
    }
    loopCompetition = filteredCompetition.map(item => {
      console.log('filtered competition di render',filteredCompetition)
      return (
          <CardArea value={item.name} handleClick={this.handleClickRegion}/>
      )
    })
    return (
      <Fragment >
        <div>Competition Page</div>
        <Available handleClick={this.handleSetAvailable} isActive={this.state.available}/>
        <Grid container spacing={2} padding={1} alignItems="center">
          {loopCompetition}
        </Grid>
      </Fragment>
    )
  }
}

export default connect('selectedRegion, listAllCompetitions, listCountryCode, idCompetitionFree', actions)(withRouter(Competition))