<template>
  <div class="container">
    <div class="card">
      <header>
        <h2>Generador de QR</h2>
        <p class="subtitle">Personaliza tu código en tiempo real</p>
      </header>

      <section class="form">
        <div class="input-group">
          <label for="url">Enlace o Texto:</label>
          <input 
            v-model="text" 
            type="text" 
            id="url" 
            placeholder="https://tuenlace.com" 
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
                @click="qrColor = color.hex"
                :class="{ active: qrColor === color.hex }"
              ></button>

              <div class="custom-color-container">
                <input type="color" v-model="qrColor" class="invisible-picker" id="customColor" />
                <label for="customColor" class="custom-color-button" :style="{ backgroundColor: qrColor }">
                  <span class="plus-icon">+</span>
                </label>
              </div>
            </div>
          </div>

          <div class="control">
            <label class="switch-label">
              <span>Estilo Redondeado</span>
              <input type="checkbox" v-model="isCircleStyle" @change="dotStyle = isCircleStyle ? 'circle' : 'square'" />
            </label>
            
            <label class="switch-label">
              <span>¿Incluir Logo?</span>
              <input type="checkbox" v-model="useLogo" />
            </label>
          </div>

          <transition name="fade">
            <div v-if="useLogo" class="logo-upload-zone">
              <label>Imagen central (PNG sugerido):</label>
              <input type="file" @change="onLogoChange" accept="image/*" class="file-input" />
            </div>
          </transition>

          <div class="input-group full-width">
            <label>Precisión (Nivel de Error):</label>
            <select v-model="errorLevel" @change="generateQRCode">
              <option value="L">Bajo (7%)</option>
              <option value="M">Medio (15%)</option>
              <option value="Q">Cuartil (25%)</option>
              <option value="H">Alto (30% - Recomendado para Logos)</option>
            </select>
          </div>
        </div>
      </section>

      <section class="qr-result">
        <div v-if="text" class="qr-wrapper">
          <img :src="qrImageUrl" alt="QR Code" class="qr-code" />
          <button @click="downloadQRImage" class="download-button">
            Descargar PNG
          </button>
        </div>
        <div v-else class="placeholder-qr">
          Escribe algo para generar el código
        </div>
      </section>
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
      useLogo: false,
      isCircleStyle: false,
      dotStyle: "square",
      errorLevel: "H",
      qrColor: "#2d3436",
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

      // Dibujado de fondo y módulos
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = this.qrColor;

      for (let row = 0; row < moduleCount; row++) {
        for (let col = 0; col < moduleCount; col++) {
          if (qrcode.isDark(row, col)) {
            const x = margin + col * cellSize;
            const y = margin + row * cellSize;
            if (this.dotStyle === "circle") {
              ctx.beginPath();
              ctx.arc(x + cellSize/2, y + cellSize/2, cellSize/2.2, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.fillRect(x, y, cellSize, cellSize);
            }
          }
        }
      }

      if (this.useLogo && this.logoUrl) {
        await this.drawLogo(ctx, canvas.width);
      }

      this.qrImageUrl = canvas.toDataURL("image/png");
    },

    onLogoChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.logoUrl = e.target.result;
          this.generateQRCode();
        };
        reader.readAsDataURL(file);
      }
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
          ctx.fillStyle = "#FFFFFF";
          ctx.beginPath();
          ctx.arc(canvasSize/2, canvasSize/2, (logoSize/2) + 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.drawImage(img, x, y, logoSize, logoSize);
          resolve();
        };
        img.onerror = () => resolve();
      });
    },

    downloadQRImage() {
      if (!this.qrImageUrl) return;
      const link = document.createElement("a");
      link.href = this.qrImageUrl;
      link.download = `QR_${Date.now()}.png`;
      link.click();
    }
  },
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
/* Contenedor Principal */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Inter', sans-serif;
}

/* Tarjeta */
.card {
  background: white;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  width: 100%;
  max-width: 450px;
}

h2 { color: #2d3436; margin: 0; font-weight: 800; }
.subtitle { color: #636e72; font-size: 0.9rem; margin-top: 5px; margin-bottom: 25px; }

/* Formulario */
.input-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1.2rem;
}

label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #b2bec3; margin-bottom: 8px; }

.input, select {
  padding: 12px;
  border: 2px solid #f1f2f6;
  border-radius: 12px;
  background: #f8f9fa;
  transition: all 0.3s;
}

.input:focus { border-color: #6c5ce7; background: white; outline: none; }

/* Opciones de Color */
.color-options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
  margin-top: 1em;
}

.color-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s;
}

.color-dot.active { border-color: #6c5ce7; transform: scale(1.2); }

.custom-color-button {
  width: 28px; height: 28px; border-radius: 50%;
  border: 2px dashed #dfe6e9; display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 14px;
}

.invisible-picker { position: absolute; opacity: 0; width: 0; }

/* Toggles */
.switch-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  padding: 8px 0;
  color: #2d3436;
  cursor: pointer;
}

/* Zona Logo */
.logo-upload-zone {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 12px;
  border: 2px dashed #dfe6e9;
  margin: 10px 0;
}

/* Resultado QR */
.qr-result {
  margin-top: 25px;
  padding: 20px;
  background: #f1f2f6;
  border-radius: 20px;
  text-align: center;
}

.qr-code {
  width: 220px;
  height: 220px;
  background: white;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.download-button {
  margin-top: 15px;
  width: 100%;
  padding: 14px;
  background: #00b894;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.download-button:hover { background: #00947a; transform: translateY(-2px); }

/* Animaciones */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s, transform 0.3s; }
.fade-enter, .fade-leave-to { opacity: 0; transform: translateY(-10px); }
</style>