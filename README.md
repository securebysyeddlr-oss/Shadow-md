![WELLCOME](https://raw.githubusercontent.com/Dexsam07/DEX-BOT-MD/main/Shyam/wellcome.svg)

______

[![Shyam](https://raw.githubusercontent.com/Dexsam07/DEX-BOT-MD/main/Shyam/mr.svg)](https://whatsapp.com/channel/0029VbBgXTsKwqSKZKy38w2o)

___

<p align="center">
  <a href="https://github.com/Dexsam07" target="_blank">
    <img src="https://raw.githubusercontent.com/Dexsam07/DEX-BOT-MD/main/Shyam/dev-gold-mini.svg" width="300" alt="Developer — MR SHYAM (Gold 3D)">
  </a>
</p>

<p align="center">
  <a href="https://whatsapp.com/channel/0029VbBgXTsKwqSKZKy38w2o" target="_blank">
    <img src="https://raw.githubusercontent.com/Dexsam07/DEX-BOT-MD/main/Shyam/channel-update.svg" width="350" alt="Bot Updating — WhatsApp Channel | Join Fast">
  </a>
</p>

---------

<p align="center">
  <a href="https://github.com/Dexsam07/DEX-BOT-MD">
    <img title="PUBLIC-BOT" src="https://img.shields.io/static/v1?label=Language&message=JavaScript&style=square&color=darkpink">
  </a> &nbsp;
  <img src="https://komarev.com/ghpvc/?username=Dexsam07&label=PROFILE+VIEWS&style=square&color=blue" />
</p>

-------------

<p align="center">
  <img src="https://raw.githubusercontent.com/Dexsam07/DEX-BOT-MD/main/SHYAM/feature-bot.svg" alt="Feature Bot" width="900"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Dexsam07/DEX-BOT-MD/main/SHYAM/license.svg" alt="License" width="200"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Dexsam07/DEX-BOT-MD/main/SHYAM/maintenance.svg" alt="Maintenance" width="120"/>
</p>

<p align="center">
  <a href="https://github.com/Dexsam07/DEX-BOT-MD/fork" target="_blank">
    <img src="https://raw.githubusercontent.com/Dexsam07/DEX-BOT-MD/main/SHYAM/forkstar-holo.svg" width="180" alt="Fork & Star Bot Repo"/>
  </a>
</p>

<p align="center">
  <a href="https://dex-bot-md-pair.onrender.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/Dexsam07/DEX-BOT-MD/main/SHYAM/paircode-link.svg" width="195" alt="PAIR CODE – Device Session ID">
  </a>
</p>

-------------

<p align="center">
  <img src="https://raw.githubusercontent.com/Dexsam07/DEX-BOT-MD/main/Shyam/deployment.svg" width="600" alt="Shyam MD — News Ticker Typing">
</p>

<div align="center">
  <table>
    <tr>
      <td><a href="https://dashboard.heroku.com/new-app?template=https://github.com/Dexsam07/DEX-BOT-MD" target="_blank"><img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white&labelColor=000000&color=0000FF"/></a></td>
      <td><a href="https://bot-hosting.net/?aff=1335487206948864030" target="_blank"><img src="https://img.shields.io/badge/Bot-Hosting-A52A2A?style=for-the-badge&logo=firefoxbrowser&logoColor=white&labelColor=000000"/></a></td>
    </tr>
    <tr>
      <td><a href="https://app.koyeb.com/deploy?name=Dex-Bot-MD&type=git&repository=Dexsam07%2FDEX-BOT-MD&branch=main&builder=dockerfile&instance_type=free&regions=was&env%5BSESSION_ID%5D=YOUR_SESSION_ID_HERE" target="_blank"><img src="https://img.shields.io/badge/KOYEB-APP-FF009D?style=for-the-badge&logo=koyeb&logoColor=white&labelColor=000000"/></a></td>
      <td><a href="https://railway.app/new" target="_blank"><img src="https://img.shields.io/badge/Railway-000080?style=for-the-badge&logo=railway&logoColor=white&labelColor=000000"/></a></td>
    </tr>
    <tr>
      <td><a href="https://dashboard.katabump.com/auth/login#3c8183" target="_blank"><img src="https://img.shields.io/badge/KataBump-000000?style=for-the-badge&logo=render&logoColor=white&labelColor=000000&color=FFFF00"/></a></td>
      <td><a href="https://www.smd-host.site/" target="_blank"><img src="https://img.shields.io/badge/Free-host-CC00FF?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=000000"/></a></td>
    </tr>
  </table>
</div>

<p align="center">
  <a href="https://github.com/Dexsam07/SHYAM-MD-V2" target="_blank">
    <img alt="Deploy From Render" src="https://img.shields.io/badge/Deploy-Only%20Render%20Repo-4CAF50?style=for-the-badge&logo=render&logoColor=white"/>
  </a>
</p>

-------------

**✠ FREE DEPLOYMENT – GITHUB WORKFLOW CODE (CI / Testing Only) ✠**

> **Note:** This workflow is for automatic testing & dependency installation on every push / pull request.  
> It **does NOT deploy** your bot. Use the hosting platforms above for actual 24/7 hosting.

```yaml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x, 22.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Set up Node.js
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build project (if exists)
      run: npm run build --if-present

    - name: Run tests (if exists)
      run: npm test --if-present
