export const Timeout = (time) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), time * 1000);
  return controller;
};
