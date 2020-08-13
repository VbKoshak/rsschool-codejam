module.exports = function Rec (tree, deep) {
  if (!deep) {
    this.dp = 0
    this.result = []
  } else this.dp = deep
  this.value = tree.value
  this.left = tree.left
  if (!this.result[this.dp]) this.result[this.dp] = []
  this.result[this.dp].push(this.value)
  if (this.left) Rec(this.left, this.dp + 1)
  this.right = tree.right
  if (this.right) Rec(this.right, this.dp + 1)
  this.dp--
  if (this.dp === -1) {
    return this.result
  }
}
