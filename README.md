# 3D-PORTFOLIO

3d portfolio for developer designing

# technologies used:
`javascript` `threejs` `fiber` `drei` `node` `vscode` 

websites used:
- getting glb files:sketchfab
- visualization:https://gltf.pmnd.rs/

# development and setup
- used react and javascript using command `npm create vite@latest ./` in the 3d-portfolio folder
- `npm install`
- `npm run dev`---only command for running the app
- `npm run build` to build the production build version of our code-never necessary(only done when transferring whole files from local computer to web hosting server-this build version of all files goes to server)
- `npm install @react-three/fiber` to use three.js
- `npm install @react-three/drei`
- enable animations: use `npm install @react-spring/three`
- enable email communication: `npm install @emailjs/browser`
- make account on emailjs to get service id, template id, public key for email connection:make .env.local file for environment variables to store these values(vardaan123454321@Gmail.com used)
- needed to install es7+ and tailwindcss extensions into visual studio code during development

# install tailwindcss using vite(see docs of tailwindcss)
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- config the tailwindconfig file
- install react router library using `npm install react-router-dom`
