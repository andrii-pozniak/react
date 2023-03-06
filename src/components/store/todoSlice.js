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
        removeToDos (state, action) {
            state.toDos = state.toDos.filter(toDo => toDo.id !== action.payload.id)

        },
        toggleToDoCompleted (state, action) {
            const toggleTodo = state.toDos.find(toDo => toDo.id === action.payload.id );
            toggleTodo.completed  = !toggleTodo.completed;
        },
        
    }

});

export const { addToDo, removeToDos, toggleToDoCompleted } = todoSlice.actions;

export default todoSlice.reducer;