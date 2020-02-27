import createStore from "unistore";
import axios from "axios";
import { Switch, Redirect } from "react-router-dom";

const initialState = {
  nextPath : '',
  idCompetitionFree : [
    2000,2001,2002,2003,
    2013,2014,2015,2016,
    2017,2018,2019,2021
  ],
  parentAreaFree : [
    "Europe", "World", "South America"
  ],
  listAllCountry: {},
  listAllRegion: [],
  listSelectedArea: [],
  selectedRegion : '',
  listCountryCode: [],
  selectedCompetitionId: '',
  listTeams: [],
  selectedTeamData: {},
  listPlayer: [],
  selectedTeamId: '',
  selectedPlayer: {}

};
export const store = createStore(initialState);

const apiPath = "https://api.football-data.org/v2";
const apiKey = "0e2e8e71c2c842868922072c12b2afd7"
export const actions = store => ({
  // BASIC FUNCTION
  setInput: (store, event) => {
    // console.log(event.target.name, event.target.value);
    store.setState({
      [event.target.name]: event.target.value
    });
  },
  setChange: (store, key, value) => {
    store.setState({
      [key]: value
    });
  },
  setManyChanges: (store, dict) => {
    store.setState(dict);
  },
  // FUNCTIONS
  getAllArea : async (state)=> {
    const req = await {
      method: "get",
      url: `${apiPath}/areas`,
      headers: {
        'X-Auth-Token' : `${apiKey}`
      }
    }
    const self = store
    await axios(req)
      .then(response => {
        let region = []
        response.data.areas.forEach(item => {
          if (!region.includes(item.parentArea) && item.parentArea !== null){
            region.push(item.parentArea)
          }
        })

        self.setState({
          isLoading: false,
          listAllArea: response.data.areas,
          listAllRegion: region
        })
      })
      .catch(error => {
        self.setState({
          isLoading: false
        })
      })
  },
  getAllCompetitions : async (state)=> {
    const req = await {
      method: "get",
      url: `${apiPath}/competitions`,
      headers: {
        'X-Auth-Token' : `${apiKey}`
      }
    }
    const self = store
    await axios(req)
      .then(response => {
        self.setState({
          isLoading: false,
          listAllCompetitions : response.data.competitions
        })
      })
      .catch(error => {
        self.setState({
          isLoading: false
        })
      })
  },
  getTeams : async (state, id)=> {
    const req = await {
      method: "get",
      url: `${apiPath}/competitions/${id}/teams`,
      headers: {
        'X-Auth-Token' : `${apiKey}`
      }
    }
    const self = store
    await axios(req)
      .then(response => {
        console.log('list teams di axios', response.data.teams)
        let pathCompetition = response.data.competition.name.toLowerCase().replace(/ /gi, '-')
        self.setState({
          isLoading: false,
          listTeams : response.data.teams,
          nextPath: pathCompetition
        })
      })
      .catch(error => {
        self.setState({
          isLoading: false
        })
      })
  },
  getClub : async (state, id)=> {
    const req = await {
      method: "get",
      url: `${apiPath}/teams/${id}`,
      headers: {
        'X-Auth-Token' : `${apiKey}`
      }
    }
    const self = store
    await axios(req)
      .then(response => {
        console.log('list teams di axios', response.data)
        let pathClub = response.data.shortName.toLowerCase().replace(/ /gi, '-')
        console.log('nextpath', pathClub)
        self.setState({
          isLoading: false,
          selectedTeamData : response.data,
          listPlayer: response.data.squad,
          nextPath: pathClub
        })
      })
      .catch(error => {
        self.setState({
          isLoading: false
        })
      })
  },
  getPlayer : async (state, id)=> {
    const req = await {
      method: "get",
      url: `${apiPath}/players/${id}`,
      headers: {
        'X-Auth-Token' : `${apiKey}`
      }
    }
    const self = store
    await axios(req)
      .then(response => {
        console.log('list teams di axios', response.data)
        let pathPlayer = response.data.name.toLowerCase().replace(/ /gi, '-')
        console.log('nextpath', pathPlayer)
        self.setState({
          isLoading: false,
          playerData: response.data,
          nextPath: pathPlayer
        })
      })
      .catch(error => {
        self.setState({
          isLoading: false
        })
      })
  },

  handleLogin: async (state, security) => {
    // console.log("masuk handle login", security);
    const req = await {
      method: "get",
      url: `${apiPath}/auth?security_code=${security}`
    };
    // console.log("cek req admin login", req);
    const self = store;
    await axios(req)
      .then(response => {
        if (security.length === 32) {
          self.setState({
            loginReport: true,
            isLoading: false,
            isFromLoginReport: true
          });
        } else {
          self.setState({
            isLoading: false,
            isLoggedIn: true,
            isFromLogin: true
          });
        }
        localStorage.setItem("token", response.data.token);
        // console.log("masuk then", response.data);
      })
      .catch(error => {
        self.setState({
          isLoading: false,
          isError: true
        });
        // console.log("masuk error", error);
      });
  },
  handleChangeReport: async (state, report_id, report_status) => {
    await store.setState({ isLoading: true });
    let dataChange = {
      report_id,
      report_status
    };
    const req = await {
      method: "put",
      url: `${apiPath}/admin/report`,
      data: dataChange,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    // console.log("cek req handleChangeReport", req);
    const self = store;
    await axios(req)
      .then(response => {
        self.setState({
          isLoading: false
        });
        // console.log("masuk then", response.data);
      })
      .catch(error => {
        self.setState({
          isLoading: false
        });
        // console.log("masuk error", error);
      });
  },
});
