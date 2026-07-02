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
