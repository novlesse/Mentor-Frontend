import React, { useEffect, useState } from "react";
import CategoryBox from '../components/CategoryBox';

export default function Workshops(props) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    document.title = "Workshops";
    Axios.get(`http://localhost:3333/category/all`)
        .then((res)=>{
            const allCategories = res.data;
            allCategories.foreach(x => setCategories(categories => [...categories, x]))

        })
  }, []);
  
  return (
    <div>
      {categories.map((category)=>
          <CategoryBox key={category._id} name={category.name} description={category.description} tags={category.tags} />
      )} 
    </div>
  
  )
}
