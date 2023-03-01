import React from "react";
// import Login from './Login';
import { useState } from "react";
import style from "../Assets/Style/Login.module.css";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

function SignUp() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="card shadow-lg p-3 mb-5 rounded ">
            <div class="card-body">
              <div className="container">
                <form>
                  {/* Head part */}
                  <div className="row">
                    <div className="col-sm-4">
                      <p className={style["text-size"]}>Sign Up</p>
                    </div>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-2">
                      <AiOutlineClose />
                    </div>
                    {/* End-Head Part */}
                  </div>
                  <hr className="pt-0" />
                  <label className={style["text-size"]}>First Name</label>
                  <input
                    type="text"
                    className={"form-control " + style["placeholder"]}
                    placeholder="Enter your first name"
                  />

                  <label className={"pt-1 " + style["text-size"]}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={"form-control " + style["placeholder"]}
                    placeholder="Enter your last name"
                  />

                  <label className={"pt-1 " + style["text-size"]}>Email</label>
                  <input
                    type="email"
                    className={"form-control " + style["placeholder"]}
                    placeholder="Enter your email name"
                  />

                  <label className={"pt-1 " + style["text-size"]}>
                    Password
                  </label>
                  <input
                    type={visible ? "text" : "password"}
                    value={password}
                    className={"form-control " + style["placeholder"]}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className={style["EyeIcons"]}
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                  <label className={"pt-1 " + style["text-size"]}>
                    {" "}
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={"form-control " + style["placeholder"]}
                    placeholder="Enter your Confirm password"
                  />
                  <hr />
                  <input
                    type="checkbox"
                    className={"pt-1" + style["text-size"]}
                  />
                  <label className={"pt-1 ms-2 " + style["text-size"]}>
                    I agree with <a href="#">Terms</a> and{" "}
                    <a href="#">Privacy</a>
                  </label>
                  <button
                    className={
                      "btn py-1 btn-primary container-fluid mt-2 " +
                      style["btn"]
                    }
                    type="button"
                  >
                    Sign Up
                  </button>
                  <hr />
                  <div className={"pt-1 ms-2 " + style["account-text"]}>
                    <p className="text-center">Already have an account ?</p>
                    <a className={"pt-1" + style["anchor-tag"]} href="#">
                      Log in
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
