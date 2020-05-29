import React, { Component } from 'react';
//import data.json file app.js
import data from './components/data.json';
//react bootstrap components
import Card from "react-bootstrap/Card";
//import local css file
import './App.css';
function App() {
  return (

      <div className="App">
    
    {/* using map() method to loop trought all .json items  */}
  
     {
       
       data.map(postData => {

        return(

          <Card  className="card-size d-flex" key={postData.id}>
										<Card.Img variant="top" src={postData.image} />
										<Card.Body>
											<Card.Title>
												{postData.title}
											</Card.Title>
											<Card.Subtitle>
												{postData.tag + " "}
											</Card.Subtitle>
											<Card.Text>
												{postData.body}
											</Card.Text>
										</Card.Body>
									</Card>
        )
       })
     }

  </div>
  );
}

export default App;
