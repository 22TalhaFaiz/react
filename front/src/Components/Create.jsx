import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod'

export const Create = () => {
  const registerSchema = z.object({
    Name: z.string().min(3, "Name is Required and must be atleast 3 characters"),
    Email: z.string().email("Invalid Email Address"),
    Passw: z.string().min(8, "Password Must be Atleast 6 Characters"),
    Age: z.coerce.number().min(1, "Age Must Be Positive Number")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3008/save", data)
      alert("User Registered Succesfully");
      reset()

    } catch (error) {
      console.error("Submission Error:", error.message);
      alert("Failed To Save User")

    }
  }

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold m-6 text-center">Registration Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label for="name" className="block mb-1 font-medium">Name</label>
            <input {...register("Name")} type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" id="name" placeholder="Enter your name" />
            {errors.Name && <p className="text-red-500 text-sm">{errors.Name.message} </p>}

          </div>
          <div class="mb-3">
            <label for="email" className="block mb-1 font-medium">Email address</label>
            <input {...register("Email")} type="email" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" placeholder="Enter your email" />
            {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message} </p>}
          </div>
          <div class="mb-3">
            <label for="password" className="block mb-1 font-medium">Password</label>
            <input {...register("Passw")} type="password" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" id="password" placeholder="Enter your password" />
            {errors.Passw && <p className="text-red-500 text-sm">{errors.Passw.message} </p>}
          </div>
          <div class="mb-3">
            <label for="age" className="block mb-1 font-medium">Age</label>
            <input {...register("Age")} type="number" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" id="age" placeholder="Enter your age" />
            {errors.Age && <p className="text-red-500 text-sm">{errors.Age.message} </p>}
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" >Submit</button>
        </form>
      </div>

    </div>
  )
}
