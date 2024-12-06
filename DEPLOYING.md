## Deploying to GitHub Pages

This project uses `gh-pages` to deploy the application to GitHub Pages. Follow the steps below to set it up and deploy:

### **Setup Instructions**

1. **Install `gh-pages` package:**

   Run the following command to install the `gh-pages` package:
   ```bash
   npm install --save gh-pages --force
   ```

2. **Update `package.json`:**

   Add the `homepage` property to specify the deployment URL:
   ```json
   "homepage": "https://<username>.github.io/<repository-name>"
   ```
   Replace `<username>` with your GitHub username and `<repository-name>` with your repository name.

   Then, add the following `scripts` for deployment:
   ```json
   "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Build the Application:**

   Create the production build by running:
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages:**

   Deploy the `build` folder to the `gh-pages` branch using:
   ```bash
   npm run deploy
   ```

5. **Verify Deployment:**

   - Go to your repository on GitHub.
   - Navigate to **Settings > Pages**.
   - Ensure the source is set to the `gh-pages` branch.
   - Your application should now be live at:
     ```
     https://<username>.github.io/<repository-name>
     ```

---

### **Troubleshooting Common Issues**

- **Deployment not live:**
  - Verify the `homepage` property in `package.json` is correctly configured.
  - Check that the `gh-pages` branch exists and is published.

- **`gh-pages` not pushing changes:**
  - Ensure you have the correct permissions for the repository.
  - Use `git remote -v` to confirm the repository URL is correct.

- **View detailed logs:**
  Use the following command to enable verbose logging during deployment:
  ```bash
  npm run deploy --verbose
  ```

---

This setup ensures your application is deployed smoothly to GitHub Pages. 🚀