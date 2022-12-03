import React, {useState, useEffect} from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Creation from './Creation'
import ExquisiteHorse from './ExquisiteHorse'


// import CreationForm from './CreationForm'

const Creations = () => {

    const [creations, setCreations] = useState([])
    const [showDetails, setShowDetails] = useState({
        title: "",
        authors: "",
        text: ""
    })

    console.log(showDetails)

    useEffect(() => {
        fetch("http://localhost:3000/creations")
        .then(resp => resp.json())
        .then(data => {
            setCreations(data)
        })
    }, []) 

    const creationsList = creations.map((c) => 
    
        <Creation 
            key={c.id}
            creation={c}
            setShowDetails={setShowDetails}
            />
        )

    return (
        <div>
            <h2>Past Creations</h2>
            <hr />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col"># of Authors</th>
                        <th scope="col">Type</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {creationsList}
                </tbody>
            </table>
            <hr/><br/>
            
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {showDetails.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {`${showDetails.authors} Collaborators`}
                    </Typography>
                    <Typography variant="body1">
                        {showDetails.text} 
                    <br />
                    </Typography>
                </CardContent>
            </Card>
            
            
        </div>
    )

}

export default Creations