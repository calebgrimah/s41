import { PixelRatio } from "react-native";

/**
 * Converts a pixel value to device-independent pixels (dp).
 *
 * @param pixelValue - The pixel value to convert.
 * @returns The equivalent value in dp.
 */
function convertPxToDp(pixelValue: number): number {
  const pixelRatio = PixelRatio.get();
  return pixelValue / pixelRatio;
}

export { convertPxToDp };
