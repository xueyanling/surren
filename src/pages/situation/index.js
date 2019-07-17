import React, { Component } from 'react';
import SituationItem from '../../components/situation'
import styles from './index.css'
import MapLeft from '../../components/situation/mapLeft'
import ListRight from '../../components/situation/listRight'
import City from '../../components/situation/city'
import Column from '../../components/situation/column'
class Overall extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className={styles.bigbox}>
                 <SituationItem></SituationItem>
                 <SituationItem></SituationItem>
                 <SituationItem></SituationItem>
                 <SituationItem></SituationItem>
                 <SituationItem></SituationItem>
                </div>
                <div className={styles.mapbox}>
                    <div>
                        <h3>突发事件地图</h3>
                        <div>
                            <MapLeft></MapLeft>
                        </div>
                    </div>
                    <div>
                        <h3>
                            <span>实时数据</span>
                            <p>
                                <span className={styles.active}>
                                    突发事件
                                </span>
                                <span>
                                    热点事件
                                </span>
                            </p>
                        </h3>
                        <ListRight></ListRight>
                        <div>      
                        </div>
                    </div>
                    <div>
                        <h3>采集量趋势</h3>
                        <City></City>
                    </div>
                    <div>
                        <h3>事件类型</h3>
                        <Column></Column>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overall;