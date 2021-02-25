import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'semantic-ui-react'
import Job from './Job';
import JobsPagination from './JobsPagination';

const  App = () => {

  const [params , setParams] = useState({});
  const [page , setPage] = useState(1);
 
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params , page);
  // console.log(jobs);

  return ( 
      <div className="my-4 mb-10">
          <Container>
            <h1 className="mb-4">Jobs Listing</h1>
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error. Try Refreshing.</h1>}
            {jobs.length}
            {jobs.map(job => {
              return <Job key={job.id} job={job} />
            })}
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
        </Container>
      </div>
  );
}

export default App;

