const TABLE = document.querySelector("table")
const TABLE_HEAD = document.querySelector("thead")
const TABLE_BODY = document.querySelector("tbody")
const ROWS = 5
const COLUMNS = 5

const range = (times = 0) => new Array(times).fill(0).map((_, i) => i)

const STATE = range(ROWS).map(i => range(COLUMNS + 1).map(j => i + j))

function renderTable() {
  TABLE_HEAD.innerHTML = `<tr>${range(COLUMNS + 1).map((i) => `<th>${i === 0 ? '' : String.fromCharCode(64 + i)}</th>`).join('')}</tr>`
  TABLE_BODY.innerHTML = `${range(ROWS).map((i) => `<tr>${range(COLUMNS + 1).map((j) => `<td data-y="${i + 1}" data-x="${j}"  >${j === 0 ? i + 1 : `<span>${STATE[i][j - 1]}</span> <input type="text" value="${STATE[i][j - 1]}">`}</td>`).join("")}</tr>`).join('')}`
}

TABLE.addEventListener("click", ({ target }) => {
  const td = target.closest("td")
  if (!td) return
  const { x, y } = td.dataset
  const input = td.querySelector("input")
  const end = input.value.length
  input.setSelectionRange(end, end)
  input.focus()
  input.addEventListener('blur', ({ target }) => {
    const { x, y } = target.closest("td").dataset
    if (input.value === STATE[y - 1][x - 1]) return
    STATE[y - 1][x - 1] = input.value
    renderTable()
  }, { once: true })
})
renderTable();
