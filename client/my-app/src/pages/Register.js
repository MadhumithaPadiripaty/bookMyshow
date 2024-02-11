import React ,{useEffect}from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { Form, message} from 'antd'
import Button from "../components/Button";
import { RegisterUser } from '../apicalls/users';

const Register = () => {
  const navigate=useNavigate
    const onfinish=async (value)=>{//value==all input given by user
        try{
            const res=await RegisterUser(value)
            if (res.success){
                message.success(res.message)
            }else{
                message.success(res.message )
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
    return (
        <div className="flex justify-center h-screen items-center bg-primary">
        <div className="card p-3 w-400">
          <h1 className="text-xl mb-1">Welcome to Scaler Shows! Please Register </h1>
          <hr />
          <Form layout="vertical" className="mt-1" onFinish={onfinish} >
            
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <input type="text" />
            </Form.Item>
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
              <Button fullWidth title="REGISTER" type="submit"/>
              <Link to="/login" className="text-primary">
                {" "}
                Already have an account? Login
              </Link>
            </div>
          </Form>
        </div>
      </div>
    )
}

export default Register