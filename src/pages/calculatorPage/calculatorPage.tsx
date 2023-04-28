import React, { useState } from 'react';
import { ArrayForAlgorithmType, bigAnsortedArr, unsortedArray } from '../../configs/calculationConfig';
import Button from '../../UI/Button/Button';
import AlgorithmService from '../../Service/algorithm';
import { CalculationResultType, WantedItemType } from './calculatorPage.options';
import Input from '../../UI/Input/Input';
import Benchmark from '../../Service/benchmark';
import { SortingType } from '../../Service/algorith.options';

const CalculatorPage = () => {
  const [data, setData] = useState(unsortedArray);
  const [result, setResult] = useState<CalculationResultType>('Здесь отобразиться результат');
  const [wantedItem, setWantedItem] = useState<WantedItemType>(2);
  const [sortedData, setSortedData] = useState<ArrayForAlgorithmType>([]);

  // Делаем окошко для ввода искомого числа в массиве
  const wantedItemInputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    if (value === '') setWantedItem(value);

    const parsedValue = parseInt(value);
    
    if ((typeof parsedValue !== 'number') || isNaN(parsedValue)) return;
    setWantedItem(parsedValue);
  } 

  const linerQueueHandler = () => {
    const [arr] = typeOfArr();

    if (!wantedItem) return;
    const response = AlgorithmService.linerQueue(arr, wantedItem);
    Benchmark.multipleCalls(AlgorithmService.linerQueue, 100000, arr, wantedItem);
    setResult(response);
  }

  const binaryQueueHandler = () => {
    const [arr, isSorted] = typeOfArr();

    if (!wantedItem) return;
    const response = AlgorithmService.binaryQueue(arr, wantedItem, isSorted);
    Benchmark.multipleCalls(AlgorithmService.binaryQueue, 100000, arr, wantedItem, isSorted);
    setResult(response);
  }

  const sortHandler = () => {
    Benchmark.multipleCalls(AlgorithmService.sort, 1000, [...data], SortingType.asc);
    const response = AlgorithmService.sort([...data], SortingType.asc);
    setSortedData(response);
    setResult(response);
  }
  
  const bubbleSortHandler = () => {
    Benchmark.multipleCalls(AlgorithmService.bubbleSorting, 1000, [...data]);
    const response = AlgorithmService.bubbleSorting([...data]);
    setResult(response);
  }

  const quickSortHandler = () => {
    Benchmark.multipleCalls(AlgorithmService.quickSort, 1000, [...data]);
    const response = AlgorithmService.quickSort([...data]);  
    setResult(response);
  }
  
  const typeOfArr = (): [ArrayForAlgorithmType, boolean] => {
    const isSorted = sortedData.length > 0 ? true : false;
    const arr = sortedData.length > 0 ? [...sortedData] : [...data];

    return [arr, isSorted];
  }
  
  const renderResult = () => {
    if (typeof result === 'number' || typeof result === 'string') return result;
    return `[${result.join(', ')}]`
  }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>Коллекция массивов</h1>
      <div className='max-w-7xl w-full min-h-20 h-auto text-lg border border-solid border-black flex flex-col items-center justify-center'>
        <p>Исходный массив: [{data.join(', ')}]</p>
        <p>Отсортированный массив: [{sortedData.join(', ')}]</p>
      </div>
      <h1 className='text-2xl mt-20 mb-4'>Кнопки управления</h1>
      <div className='w-full min-h-20 flex items-center justify-center flex-wrap border-y border-solid border-black text-lg mb-20'>
        <Button title='linearQueue' clickHandler={linerQueueHandler} />
        <Button title='binaryQueue' clickHandler={binaryQueueHandler} />
        <Button title='Отсортировать массив' clickHandler={sortHandler} />
        <Button title='Отсортировать пузырьком' clickHandler={bubbleSortHandler}/>
        <Button title='Отсортировать быстрой сортировкой' clickHandler={quickSortHandler} />
      </div>

      <h1 className='text-2xl mt-10 mb-4'>Конфигурация</h1>
      <div className='w-full h-20 flex items-center justify-center border-y border-solid border-black text-lg mb-20'>
        <Input value={wantedItem} onChangeHandler={wantedItemInputChangeHandler} id={'findIndex'} name="Введите искомый элемент"/>
      </div>

      <h1 className='text-2xl'>Результат</h1>
      <div className='max-w-7xl w-full h-20 text-lg border border-solid border-black flex items-center justify-center'>
        {renderResult()}
      </div>
    </div>
  );
}

export default CalculatorPage;