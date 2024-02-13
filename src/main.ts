function aToO<T>(arr: [string, T][]) {
  const obj: {
    [index: string]: T;
  } = {};

  arr.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

const arr: [string, number | boolean][] = [
  ["first", 1],
  ["second", 2],
  ["third", 3],
  ["fourth", false],
];

const retA = aToO(arr);
