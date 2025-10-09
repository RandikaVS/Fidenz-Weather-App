import axiosInstance from 'src/utils/axios';

export const setSession = (accessToken) => {
  if (accessToken) {
    sessionStorage.setItem('accessToken', accessToken);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    sessionStorage.removeItem('accessToken');
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};
