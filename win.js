module.exports = {
  run: [{
    method: "fs.download",
    params: {
      uri: "https://huggingface.co/cleardusk/LivePortrait-Windows/resolve/main/LivePortrait-Windows-v20240806.zip?download=true",
      path: "installer.zip"
    }
  }, {
    method: "shell.run",
    params: {
      message: [
        "conda install -y -c conda-forge 7zip",
        "7z x installer.zip",
        "move LivePortrait-Windows-v20240806 app"
      ]
    }
  }, {
    method: "fs.rm",
    params: {
      path: "installer.zip"
    }
  }]
}
