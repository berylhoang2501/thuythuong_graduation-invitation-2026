export default function getQueryValue(location, name) {
  if (!location || !location.search) return '';
  const params = new URLSearchParams(location.search);
  return params.get(name) || '';
}
