export const responder = (ok: boolean, message: string, data?: any) => {
  return {
    ok,
    message,
    data,
  };
};
