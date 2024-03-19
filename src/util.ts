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
