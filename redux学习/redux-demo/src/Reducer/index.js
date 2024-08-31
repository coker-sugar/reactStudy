const initState = {
    value:"默认值"
}

// 有state初始值 和 根据action.type来决定具体执行哪个操作
const reducer = (state = initState,action) => {
    switch(action.type) {
        case 'Send_Action':
            return Object.assign({},state,action)
        case 'Recieve_Action':
            return Object.assign({}, state, action)
        default:
            break;
    }
}

module.exports = { 
    reducer
}