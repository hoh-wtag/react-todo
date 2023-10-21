import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK } from "@store/types";

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
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isDone: true, completedDate: new Date() }
            : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, title: action.payload.newTitle }
            : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;
