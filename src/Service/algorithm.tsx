import { ArrayForAlgorithmType } from '../configs/calculationConfig';
import { SortingType } from './algorith.options';

export default class AlgorithmService {

  static ascSorting = (a: number, b:number): -1 | 1 | 0 => {
    if (a > b) return 1;
    if (a === b) return 0;
    return -1
  }

  static descSorting = (a: number, b: number): -1 | 1 | 0 => {
    if (a < b) return 1;
    if (a === b) return 0;
    return -1
  }
  // return index of our wanted item
  static linerQueue = (array: ArrayForAlgorithmType, item: number): number => {
    for (let i = 0; i < array.length; i++) {
      if (item === array[i]) return i;
    }

    return -1;
  }

  // return indes of our wanted item
  static binaryQueue = (array: ArrayForAlgorithmType, wantedItem: number, sorted: boolean) => {
    if (!sorted) array.sort(AlgorithmService.ascSorting);

    let start = 0
    let end = array.length -1;
    while (start <= end ) {
      let middle = Math.floor((start + end) / 2 );
      if (array[middle] === wantedItem) return middle;
      if (array[middle] > wantedItem) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return -1
  }

  // usual sorting
  static sort = (array: ArrayForAlgorithmType, type: SortingType) => {
    if (type === SortingType.desc) return array.sort(AlgorithmService.descSorting);
    return array.sort(AlgorithmService.ascSorting);
  }

  // Сортировка пузырьком
  static bubbleSorting = (array: ArrayForAlgorithmType) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          let tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
        } 
      }
    }

    return array;
  }

  static quickSort = (array: ArrayForAlgorithmType): ArrayForAlgorithmType => {
    if (array.length <= 1) {
      return array;
    }

    // Находим центр массива
    let pivotIndex = Math.floor(array.length / 2);

    let pivot = array[pivotIndex];

    // Левый подмассив
    let less = [];

    // Правый подмассив
    let greater = [];

    for (let i = 0; i < array.length; i++) {

      if (i === pivotIndex) continue;

      if (array[i] < pivot) {

        less.push(array[i]);

      } else {

        greater.push(array[i]);

      }

    }

    return [...AlgorithmService.quickSort(less), pivot, ...AlgorithmService.quickSort(greater)];
  }
}