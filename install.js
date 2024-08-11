module.exports = {
  run: [
    {
      when: "{{platform === 'win32'}}",
      method: "script.start",
      params: {
        uri: "win.js"
      }
    },
    {
      when: "{{platform !== 'win32'}}",
      method: "script.start",
      params: {
        uri: "common.js"
      }
    }
  ]
}
