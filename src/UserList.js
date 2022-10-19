import { useEffect,useState  } from "react";
import React from 'react';
import axios from 'axios'

const UserList = () => {
    const [data,setData]=useState()
    const[error,setError]=useState(null)
    useEffect(()=>{
        function getdata (){
            axios.get('https://jsonplaceholder.typicode.com/users')
 .then(res=>setData(res.data))
 .catch(function (error) {
   console.log(error);
 })
 
        }
        getdata();
        
    },[])

    
    
    return (
     <div>
        
       {data?.map(course => (
         
           <h1>{course.name}</h1>
         
       ))}
     
     </div>
    );
};

export default UserList;





