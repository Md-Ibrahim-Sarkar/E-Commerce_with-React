import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { getDatabase, push, ref } from "firebase/database";
import app from "../../database/firebase.init";

function Create_Category() {

  const schema = yup
  .object({
    categoryName: yup.string().required(),
    categoryImageUrl: yup.string().url().required(),
  })
  .required()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    const db = getDatabase(app);
    push(ref(db, 'categories'), data ).then(() => {
      reset();
    })

  }



  return (
    <div className="w-full max-w-md p-8 mx-auto mt-8 bg-white rounded-lg shadow-md">
    <h1 className="mb-6 text-2xl font-bold text-center">Create new Category</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
            <label className="block mb-2 text-gray-700">Product Name</label>
          <input {...register('categoryName')} name="categoryName" type="text" className="w-full px-3 py-2 border rounded-lg" placeholder='Name Here' />
          {errors.categoryName && <span  className="text-red-500">{errors.categoryName?.message}</span>}
          
        </div>

        <div className="mb-6">
            <label className="block mb-2 text-gray-700">Product Image</label>
          <input {...register('categoryImageUrl')} name="categoryImageUrl" type="url" className="w-full px-3 py-2 border rounded-lg" placeholder='Link Here' />
          {errors.categoryImageUrl && <span className="text-red-500">{errors.categoryImageUrl?.message}</span>}
        </div>
        <div className="text-center">
            <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">Create new Product</button>
        </div>
    </form>
</div>
  )
}

export default Create_Category