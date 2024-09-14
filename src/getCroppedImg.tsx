export const getCroppedImg = (imageSrc: any, crop: any) => {
  const createImage: any = (url: any) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.src = url;
    });

  return new Promise(async (resolve, reject) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

    // Configurando as dimensões do canvas
    canvas.width = safeArea;
    canvas.height = safeArea;

    // Centralizando a imagem no canvas
    ctx?.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    );

    const data = ctx?.getImageData(0, 0, safeArea, safeArea);

    // Configurando o novo canvas com as dimensões do corte
    canvas.width = crop.width;
    canvas.height = crop.height;

    // Desenhando a imagem recortada no canvas
    if (data) {
      ctx?.putImageData(
        data,
        Math.round(0 - safeArea / 2 + image.width * 0.5 - crop.x),
        Math.round(0 - safeArea / 2 + image.height * 0.5 - crop.y)
      );
    }

    canvas.toBlob((blob: any) => {
      const url = URL.createObjectURL(blob);
      resolve(url);
    }, "image/jpeg");
  });
};
