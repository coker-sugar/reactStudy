import React from 'react';
import store from '../Store/index';
import { sendAction,recieveAction } from '../Action/index';

export default class Home extends React.Component {

    handleClick = () => {
        store.dispatch(sendAction());
    };

    handleClickRecieve = () => {
        store.dispatch(recieveAction());
    }
    
    // 组件加载完毕监听
    componentDidMount() {
        store.subscribe(() => {
            console.log(store.getState());
            this.setState({
                value: store.getState().value
            })
        });
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>请点击我</button>
                <div>{store.getState() && store.getState().value}</div>
                <button onClick={this.handleClickRecieve}>接收</button>
            </>
        )
    }
};

