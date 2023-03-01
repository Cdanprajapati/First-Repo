import TodoHome from "./Components/TodoHome";
import { useReducer } from "react";
import { createContext } from "react";
export const TodoContex = createContext();
const initialstate = {
  inputOpen: false,
  taskMenu: false,
  taskDone: false,
  isDeleted: false,
  id: 0,
  hideDoneTask: false,
  filterTask: false,
  selectedHomeTags: false,
  better: [],
  border: [],
  allTodos: [],
  selected: "",
  title: "",
  description: "",
  taskDoneOpen: true,
  taskMenuOpen: true,
  tags: [
    { title: "work", id: 1 },
    { title: "study", id: 2 },
    { title: "Enjoyment", id: 3 },
    { title: "family", id: 4 },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "InputOpen":
      return {
        ...state,
        inputOpen: true,
        title: "",
        description: "",
        border: [],
        better: [],
      };
      break;

    case "SelectedTags":
      let selected = state.tags.filter((item, id) => item.id === action.id);
      let prev = state.border.filter((item, id) => item.id === action.id);
      let border = [...state.border, ...selected];
      if (prev.length > 0) {
        border = border.filter((item, id) => item.id !== action.id);
      }
      return {
        ...state,
        selected,
        border,
      };

    case "HomeTags" :
      console.log('state.alltodos',state.allTodos)
      let homeTags = state.tags.filter((item, id) => item.id === action.id);
      let tap = state.better.filter((item, id) => item.id === action.id);
      let better = [ ...state.better, ...homeTags];
      if(tap.length > 0) {
        better = better.filter((item, id)  => item.id !== action.id);
      }
      const filterTodos = state.allTodos.filter(todo => {
        let filterTags = todo.tags.filter(todoTag => {
            let findTag = better.find(tag => {
                if(todoTag.title === tag.title && todoTag.id === tag.id)
                    return tag
            })
            return findTag
        })
        if(filterTags.length > 0)
            return todo
        }
      )
      console.log(action.id, "Here action ki id==>")
      console.log(better, "here better ==>") 
      console.log(tap, "here is tap") 
      console.log(homeTags, "here is home tags==>") 
      console.log(state.selectedHomeTags, "here seled home tags")  
      
      return {
        ...state,    
        selectedHomeTags: true,
        homeTags,
        better,
        filterTask: better.length > 0,
      };   

    case "updateOpen":
      let edit = state.allTodos;
      let Update = edit.filter((item, index) => index === action.id);
      console.log(Update, "updateOpen======>");
      return {
        ...state,
        id: action.id,
        inputOpen: true,
        title: Update[0].title,
        description: Update[0].description,
        border: Update[0].tags,
        taskMenu: true,
      };
      break;

    case "UpdatedTask":
      let obj = {
        title: state.title,
        description: state.description,
        tags: state.border,
      };
      console.log(obj, "obj====>");
      let updateTodo = state.allTodos.map((item, index) => {
        if (index === state.id) item = obj;
        return item;
      });
      console.log(updateTodo, "updateTodo====>");
      return {
        ...state,
        inputOpen: false,
        taskMenu: false,
        allTodos: updateTodo,
      };

    case "InputClose":
      return {
        ...state,
        inputOpen: false,
        setEdit: false,
        taskMenu: false,
      };

    case "Title":
      return {
        ...state,
        title: action.data,
      };

    case "Description":
      return {
        ...state,
        description: action.data,
      };
    case "Deleted":
      let donetask = state.allTodos;
      let check = donetask.filter((item, index) => index !== action.id);
      console.log(check, "[====>]", action.id);
      return {
        ...state,
        allTodos: check,
        taskMenu: false,
      };

    case "Donetask":
      let todos = state.allTodos;
      todos[action.id] = {
        ...todos[action.id],
        isDone:true,
      };
      return {
        ...state,
        allTodos: todos,
      };

    case "Non-Done" :
      return {
        ...state,
        isDone: false,
      }

    case "HideDonetask":
      console.log("HideDonetask",action)
      return {
        ...state,
        hideDoneTask: action.checked,
      };
    
    case "FilterData":
      console.log('filter data', action)

    case "TaskMenu":
      return {
        ...state,
        taskMenu: !state.taskMenu,
        taskMenuOpen: action.id,
      };

    case "addTodo":
      let update = state.allTodos;
      if (action.id)
        update[action.id] = {
          ...update[action.id],
        };
      return {
        ...state,
        inputOpen: false,
        taskMenu: false,
        allTodos: [
          ...state.allTodos,
          {
            title: state.title,
            description: state.description,
            isDone: false,
            tags: state.border,
          },
        ],
      };
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className="App">
      <TodoContex.Provider value={{ ...state, dispatch: dispatch }}>
        <TodoHome />
      </TodoContex.Provider>
    </div>
  );
}
export default App;