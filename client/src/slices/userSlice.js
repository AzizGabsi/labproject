
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

// const url = 'http://localhost:5000'

export const register = createAsyncThunk(
    'user/register', async(info, {rejectWithValue}) => {

    try {
            const {data} = await axios.post('/api/user/register', info)
            console.log(data)
            return data
        
    } catch (error) {
                console.log(error.response.data)
        return rejectWithValue(error.response.data)

    }
}
)

export const login = createAsyncThunk(
    'user/login', async (info, {rejectWithValue}) => {
        try {
            const {data} = await axios.post('/api/user/login', info) 
            console.log('data of login: ', data)
            return data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        userList : {},
        isAuth: Boolean(localStorage.getItem('isAuth')) || false,
        token: localStorage.getItem('token') || null,
        isLoading: false,
        errors: null,
    },
    reducers : {
        logout : (state) => { 
            localStorage.removeItem('token')
            localStorage.removeItem('isAuth')
            state.isAuth = false
            state.token = null
            state.userList = {} 
        }
    },
    extraReducers: {
        [register.pending] : (state) => {state.isLoading = true},
        [register.fulfilled] : (state, action) => {
            state.errors = null
            state.isLoading = false
            state.isAuth = true
            // console.log(action.payload.token)
            state.token = action.payload.token
            localStorage.setItem('token', action.payload.token) 
            localStorage.setItem('isAuth', true) 
        },
        [register.rejected] : (state, action) => {
            state.isLoading = false
            console.log(action.payload)
            state.errors = action.payload
        },
        [login.pending] : (state) => {state.isLoading = true},
        [login.fulfilled] : (state, action) => {
            state.errors = null
            state.isLoading = false
            state.isAuth = true
            // console.log(action.payload.token)
            state.token = action.payload.token
            localStorage.setItem('token', action.payload.token) 
            localStorage.setItem('isAuth', true) 
        },
        [login.rejected] : (state, action) => {
            state.isLoading = false
            // console.log(response)
           state.errors = action.payload
            
        }
    }
})

export default  userSlice.reducer
export const {logout} = userSlice.actions