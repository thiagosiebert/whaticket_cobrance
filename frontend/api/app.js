const http = require("http");

const options = {
  "method": "POST",
  "hostname": "10.0.0.250",
  "port": "8080",
  "path": "/api/messages/send",
  "headers": {
    "Content-Type": "multipart/form-data; boundary=---011000010111000001101001",
    "Content-Length": "0",
    "Authorization": "Bearer 20b0a88c-a5ea-4d15-a465-3c1945650639"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"number\"\r\n\r\n5551980307836\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"medias\"; filename=\"wpp.pdf\"\r\nContent-Type: application/pdf\r\n\r\n\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"body\"\r\n\r\nboleto\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"whatsappid\"\r\n\r\n553\r\n-----011000010111000001101001--\r\n");
req.end();