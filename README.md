# webapp-template-python

Ce dépôt est une template pour démarrer rapidement une application web avec un frontend en React(Vite - TypeScript - Tailwindcss) et un backend en Python (FastAPI).

---

## Comment l'utiliser pour créer un nouveau projet

1. **Cloner ce dépôt :**
   ```bash
   git clone https://github.com/ton-username/my-webapp-template.git mon-nouveau-projet
   cd mon-nouveau-projet
    ```

2. **Supprimer l'historique git :**
   ```bash
    rm -rf .git # ou Remove-Item -Recurse -Force .git sous powershell windows 
                # ou rmdir /s /q .git sous cmd 
    git init
    git remote add origin <nouveau-repo-url>
    git add .
    git commit -m "Initial commit from template"
    git push -u origin master
    ```

3. **Installer les dépendances :**
    - Frontend
        ```bash
        cd frontend
        npm install
        npm run dev
        ```
    - Backend
        ```bash
        cd backend
        python -m venv venv
        source venv/bin/activate  # ou venv\Scripts\activate sous Windows
        pip install -r requirements.txt
        uvicorn app.main:app --reload
        ```



## Mise à jour des technologies (pour les développeurs)

1. **Frontend (React) :**
    - Mettre à jour les dépendances :
        ```bash
        npm update
        npm audit fix
        ```

    - Changer de version de React : Modifier package.json, puis :
        ```bash
        npm install
        ```
2. **Backend (Python) :**
    - Mettre à jour les packages :
        ```bash
        pip list --outdated
        pip install --upgrade <nom-du-package>
        ```

    - Regénérer requirements.txt :
        ```bash
        pip freeze > requirements.txt
        ```

## Suggestions (TODO)
- Ajoute un fichier .env.example pour montrer comment configurer l’environnement.
- Tu peux aussi fournir un Makefile ou des scripts bash (scripts/dev.sh, scripts/update.sh, etc.)
- Intégrer Docker pour faciliter le lancement avec un seul docker-compose up.