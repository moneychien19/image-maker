import { useEffect } from "react";

export const DownloadImage = ({
  canvasRef,
  imageText,
  width,
  height,
  fileSizeRange,
}) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "#000000";
    context.fillRect(0, 0, width, height);

    context.font = `${width / 20}px Arial`;
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(imageText, width / 2, height / 2);
  }, [imageText, width, height, fileSizeRange]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ display: "none" }}
    />
  );
};
