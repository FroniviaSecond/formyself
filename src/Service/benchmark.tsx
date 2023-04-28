export default class Benchmark {
  static multipleCalls<T extends Function>(callback: T, counter: number, ...args: any) {
    const start = performance.now();

    for (let i = 0; i < counter; i++) {
      callback(...args);
    }

    const end = performance.now();

    console.log((end - start) / 1000);
  }
} 