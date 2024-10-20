module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: [
        "conda install -y -c conda-forge 7zip huggingface_hub",
        "huggingface-cli download cleardusk/LivePortrait-Windows LivePortrait-Windows-v20240829.zip --local-dir {{cwd}}",
      ]
    }
  }, {
    method: "process.wait",
    params: {
      sec: 5
    }
  }, {
    method: "shell.run",
    params: {
      message: [
        "7z x LivePortrait-Windows-v20240829.zip",
        "move LivePortrait-Windows-v20240829 app",
        "del LivePortrait-Windows-v20240829.zip"
      ]
    }
  }]
}
