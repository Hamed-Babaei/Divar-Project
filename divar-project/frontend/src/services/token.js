import api from "src/configs/api";

import { getCookie } from "src/utils/cookie";

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  console.log("refreshToken =>", refreshToken);
  if (!refreshToken) return;

  try {
    const response = await api.post("auth/check-refresh-token", {
      refreshToken,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { getNewTokens };
