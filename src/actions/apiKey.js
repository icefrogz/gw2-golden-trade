export const saveApiKey = (key) => {
  localStorage.setItem("apiKey", key);
  return {
    type: "SAVE_API_KEY",
    payload: {
      key,
    },
  };
};

export const deleteApiKey = () => {
  localStorage.removeItem("apiKey");
  return {
    type: "DELETE_API_KEY",
  };
};
