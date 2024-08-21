const TABLE = document.querySelector("table")
const TABLE_HEAD = document.querySelector("thead")
const TABLE_BODY = document.querySelector("tbody")
const ROWS = 10
const COLUMNS = 10

let columnSelected = null
let rowSelected = null

const range = (times = 0) => new Array(times).fill(0).map((_, i) => i)
const STATE = range(ROWS).map(() => range(COLUMNS + 1).map(() => ({ value: '', input: '' })))
const clearSelection = () => document.querySelectorAll('*.selected').forEach(td => td.classList.remove('selected'))


function replaceValues(value) {
  value = value.replace(/(\w)(\d)/, (_, i, j) => STATE[j - 1][i.charCodeAt(0) - 65].value)
  if (/\w\d/.test(value)) return replaceValues(value)
  return value
}

function renderTable() {
  TABLE_HEAD.innerHTML = `<tr>${range(COLUMNS + 1).map((i) => `<th data-x="${i}" >${i === 0 ? '' : String.fromCharCode(64 + i)}</th>`).join('')}</tr>`
  TABLE_BODY.innerHTML = `${range(ROWS).map((i) => `<tr>${range(COLUMNS + 1).map((j) => `<td data-y="${i + 1}" data-x="${j}"  >${j === 0 ? i + 1 : `<span>${STATE[i][j - 1].value}</span> <input type="text" name="${i + ' ' + j}" value="${STATE[i][j - 1].input}">`}</td>`).join("")}</tr>`).join('')}`
}

function computeValue(value = '') {
  if (!value.startsWith('=')) return value
  const op = value.substring(1)
  try {
    return eval(replaceValues(op)).toString()
  } catch (error) {
    return `!ERROR: ${error.message}`
  }
}

function recalculate() {
  STATE.forEach((row) => {
    row.forEach((cell) => {
      const { input } = cell
      if (input.startsWith('=')) cell.value = computeValue(input)
    })
  })
}

TABLE.addEventListener("click", ({ target }) => {
  const td = target.closest("td")
  if (!td) return
  const { x, y } = td.dataset
  const input = td.querySelector("input")
  if (!input) return
  const end = input?.value.length
  input.setSelectionRange(end, end)
  input.focus()
  clearSelection()
  input.addEventListener('blur', () => {
    if (input.value === STATE[y - 1][x - 1].input) return
    STATE[y - 1][x - 1].value = computeValue(input.value)
    STATE[y - 1][x - 1].input = input.value
    recalculate()
    renderTable()
  }, { once: true })
})

TABLE_HEAD.addEventListener("click", ({ target }) => {
  const th = target.closest("th")
  if (!th) return
  const { x } = th.dataset
  columnSelected = Number(x)
  if (columnSelected <= 0) return
  clearSelection()
  document.querySelectorAll(`*[data-x="${columnSelected}"]`).forEach(td => td.classList.add("selected"))
})

/* TABLE_BODY.addEventListener("click", ({ target }) => {
  const td = target.closest("td")
  if (!td) return
  const { y, x } = td.dataset
  rowSelected = y
  renderTable()
}) */

renderTable();