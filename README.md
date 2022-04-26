# WINK-front

[![build](https://github.com/artrayme/WINK-front/actions/workflows/build.yml/badge.svg)](https://github.com/artrayme/WINK-front/actions/workflows/build.yml)

Front part of the WINK project. 

<p align="center">
<img src="docs/logo.png" alt="drawing" width="400"/>
</p>

### Overview
WINK-front is a React component that represents a window with SCs code editor and the ability to upload the code in sc-machine and window with a tree of files. Since Wink-front is a React component you can use it in other web-oriented programs. It provides you with the following list of functionality:
- Works in WINK-back engine mode and in offline one as a simple editor. 
- Converts SCg (supports the old and the new formats) to SCs.
- SCs syntax backlighting.
- Сonverts SCs to SC-json code for sending knowledge fragments to WINK-back.
- Displays semantic environment of loaded SC-json in editor window in SCg format. 
&ensp;
****
### Launch Instruction: 
1. Install all packets with help of ```npm install command```: 
2. Launch the server using ```npm run start```. 
3. In different console window launch electron using ```npm run electron``` command.
