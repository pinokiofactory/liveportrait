const path = require('path')
module.exports = {
  version: "2.0",
  title: "LivePortrait",
  description: "Bring portraits to life! https://github.com/KwaiVGI/LivePortrait",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed
    if (kernel.platform === "win32") {
      installed = info.exists("app/LivePortrait_env")
    } else {
      installed = info.exists("app/env")
    }
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js")
    }
    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (running.start) {
        let local = info.local("start.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start.js",
          }]
        }
      } else if (running.update) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Updating",
          href: "update.js",
        }]
      } else if (running.reset) {
        return [{
          default: true,
          icon: 'fa-solid fa-terminal',
          text: "Resetting",
          href: "reset.js",
        }]
      } else {
        if (kernel.gpu === "nvidia") {
          return [{
            icon: "fa-solid fa-power-off",
            text: "Start Human Mode",
            href: "start.js",
          }, {
            icon: "fa-solid fa-power-off",
            text: "Start Animal Mode",
            href: "start.js",
            params: {
              mode: "animal"
            }
          }, {
            icon: "fa-solid fa-plug",
            text: "Update",
            href: "update.js",
          }, {
            icon: "fa-solid fa-plug",
            text: "Install",
            href: "install.js",
          }, {
            icon: "fa-regular fa-circle-xmark",
            text: "Reset",
            href: "reset.js",
          }]
        } else {
          return [{
            default: true,
            icon: "fa-solid fa-power-off",
            text: "Start",
            href: "start.js",
          }, {
            icon: "fa-solid fa-plug",
            text: "Update",
            href: "update.js",
          }, {
            icon: "fa-solid fa-plug",
            text: "Install",
            href: "install.js",
          }, {
            icon: "fa-regular fa-circle-xmark",
            text: "Reset",
            href: "reset.js",
          }]
//        }
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
