export const getLocalAccessToken = () => {
  if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem("EmailDatasUser")!);
    return user?.accessToken;
  }
};

export const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem("EmailDatasUser")!);
  return user?.refreshToken;
};

export const updateLocalAccessToken = (token: string) => {
  let user = JSON.parse(localStorage.getItem("EmailDatasUser")!);
  user.accessToken = token;
  localStorage.setItem("EmailDatasUser", JSON.stringify(user));
};

export const updateLocalRefreshToken = (token: string) => {
  let user = JSON.parse(localStorage.getItem("EmailDatasUser")!);
  user.refreshToken = token;
  localStorage.setItem("EmailDatasUser", JSON.stringify(user));
};

export const getUser = () => {
  return (
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage.getItem("EmailDatasUser")!)
  );
};

export const setUser = (user: null) => {
  localStorage.setItem("EmailDatasUser", JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem("EmailDatasUser");
};

export const removeAllLocalStorage = () => {
  localStorage.clear();
};

export const addToCartLocal = (cartItems: any) => {
  localStorage.setItem("addToCart-EmailDatasUser", JSON.stringify(cartItems));
};

export const getAddToCartLocal = () => {
  return (
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage.getItem("addToCart-EmailDatasUser")!)
  );
};

export const setPlisioLocal = (plisioObject: any) => {
  localStorage.setItem("plisioLocal-EmailDatasUser", JSON.stringify(plisioObject));
};

export const getPlisioLocal = () => {
  return (
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage.getItem("plisioLocal-EmailDatasUser")!)
  );
};

export const updatePromoBarStorage = (value: string) => {
  localStorage.setItem(value, JSON.stringify(value));
};

export const getPromoBarStorage = (value: string) => {
  return (
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage.getItem(value)!)
  );
};
