# Encadreur — cadres & signatures photo

Petite application web (100 % locale, hors ligne, installable) pour ajouter des cadres personnalisables et votre signature à vos photos, puis les exporter en JPEG ou PNG. Aucune image n'est envoyée sur Internet : tout est calculé dans le navigateur.

## Ce qu'elle fait
- **Retouche du visage** (détection automatique, 478 points, plusieurs visages) : lissage de la peau avec texture préservée (pores, grain), teint, éclat, anti-brillance, correcteur d'imperfections au doigt ; yeux (blanc de l'œil, éclat et couleur des iris, netteté du regard, yeux rouges, cernes) ; bouche (dents, rouge à lèvres, brillance, volume, sourire) ; nez et forme du visage en manuel uniquement ; 5 retouches en un geste avec intensité (Naturel, Pro, Éclat, Glamour, Doux), **sans jamais modifier la forme du visage** ; chaque retouche (peau, yeux, dents, lèvres, forme, cheveux, perruque) s'active ou se désactive séparément.
- **Cheveux** : sélection automatique (affinable au pinceau), couleur avec éclaircissement, dégradé racines → pointes, lissage anti-frisottis, brillance ; 7 perruques dessinées et placées automatiquement (style illustration).
- **Filtres façon Lightroom** : 61 filtres en 9 familles, dont **16 looks Portrait pro** (Corporate, Naturel pro, Chaleureux, Éditorial net, Nuancé, Caractère, Luxe, Film doux, Chrome, Teal & Orange, Moody, Fashion, Low-key, High-key, N&B Fine Art, Fine Art mat) avec description, curseur d'intensité et « Réinitialiser le look ». Recherche, **favoris**, et vos filtres perso : enregistrer, renommer, dupliquer, supprimer, **exporter / importer en .json** (pour passer de l'iPhone au PC). Les noms de marques indiquent une inspiration de rendu, pas un profil officiel.
- **Réglages photo** : Lumière (exposition, contraste, hautes lumières, ombres, blancs, noirs) ; Couleur (**pipette et balance des blancs auto**, température avec équivalent ≈ Kelvin, teinte, vibrance, saturation, **protection des tons chair**, noir et blanc) ; **Courbes** (RVB + rouge, vert, bleu, points déplaçables, histogramme, préréglages) ; **TSL / couleur sélective** (ou mélange N&B) ; **Balance des couleurs** (ombres, tons moyens, hautes lumières + balance) ; **Détail** (texture, clarté, correction du voile, netteté, réduction du bruit luminance et couleur) ; Effets (halo, effet mat, vignettage, grain). Calcul sur la carte graphique (WebGL) : aperçu en direct, export en pleine définition.
- **Masques locaux** : sujet et arrière-plan détectés automatiquement (exposition, température, saturation du fond, **flou d'arrière-plan simulé**), masque corrigeable au pinceau et affichable en couleur ; **pinceau libre** pour éclaircir / assombrir une zone (dodge & burn), sa saturation et sa température.
- **Avant / après** : touchez le bouton Comparer pour une vue partagée avec séparation déplaçable ; maintenez-le pour voir l'original. **Zoom** : pincer à deux doigts, double-toucher, molette ou boutons − / + / Ajuster ; déplacement à un doigt (à deux doigts quand un pinceau est actif).
- **36 préréglages** : Simple (bordures, ombre portée, polaroid, carré / Insta 4:5), Galerie (cadre noir, noyer, chêne, blanc, doré, alu, murs colorés, tirage suspendu à pinces), Infos (bandeau façon appareil photo avec les données EXIF), Flou (fond flouté, story 9:16), Pellicule (35 mm).
- **Tout est réglable** : format de sortie (libre, 1:1, 4:5, 9:16…), marges, bordures, épaisseur / matière / couleur du cadre, passe-partout, fond (couleur, texture, éclairage), ombre (intensité, douceur, distance, direction), textes et légendes avec les données de la photo ({appareil}, {reglages}, {date}…). Les couleurs dominantes de la photo sont proposées automatiquement.
- **Signatures** : import PNG ou JPG (mémorisées sur l'appareil), suppression du fond blanc ou noir, recoloration, **17 modes de fusion façon Photoshop** (Produit, Superposition, Incrustation, Lumière tamisée…), opacité, rotation, ombre, 9 positions ou glisser / pincer directement sur l'aperçu. Textes libres aussi.
- **Mes styles** : enregistrez une combinaison cadre + signature et réappliquez-la en un geste.
- **Par lot** : plusieurs photos à la fois, export de toutes (partage iPhone ou fichier .zip).
- **Export** JPEG (qualité réglable) ou PNG, en taille originale, 4096, 2048 ou 1080 px, avec **nom de fichier personnalisable** ({nom}, {n}, {date}). Une éventuelle réduction de dimension (limite mémoire de l'iPhone) est signalée.

## Mettre en ligne sur GitHub Pages
1. Sur github.com, créez un dépôt **public**, par exemple `encadreur`.
2. Décompressez le zip, puis dans le dépôt : **Add file → Upload files** → **choose your files** et sélectionnez **tous les fichiers du dossier d'un coup** (19 fichiers, aucun sous-dossier). Validez avec **Commit changes**.
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
Remplacez `index.html`, `sw.js` et `README.md` (c’est tout pour la v1.3.0 : les autres fichiers ne changent pas). Pour vos propres modifications ensuite, changez le numéro dans `sw.js` (`const CACHE = 'encadreur-v1.3.0'` → `v1.3.1`) pour que les appareils déjà installés récupèrent la nouvelle version.
Sur l'iPhone, fermez complètement l'app (balayez sa carte vers le haut), puis rouvrez-la avec une connexion : la nouvelle version se charge.
Pour renommer l'app : modifiez `name` / `short_name` dans `manifest.webmanifest` et la balise `<title>` de `index.html`.

## Bon à savoir
- La retouche du visage, des cheveux et les masques sujet / fond utilisent la détection hors ligne de Google (MediaPipe, licence Apache 2.0) : au premier usage, l'app télécharge environ 16 Mo depuis votre site GitHub, puis tout fonctionne sans connexion. Elle ne marche pas en ouvrant `index.html` directement depuis l'ordinateur : passez par l'adresse GitHub Pages.
- Le flou d'arrière-plan, Low-key et High-key sont des simulations de postproduction : vérifiez les contours (cheveux) en zoomant et corrigez le masque au pinceau si besoin.
- Pas de correction optique (distorsion, aberrations) : les JPEG ne contiennent pas les profils d'objectif nécessaires.
- Le zoom s'appuie sur un aperçu de 2048 px ; l'export, lui, est calculé en pleine définition.
- Si un fichier manque (par exemple une icône), l'app fonctionne quand même ; seule l'icône d'écran d'accueil serait remplacée par une capture de la page.
- Signatures et styles sont gardés dans le navigateur de chaque appareil. Sur iPhone, l'app installée a son propre stockage, séparé de Safari.
- Safari sur iPhone limite une image à environ 16,7 mégapixels : un export « Originale » plus grand est réduit automatiquement.
- Les photos HEIC de l'iPhone sont converties en JPEG automatiquement à l'import. Sur PC, Chrome et Edge ne lisent pas le HEIC.
- Les polices sont celles du système (la « Calligraphie » utilise Snell Roundhand sur iPhone et Mac, Segoe Script sur Windows), donc un texte peut légèrement changer d'aspect d'un appareil à l'autre.
