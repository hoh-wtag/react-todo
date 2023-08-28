import { ADD_TASK, DELETE_TASK, SET_TASK_DONE } from "@store/types";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case SET_TASK_DONE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isDone: true, completedDate: new Date() }
            : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;
