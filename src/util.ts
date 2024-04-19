import { BrowserMultiFormatReader } from "@zxing/browser";
import { DecodeHintType, BarcodeFormat } from "@zxing/library";

const hints = new Map([
  [
    DecodeHintType.POSSIBLE_FORMATS,
    [BarcodeFormat.QR_CODE, BarcodeFormat.DATA_MATRIX],
  ],
]);

const reader = new BrowserMultiFormatReader();
reader.setHints(hints);

// decodes the image and returns the result as a string
export function decodeImage(canvas: HTMLCanvasElement): string | null {
  try {
    return reader.decodeFromCanvas(canvas).getText();
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function readFileIntoImage(
  file: File
): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        resolve(canvas);
      };
      img.src = event.target.result as string;
    };
    reader.onerror = function (error) {
      // Reject the promise if there's an error
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

export function isUrl(url: string): boolean {
  const urlRegex =
    /^(https?:\/\/)?([\w\d]+\.)+[\w\d]{2,}(\/[\w\d]+)*\/?(\?[\w\d_-]+=[\w\d%&]+)?$/i;
  return urlRegex.test(url);
}

export function formatUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
}
