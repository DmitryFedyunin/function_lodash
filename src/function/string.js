export const initCamelCase = (string) => {
  string = string.replace(/\s/g, '');
  return string;
};

export const initCapitalize = (string) => {
  string = string[0].toUpperCase() + string.substr(1).toLowerCase();
  return string;
};

export const initEndWith = (string, number) => {
  string = string.endsWith(number, 2);
  return string;
};

export const initKebabCase = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, "").replace(/\s/g, "-");
  string = string.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2').toLowerCase();
  return string;
};

export const initLowerCase = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, " ").replace(/\s/g, " ");
  string = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1 $2').toLowerCase();
  return string;
};

export const initLowerFirst = (string) => {
  string = string[0].toLowerCase() + string.substr(1);
  return string;
  // return string[0].toLowerCase() + string.substr(1); так же нужно делать верно?)
};

export const initRepeat = (string, number) => {
  string = string.repeat(number);
  return string;
};

export const initSnakeCase = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, "_").replace(/\s/g, "_");
  string = string.replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1_$2').toLowerCase();
  return string;
};

export const initSplit = (string, number) => {
  string = string.split('-',number);
  return string;
};

export  const initStartCase = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, " ").replace(/\s/g, " ");
  string = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1 $2').replace(/(^[^ ]* )|[ ]-/g, '$1').trim();
  string = string[0].toUpperCase() + string.slice(1);
  console.log(string)
  return string;
};

export const initToLower = (string) => {
  string = string.toLowerCase();
  return string;
};

export const initToUpper = (string) => {
  string = string.toUpperCase();
  return string;
};

export const initTrim = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, "").replace(/\s/g, " ");
  return string;
};

export const initUpperCase = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, " ").replace(/\s/g, " ");
  string = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1 $2')
      .replace(/(^[^ ]* )|[ ]-/g, '$1').trim().toUpperCase();
  return string;
};

export const initUpperFirst = (string) => {
  string = string[0].toUpperCase() + string.slice(1);;
  console.log(string)
  return string;
};
