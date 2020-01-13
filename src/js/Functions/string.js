export const CamelCase = (string) => {
  string = string.replace(/\s/g, '');
  return string;
};

export const Capitalize = (string) => {
  string = string[0].toUpperCase() + string.substr(1).toLowerCase();
  return string;
};

export const EndWith = (string, number) => {
  string = string.endsWith(number, 2);
  return string;
};

export const KebabCase = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, "").replace(/\s/g, "-");
  string = string.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2').toLowerCase();
  return string;
};

export const LowerCase = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, " ").replace(/\s/g, " ");
  string = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1 $2').toLowerCase();
  return string;
};

export const LowerFirst = (string) => {
  string = string[0].toLowerCase() + string.substr(1);
  return string;
  // return string[0].toLowerCase() + string.substr(1); так же нужно делать верно?)
};

export const Repeat = (string, number) => {
  string = string.repeat(number);
  return string;
};

export const SnakeCase = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, "_").replace(/\s/g, "_");
  string = string.replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1_$2').toLowerCase();
  return string;
};

export const Split = (string, number) => {
  string = string.split('-',number);
  return string;
};

export  const StartCase = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, " ").replace(/\s/g, " ");
  string = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1 $2').replace(/(^[^ ]* )|[ ]-/g, '$1').trim();
  string = string[0].toUpperCase() + string.slice(1);
  console.log(string)
  return string;
};

export const ToLower = (string) => {
  string = string.toLowerCase();
  return string;
};

export const ToUpper = (string) => {
  string = string.toUpperCase();
  return string;
};

export const Trim = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, "").replace(/\s/g, " ");
  return string;
};

export const UpperCase = (string) => {
  string = string.trim().replace(/[^a-zA-Z0-9]/g, " ").replace(/\s/g, " ");
  string = string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1 $2')
      .replace(/(^[^ ]* )|[ ]-/g, '$1').trim().toUpperCase();
  return string;
};

export const UpperFirst = (string) => {
  string = string[0].toUpperCase() + string.slice(1);;
  console.log(string)
  return string;
};
