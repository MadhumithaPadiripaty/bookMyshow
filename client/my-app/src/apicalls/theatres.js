import { axiosInstance } from "."


export const AddTheatre=async(payload)=>{
    try{
        const response =await axiosInstance.post('/api/theatres/add-theatre',payload)
        return response.data
    }catch(err){
        return err.response
    }
}


export const GetAllTheatresByOwner=async(payload)=>{
    try{
        const response =await axiosInstance.post('/api/theatres/get-all-theatre-by-owner',payload)
        return response.data
    }catch(err){
        return err.response
    }
} 

export const UpdateTheatre=async(payload)=>{
    try{
        const response =await axiosInstance.put('/api/theatres/update-theatre',payload)
        return response.data
    }catch(err){
        return err.response
    }
} 

export const DeleteTheatre=async(payload)=>{
    try{
        const response =await axiosInstance.post('/api/theatres/delete-theatre',payload)
        return response.data
    }catch(err){
        return err.response
    }
} 

export const GetAllTheatres=async()=>{
    try{
        const response =await axiosInstance.get('/api/theatres/get-all-theatre')
        return response.data
    }catch(err){
        return err.response
    }
} 

export const AddShow=async(payload)=>{
    try{
        const response =await axiosInstance.post('/api/theatres/add-show',payload)
        return response.data
    }catch(err){
        return err.response
    }
} 