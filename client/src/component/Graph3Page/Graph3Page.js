import React from 'react';
import NavBar1 from '../NavBar/NavBar1.js';
import NavBar2 from '../NavBar/NavBar2.js';
import Graph3 from '../Graphs/Graph3'
import '../../component/Graph.scss'
import CardContainer from '../Card/CardContainer';
import Footer from '../Footer/Footer.js';

class Graph3Page extends React.Component {
  render(){
    return(
      <>
      <div className='graphPage'>
        <NavBar1/>
        <NavBar2/>
        <Graph3/>
        <CardContainer />
        <Footer />
      </div>
      </>
    )}
}

export default Graph3Page;
