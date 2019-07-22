import axios from 'axios'
export default{
    nameSpace:'contentest',
    state:{
        list:null,
    },
    effects:{
        *listFn({yt},{call,put}){
            let res=yield call(axios.get,'/api/resultlist')
            yield put({
                type:'getlist',
                list:res.data
            })
        }
    },
    reducers:{
        getlist(state,action){
            state.list=action.list
            return {...state}
        }
    }
}