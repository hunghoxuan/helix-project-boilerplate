export default function decorate(block) {
  const quoteDiv = block.querySelector(':scope > div > div');
  const blockQuote = document.createElement('blockquote');
  blockQuote.innerHTML = `<p>${quoteDiv.innerHTML}</p>`;
  quoteDiv.parentElement.replaceWith(blockQuote);

  const quoteAuthor = block.querySelector(':scope > div > div');
  if (quoteAuthor) {
    const cite = document.createElement('cite');
    cite.textContent = quoteAuthor.textContent;
    blockQuote.append(cite);
    quoteAuthor.parentElement.remove();
  }
}
