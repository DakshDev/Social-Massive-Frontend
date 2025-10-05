export default function debounce(func: (query: string) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function (query: string) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(query);
    }, delay);
  };
}
