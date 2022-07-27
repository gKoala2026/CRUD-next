import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/v1/table',
    timeout: 1000,
})

export const getTable = ( subscriber: any ) => {
    instance.get('/')
    .then((res:any)=>{
        subscriber(res.data)
    })
}

export const addUser = ( subscriber: any, user: any ) => {
    instance.post('/add', user)
    .then((res:any)=>{
        subscriber(res.data)
    })
}

export const delUser = ( subscriber: any, email:String ) => {
    instance.post('/delete', {email})
    .then((res:any)=>{
        subscriber(res.data)
    })
}

export const updateUser = ( subscriber: any, user: any ) => {
    instance.post('/update', user)
    .then((res:any)=>{
        subscriber(res.data)
    })
}