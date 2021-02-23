import { useReducer , useEffect} from 'react';
import axios from 'axios';

const initialState = {
    jobs: [], 
    loading: true
}

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_JOBS_LIST: 'get-job-list',
  ERROR: 'error',
//   UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}

const BASE_URL = "https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json" ; 
// "https://remotive.io/api/remote-jobs"


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] }
    case ACTIONS.GET_JOBS_LIST :
      return { ...state, loading: false, jobs: action.payload.jobs }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, jobs: [] }
    // case ACTIONS.UPDATE_HAS_NEXT_PAGE:
    //   return { ...state, hasNextPage: action.payload.hasNextPage }
    default:
      return state
  }
}



const useFetchJobs = (params , page) => {

    const [state, dispatch] = useReducer(reducer, initialState)


  const fetchjobs = async (API) => {
    console.log("ress");
    const response = await axios(API);
    console.log("res", response.data);
    dispatch({ type: ACTIONS.GET_JOBS_LIST, payload: { jobs: response.data} }) 

  }


    useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });

    axios.get(BASE_URL, {
      params: { markdown: true , page: page, ...params },
    }).then(res => {
      console.log("res", res);
      dispatch({ type: ACTIONS.GET_JOBS_LIST, payload: { jobs: res.data} }) 
    }).catch(e => {
      console.log("E", e);
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
    })

  }, [params, page])
  
  return state;
}

export default useFetchJobs;


