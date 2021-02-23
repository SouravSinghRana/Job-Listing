import React, {useState} from 'react'
import { Card, Label, Button, Transition} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

const Job = ({job}) => {

    const [open, setOpen] = useState(false)


    return ( 
    <Card fluid color="blue">
      <Card.Content>
        <div className="d-flex justify-content-between">       
           <div>
            <Card.Header>
              {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
            </Card.Header>
            <Card.Meta className="text-muted mb-10">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Meta>
            <Label variant="secondary" style={{marginRight : "5px"}}>{job.type}</Label>
            <Label variant="secondary" style={{marginBottom : "5px"}}>{job.location}</Label>
            <div style={{ wordBreak: 'break-all', marginBottom: "5px"}}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img height="35%" width="20%" alt={job.company} src={job.company_logo} />
        </div>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="primary"
            >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
         <Transition visible={open} animation='scale' duration={500}>
           <div className="mt-4">
                    <ReactMarkdown source={job.description} />
            </div>
        </Transition>
      </Card.Content>
    </Card>
    )
}

export default Job
