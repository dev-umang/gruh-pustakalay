import { showToast } from "./message.helper";

export const isValidObject = (obj: any, excludeKeys: string[] = []) => {
  const keys = Object.keys(obj);
  if (!keys.length) {
    showToast(`Fill the values!`, "error");
    return false;
  }
  for (const key of keys) {
    if (excludeKeys.includes(key)) continue;
    const val = obj[key];
    if (!val || val === "") {
      showToast(`${key} is required!`, "error");
      return false;
    }
  }
  return true;
};
