import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions, store } from '../store/store'
import { Grid } from '@material-ui/core'
// COMPONENT
import CardArea from '../Components/CardArea'
import Available from '../Components/Available'
import Header from '../Components/Layout/Header'
class Home extends Component {
  state = {
    available : false,
    listRegion: [
      {
        name: "World",
        component: <i class="fa fa-globe icon-3x"></i>,
      },
      {
        name: "Asia",
        component:<i class="fa fa-globe-asia"></i>,
      },
      {
        name: "Africa",
        component: <i class="fa fa-globe-africa"></i>,
      },
      {
        name: "N/C America",
        component: <i class="fa fa-globe-americas"></i>,
      },
      {
        name: "Europe",
        component: <i class="fa fa-globe-europe"></i>,
      },
      {
        name: "Oceania",
        component: <i class="fa fa-globe-asia"></i>,
      },
      {
        name: "South America",
        component: <i class="fa fa-globe-americas"></i>,
      }
    ]
  }
  componentDidMount = async () => {
    // get all areas filter yg ada flagnya kalo
    // get all competition
    // filter di js sesuai list country
    // order by tier per country
    this.props.history.replace('')
    if (!this.props.listAllArea || !this.props.listAllCompetitions){
      await this.props.getAllCompetitions()
      this.props.getAllArea()
    }
  }
  handleClickRegion = async (region) => {
    let areaId = []
    let filteredArea = await this.props.listAllArea
    if (filteredArea !== undefined) {
      filteredArea = filteredArea.filter(item =>
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
      filteredRegion = this.state.listRegion.filter(item => {
        return (
          this.props.parentAreaFree.includes(item.name)
        )
      })
    } else {
      filteredRegion = this.state.listRegion
    }
    const loopRegion = filteredRegion.map((item) => {
      return (
          <CardArea value={item.name} icon={item.component} handleClick={this.handleClickRegion}/>
      )
    })
    return (
      <div>
        <Header />
        <Available handleClick={this.handleSetAvailable} isActive={this.state.available}/>
        <Grid container padding={1} alignItems="center">
          {loopRegion}
        </Grid>
      </div>
    )
  }
}

export default connect('selectedRegion, parentAreaFree, listAllCompetitions, parentAreaFree, listAllArea, listAllRegion', actions)(withRouter(Home))