import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";


export const store = configureStore({
    // This line starts the creation of the Redux store using configureStore. The store will manage the state of the application.
    reducer: {
        // The reducer property is an object where each key-value pair represents a slice of the state and the corresponding reducer function that manages it.
        counter: CounterSlice
        // Here, we define a slice of the state named counter and assign the CounterSlice reducer to manage this slice of the state. This means that any actions related to the counter slice will be handled by the CounterSlice reducer.
    }
}) 