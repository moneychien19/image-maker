import { useState, useRef } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { DownloadImage } from "./components/DownloadImage";
import { DisplayBlock } from "./components/DisplayBlock";
import { Form } from "./components/Form";

// ref: https://stackoverflow.com/a/43358515/21562825
function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [imageText, setImageText] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSizeRange, setFileSizeRange] = useState([100, 300]);
  const canvasRef = useRef(null);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    let img = new Image();
    img.src = canvas.toDataURL("image/png");

    const { size } = dataURLtoFile(
      canvas.toDataURL("image/png"),
      `${fileName ?? "image"}.png`
    );
    console.log(size);

    let a = document.createElement("a");
    a.href = img.src;
    a.download = `${fileName ?? "image"}.png`;
    a.click();
  };

  return (
    <Flex h="100vh">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w={600}
      >
        <DisplayBlock imageText={imageText} width={width} height={height} />
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w={600}
      >
        <DownloadImage
          canvasRef={canvasRef}
          imageText={imageText}
          width={width}
          height={height}
          fileSizeRange={fileSizeRange}
        />
        <Form
          width={width}
          setWidth={setWidth}
          height={height}
          setHeight={setHeight}
          imageText={imageText}
          setImageText={setImageText}
          fileName={fileName}
          setFileName={setFileName}
          fileSizeRange={fileSizeRange}
          setFileSizeRange={setFileSizeRange}
        />
        <Button colorScheme="blue" onClick={downloadImage}>
          Button
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
