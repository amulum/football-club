import createStore from "unistore";
import axios from "axios";

const initialState = {
  idCompetitionFree : [
    2000,2001,2002,2003,
    2013,2014,2015,2016,
    2017,2018,2019,2021
  ],
  parentAreaFree : [
    "Europe", "World", "South America"
  ],
  selectedTeamData: {},
  selectedCompetitionTeams: {},
  listAllCountry: {},
  listAllRegion: [],
  listSelectedArea: [],
  selectedRegion : '',
  listCountryCode: []

};
export const store = createStore(initialState);

const apiPath = "https://api.football-data.org/v2";
const apiKey = "efee7bdaf963467ab18dc7fdfa92b554"
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
