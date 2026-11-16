/*
 * `Pagination Helper` 
 * 
 * When building user interfaces, you often need to paginate a list of items. 
 * Given the total number of items, the page size, and the current active page, 
 * calculate the metadata needed to render the pagination controls.
 * 
 * Write a function getPageMetadata that accepts:
 * totalItems (non-negative integer): The total number of items in the collection.
 * pageSize (positive integer): The maximum number of items displayed per page.
 * currentPage (positive integer): The current 1-based page number.
 * 
 * It should return an object containing:
 * totalPages: The total number of pages (0 if there are no items).
 * startItem: The 1-based index of the first item on the current page (0 if there are no items).
 * endItem: The 1-based index of the last item on the current page (0 if there are no items).
 * hasPrev: A boolean indicating if there is a previous page.
 * hasNext: A boolean indicating if there is a next page.
 * 
 * Note: You can assume currentPage will always be a valid page number from 1 to totalPages (unless totalItems is 0, in which case currentPage will be 1).
 */


interface PageMetadata {
  totalPages: number;
  startItem: number;
  endItem: number;
  hasPrev: boolean;
  hasNext: boolean;
}

function getPageMetadata(
  totalItems: number,
  pageSize: number,
  currentPage: number
): PageMetadata {
  if (totalItems === 0) {
    return {
      totalPages: 0,
      startItem: 0,
      endItem: 0,
      hasPrev: false,
      hasNext: false,
    };
  }

  const totalPages = Math.ceil(totalItems / pageSize);

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return {
    totalPages,
    startItem,
    endItem,
    hasPrev,
    hasNext,
  };
}


console.log(getPageMetadata(100, 10, 1));       // { totalPages: 10, startItem: 1, endItem: 10, hasPrev: false, hasNext: true }
console.log(getPageMetadata(100, 10, 10));      // { totalPages: 10, startItem: 91, endItem: 100, hasPrev: true, hasNext: false }
console.log(getPageMetadata(95, 10, 10));       // { totalPages: 10, startItem: 91, endItem: 95, hasPrev: true, hasNext: false }
console.log(getPageMetadata(0, 10, 1));         // { totalPages: 0, startItem: 0, endItem: 0, hasPrev: false, hasNext: false }
console.log(getPageMetadata(5, 10, 1));         // { totalPages: 1, startItem: 1, endItem: 5, hasPrev: false, hasNext: false }