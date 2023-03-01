import React, { useContext } from "react";
import style from "../Assets/Style/EditDelete.module.css";
import { TodoContex } from "../App";

function EditDelete({id}) {
  const appContext = useContext(TodoContex)  

  return (    
      <div className={"container "+style["card"]}>
        <div className="row ">
          <div className="col-sm-12">
            <div className={"border border-1 rounded-top "+style["Edit"]}>
              <p className="card-title ms-2 pt-1 text-start text-dark" onClick={()=>appContext.dispatch({type:"updateOpen", id })}>Edit..</p>
            </div>
          </div>
        </div>        
        <div className="row">
          <div className="col-sm-12">
            <div className={"border border-1 rounded-bottom "+style["Delete"]} 
              onClick={()=>appContext.dispatch({type:"Deleted", id })}>
              <p className="card-title ms-2 pt-1 text-start text-dark">Delete</p>
            </div>
          </div>
        </div>
      </div>

  );
}

export default EditDelete;
