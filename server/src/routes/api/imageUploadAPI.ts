// Define Headers
const myHeaders: Headers = new Headers();
myHeaders.append("apikey", "ivRVGWxuiXaQuO7NG2aUoZ6sLgQ9WR0v");

// Define the body
const raw: string = "{body}";

// Define request options
const requestOptions: RequestInit = {
  method: 'POST',
  redirect: 'follow' as RequestRedirect,
  headers: myHeaders,
  body: raw
};

// Make the fetch request
fetch("https://api.apilayer.com/image_upload/url?url=url&delay=delay", requestOptions)
  .then((response: Response) => response.text())
  .then((result: string) => console.log(result))
  .catch((error: Error) => console.log('error', error));
