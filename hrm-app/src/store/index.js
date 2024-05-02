import { configureStore } from "@reduxjs/toolkit";
import {personelSlice} from './features/index';

const store = configureStore({
    reducer: {
        personel: personelSlice
    }
});

export default store;