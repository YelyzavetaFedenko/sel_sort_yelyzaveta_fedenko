/* Creating the programme for Selection Sorting in Java Script */

function selectionSort(arr) {
  const len = arr.length; // Получаем длину массива
  for (let i = 0; i < len - 1; i++) {
    // Внешний цикл проходит по всем элементам, кроме последнего
    let minIndex = i; // Предполагаем, что текущий элемент минимальный
    for (let j = i + 1; j < len; j++) {
      // Внутренний цикл ищет минимальный элемент в оставшейся части массива
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Если находим элемент меньше текущего минимального, обновляем его индекс
      }
    }
    if (minIndex !== i) {
      // Если минимальный элемент не находится на текущей позиции, меняем их местами
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr; // Возвращаем отсортированный массив
}

// Пример использования:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Before sorting:", array);
console.log("After sorting:", mergeSort(array));
