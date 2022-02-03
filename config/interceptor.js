export const setResponseInterceptor = async (response) => response;

export const setRequestInterceptor = (config) => {
  let newRequestConfig = config;

  return newRequestConfig;
};

/**
 * Handle error of request.
 * @param {AxiosError} - error
 * @returns
 */
export const setErrorInterceptor = (error) => Promise.reject(error);
