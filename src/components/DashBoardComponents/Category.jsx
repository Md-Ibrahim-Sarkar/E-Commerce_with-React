/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../Features/Categories/categoriesSlice";


function Category() {
   
  const category = useSelector((state)=> state.categories)
  const dispatch = useDispatch()
  

 console.log(category);
 

  useEffect(() => {
    dispatch(getCategory())
  },[])
  
    const items = [
        { src: "https://placehold.co/100x100?text=Tractor", alt: "Toy tractor" },
        { src: "https://placehold.co/100x100?text=Wheel", alt: "Toy wheel" },
        { src: "https://placehold.co/100x100?text=Controller", alt: "Toy controller" },
        { src: "https://placehold.co/100x100?text=Chair", alt: "Toy chair" },
        { src: "https://placehold.co/100x100?text=Shirt", alt: "Toy shirt" },
        { src: "https://placehold.co/100x100?text=Camera", alt: "Toy camera" }
    ];
    
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
    {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4 border rounded shadow-md">
            <img src={item.src} alt={item.alt} className="object-contain w-24 h-24 mb-2" />
            <p className="text-center">Toys</p>
        </div>
    ))}
</div>
  )
}

export default Category