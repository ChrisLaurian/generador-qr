<template>
  <div class="container">
    <div class="card">
      <h2>Generador de QR</h2>
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

<div class="options-grid">
<div class="control">
  <label>Color del QR:</label>
  <div class="color-options">
    <button 
      v-for="color in presets" 
      :key="color.hex"
      class="color-dot"
      :style="{ backgroundColor: color.hex }"
      :title="color.name"
      @click="qrColor = color.hex"
      :class="{ active: qrColor === color.hex }"
    ></button>

    <div class="custom-color-container">
      <input type="color" v-model="qrColor" class="invisible-picker" id="customColor" />
      <label for="customColor" class="custom-color-button" :style="{ backgroundColor: qrColor }">
        
      </label>
    </div>
  </div>
</div>

  <div class="control">
    <label class="switch-label">
      <span>Estilo Redondeado</span>
      <input type="checkbox" v-model="isCircleStyle" @change="dotStyle = isCircleStyle ? 'circle' : 'square'" />
    </label>
  </div>

  <div class="control">
    <label class="switch-label">
      <span>¿Incluir Logo?</span>
      <input type="checkbox" v-model="useLogo" />
    </label>
  </div>

  <div v-if="useLogo" class="logo-upload-zone animate-fade-in">
    <label>Subir imagen del centro:</label>
    <input type="file" @change="onLogoChange" accept="image/*" class="file-input" />
    <p class="hint">Se recomienda un logo con fondo transparente (PNG)</p>
  </div>
</div>

        <div class="options">
          
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
    text: "https://www.linkedin.com/in/christian-laurian/",
    qrImageUrl: "",
    logoUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    useLogo: false, // Por defecto apagado
    isCircleStyle: false, // Controla el checkbox de estilo
    dotStyle: "square",
    errorLevel: "H",
    qrColor: "#2d3436", // Color inicial (Negro elegante)
    presets: [
      { name: 'Dark', hex: '#2d3436' },
      { name: 'Facebook', hex: '#1877F2' },
      { name: 'WhatsApp', hex: '#25D366' },
      { name: 'Instagram', hex: '#E1306C' },
      { name: 'LinkedIn', hex: '#0A66C2' },
      { name: 'YouTube', hex: '#FF0000' }
    ]
  };
},
  methods: {
    async generateQRCode() {
      if (!this.text) {
        this.qrImageUrl = "";
        return;
      }

      const qrcode = QRCode(0, this.errorLevel);
      qrcode.addData(this.text);
      qrcode.make();

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      const moduleCount = qrcode.getModuleCount();
      const cellSize = 12; 
      const margin = cellSize * 2;
      canvas.width = canvas.height = moduleCount * cellSize + margin * 2;

      // Fondo blanco
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Color del QR
      ctx.fillStyle = this.qrColor;

      for (let row = 0; row < moduleCount; row++) {
        for (let col = 0; col < moduleCount; col++) {
          if (qrcode.isDark(row, col)) {
            const x = margin + col * cellSize;
            const y = margin + row * cellSize;

            if (this.dotStyle === "circle") {
              // Dibujar círculos
              ctx.beginPath();
              ctx.arc(x + cellSize/2, y + cellSize/2, cellSize/2.2, 0, Math.PI * 2);
              ctx.fill();
            } else {
              // Dibujar cuadrados (estándar)
              ctx.fillRect(x, y, cellSize, cellSize);
            }
          }
        }
      }

      // Lógica del Logo
      if (this.useLogo && this.logoUrl) {
        await this.drawLogo(ctx, canvas.width);
      }

      this.qrImageUrl = canvas.toDataURL("image/png");
    },

    drawLogo(ctx, canvasSize) {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = this.logoUrl;
        img.onload = () => {
          const logoSize = canvasSize * 0.22;
          const x = (canvasSize - logoSize) / 2;
          const y = (canvasSize - logoSize) / 2;

          // Fondo blanco circular para el logo
          ctx.fillStyle = "#FFFFFF";
          ctx.beginPath();
          ctx.arc(canvasSize/2, canvasSize/2, (logoSize/2) + 5, 0, Math.PI * 2);
          ctx.fill();

          ctx.drawImage(img, x, y, logoSize, logoSize);
          resolve();
        };
        img.onerror = () => resolve();
      });
    }
  },
  // Observadores para cambio en tiempo real
  watch: {
    text() { this.generateQRCode(); },
    qrColor() { this.generateQRCode(); },
    useLogo() { this.generateQRCode(); },
    dotStyle() { this.generateQRCode(); }
  },
  mounted() {
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

.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.switch-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 10px 0;
}

.color-options {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 10px;
  align-items: center;
}

.color-dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid transparent;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
  padding: 0;
}

.color-dot:hover {
  transform: scale(1.1);
}

.color-dot.active {
  border-color: #ffffff;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  transform: scale(1.15);
}

/* Ocultar el input de color feo del sistema */
.invisible-picker {
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
}

.custom-color-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px dashed #b2bec3;
  color: white;
  font-weight: bold;
  transition: all 0.3s;
  margin-top: 5px;
}

.plus-icon {
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}
.logo-upload-zone {
  background: #f1f2f6;
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;
  border: 2px dashed #ced6e0;
}

.file-input {
  font-size: 0.8rem;
  margin-top: 5px;
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