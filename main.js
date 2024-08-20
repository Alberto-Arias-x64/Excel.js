const TABLE = document.querySelector("table")
const TABLE_HEAD = document.querySelector("thead")
const TABLE_BODY = document.querySelector("tbody")
const ROWS = 20
const COLUMNS = 20

function range(times = 0) {
  return new Array(times).fill(0).map((_, i) => i)
}

function renderTable() {
  TABLE_HEAD.innerHTML = `<tr>${range(COLUMNS + 1).map((i) => `<th>${i === 0 ? '' : String.fromCharCode(64 + i)}</th>`).join('')}</tr>`
  TABLE_BODY.innerHTML = `${range(ROWS).map((i) => `<tr>${range(COLUMNS + 1).map((j) => `<td>${j === 0 ? i + 1 : ''}</td>`).join("")}</tr>`).join('')}`
}
renderTable();
