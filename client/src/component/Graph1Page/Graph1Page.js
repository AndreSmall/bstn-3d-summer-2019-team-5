import React from 'react';
import NavBar1 from '../NavBar/NavBar1.js';
import NavBar2 from '../NavBar/NavBar2.js';
import Graph1 from '../Graphs/Graph1'
import '../../component/Graph.scss'
import '../Card/Card.scss';
import CardContainer from '../Card/CardContainer';
import Footer from '../Footer/Footer.js';

class Graph1Page extends React.Component {
  render(){
    return(
      <>
      <div className='graphPage'>
        <NavBar1/>
        <NavBar2/>
        <Graph1/>
        <CardContainer />
        <Footer />
      </div>
      </>
    )}
}

export default Graph1Page;
