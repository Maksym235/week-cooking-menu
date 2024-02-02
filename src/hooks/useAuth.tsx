export const useAuth = () => {
  const isLoggedIn = localStorage.getItem("token");
  return {
    isLoggedIn,
  };
};
