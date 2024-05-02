import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import userController from '../../config/UserController';
const personelInitialState={
    token:'',
    data: {},
    isLoadingFetchLogin: false,
    isLoadingFetchRegister: false
};

export const fetchLogin = createAsyncThunk(
    'personel/fetchLogin',
    async (payload) => {
        try {
            const result = await fetch(userController.login,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
            }).then(data => data.json()).then(data => data);
            
            return result;
        } catch (error) {
            console.log('ERROR: personel/fetchLogin...:'+error);
        }       
    }
);

export const fetchRegister = createAsyncThunk(
    'personel/fetchRegister',
    async (payload) =>{
        try {
            const result = await fetch(userController.register,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
            }).then(data => data.json()).then(data => data)
            return result;
        } catch (error) {
            console.log('ERROR: personel/fetchRegister...:'+error);
        }      
    }
);

const personelSlice = createSlice({
    name: 'personel',
    initialState: personelInitialState,
    
    reducers:{},
    extraReducers: (build) => {
        
        build.addCase(fetchLogin.pending, (state)=> {
            state.isLoadingFetchLogin = true;
        }); // işlemin devam ettiği an
        build.addCase(fetchLogin.fulfilled, (state,action)=> {
            state.isLoadingFetchLogin = false;
            if( action.payload.status!==200){
                alert('Hata...:'+action.payload.message);
            }else{
                console.log('gelen data...:',JSON.stringify(action.payload));
                state.data = action.payload.data;
                sessionStorage.setItem("token",JSON.stringify(action.payload.data))
                window.location.href="/user"
            }
            
        }); // işlemin tamamladığı an
        build.addCase(fetchLogin.rejected,(state)=> {
            state.isLoadingFetchLogin = false;
        }); // işlemin iptal olduğu an



        build.addCase(fetchRegister.pending, (state)=> {
            state.isLoadingFetchRegister = true;
        }); // işlemin devam ettiği an
        build.addCase(fetchRegister.fulfilled, (state,action)=> {
            state.isLoadingFetchRegister = false;
            console.log('Register fullfill...:',action.payload);
        }); // işlemin tamamladığı an
        build.addCase(fetchRegister.rejected,(state)=> {
            state.isLoadingFetchRegister = false;
        }); // işlemin iptal olduğu an
    }
});

export default personelSlice.reducer;