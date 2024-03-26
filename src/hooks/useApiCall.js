import { useState } from 'react';

const useApiCall = callFunc => {
  const [data, setData] = useState(null);
  const handleApiCall = (params, callback = () => {}) => {
    callFunc(params)
      .then(res => res.json())
      .then(data => {
        setData(data || null);
        callback();
      })
      .catch(error => {
        if (error?.response?.data?.message) {
          setData(error.response.data);
        }
      });
  };
  
  const setDefaultValues = () => setData(null);

  return [handleApiCall, data, setDefaultValues];
};

export default useApiCall;
