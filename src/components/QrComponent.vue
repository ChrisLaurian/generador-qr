<template>
    <div class="container">
      <form @submit.prevent="generateQRCode" class="form">
        <label for="facebookId" class="label">Ingresa tu ID de Facebook:</label>
        <input v-model="facebookId" type="text" id="facebookId" class="input" required />
        <button type="submit" class="button">Generar QR</button>
      </form>
  
      <div class="qr-container">
        <img v-if="qrImageUrl" :src="qrImageUrl" alt="QR Code" class="qr-code" ref="qrImage" />
  
        <button v-if="qrImageUrl" @click="downloadQRImage" class="download-button">Guardar como imagen</button>
      </div>
    </div>
  </template>
  
  <script>
  import QRCode from "qrcode-generator";
  
  export default {
    name: "HelloWorld",
    data() {
      return {
        facebookId: "",
        qrImageUrl: "",
      };
    },
    methods: {
      generateQRCode() {
        const qrcode = QRCode(0, "H");
        qrcode.addData(`https://www.facebook.com/profile.php?id=${this.facebookId}`);
        qrcode.make();
  
        const qrImageUrl = qrcode.createDataURL();
        this.qrImageUrl = qrImageUrl;
      },
      downloadQRImage() {
        const qrImage = this.$refs.qrImage;
        const canvas = document.createElement("canvas");
        canvas.width = qrImage.width;
        canvas.height = qrImage.height;
        const context = canvas.getContext("2d");
        context.drawImage(qrImage, 0, 0);
  
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "qrcode.png";
        link.click();
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    background-color: #ffffff;
    padding: 1em;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .label {
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
  }
  
  .input {
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .button {
    padding: 0.5em 1em;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .qr-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
  }
  
  .qr-code {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
  
  .download-button {
    margin-top: 1em;
    background-color: #28a745;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 0.5em 1em;
    cursor: pointer;
  }
  </style>
  