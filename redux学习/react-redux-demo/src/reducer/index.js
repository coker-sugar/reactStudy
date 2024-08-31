// 创建reducer
const initState = {
    count: 0
}

const reducer = (state= initState,action) => {
    switch(action.type){
        case 'ADD':
            return {
                count: state.count + 1
            }
        default:
            return state
    }
}

module.exports = reducer