export const getLocalAccessToken = () => {
  if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem("jozDataUser")!);
    return user?.accessToken;
  }
};

export const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem("jozDataUser")!);
  return user?.refreshToken;
};

export const updateLocalAccessToken = (token: string) => {
  let user = JSON.parse(localStorage.getItem("jozDataUser")!);
  user.accessToken = token;
  localStorage.setItem("jozDataUser", JSON.stringify(user));
};

export const updateLocalRefreshToken = (token: string) => {
  let user = JSON.parse(localStorage.getItem("jozDataUser")!);
  user.refreshToken = token;
  localStorage.setItem("jozDataUser", JSON.stringify(user));
};

export const getUser = () => {
  return (
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage.getItem("jozDataUser")!)
  );
};

export const setUser = (user: null) => {
  localStorage.setItem("jozDataUser", JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem("jozDataUser");
};

export const removeAllLocalStorage = () => {
  localStorage.clear();
};

export const addToCartLocal = (cartItems: any) => {
  localStorage.setItem("addToCart-jozDataUser", JSON.stringify(cartItems));
};

export const getAddToCartLocal = () => {
  return (
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage.getItem("addToCart-jozDataUser")!)
  );
};

export const setPlisioLocal = (plisioObject: any) => {
  localStorage.setItem("plisioLocal-jozDataUser", JSON.stringify(plisioObject));
};

export const getPlisioLocal = () => {
  return (
    typeof localStorage !== "undefined" &&
    JSON.parse(localStorage.getItem("plisioLocal-jozDataUser")!)
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
