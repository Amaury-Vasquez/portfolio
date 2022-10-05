import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
  name: string;
  email: string;
  message: string;
}

const emailDataSchema = Joi.object({
  name: Joi.string().min(2).max(40).required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  message: Joi.string().min(10).max(400),
});

export const useEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: joiResolver(emailDataSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return { errors, handleSubmit, onSubmit, register };
};
