import http from 'http';

http.get("http://127.0.0.1:5173/", (res) => {
    console.log("HTTP status code:", res.statusCode);
    console.log("HTTP headers: ", res.headers);
});
