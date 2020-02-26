import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions, store } from '../store/store'
import { Grid } from '@material-ui/core'
// COMPONENT
import CardArea from '../Components/CardArea'
import Available from '../Components/Available'
class Home extends Component {
  state = {
    available : false,
  }
  componentDidMount = async () => {
    // get all areas filter yg ada flagnya kalo
    // get all competition
    // filter di js sesuai list country
    // order by tier per country
    this.props.history.replace('')
    if (!this.props.listAllArea){
      await this.props.getAllArea()
    }
    if (!this.props.listAllCompetitions){
      await this.props.getAllCompetitions()
    }
  }
  handleClickRegion = async (region) => {
    let areaId = []
    let filteredArea = this.props.listAllArea.filter(item =>
      item.parentArea === region || item.name === region
      )
    let pathRegion = region.toLowerCase().replace(/ /gi, '-').replace('/', '')
    await filteredArea.forEach(item => {
      if (!areaId.includes(item.id)) {
        areaId.push(item.id)

      } else if (item.name === region) {
        areaId.push(item.id)
      }
    })
    store.setState({ selectedRegion: region })
    store.setState({ listCountryCode: areaId})
    this.props.history.push(`/${pathRegion}`)
  }
  handleSetAvailable = async () => {
    if (this.state.available) {
      this.setState({available: false})
    } else {
      this.setState({available: true})
    }
  }
  render() {
    let filteredRegion
    if (this.state.available) {
      filteredRegion = this.props.listAllRegion.filter(item => {
        return (
          this.props.parentAreaFree.includes(item)
        )
      })
    } else {
      filteredRegion = this.props.listAllRegion
    }
    const loopRegion = filteredRegion.map(item => {
      return (
          <CardArea value={item} handleClick={this.handleClickRegion}/>
      )
    })
    return (
      <div>
        <div>Home Page</div>
        <Available handleClick={this.handleSetAvailable} isActive={this.state.available}/>
        <Grid container spacing={2} padding={1} alignItems="center">
          {loopRegion}
        </Grid>
      </div>
    )
  }
}

export default connect('selectedRegion, parentAreaFree, listAllCompetitions, parentAreaFree, listAllArea, listAllRegion', actions)(withRouter(Home))