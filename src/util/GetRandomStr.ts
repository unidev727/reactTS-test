export const generateRandomCode = (): string => {
  const length = Math.floor(Math.random() * 6) + 5; // Random number between 5 and 10
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};