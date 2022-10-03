export const useStrings = () => {
  const toFirstUppercase = (str: string) => {
    return str.charAt(0).toLocaleUpperCase() + str.slice(1);
  };

  return { toFirstUppercase };
};
