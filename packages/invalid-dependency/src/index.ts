export const invalidFunction = (message: string) => {
  return () => {
    throw new Error(message);
  };
};
