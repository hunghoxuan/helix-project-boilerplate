import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const table = document.createElement('table');
  table.className = 'table table-striped table-bordered';
  const head = document.createElement('thead');
  const body = document.createElement('tbody');
  let rowIndex = 1;
  [...block.children].forEach((row) => {
    const tr = document.createElement('tr');
    tr.innerHTML = '';
    [...row.children].forEach((div) => {
      const td = document.createElement(rowIndex === 1 ? 'th' : 'td');
      td.innerHTML = div.innerHTML;
      tr.append(td);
    });
    if (rowIndex === 1) head.append(tr); else body.append(tr);
    rowIndex += 1;
  });
  table.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  table.append(head);
  table.append(body);
  block.append(table);
}
