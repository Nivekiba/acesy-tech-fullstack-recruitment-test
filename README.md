# Test for recruiting news Fullstack interns at ACESY TECH

## First step

1. Clone the repo
2. Switch to vue-symfony
```cd vue-symfony```
3. Install node dependencies and symfony dependencies
```npm install```
```composer update```
4. Lancer le serveur symfony[ utiliser pour heberger les fichiers statiques]
```php bin/console server:run```
5. Lancer l'encrypteur webpack
```npm run watch```
6. Lancer le serveur Parse(Pour manipuler la BD dans mongo)
Il faudra donc au prealable installer mongodb et renseigner le lien de la BD dans le fichier __parseserver/index.js__. Puis
```node parseserver/index.js```

7. Lancer l'application dans un navigateur [the app](http://locahost:8000/notes)
8. Inscrivez-vous et creer vos notes

| Header 1      |     2 header    |   header 3 |
| ------------- |: -------------: | ---------: |
| 1 Online      |        1        |      value |
| Line 2        |        2        |      value |
| 3 Online      |        3        |      value |
