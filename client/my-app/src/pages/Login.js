import React , { useEffect } from 'react'
import {Form,message} from "antd";
import Button from "../components/Button";
import { Link,useNavigate } from "react-router-dom";
import { LoginUser } from '../apicalls/users';

const Login = () => {
    const navigate =useNavigate()
    const onfinish=async (value)=>{//value==all input given by user
        try{
            const res=await LoginUser(value)
            if (res.success){
                message.success(res.message)
                localStorage.setItem('token',res.token)
                // navigate('/')
                window.location.href='/'
            }else{
                message.error(res.message)
            }
        // console.log("know",value)
        // message.success("you are registered")//pop message on ui and it inbuild
        // message.error('you are not registered')
        }catch(error){
            message.error(error.message)
        }
    }
    useEffect(()=>{
        if (localStorage.getItem('token')){
            navigate('/')
        }
    },[])
    return(
        <div className="flex justify-center h-screen items-center bg-primary">
        <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">Welcome Again! Please Login</h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onfinish} >
            <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            >
            <input type="email" />
            </Form.Item>
            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            >
            <input type="password" />
            </Form.Item>

            <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth title="LOGIN" type="submit" />
            <Link to="/register" className="text-primary">
                {" "}
                Don't have an account? Register
            </Link>
            </div>
        </Form>
        </div>
    </div>
  
    )
        
    
}

export default Login