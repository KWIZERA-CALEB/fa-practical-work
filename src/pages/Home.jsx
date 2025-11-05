import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-full md:w-[300px]">
        <p className="font-bold text-[16px] text-center mb-[30px]">This is a landing page to take admins to login</p>
        <Link to={'/login'}>
            <Button buttonType={'button'} buttonBg={"bg-blue-500"} buttonColor={"text-white"}>
            Go Login
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
