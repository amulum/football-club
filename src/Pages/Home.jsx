import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions } from '../store/store'

class Home extends Component {
  componentDidMount = () => {
    // get all areas filter yg ada flagnya kalo
    // get all competition
    // filter di js sesuai list country
    // order by tier per country
    console.log('list all competition')
  }
  render() {
    return (
      <div>Home Page</div>
    )
  }
}

export default connect('listAllCompetition', actions)(withRouter(Home))