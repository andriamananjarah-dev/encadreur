# Encadreur — cadres & signatures photo

Petite application web (100 % locale, hors ligne, installable) pour ajouter des cadres personnalisables et votre signature à vos photos, puis les exporter en JPEG ou PNG. Aucune image n'est envoyée sur Internet : tout est calculé dans le navigateur.

## Ce qu'elle fait
- **36 préréglages** : Simple (bordures, ombre portée, polaroid, carré / Insta 4:5), Galerie (cadre noir, noyer, chêne, blanc, doré, alu, murs colorés, tirage suspendu à pinces), Infos (bandeau façon appareil photo avec les données EXIF), Flou (fond flouté, story 9:16), Pellicule (35 mm).
- **Tout est réglable** : format de sortie (libre, 1:1, 4:5, 9:16…), marges, bordures, épaisseur / matière / couleur du cadre, passe-partout, fond (couleur, texture, éclairage), ombre (intensité, douceur, distance, direction), textes et légendes avec les données de la photo ({appareil}, {reglages}, {date}…). Les couleurs dominantes de la photo sont proposées automatiquement.
- **Signatures** : import PNG ou JPG (mémorisées sur l'appareil), suppression du fond blanc ou noir, recoloration, **17 modes de fusion façon Photoshop** (Produit, Superposition, Incrustation, Lumière tamisée…), opacité, rotation, ombre, 9 positions ou glisser / pincer directement sur l'aperçu. Textes libres aussi.
- **Mes styles** : enregistrez une combinaison cadre + signature et réappliquez-la en un geste.
- **Par lot** : plusieurs photos à la fois, export de toutes (partage iPhone ou fichier .zip).
- **Export** JPEG (qualité réglable) ou PNG, en taille originale, 4096, 2048 ou 1080 px.

## Mettre en ligne sur GitHub Pages
1. Sur github.com, créez un dépôt **public**, par exemple `encadreur`.
2. Décompressez le zip, puis dans le dépôt : **Add file → Upload files** → **choose your files** et sélectionnez **les 8 fichiers d'un coup** (aucun dossier) : `index.html`, `manifest.webmanifest`, `sw.js`, `icon-180.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `README.md`. Validez avec **Commit changes**.
   - Sur iPhone : touchez le zip dans l'app Fichiers pour le décompresser ; dans le sélecteur de GitHub, touchez **Sélectionner** pour cocher plusieurs fichiers.
   - N'envoyez pas le zip lui-même : GitHub ne le décompresse pas.
3. **Settings → Pages** → *Source* : **Deploy from a branch**, branche `main`, dossier `/ (root)` → **Save**.
4. Une à deux minutes plus tard, l'app est en ligne sur `https://VOTRE-COMPTE.github.io/encadreur/`.

## L'installer sur iPhone
Ouvrez le lien dans **Safari** → bouton **Partager** → **« Sur l'écran d'accueil »**. L'app s'ouvre ensuite en plein écran, comme une app normale, et fonctionne sans connexion.
Pour enregistrer une image exportée dans Photos : **Enregistrer / Partager** → **« Enregistrer l'image »**.

## L'utiliser sans l'installer
- Le lien fonctionne dans n'importe quel navigateur récent (PC, Mac, Android, iPad).
- `index.html` fonctionne aussi tout seul, ouvert directement depuis l'ordinateur (sans le mode hors ligne).

## Mettre à jour
Remplacez `index.html`, puis changez le numéro dans `sw.js` (`const CACHE = 'encadreur-v1.0.2'` → `v1.0.3`) pour que les appareils déjà installés récupèrent la nouvelle version.
Sur l'iPhone, fermez complètement l'app (balayez sa carte vers le haut), puis rouvrez-la avec une connexion : la nouvelle version se charge.
Pour renommer l'app : modifiez `name` / `short_name` dans `manifest.webmanifest` et la balise `<title>` de `index.html`.

## Bon à savoir
- Si un fichier manque (par exemple une icône), l'app fonctionne quand même ; seule l'icône d'écran d'accueil serait remplacée par une capture de la page.
- Signatures et styles sont gardés dans le navigateur de chaque appareil. Sur iPhone, l'app installée a son propre stockage, séparé de Safari.
- Safari sur iPhone limite une image à environ 16,7 mégapixels : un export « Originale » plus grand est réduit automatiquement.
- Les photos HEIC de l'iPhone sont converties en JPEG automatiquement à l'import. Sur PC, Chrome et Edge ne lisent pas le HEIC.
- Les polices sont celles du système (la « Calligraphie » utilise Snell Roundhand sur iPhone et Mac, Segoe Script sur Windows), donc un texte peut légèrement changer d'aspect d'un appareil à l'autre.
