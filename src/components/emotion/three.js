import React, { Component } from 'react';
import F2 from '@antv/f2'
class Emotionthree extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        var fontSize = 4 * (window.innerWidth / 375); // 字体适配不同屏幕
        var data = [{
        x: '1',
        y: 65
    }];
        var chart = new F2.Chart({
            id: 'mountNode2',
            pixelRatio: window.devicePixelRatio
        });
        chart.source(data, {
            y: {
            max: 100,
            min: 0
            }
        });
        chart.axis(false);
        chart.tooltip(false);
        chart.coord('polar', {
            transposed: true,
            innerRadius: 0.9,
            radius: 1,
            
        });
        chart.guide().arc({
            start: [0, 0],
            end: [1, 99.98],
            top: false,
            style: {
            lineWidth: 10,
            stroke: '#fff'
            }
        });
        chart.guide().text({
            position: ['50%', '50%'],
            content: '65%',
            style: {
            fontSize: fontSize,
            fill: 'red'
            }
        });
        chart.interval().position('x*y').size(3).color('red').animate({
            appear: {
            duration: 1200,
            easing: 'cubicIn',
            }
        });
        chart.render();
    }
    render() {
        return (
            <canvas id="mountNode2" style={{width:'120px',height:'120px'}}></canvas>
        );
    }
}

export default Emotionthree;