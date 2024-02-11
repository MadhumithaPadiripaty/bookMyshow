import { axiosInstance } from ".";

// get all movie

export const GetAllMovies= async()=>{
    try{
        const response =await axiosInstance.get('/api/movie/get-all-movies')
        return response.data
    }catch(err){
        return err.response
    }
}


export const AddMovie= async(payload)=>{
    try{
        const response =await axiosInstance.post('/api/movie/add-movie',payload)
        return response.data
    }catch(err){
        return err.response
    }
}


export const UpdateMovie= async(payload)=>{
    try{
        const response =await axiosInstance.post('/api/movie/update-movie',payload)
        return response.data
    }catch(err){
        return err.response
    }
}


export const DeleteMovie= async(payload)=>{
    try{
        const response =await axiosInstance.put('/api/movie/delete-movie',payload)
        return response.data
    }catch(err){
        return err.response
    }
}