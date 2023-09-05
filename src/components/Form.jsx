import {
  Box,
  Input,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

export const Form = ({
  width,
  setWidth,
  height,
  setHeight,
  imageText,
  setImageText,
  fileName,
  setFileName,
  fileSizeRange,
  setFileSizeRange,
}) => {
  return (
    <Box>
      <Input
        placeholder="寬"
        value={width}
        onChange={(e) => {
          const newWidth = e.target.value;
          setWidth(newWidth);
          setImageText(`${newWidth} x ${height}`);
          setFileName(`${newWidth}_${height}`);
        }}
      />
      <Input
        placeholder="高"
        value={height}
        onChange={(e) => {
          const newHeight = e.target.value;
          setHeight(newHeight);
          setImageText(`${width} x ${newHeight}`);
          setFileName(`${width}_${newHeight}`);
        }}
      />
      <Input
        placeholder="圖片文字"
        value={imageText}
        onChange={(e) => setImageText(e.target.value)}
      />
      <Input
        placeholder="檔案名稱"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <RangeSlider
        min={0}
        max={500}
        step={10}
        defaultValue={fileSizeRange}
        onChangeEnd={(value) => setFileSizeRange(value)}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </Box>
  );
};
