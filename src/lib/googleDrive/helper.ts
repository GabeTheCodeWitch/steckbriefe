export function convertGoogleDriveImages<T>(key: keyof T | (keyof T)[]): (value: T) => T {
  const fields = Array.isArray(key) ? key : [key];
  const findGoogleDriveIdRegex = /(?:\/file\/d\/|id=)([a-zA-Z0-9_-]+)/;

  return function (value: T) {
    fields.forEach((field) => {
      const url = value[field] as string | null;
      if (url) {
        const match = url.match(findGoogleDriveIdRegex);

        if (match && match[1]) {
          const fileId = match[1];
          value[field] = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000` as T[keyof T];
        }
      }
    });
    return value;
  };
}
