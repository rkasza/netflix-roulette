import HttpError from './HttpError';

export const APPLICATION_JSON = 'application/json';
export const TEXT_PLAIN = 'text/plain'; // 404 No movie found response type
const NO_CONTENT = 204; // delete movie response.status
export const NOT_FOUND_STATUS = 404;

export const handleResponse = async response => {
  //Movieapi delete endpoint doesn't have content type header on response
  if (response.status === NO_CONTENT) return response.statusText; // What to return
  const responseContentType = response.headers.get('Content-Type');
  let body;
  
  if (responseContentType.includes(APPLICATION_JSON)) {
    body = await response.json();
  } else if (responseContentType.includes(TEXT_PLAIN)) {
    body = await response.text();
  }

  if (!response.ok) throw new HttpError(response, body);
  return body;
};