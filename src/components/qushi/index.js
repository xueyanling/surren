import React, { Component } from 'react';
import F2 from '@antv/f2'
class   Qushi extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        var data = [{
            year: '1',
            sales: 38
          }, {
            year: '2',
            sales: 52
          }, {
            year: '3',
            sales: 61
          }, {
            year: '4',
            sales: 145
          }, {
            year: '5',
            sales: 48
          }, {
            year: '6',
            sales: 38
          }, {
            year: '7',
            sales: 38
          }, {
            year: '8',
            sales: 38
          }];
          var chart = new F2.Chart({
            id: 'mountNode3',
            pixelRatio: window.devicePixelRatio
          });
        
          chart.source(data, {
            sales: {
              tickCount: 2
            }
          });
          chart.interval().position('year*sales');
          chart.render();
    }
    render() {
        return (
            <canvas id="mountNode3"></canvas>
        );
    }
}

export default  Qushi;