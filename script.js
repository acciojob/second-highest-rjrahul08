//your JS code here. If required.
  if (arr.length < 2) {
        return -Infinity;
      }

      // Remove duplicates and sort the array in descending order
      const uniqueSortedArr = Array.from(new Set(arr)).sort((a, b) => b - a);

      // Return the second element if it exists, otherwise return -Infinity
      return uniqueSortedArr.length >= 2 ? uniqueSortedArr[1] : -Infinity;
    }

    // Example usage:
    const arr = [4, 2, 7, 5, 5, 1];
    console.log(secondHighest(arr));