import React from 'react'
import { Card, Button, CardDeck } from 'react-bootstrap'

function projectCard(props) {

    return (

        <CardDeck>
            {props.projects.map(project =>{
            <Card>
                <Card.Img variant="top" src={project.Image} />
                <Card.Body>
                    <Card.Title>{project.Title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Card.Link className="btn btn-info"href={project.Gitlink}> Github Repo</Card.Link>
                    <Card.Link className="btn btn-info" href={project.deployedLink}> Deployed Link</Card.Link>
                </Card.Footer>
            </Card>
})}

        </CardDeck>
    )
}

export default projectCard;