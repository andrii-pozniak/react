import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice ({
    name: "toDos",
    initialState: {
        toDos: []
    },
    reducers: {
        addToDo (state, action) {
           
            state.toDos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                descriptions: action.payload.descriptions,
                completed: false,  
            })
        },
        removeToDos (state, action) {},
        toggleToDoCompleted (state, action) {},
    }

});

export const { addToDo, removeToDos, toggleToDoCompleted } = todoSlice.actions;

export default todoSlice.reducer;