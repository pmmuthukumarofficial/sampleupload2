
import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";
import { useState, useEffect } from "react";


export const useMyHook = (url) => {
    
  
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);
  
    return [data];
  };
  
  

  

   
