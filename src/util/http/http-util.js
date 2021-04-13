import HttpError from './HttpError';

export const APPLICATION_JSON = 'application/json';
export const TEXT_PLAIN = 'text/plain'; // 404 No movie found response type

export const handleResponse = async response => {
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