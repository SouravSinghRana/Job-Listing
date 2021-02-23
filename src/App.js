import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'semantic-ui-react'
import Job from './Job';

const  App = () => {

  const [params , setParams] = useState({});
  const [page , setPage] = useState(1);
 
  const { jobs, loading, error } = useFetchJobs(params , page);
  console.log(jobs)
  return (
      <Container className="my-4">
      <h1 className="mb-4">Jobs Listing</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.length}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
     </Container>
  );
}

export default App;

