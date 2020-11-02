let qrData = document.getElementById("qrdata");
let qrcode = new QRCode(document.getElementById("qrcode"));

const generatecode = () => {
  let data = qrData.value;
  qrcode.makeCode(data);
};
