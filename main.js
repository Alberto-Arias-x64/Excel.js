const TABLE = document.querySelector("table")
const TABLE_HEAD = document.querySelector("thead")
const TABLE_BODY = document.querySelector("tbody")
const ROWS = 5
const COLUMNS = 5

const range = (times = 0) => new Array(times).fill(0).map((_, i) => i)

const STATE = range(ROWS).map(i => range(COLUMNS + 1).map(j => 0))

function renderTable() {
  TABLE_HEAD.innerHTML = `<tr>${range(COLUMNS + 1).map((i) => `<th>${i === 0 ? '' : String.fromCharCode(64 + i)}</th>`).join('')}</tr>`
  TABLE_BODY.innerHTML = `${range(ROWS).map((i) => `<tr>${range(COLUMNS + 1).map((j) => `<td data-y="${i + 1}" data-x="${j}"  >${j === 0 ? i + 1 : `<span>${STATE[i][j - 1]}</span>`}</td>`).join("")}</tr>`).join('')}`
}
renderTable();
