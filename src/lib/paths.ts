export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const cleanPath = path.replace(/^\/+/, "");
  return base ? `${base}/${cleanPath}` : `/${cleanPath}`;
};

export const stripBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base && path.startsWith(base) ? path.slice(base.length) || "/" : path;
};
