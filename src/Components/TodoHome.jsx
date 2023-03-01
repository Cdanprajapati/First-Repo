import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { TodoContex } from "../App";
import style from "../Assets/Style/TodoHome.module.css";
import Tasks from "../Components/Tasks";
import TodoInput from "./TodoInput";

function TodoHome({ id }) {
  const appContext = useContext(TodoContex);

  return (
    <div>
      {console.log(id)}
      {appContext.inputOpen && <TodoInput id={id} />}
      <div className="container">
        <div className="row pt-5">
          <div className="col-sm-2">
            <h3>todo</h3>
          </div>
          <div className="col-sm-9"></div>
          <div className="col-sm-1">
            <h3 onClick={() => appContext.dispatch({ type: "InputOpen" })}>
              <FontAwesomeIcon icon={faPlus} />
            </h3>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-3">
            { appContext.tags.map((item, i) => (
                <div
                  value={item.title}
                    className={
                      appContext.better.filter((better, id) => better.id === item.id).length>0
                        ? "col-md-12 my-2 d-flex  border rounded p-2 "+style["Touch"] : "col-md-12 my-2 d-flex p-2"
                      }                      
                      key={i}
                    >  
                      <button
                        className={style["dot-" + item.id]}
                        onClick={() => appContext.dispatch({ type:"HomeTags", id:item.id})}     
                    />
                  <label className="ms-1">{item.title}</label>                    
                </div>
              ))
            }
          </div>

          <div className="col-sm-9">
            <Tasks id={id} />
          </div>

          <div className="row">
            <div className="col-sm-3">
              <input
                className="mt-5"
                type="checkbox"
                onClick={(e) =>
                  appContext.dispatch({
                    type: "HideDonetask",
                    checked: e.target.checked,
                  })
                }
              />
              <label className="ps-2">Hide Done Task</label>
            </div>
            <div className="col-sm-9"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoHome;