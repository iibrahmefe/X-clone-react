import {
    createSlice
} from "@reduxjs/toolkit";


const initialState = {
    currentAccount: {
        id: 1,
        username: 'iibrahmefe',
        fullname: './iibrahmefe',
        avatar: 'https://pbs.twimg.com/profile_images/1820181778222505984/Fdl8LxaE_400x400.jpg'
    },
    accounts: [{
        id: 2,
        username: 'iibrahmefev2',
        fullname: './iibrahmefev2',
        avatar: 'https://pbs.twimg.com/profile_images/1820181778222505984/Fdl8LxaE_400x400.jpg'
    }]
}


const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //state manipule
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== account.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const {
    _addAccount,
    _removeAccount,
    _setCurrentAccount
} = auth.actions
export default auth.reducer