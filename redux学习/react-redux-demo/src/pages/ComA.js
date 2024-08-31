// 用类的形式创建ComA组件
import React from 'react';
import { connect } from 'react-redux';

class ComA extends React.Component {
    handleClick = () => {
        this.props.sendAction();
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}> + </button>
            </div>
        );
    }
}

const mapDispatchToProps = (disptch) =>{
    return {
        sendAction:() => {
            disptch({
                type:'ADD'
            })
        }
    }
}

export default connect(
    null,mapDispatchToProps // 第二个参数是发送action
)(ComA)