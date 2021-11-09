import React, { Component } from 'react';
import './Mateus.css';
 
class Mateus extends Component {
    render(){
      
      let img = 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg';
   
      return(
          <img src={img} width={250} height={180} />
      );
    }
  }
 
export default Mateus;