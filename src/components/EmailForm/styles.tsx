import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: fit-content;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  line-height: 2rem;
`;

export const Label = styled.label`
  width: 100%;
  padding-left: 5px;
  text-align: left;
  color: var(--soft-orange);
  font-size: 1em;
`;

export const IconInput = styled.div<{ color?: string }>`
  height: auto;
  width: 400px;
  margin-bottom: 15px;
  position: relative;
`;

export const Icon = styled.span`
  position: absolute;
  left: 0;
  width: auto;
  height: 100%;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  background: #151515;
  border: none;
  color: white;
  border-radius: 3px;
  font-size: 1em;
  padding: 15px;
  padding-left: 40px;
  /* font-weight: 600; */

  &:focus {
    outline: none;
    border: 1px solid var(--soft-orange);
  }
`;

export const MessageInput = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 200px;
  background: #151515;
  border: none;
  color: white;
  border-radius: 3px;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 10px;
  font-family: Rubik, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid var(--soft-orange);
  }
`;

export const Required = styled.span`
  color: var(--red);
  font-size: 1rem;
  font-style: italic;
  padding-left: 5px;
  width: 100%;
  text-align: left;
  line-height: 1rem;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  margin-top: 30px;
  width: auto;
  padding: 0 30px;
  height: 50px;
  background: var(--soft-orange);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s linear;

  & > svg {
    font-size: 1.2em;
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    border: 2px solid var(--green);
    opacity: 0.5;
  }
`;
