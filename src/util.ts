import { BrowserMultiFormatReader } from "@zxing/browser";
import { DecodeHintType, BarcodeFormat } from "@zxing/library";
import Resizer from "react-image-file-resizer";

export const hints = new Map([
  [
    DecodeHintType.POSSIBLE_FORMATS,
    [BarcodeFormat.QR_CODE, BarcodeFormat.DATA_MATRIX],
  ],
]);

const reader = new BrowserMultiFormatReader();
reader.setHints(hints);

// decodes the image and returns the result as a string
export async function decodeImage(src: string): Promise<string | null> {
  try {
    return (await reader.decodeFromImageUrl(src)).getText();
  } catch (e) {
    // console.error(e);
    return null;
  }
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      resolve(event.target.result as string);
    };
    reader.readAsDataURL(file);
  });
}

function resizeFile(file: File): Promise<string> {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      900,
      900,
      "PNG",
      100,
      0,
      (uri: string) => resolve(uri),
      "base64"
    );
  });
}

export async function convertFile(file: File): Promise<string> {
  // resize file if it's above 2MB
  if (file.size > 2000000) {
    return await resizeFile(file);
  }
  return await fileToBase64(file);
}

export function isUrl(url: string): boolean {
  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z\d-]+\.)+[a-zA-Z]{2,}(\/[\w\d\-._~:/?#[\]@!$&'()*+,;=%]*)?$/i;
  return urlRegex.test(url);
}

export function formatUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
}
