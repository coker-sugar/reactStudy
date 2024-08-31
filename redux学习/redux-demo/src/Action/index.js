// 决定执行哪个操作的key AND 传递的参数
const sendAction = () => {
    return {
        type:"Send_Action",
        value:"发送了一个send_action"
    }
}

const recieveAction = () => {
    return {
        type:"Recieve_Action",
        value:"接收了一个recive_action"
    }
}

module.exports = {
    sendAction,
    recieveAction
}