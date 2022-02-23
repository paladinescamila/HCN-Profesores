import { URL } from ".";

/**
 * 
 * @param {string} path 
 */
function makeRequest({ path, method, headers, ...others }) {
  const timeout = 4000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  let config = {
    method,
    headers: headers ? headers : new Headers(),
    timeout,
    signal: controller.signal,
    ...others
  };
  let myRequest = new Request(URL + path, config);
  return fetch(myRequest);
}

export default makeRequest;