import React, { Component } from "react";
import DogCard from '../Components/DogCard'
import { apiResponse } from '../api'

class DogsList extends Component {

    dogList = () => {
      return apiResponse.map(dogObj => <DogCard name= {dogObj.name} img= {dogObj.img} breed= {dogObj.breed} key= {dogObj.id}/> )
    }
   render() {
    return <div className="list">{this.dogList()}</div>;
  }
}

export default DogsList;
