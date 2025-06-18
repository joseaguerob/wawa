fetch("output_autoencoder.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("container");

    data.forEach(image => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = 28;
      canvas.height = 28;

      const imgData = ctx.createImageData(28, 28);
      image.flat().forEach((val, i) => {
        const idx = i * 4;
        const pixel = Math.floor(val * 255);
        imgData.data[idx] = pixel;
        imgData.data[idx + 1] = pixel;
        imgData.data[idx + 2] = pixel;
        imgData.data[idx + 3] = 255;
      });

      ctx.putImageData(imgData, 0, 0);
      container.appendChild(canvas);
    });
  })
  .catch(err => console.error("Error cargando el JSON:", err));
