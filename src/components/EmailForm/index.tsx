import { BiMailSend } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

import { useEmail } from '../../hooks/useEmail';
import {
  Form,
  Label,
  IconInput,
  Icon,
  Input,
  MessageInput,
  Required,
  SubmitButton,
} from './styles';

export const EmailForm = () => {
  const { errors, handleSubmit, onSubmit, register } = useEmail();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label> Name </Label>
      {errors.name && <Required> {errors.name.message} </Required>}
      <IconInput>
        <Icon>
          <AiOutlineUser />
        </Icon>
        <Input
          type="text"
          placeholder="Your name"
          {...register('name', { required: true })}
        />
      </IconInput>
      <Label> Email </Label>
      {errors.email && <Required> {errors.email.message} </Required>}
      <IconInput>
        <Icon>
          <AiOutlineMail />
        </Icon>
        <Input
          type="email"
          placeholder="email@example.com"
          {...register('email', { required: true })}
        />
      </IconInput>
      <Label> Message </Label>
      {errors.message && <Required> {errors.message.message} </Required>}
      <MessageInput
        placeholder="Leave your message here"
        {...register('message', { required: true })}
      />
      <SubmitButton type="submit">
        Send message
        <BiMailSend />
      </SubmitButton>
    </Form>
  );
};
