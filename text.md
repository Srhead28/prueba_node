# crear proyecto
npm init -y
# inicializar proyecto git en local
git init
# ejecutar archivo app.js
npm run start
# configuracion inicial de git 
git config --global user.name "adrian"
git config --global user.email adrian@gmail.com

# verificar informacion asociada a git
git config --list
git config user.name
git config user.email

#commit cambios
git status
git add .
git commit -m "comentario"
git push origin main
