import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import App from "../App";
 
export const SignUpForm = ()=>
{

    const schema = yup.object().shape({
        fullName: yup.string().required("Full name REquired!!"),
        email: yup.string().email().required("emaiil mandatory REquired!!"),
        age: yup.number().positive("must be postive").integer().min(20).required("must be positive"),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password"), null], )
          .required(),
      });
    
    
  const {register, handleSubmit , formState: { errors }, } = useForm({ resolver: yupResolver(schema), });

   const onFormSubmit = (data) => {
    console.log(data);
  };

    return (
        <div className='App'>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <input type="text" placeholder="Full Name..." {...register("fullName")}  /> <br></br>
                <p>{errors.fullName?.message}</p>
                <input type="text" placeholder="Email..." {...register("email")}  /> <br></br>
                <p>{errors.email?.message}</p>
                <input type="number" placeholder="Age..." {...register("age")}/> <br></br>
                <p>{errors.age?.message}</p>
                <input type="password" placeholder="Password..." {...register("password")} /> <br></br>
                
                <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} /> <br></br>
                <p>{errors.confirmPassword?.message}</p>
                <input type="submit" />
        </form>

        </div>
      );
};
