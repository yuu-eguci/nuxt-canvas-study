// 画像の import をファイル名の文字列に変換します。
module.exports = {
  process (_src, filename) {
    return { code: `module.exports = ${JSON.stringify(filename.split('/').pop())}` }
  }
}
