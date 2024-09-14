import { Icon } from "@iconify/react";
import { Box, Button } from "@mui/material";
import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./getCroppedImg";

export function Imagem() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState<string>();
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.files && event.target.files[0]) {
      const input = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          const reaultImagem = new Image();
          reaultImagem.src = reader.result;
        }
      };
      reader.readAsDataURL(input);
    }
  };

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImg: any = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(croppedImg);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, image]);

  return (
    <>
      {!image && (
        <Box>
          <label
            style={{
              textTransform: "uppercase",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              cursor: "pointer",
              width: "200px",
              fontWeight: "500",
              fontSize: "11px",
              backgroundColor: "#1976d2",
              height: "40px",
              color: "white",
              alignItems: "center",
              borderRadius: "5px",
              gap: "5px",
            }}
          >
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            Selecione uma logo
            <Icon icon="material-symbols:add-a-photo-outline" />
          </label>
        </Box>
      )}
      {image && (
        <>
          <div style={{ width: "100%", height: "400px", position: "relative" }}>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <Button onClick={showCroppedImage}>Recortar Imagem</Button>
        </>
      )}
      {croppedImage && (
        <div>
          <h2>Imagem Recortada</h2>
          <img src={croppedImage} alt="Recorte Final" />
        </div>
      )}
    </>
  );
}
