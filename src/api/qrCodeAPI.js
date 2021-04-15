import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.qrserver.com/",
});

class QrCodeAPI {
  getQrCode = (urlForQrCode) => {
    return instance.get(`v1/create-qr-code/?data=${urlForQrCode}&size=400x400`);
  };
}

const qrCodelAPI = new QrCodeAPI();
export default qrCodelAPI;
