import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginAdmin } from "../services/auth.service";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await loginAdmin(username, password)


            console.log(response)
            setLoading(false)
        } catch(error) {
            setLoading(false)
            console.log(error)
        }
    }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-full md:w-[400px]">
        <p className="text-center font-bold">Admins Login</p>

        <form onSubmit={handleLogin} className="flex flex-col space-y-2">
          <div>
            <Input inputType={"text"} onInputChange={handleUsernameChange} inputPlaceholder={"Username"} />
          </div>
          <div>
            <Input inputType={"password"} onInputChange={handlePasswordChange} inputPlaceholder={"Password"} />
          </div>
          <div>
            <Button
              buttonType={"submit"}
              buttonBg={"bg-blue-500"}
              buttonColor={"text-white"}
            >
              {loading ?
              <>loading . . .</> 
              :
              <>Login</>
              }
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
