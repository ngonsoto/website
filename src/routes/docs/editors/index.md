---
section: editors
title: Editors
---

Gitpod isn't only a browser-based IDE, or only 'VS Code in the browser'.

In line with [our ambition to "remove all friction from the developer experience"](https://www.notion.so/gitpod/Values-Attributes-2ed4c2f93c84499b98e3b5389980992e), Gitpod will continue to support many different IDE's and workflows. Gitpod currently has first-class support for IDE's on desktop, with more desktop IDE's coming as remote desktop support grows.

## The 3 IDE setups within Gitpod

There are currently 3 general ways to configure an IDE to work with Gitpod:

1. **Browser** - These are the IDE's which Gitpod supports as first-class within the browser. Currently, Gitpod only supports VS Code, which is the default browser IDE. You can also enable "VSCode Insiders", which is VS Code in the browser synced with [the latest upstream VS Code](https://github.com/microsoft/vscode). You can configure the Insiders VS Code IDE [in your Gitpod preferences](https://gitpod.io/preferences).
1. **Desktop** - Gitpod also has first-class support for desktop IDE's, allowing you to connect to your Gitpod workspace from your desktop machine. Currently, [VSCode](/vscode), [IntelliJ](/intellij) and [GoLand](/goland) are in Beta and can be used with Gitpod today, with the rest of the IntelliJ suite coming soon.
1. **Browser (via Docker Image)** - Because Gitpod has [Docker image support](/docs/config-docker) and the ability to preview a running application, you can load an IDE via Docker, and interact with it in your browser. JetBrains IDE's have [the Projector product](https://lp.jetbrains.com/projector/), which enables this workflow.

### Browser

- [vscode](editors/vscode-browser)

### Desktop

- [GoLand](editors/goland)
- [IntelliJ](editors/intellij)
- [vscode](editors/vscode)

### Browser (via Docker image)

- [CLion](editors/clion)
- [DataGrip](editors/datagrip)
- [GoLand](editors/goland)
- [IntelliJ](editors/intellij)
- [phpstorm](editors/phpstorm)
- [pycharm](editors/pycharm)
- [rider](editors/rider)
- [rubymine](editors/rubymine)
- [webstorm](editors/webstorm)
