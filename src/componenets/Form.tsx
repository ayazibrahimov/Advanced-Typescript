import React, { FC } from "react";
import { useForm, SubmitHandler  } from "react-hook-form";

type FormDataType = {
  summary: string;
  goal: string;
};

type TypeFormFc={
    handleForm:(data:FormDataType)=>void
}

const Form:FC<TypeFormFc> = ({handleForm}) => {

  const { register, handleSubmit,reset,formState: { errors }, } = useForm<FormDataType>();


  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    handleForm(data);
    reset()

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text"  id="goal" {...register("goal",{ required: true, 
            minLength: { value: 5, message: "Min length is 5 characters" }})} />
          {errors.goal && <span>{errors.goal.message}</span>}
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary"  {...register("summary",{ required: true,
            minLength: { value: 5, message: "Min length is 5 characters" }
         })} />
        {errors.summary && <span>{errors.summary.message}</span>}
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
};

export default Form;
