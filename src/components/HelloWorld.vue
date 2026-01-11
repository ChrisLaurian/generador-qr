<template>
  <div class="container">
    <div class="card">
      <h2>Generador Pro de QR</h2>
      <p class="subtitle">Personaliza tu código en tiempo real</p>

      <div class="form">
        <div class="input-group">
          <label for="url">Enlace o Texto:</label>
          <input 
            v-model="text" 
            type="text" 
            id="url" 
            placeholder="https://facebook.com/tuperfil" 
            class="input"
            @input="generateQRCode"
          />
        </div>

        <div class="options">
          <div class="input-group">
            <label>Color del QR:</label>
            <input type="color" v-model="qrColor" @input="generateQRCode" />
          </div>
          <div class="input-group">
            <label>Nivel de Error:</label>
            <select v-model="errorLevel" @change="generateQRCode">
              <option value="L">Bajo (7%)</option>
              <option value="M">Medio (15%)</option>
              <option value="Q">Cuartil (25%)</option>
              <option value="H">Alto (30%)</option>
            </select>
          </div>
        </div>
      </div>

      <div class="qr-result">
        <div v-if="text" class="qr-wrapper">
          <img :src="qrImageUrl" alt="QR Code" class="qr-code" ref="qrImage" />
          <button @click="downloadQRImage" class="download-button">
            <i class="fas fa-download"></i> Descargar PNG
          </button>
        </div>
        <div v-else class="placeholder-qr">
          Escribe algo para generar el código
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode-generator";

export default {
  name: "QRGenerator",
  data() {
    return {
      text: "",
      qrImageUrl: "",
      qrColor: "#000000",
      errorLevel: "H", // Nivel alto permite que el QR se lea incluso si está dañado o tiene logos
    };
  },
  methods: {
    generateQRCode() {
      if (!this.text) {
        this.qrImageUrl = "";
        return;
      }

      try {
        // El primer parámetro 0 indica que el tamaño se ajusta automáticamente (Type 0)
        const qrcode = QRCode(0, this.errorLevel);
        qrcode.addData(this.text);
        qrcode.make();

        // Creamos el DataURL. 4 es el tamaño del módulo, 10 es el margen.
        this.qrImageUrl = qrcode.createDataURL(6, 12);
      } catch (e) {
        console.error("Error generando QR", e);
      }
    },
    downloadQRImage() {
      const link = document.createElement("a");
      link.href = this.qrImageUrl;
      link.download = `QR_${Date.now()}.png`;
      link.click();
    },
  },
  mounted() {
    // Generar uno por defecto si quieres
    this.text = "https://www.linkedin.com/in/christian-laurian/";
    this.generateQRCode();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 { color: #2d3436; margin-bottom: 0.5rem; }
.subtitle { color: #636e72; font-size: 0.9rem; margin-bottom: 2rem; }

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  width: 100%;
}

label { font-size: 0.8rem; font-weight: bold; margin-bottom: 5px; color: #2d3436; }

.input, select {
  width: 100%;
  padding: 12px;
  border: 2px solid #dfe6e9;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s;
}

.input:focus { border-color: #6c5ce7; }

.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.qr-result {
  margin-top: 2rem;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 15px;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-code {
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
}

.download-button {
  margin-top: 1.5rem;
  width: 100%;
  padding: 12px;
  background: #00b894;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.download-button:hover { background: #00947a; }

.placeholder-qr { color: #b2bec3; font-style: italic; }
</style>