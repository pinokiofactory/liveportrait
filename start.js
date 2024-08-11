module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "{{platform === 'win32' ? 'LivePortrait_env' : 'env'}}",                // Edit this to customize the venv folder path
        env: {
          PYTORCH_ENABLE_MPS_FALLBACK: "1"
        },                   // Edit this to customize environment variables (see documentation)
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "{{args && args.mode === 'animal' ? 'python app_animals.py' : 'python app.py'}}"
        ],
        on: [{
          // The regular expression pattern to monitor.
          // When this pattern occurs in the shell terminal, the shell will return,
          // and the script will go onto the next step.
          "event": "/http:\/\/\\S+/",   

          // "done": true will move to the next step while keeping the shell alive.
          // "kill": true will move to the next step after killing the shell.
          "done": true
        }]
      }
    },
  ]
}
