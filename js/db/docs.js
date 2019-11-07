var javascript = new Map();

javascript.set("coursImg", "jses6");

javascript.set(
	"Présentation d'ECMA", 
	`
		ECMA est un organisme de standardisation pour les systèmes d’information
		 et de communication. Son objectif est de développer et promouvoir divers
		  standards afin de faciliter l’utilisation de la technologie.<br><br>
		En 1996 (après une année de la sortie de JS chez Netscape),
		 Microsoft a sorti sa version de JS qu’elle l’a appelé JScript.
		  Et donc Microsoft a rajouté des nouvelles fonctionnalités à JScript
		   qui été intégré dans IE, et Netscape a rajouté des nouvelles fonctionnalités
		    dans JavaScript…mais cela faisait que ça fonctionne au niveau d’IE mais pas
		     au niveau de Netscape et inversement.<br><br>
		Donc Netscape a décidé d’envoyer sa version de JavaScript à ECMA qui l’a standardisé
		 sous le nom d’ECMAScript. Et comme la version 6 est sorti en Juin 2015, la commuté a
		  décidé de l'appeler ES2015.<br><br>
		La version ECMAScript 6 ou ES6 a été pensé pour créer des applications web facilement
		 maintenables, tout en restant compatibles avec le code existant. L'idée a été d'ajouter
		  de nouvelles fonctionnalités au langage. Ainsi, la bibliothèque standard enrichit de
		   nouvelles méthodes, mais surtout, le langage adopte de nouvelles syntaxes, comme les
		    classes ou les modules permettant d'avoir du code beaucoup plus structuré et lisible.
	`
	);

javascript.set(
	"Versions JavaScript", 
	`
	<ul>
	<li><b>ECMAScript 1 (1997) </b>: Première édition.</li>
	<li><b>ECMAScript 2 (1998) </b>: Modifications rédactionnelles uniquement.</li>
	<li><b>ECMAScript 3 (1999) </b>: Ajout d'expressions régulières et l’Ajout de try/catch.</li>
	<li><b>ECMAScript 4 </b>: Jamais publié.</li>
	<li><b>ECMAScript 5 (2009) </b>: Ajout du "mode strict", du support JSON, du String.trim(), du Array.isArray() et des Méthodes ajoutées d'itération de tableau.</li>
	<li><b>ECMAScript 5.1 (2011) </b>: Changements éditoriaux.</li>
	<li><b>ECMAScript 2015 </b>: Ajouté let et const, de valeurs de paramètres par défaut, de Array.find() et Array.findIndex().</li>
	<li><b>ECMAScript 2016 </b>: Opérateur exponentiel ajouté (**). Array.prototype.includes a été ajouté.</li>
	<li><b>ECMAScript 2017 </b>: Ajout de rembourrage de chaîne, de nouvelles propriétés d'objet, de fonctions asynchrones et de mémoire partagée.</li>
	<li><b>ECMAScript 2018 </b>: Ajout de propriétés de repos/propagation, de l'itération asynchrone, de Promise.finally() et l’ajouts à RegExp.</li>
	</ul>
	ECMAScript est souvent abrégé en ES.

	`
	);

javascript.set(
	"Les variables (let, const)",
	`
	<h3>Le mot-clé var et ce qui est Hoisting</h3>
	L'une des bizarreries de Javascript est que vous pouvez utiliser des variables et des fonctions avant même qu'elles soient déclarées. 
	C'est ce qu'on appelle le levage. 
	Heureusement, dans ES6, les variables let et const offrent un comportement bien meilleur.<br>
	<h4>Hoisting</h4>
	Considérons le code suivant : <br>
	<div class="code-section"><img src="img/js/1.png" class="image" /></div>
	Résultat d’exécution :<br>
	<div class="code-section"><img src="img/js/2.png" class="image" /></div>
	La variable x est déclarée après son utilisation, mais elle fonctionne toujours. Comment est-ce possible ? Lors du traitement de votre code Javascript, 
	lors de la première itération, avant de l'exécuter ligne par ligne, toutes les déclarations de variable et de fonction sont détectées. 
	Ensuite, ils sont créés en mémoire et de l'espace leur est attribué. Ce n’est qu’après cela que le code est exécuté ligne par ligne. 
	Cela se comporte exactement comme si les déclarations étaient déplacées au-dessus de la portée (par exemple, le corps de la fonction). 
	Cela signifie que notre code se comporte comme si les déclarations de variables et de fonctions étaient les premières et ensuite le reste du code. <br><br>
	Considérons le code suivant : <br>
	<div class="code-section"><img src="img/js/3.png" class="image" /></div>
	Il est en fait composé de deux parties :<br>
	<ul><li>var x signifie que la variable x est déclarée.</li>
	<li>= 50; signifie que la variable précédemment déclarée x se voit attribuer une valeur de 50.</li></ul>
	C'est fondamentalement une ligne pour :<br>
	<div class="code-section"><img src="img/js/4.png" class="image" /></div>
	Le fait est que seules les déclarations sont levées, pas les initialisations. Cela signifie que vous pouvez accéder à la variable x avant qu'elle ne soit réellement déclarée, mais sa valeur sera undefined.<br>
	<div class="code-section"><img src="img/js/5.png" class="image" /></div>
	Même dans une instruction if :<br>
	<div class="code-section"><img src="img/js/6.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/7.png" class="image" /></div>
	Prenons un exemple d’une fonction :<br>
	<div class="code-section"><img src="img/js/8.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/9.png" class="image" /></div>
	La valeur de la variable ne change dans le corps d’une fonction par ce que la variable x qui est dans la fonction test disponible seulement dans le bloc de la fonction.<br>
	Un autre exemple d’une boucle for :<br>
	<div class="code-section"><img src="img/js/10.png" class="image" /></div>
	Le résultat est une boucle infinie :<br>
	<div class="code-section"><img src="img/js/11.png" class="image" /></div>
	Par ce que la portée de la boucle for est dans la portée du corps de la boucle qui est dans la portée de la fonction TestVar.<br>
	Un autre exemple :<br>
	<div class="code-section"><img src="img/js/12.png" class="image" /></div>
	Le résultat :<br>
	<div class="code-section"><img src="img/js/13.png" class="image" /></div>
	Contrairement à beaucoup d'autres langages, les variables déclarées à l'aide du mot clé var ne respectent pas la portée du bloc. Cela signifie que nous nous attendrions à ce que la variable 'i' d'une boucle for ne soit accessible que dans la boucle. 
	Mais la portée d'une variable déclarée en Javascript dépend de l'endroit où vous la déclarez.<br>
	<ul><li>Si on déclare à l'intérieur d'un corps de fonction, sa portée correspond au corps entier de la fonction. Et à cause du hoisting, il est accessible partout dans le corps.</li>
	<li>Si on déclare la variable au niveau racine, elle se trouve dans la portée globale. Il s’agit en fait d’une variable de l’objet global (window, par exemple).</li></ul>
	<h3>Le mot clé let</h3>
	Dans ES6, en plus de var, deux nouveaux types de variables ont été introduits - let et const. L'une des différences entre var et let et const est que leur portée n'est pas la fonction entière mais plutôt le bloc englobant. 
	C'est-à-dire qu'une partie du code est entourée d'accolades {}. Comme le corps d'une instruction if ou d'une boucle.<br><br>
	Pour mieux comprendre la différence entre var et let, nous devons comparer leur cycle de vie. Lorsqu'une portée est entré, la première chose qui se passe est que tout la portée (corps de la fonction, bloc) est recherché pour les déclarations de variable. 
	Ensuite, un espace mémoire est attribué à chacune des variables. Ensuite, le corps de la fonction ou du bloc est exécuté ligne par ligne. Voilà en gros comment fonctionne le levage et pourquoi nous pouvons accéder à nos variables avant de les déclarer. <br><br>
	Cependant, il existe une différence essentielle entre son comportement et var/let/const.<br>
	<ul><li>Dans le cas de var, après avoir créé les définitions de variable, avant d'exécuter ligne par ligne, chacune des variables est initialisée avec la valeur undefined.</li>
	<li>Dans le cas de let/const, l'initialisation à undefined ne se produit pas jusqu'à la ligne où la déclaration se produit réellement. Et seulement s'il n'y a pas d'affectation immédiate.</li></ul>
	<h4>Exemples</h4>
	Considérons le code suivant :<br>
	<div class="code-section"><img src="img/js/14.png" class="image" /></div>
	Le résultat :<br>
	<div class="code-section"><img src="img/js/15.png" class="image" /></div>
	Donc on ne peut pas déclarer deux variables avec le même nom avec let.<br>
	Considérons le code suivant :<br>
	<div class="code-section"><img src="img/js/16.png" class="image" /></div>
	Le résultat :<br>
	<div class="code-section"><img src="img/js/17.png" class="image" /></div>
	Donc la valeur de x n’été pas changé par ce que let x=5 est déclarée dans la portée de l’instruction if.<br>
	Prenons un autre exemple :<br>
	<div class="code-section"><img src="img/js/18.png" class="image" /></div>
	Le résultat :<br>
	<div class="code-section"><img src="img/js/19.png" class="image" /></div>
	Le résultat est donc 5 dix fois par ce que la portée de la boucle for est diffèrent de la portée du corps de la boucle.<br>
	<h3>Le mot clé const</h3>
	Const se comporte de manière très similaire à let. Il est également limité au bloc et ne peut pas être utilisé avant d'avoir été déclaré. 
	Il y a cependant une différence essentielle. Une fois que la variable déclarée à l'aide du mot-clé const reçoit une valeur, 
	vous ne pouvez pas la réaffecter. Nous devons également initialiser la variable immédiatement lors de sa déclaration. C'est utile car cela évite une réaffectation accidentelle de la variable. 
	Il encourage également les bonnes pratiques de codage, car il interdit d'utiliser une seule variable à des fins multiples pendant son cycle de vie, ce qui est source de confusion et source d'erreurs.<br>
	<div class="code-section"><img src="img/js/20.png" class="image" /></div>
	<div class="code-section"><img src="img/js/21.png" class="image" /></div>
	Bien que ce concept soit utile, nous devons connaître certaines limitations. La seule restriction fournie par const concerne la réaffectation. Cela ne signifie pas qu'un objet assigné à une variable const n'est pas immuable ! Nous pouvons toujours modifier ses propriétés, 
	les supprimer ou en ajouter de nouvelles. Nous ne pouvons simplement pas assigner un objet complètement différent.<br>
	Exemple (objet) :<br>
	<div class="code-section"><img src="img/js/22.png" class="image" /></div>
	Erreur :<br>
	<div class="code-section"><img src="img/js/21.png" class="image" /></div>
	Mais nous pouvons modifier ses propriétés :<br>
	<div class="code-section"><img src="img/js/23.png" class="image" /></div>
	<div class="code-section"><img src="img/js/24.png" class="image" /></div>
	Exemple (tableau) :<br>
	<div class="code-section"><img src="img/js/25.png" class="image" /></div>
	Erreur :<br>
	<div class="code-section"><img src="img/js/21.png" class="image" /></div>
	Mais nous pouvons ajouter des membres à ce tableau :<br>
	<div class="code-section"><img src="img/js/26.png" class="image" /></div>
	<div class="code-section"><img src="img/js/27.png" class="image" /></div>	
	`
);

javascript.set(
	"Les fonctions fléchées (arrow functions)",
	`
	Les fonctions fléchées pour faire simple sont une manière beaucoup plus concise et courte de définir des fonctions en Javascript. 
	Leur particularité c'est qu'on utilise une flèche => pour définir une fonction et on n'utilise plus le mot clé function.<br>
	<h3>Définir une fonction fléchée</h3>
	Pour définir une fonction comme on l'a dit on utilise une flèche =>, c'est une combinaison = et du > :<br>
	<h4>Une fonction avec plusieurs paramètres</h4>
	Avec ES5 on peut créer une fonction par la façon suivante :<br>
	<div class="code-section"><img src="img/js/28.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/29.png" class="image" /></div>
	Mais avec les fonctions fléchées nous l'avons en une seule ligne et c'est hyper simple. Nous avons donc le même résultat en moins de ligne :<br>
	<div class="code-section"><img src="img/js/30.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/31.png" class="image" /></div>	
	Les accolades ne sont même pas obligatoires ici et le mot clé return aussi, parce que l'on renvoie une seule instruction. Les fonctions fléchées permettent ce qu'on appelle implicit return (retour implicite), on peut donc écrire notre fonction comme ça :<br>
	<div class="code-section"><img src="img/js/32.png" class="image" /></div>
	<h4>Une fonction avec un seul paramètre</h4>
	Quand on a un seul paramètre, nous n'avons donc pas besoin des parenthèses, on renseigne juste le nom du paramètre :<br>
	<div class="code-section"><img src="img/js/33.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/34.png" class="image" /></div>	
	<h4>Une fonction sans paramètre</h4>
	Pour définir une fonction sans paramètre, on met juste des parenthèses vides :<br>
	<div class="code-section"><img src="img/js/35.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/34.png" class="image" /></div>
	<h4>Fonctions qui renvoient un littérale d'objets</h4>
	Pour retourner un objet, il y a une petite différence, parce que l'objet doit être dans des accolades, il faut donc mettre la retourne entre parenthèses cette fois-ci pour faire la différence :<br>
	<div class="code-section"><img src="img/js/36.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/37.png" class="image" /></div>	<br>
	<h3>Le mot clé this</h3>
	Les fonctions fléchées ne lient pas leurs propres this mais héritent de la portée parente, appelée "portée lexicale". Prenons un exemple :<br>
	<div class="code-section"><img src="img/js/38_2.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/38.png" class="image" /></div>	
	Dans la fonction fléchée, le this représente la portée globale ici pas l'objet user, cela peut bien être l'objet window, donc nous obtenons des undefined.<br>
	Essayons donc avec une fonction ordinaire :<br>
	<div class="code-section"><img src="img/js/39.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/41.png" class="image" /></div>	
	Nous avons ici l'affichage voulu.<br><br>
	<h3>Les fonctions fléchées et le constructeur</h3>
	Les fonctions fléchées ne peuvent pas être utilisées comme constructeurs comme d’autres fonctions. Ne les utilisons pas pour créer des objets similaires à ceux d’autres fonctions. Si nous essayons d'utiliser new avec une fonction de flèche, une erreur sera générée. Les fonctions de flèche n’ont pas de propriété ne prototype ni d’autres méthodes internes. Comme les constructeurs sont 
	généralement utilisés pour créer des objets de type classe en JavaScript, nous devons plutôt utiliser les nouvelles classes ES6.<br>
	Exemple (avec le mot clé new) :<br>
	<div class="code-section"><img src="img/js/42.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/43.png" class="image" /></div>	
	Exemple (avec prototype) :<br>
	<div class="code-section"><img src="img/js/44.png" class="image" /></div>	
	Résultat :<br>
	<div class="code-section"><img src="img/js/45.png" class="image" /></div>	
	`
);

javascript.set(
	"Modules",
	`
	Pour les modules dans ES6, il est possible d’importer des fonctions ou bien des objets exportés depuis un module externe ou un autre script. Pour rendre des objets, des fonctions, des classes ou des variables accessibles au monde extérieur, il suffit de les exporter et de les importer, le cas échéant, dans d’autres fichiers. <br>
	<h3>Exportation</h3>
	Nous pouvons exporter les membres un par un. Ce qui n’est pas exporté ne sera pas disponible directement en dehors du module :<br>
	<div class="code-section"><img src="img/js/46.png" class="image" /></div>
	Ou nous pouvons exporter les membres souhaités dans une seule déclaration à la fin du module :<br>
	<div class="code-section"><img src="img/js/47.png" class="image" /></div>
	<h4>Exporter avec alias</h4>
	Nous pouvons également donner un alias aux membres exportés avec le mot clé <i>as</i> :<br>
	<div class="code-section"><img src="img/js/48.png" class="image" /></div>
	<h4>Export par défaut</h4>
	Nous pouvons définir une exportation par défaut avec le mot clé par <i>default</i> :
	<div class="code-section"><img src="img/js/49.png" class="image" /></div>
	<h3>Importation</h3>
	L'importation est également simple, avec le mot-clé <i>import</i>, les membres à importer entre accolades, puis l'emplacement du module par rapport au fichier actuel :<br>
	<div class="code-section"><img src="img/js/50.png" class="image" /></div>
	<h4>Importation avec alias</h4>
	Nous pouvons également alias membres au moment de l'importation :<br>
	<div class="code-section"><img src="img/js/51.png" class="image" /></div>
	<h4>Importer tous les membres exportés</h4>
	Nous pouvons importer tout ce qui est importé par un module comme ceci :<br>
	<div class="code-section"><img src="img/js/52.png" class="image" /></div>
	Cela vous permet d'accéder aux membres avec la notation par points :<br>
	<div class="code-section"><img src="img/js/53.png" class="image" /></div>
	<h4>Importer un module avec un membre par défaut</h4>
	Nous importons le membre par défaut en lui donnant un nom de notre choix. Dans l'exemple suivant, user est le nom attribué au membre par défaut importé :<br>
	<div class="code-section"><img src="img/js/54.png" class="image" /></div>
	Et voici comment importer des membres autres que ceux par défaut :<br>
	<div class="code-section"><img src="img/js/55.png" class="image" /></div>
	`
);

javascript.set(
	"Les classes",
	`
	Dans ES6, nous pouvons créer des classes par la syntaxe suivante :<br>
	<div class="code-section"><img src="img/js/56.png" class="image" /></div>
	C’est un modèle que nous pouvons utiliser pour créer des objets ultérieurement. La méthode constructor() est une méthode spéciale appelée lorsqu’une instance de la classe Company est créée.<br>
	<h3>Les méthodes</h3>
	Les méthodes de classe peuvent être définies comme suit :<br>
	<div class="code-section"><img src="img/js/57.png" class="image" /></div>
	Les classes peuvent également contenir des méthodes statiques. Une méthode statique est une fonction liée à la classe, pas un objet. Une méthode statique ne peut pas être appelée à partir d'une instance de la classe. Voici un exemple :<br>
	<div class="code-section"><img src="img/js/58.png" class="image" /></div>
	Exemple d’utilisation :<br>
	<div class="code-section"><img src="img/js/59.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/60.png" class="image" /></div>
	L'encapsulation est l'un des concepts clés de la programmation orientée objet. Une partie importante de l'encapsulation est que les données (propriétés d'objet) ne doivent pas être directement accédées ni modifiées de l'extérieur de l'objet. 
	Pour accéder ou modifier une propriété, nous utiliserions un getter (accès) ou un setter (modifier), qui sont des méthodes spécifiques que nous définissons dans notre classe. Voyons un exemple :<br>
	<div class="code-section"><img src="img/js/62.png" class="image" /></div>
	La différence entre une méthode getter sans et avec le mot clé get et que la première est considérée comme méthode et la deuxième comme propriété, donc on peut utiliser la deuxième sans parenthèses :<br>
	<div class="code-section"><img src="img/js/61.png" class="image" /></div>
	<h3>Héritage</h3>
	Les classes peuvent également hériter d'autres classes. La classe dont on hérite s'appelle le parent et la classe héritant du parent s'appelle l'enfant. Dans notre exemple, une autre classe, disons Administrateur, peut hériter des propriétés et des méthodes de la classe User :<br>
	<div class="code-section"><img src="img/js/63.png" class="image" /></div>
	Nous indiquons que la classe Admin étend la classe User par le mot clé extends.<br><br>
	Ensuite, nous transmettons toutes les propriétés que nous voulons hériter du parent au constructeur de l’enfant par la méthode <i>super()</i>, ensuite on ajoute les nouvelles propriétés que nous définirons dans la classe enfant.<br>
	
	`
);

javascript.set(
	"Paramètres des fonctions",
	`
	<h3>default</h3>
	Les paramètres par défaut sont également venus avec ES6. Il vous permet de définir des valeurs par défaut pour les paramètres de votre fonction si aucune valeur n'est transmise ou si indéfini est transmis. <br><br>
	Prenons le code JavaScript ES5 suivant :<br>
	<div class="code-section"><img src="img/js/72.png" class="image" /></div>
	L'opérateur OU logique (||) renvoie toujours le deuxième opérande lorsque le premier est faux.<br><br>
	ES6 nous donne un moyen de définir les paramètres de fonction par défaut. Tous les paramètres avec une valeur par défaut sont considérés comme optionnels.<br><br>
	La version ES6 de la fonction <i>inc</i> ressemble à ceci :
	<div class="code-section"><img src="img/js/73.png" class="image" /></div>
	Nous pouvons également définir des valeurs par défaut pour les paramètres qui apparaissent avant les arguments sans les valeurs par défaut :<br>
	<div class="code-section"><img src="img/js/74.png" class="image" /></div>
	Nous pouvons même exécuter une fonction pour définir le paramètre par défaut. Donc, ce n’est pas limité aux valeurs primitives :<br>
	<div class="code-section"><img src="img/js/75.png" class="image" /></div>
	<h3>rest</h3>
	Paramètre rest permet de collecter tous les éléments restants dans un tableau.<br>
	Prenons l’exemple de code suivant :<br>
	<div class="code-section"><img src="img/js/69.png" class="image" /></div>
	Cette fonction ES5 permet d’afficher seulement les nombres sans les deux premiers paramètres.<br>
	Mais en utilisant ES6 rest :<br>
	<div class="code-section"><img src="img/js/70.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/71.png" class="image" /></div>
	<h3>spread</h3>
	Le spread est étroitement lié aux paramètres de rest, en raison de la notation… (trois points). Cela permet de diviser un tableau en un seul argument qui est transmis à la fonction en tant qu'argument séparé.<br>
	<br>Définissons notre fonction de somme et lui passons spread :<br>
	<div class="code-section"><img src="img/js/64.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/65.png" class="image" /></div>
	Nous pouvons également mélanger des arguments standard avec l'opérateur spread :<br>
	<div class="code-section"><img src="img/js/66.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/65.png" class="image" /></div>
	On peut aussi faire un clone d’un tableau avec l’opérateur spread :<br>
	<div class="code-section"><img src="img/js/67.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/js/68.png" class="image" /></div>
	`
);

javascript.set(
	"Promesses",
	`
	Les promesses sont un moyen simple d'implémenter la programmation asynchrone en JavaScript (nouvelle fonctionnalité de l'ES6). Avant les promesses, les rappels étaient utilisés pour implémenter la programmation asynchrone.<br>
	<h3>Callbacks</h3>
	Regardons l'exemple suivant :<br>
	<div class="code-section"><img src="img/js/76.png" class="image" /></div>
	Nous avons un code simple qui affiche certaines instructions sur la console. On utilise une fonction setTimeout ici, pour afficher les fonctions de rappel passées pour invoquer plus tard (quelques millisecondes ici). Imaginons plus d’étapes. On dirait que vous construisez une pyramide, pas un code lisible et agréable.<br>
	<h3>Promesses</h3>
	Une promesse peut être :<br>
	<ul><li><b>fulfilled</b> : promesse a réussi.</li>
	<li><b>rejected</b> : promesse a échoué.</li>
	<li><b>pending</b> : non fulfilled ou pas encore rejected.</li>
	<li><b>settled</b> : fulfilled ou rejected.</li></ul>
	<div class="code-section"><img src="img/js/77.png" class="image" /></div>
	Promise appelle sa fonction de résolution quand elle est remplie (succès) et rejette la fonction sinon (échec).<br><br>
	Chaque objet de promesse renvoyé a également une méthode then pour exécuter du code lorsqu'une promesse est réglée. Nous pouvons utiliser cette fonction pour gérer les valeurs onResolve et onReject renvoyées par une promesse :<br>
	<div class="code-section"><img src="img/js/78.png" class="image" /></div>
	<i>Promise.all()</i> prend un tableau de promesses et lorsque toutes sont remplies, il met leurs valeurs dans le tableau :<br>
	<div class="code-section"><img src="img/js/79.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/80.png" class="image" /></div>
	`
);

javascript.set(
	"Maps, Sets",
	`
	<h3>Maps</h3>
	Une map est simplement une paire clé-valeur très semblable à un objet en JavaScript. Nous pouvons considérer n'importe quel objet JavaScript comme une map. La particularité de cette nouvelle forme de map est que vous pouvez utiliser un objet comme clé. Cela n'était pas possible avec l'objet JavaScript standard. Voyons quelques exemples d’utilisation d’un objet comme clé dans Maps :<br>
	<div class="code-section"><img src="img/js/81.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/82.png" class="image" /></div>
	On utilise la fonction set() pour placer une valeur dans une clé donnée.<br>
	Nous pouvons facilement accéder à la taille d'une map à l'aide de la propriété <i>size</i> :
	<div class="code-section"><img src="img/js/83.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/84.png" class="image" /></div>
	Nous utilisons la fonction delete() si nous devons supprimer une valeur de la map. Nous passons l'objet, qui est la clé, à la fonction delete afin de le supprimer :<br>	
	<div class="code-section"><img src="img/js/85.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/86.png" class="image" /></div>
	Pour vider notre map, on utilise simplement la fonction <i>clear()</i> comme ceci :<br>
	<div class="code-section"><img src="img/js/87.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/88.png" class="image" /></div>
	Nous pouvons vérifier si un ensemble a un élément particulier avec la fonction has() comme ceci :<br>
	<div class="code-section"><img src="img/js/92.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/93.png" class="image" /></div>
	<h3>Sets</h3>
	Les sets sont des collections qui traitent avec des valeurs uniques ou des objets uniques. Il n'y a pas de mappage d'une clé à une valeur telle que celle que nous pourrions trouver dans une map. <br>
	<br>Regardons le code suivant :<br>
	<div class="code-section"><img src="img/js/89.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/90.png" class="image" /></div>
	Ci-dessus, nous initialisons un nouvel set et l’affectons à la variable de set. Une fois que nous avons cet ensemble, il est facile d’ajouter des éléments avec la fonction add(). Nous déconnectons la taille de l'ensemble après avoir ajouté des éléments.<br><br>
	Nous pouvons transmettant simplement chaque élément sous forme de tableau au constructeur Set :<br>
	<div class="code-section"><img src="img/js/91.png" class="image" /></div>
	Nous pouvons utiliser les méthodes clear, delete, has dans le set comme dans la map.
	`
);

javascript.set(
	"Itérateurs",
	`
	ES6 a maintenant ce qu’on appelle un protocole itérable. C'est un protocole qui définit le comportement itératif des objets JavaScript. Un objet iterable a une méthode iterator avec la clé Symbol.iterator qui retourne un objet iterator. Voyons comment :<br>
	<div class="code-section"><img src="img/js/94.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/95.png" class="image" /></div>
	Nous avons ici un simple tableau de nombres qui est stocké dans la variable numbers. En fait, les tableaux dans ES6 ont maintenant une propriété spéciale à laquelle on peut accéder avec la notation entre crochets que nous voyons ici. En fait, le nom de la propriété est Symbol, ce qui est également une autre nouvelle fonctionnalité de ES6. Les symboles ne sont qu’un moyen de garantir une valeur unique. <br>
	<br>Lorsque nous nous déconnectons du <i>typeof</i> de cette propriété, c'est une fonction.<br>
	<div class="code-section"><img src="img/js/96.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/97.png" class="image" /></div>
	Puisque Symbol.iterator est une fonction, cela signifie que nous pouvons l'appeler. Nous assignons ce résultat à la variable iter, qui est notre itérateur. Cet itérateur est associé à des fonctions spéciales. Dans cet exemple, nous appelons <i>next()</i> sur l'itérateur et notre résultat est un objet spécial qui a deux propriétés value et done. 
	Nous voyons à ce moment, la valeur est 100 et done est faux. Cela fait depuis puisque nous sommes sur le premier élément du tableau, et que l’itérateur n’a pas parcouru toutes les valeurs.<br>
	<div class="code-section"><img src="img/js/98.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/99.png" class="image" /></div>
	Chaque appel à next() produit la valeur suivante dans le tableau. La propriété done est toujours définie sur false.<br>
	<div class="code-section"><img src="img/js/100.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/101.png" class="image" /></div>
	À la N + 1e fois, nous appelons la fonction next() en fonction de la taille du tableau. Nous atteindrons alors l'état done de true dans l'objet itérateur. À ce stade, la valeur sera définie sur undefined.<br>
	<h4>Création de notre propre itérateur</h4>
	Les itérateurs sont intégrés à des tableaux, mais nous pouvons en faire un si nous le souhaitons. Nous allons créer un littéral d'objet nommé somString et lui attribuer une propriété de [Symbol.iterator] similaire à la manière dont les tableaux ont cette propriété. 
	Nous avons ensuite une variable locale de _first définie true et nous renvoyons une fonction nommée next () qui renvoie un objet itérateur comportant nos propriétés values et done. Lorsque nous exécutons le code et passons quelques appels à next(), nous pouvons voir la valeur bye et par la suite done.<br>
	<div class="code-section"><img src="img/js/102.png" class="image" /></div>
	<div class="code-section"><img src="img/js/103.png" class="image" /></div>
	`
);

javascript.set(
	"for in / for of",
	`
	for..of et for…in boucles nous donnent une syntaxe très propre et concise pour parcourir toutes sortes d'itérables et d'énumérables comme les chaînes, les tableaux et les littéraux d'objet.<br>
		<h3>for of</h3>
	Nous utilisons for… of pour parcourir les valeurs dans un itérable, comme un tableau par exemple :<br>
	<div class="code-section"><img src="img/js/104.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/105.png" class="image" /></div>
	Les chaînes de caractères sont également un type itérable, vous pouvez donc utiliser for… of sur des chaînes :<br>
	<div class="code-section"><img src="img/js/106.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/107.png" class="image" /></div>
	Nous pouvons également effectuer une itération sur des maps, des sets, des générateurs, des collections de noeuds DOM et l'objet arguments disponibles dans une fonction.<br>
	<h3>for in</h3>
	On utilise for… in pour parcourir les propriétés d'un objet (les clés d'objet) :
	<div class="code-section"><img src="img/js/108.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/109.png" class="image" /></div>
	Nous pouvons également utiliser for… in pour parcourir les valeurs d'index d'un itérable, comme un tableau ou une chaîne :<br>
	<div class="code-section"><img src="img/js/110.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/111.png" class="image" /></div>
	`
);

javascript.set(
	"Générateurs",
	`
	Avec les fonctions de générateur dans ES2015 (ES6), nous sommes maintenant en mesure de définir des fonctions pouvant renvoyer plusieurs valeurs à l'aide du mot-clé yield. Voici un exemple de fonction générateur simple :<br>
	<div class="code-section"><img src="img/js/112.png" class="image" /></div>
	L’utilisation du caractère * à côté du mot-clé function permet d’indiquer qu’il s’agit d’une fonction génératrice.<br><br>
	Créons maintenant une instance du générateur et extrayons-en les valeurs en appelant next() sur le générateur et en obtenant une valeur :<br>
	<div class="code-section"><img src="img/js/113.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/114.png" class="image" /></div>
	<i>next()</i> renvoie un objet avec la valeur et un booléen appelé done qui renvoie true si le générateur n'a plus de valeurs :<br>
	<div class="code-section"><img src="img/js/115.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/116.png" class="image" /></div>
	<h4>ID Générateur</h4>
	Nous pouvons utiliser une boocle infinie dans une fonction de générateur pour créer une fonction qui générera un nouvel ID chaque fois que <i>next()<i> est appelé. Dans ce cas, la boucle infinie n'est pas dangereuse car elle ne s'exécutera qu'une fois avec les appels à <i>next()<i> :<br>
	<div class="code-section"><img src="img/js/117.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/118.png" class="image" /></div>
	`
);

javascript.set(
	"Strings / modèles littéraux",
	`
	<h3>Nouvelles méthodes de chaîne de caractères</h3>
	Voici une liste de méthodes avec leur description.<br>
	<ul><li><b>String.prototype.startsWith(searchString, position = 0)</b> : Renvoie true si le destinataire commence par searchString; la position vous permet de spécifier le début de la chaîne à vérifier.</li>
	<li><b>String.prototype.endsWith(searchString, endPosition = searchString.length)</b> : Renvoie true si le destinataire se termine par searchString. la position vous permet de spécifier le début de la chaîne à vérifier.</li>
	<li><b>String.prototype.includes(searchString, position = 0)</b> : Renvoie true si le destinataire contient searchString; position vous permet de spécifier le début de la chaîne à rechercher.</li>
	<li><b>String.prototype.repeat(count)</b> : Renvoie le destinataire, fois concaténés.</li></ul>
	<br>Exemple (startsWith) :<br>
	<div class="code-section"><img src="img/js/119.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/120.png" class="image" /></div>
	<h3>Modèles littéraux (Template Literals)</h3>
	La spécification ECMAScript 2015 (ES6) nous apporte des littéraux de modèle pour l'interpolation de chaînes et les chaînes multilignes. Le caractère utilisé pour définir les littéraux de modèle est le backtick (\`).<br><br>
	Voici un exemple d’interpolation de chaîne avec des littéraux de modèle :<br>
	<div class="code-section"><img src="img/js/121.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/122.png" class="image" /></div>
	Et voici un exemple de chaîne multiligne :<br>
	<div class="code-section"><img src="img/js/123.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/124.png" class="image" /></div>
	Et voici un autre exemple de la puissance de l'interpolation de chaîne et des chaînes multilignes avec des littéraux de modèle :<br>
	<div class="code-section"><img src="img/js/125.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/126.png" class="image" /></div>
	`
);

javascript.set(
	"Number",
	`
	Le type de données Number est utilisé à diverses fins en JavaScript. À compter de ES6, Number comporte un certain nombre d'améliorations pour aider le programmeur à gagner du temps et à coder efficacement. Voici quelques nouvelles fonctionnalités apportées par ES6 à notre type de données préféré.<br>
	<h3>Littéraux binaires, octaux et Hexadecimal</h3>
	Pour représenter les chiffres binaires, le préfixe 0b peut être utilisé, tandis que pour la représentation des nombres octaux, le préfixe 0o peut être utilisé ou 0x pour l’hexadécimal.<br>
	<div class="code-section"><img src="img/js/127.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/128.png" class="image" /></div>
	<h3>Number.NaN</h3>
	Number.NaN ne transtype pas son entrée en nombre (valeur) avant la comparaison.<br>
	Number.NaN est renvoyé si la valeur fournie est NaN.<br>
	<div class="code-section"><img src="img/js/129.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/130.png" class="image" /></div>
	Le problème est que, typeof NaN est Number<br>
	Ainsi, typeof valeur est nombre ne nous dit pas avec précision si la valeur est un nombre. Il donne l'ensemble de tous les nombres et NaN.<br>
	<h3>Number.isFinite</h3>
	En JavaScript, une méthode appelée <i>window.isFinite()</i> teste si une valeur transmise est un nombre fini ou non. Malheureusement, il renvoie également true pour les valeurs converties en nombre sera un nombre fini. Des exemples de ce problème sont illustrés ci-dessous :<br>
	<div class="code-section"><img src="img/js/131.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/132.png" class="image" /></div>
	Pour cette raison, dans ECMAScript 6, il existe une méthode appelée isFinite() qui appartient à Number. Si vous testez les mêmes valeurs de l'extrait précédent, vous pouvez voir que les résultats sont différents :<br>
	<div class="code-section"><img src="img/js/131.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/133.png" class="image" /></div>
	<h3>Number.isInteger</h3>
	Ceci est nouveau dans ES6 et déterminera si un nombre est un entier. Aucun transtypage en nombre() n'est effectué. Nous pouvons donc être sûr que des non-nombres tels que null seront évalués comme faux.<br>
	<div class="code-section"><img src="img/js/135.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/136.png" class="image" /></div>
	<h3>Number.parseInt, Number.parseFloat</h3>
	Number.parseInt et Number.parseFloat se comportent exactement comme que parseFloat et parseInt de l'objet global.<br>
	<h3>Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER</h3>
	Celles-ci représentent les nombres les plus grands et les plus petits pouvant être représentés de manière sûre et précise dans l'implémentation JavaScript, qui est délimitée par la limite à la virgule flottante IEEE (IEEE 754) de 2⁵³-1.<br>
	<div class="code-section"><img src="img/js/137.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/138.png" class="image" /></div>
	<h3>Number.isSafeInteger</h3>
	Number.isSafeInteger renvoie simplement si le nombre fourni est compris entre les valeurs MIN et MAX ci-dessus.<br>
	<div class="code-section"><img src="img/js/139.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/140.png" class="image" /></div>
	<h3>Number.EPSILON</h3>
	Number.EPSILON fournit une marge d'erreur acceptable pour une utilisation dans les calculs. Donc, peut être utilisé pour déterminer une marge d'erreur acceptable, comme ceci :<br>
	<div class="code-section"><img src="img/js/141.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/142.png" class="image" /></div>
	`
);

javascript.set(
	"Arrays",
	`
	De nombreuses nouvelles extensions de l'objet tableau dans ES6. Ces nouvelles fonctions facilitent le remplissage des tableaux ou la recherche de données les contenant. <br>
	<h3>from</h3>
	La méthode from crée une nouvelle instance Array à partir d'un objet semblable à un tableau ou itérable :<br>
	<div class="code-section"><img src="img/js/143.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/144.png" class="image" /></div>
	Cette méthode peut vraiment être poussée à fond lorsque vous utilisez le deuxième paramètre de la méthode from. Cette méthode peut exécuter une fonction callback de mappage du tableau nouvellement créé :<br>
	<div class="code-section"><img src="img/js/145.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/146.png" class="image" /></div>
	<h3>of</h3>
	La méthode of accepte les arguments et renvoie un nouveau tableau avec les arguments individuels comme entrées de la nouvelle instance Array :<br>
	<div class="code-section"><img src="img/js/147.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/148.png" class="image" /></div>
	Cette méthode diffère de la gestion des nombres entiers par le constructeur Array comme suit :<br>
	<div class="code-section"><img src="img/js/149.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/150.png" class="image" /></div>
	<h3>find</h3>
	Cette méthode fournit une fonction de test sous forme de rappel qui, lorsqu'il est satisfait, renvoie le premier élément ayant abouti. Si aucun élément ne passe, alors undefined est renvoyé. Cette méthode ne peut pas être utilisée pour muter le tableau :<br>
	<div class="code-section"><img src="img/js/151.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/152.png" class="image" /></div>
	Cette méthode est très robuste pour traiter avec une base de code volumineuse. Il peut être utilisé pour interroger de grands tableaux d'informations et renvoyer un résultat spécifique.<br>
	<h3>findIndex</h3>
	findIndex exécutera un test similaire dans un tableau et renverra l'emplacement d'index du premier résultat de test réussi. En suivant l'exemple de recherche précédent :<br>
	<div class="code-section"><img src="img/js/153.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/154.png" class="image" /></div>
	<h3>fill</h3>
	La méthode fill remplit tous les éléments d'un tableau, d'un index de début à un index de fin, avec une valeur statique. Les valeurs d'index de début et de fin sont facultatives. La valeur par défaut de début est zéro et la valeur par défaut de fin est this.length :<br>
	<div class="code-section"><img src="img/js/155.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/156.png" class="image" /></div>
	Cette méthode est très utile lorsqu'il est nécessaire de remplacer un tableau par des valeurs par défaut ou de mettre à jour des valeurs spécifiques en fonction des entrées de l'utilisateur.<br>
	`
);

javascript.set(
	"Déstructuration",
	`
	Si nous voulons extraire des données en utilisant des tableaux, c'est assez simple en utilisant l'attribution de déstructuration. Reportons-nous à notre premier exemple pour les tableaux. Au lieu de passer par ce processus répétitif, nous le ferons :<br>
	<div class="code-section"><img src="img/js/157.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/158.png" class="image" /></div>
	Si nous voulons ignorer des éléments dans un tableau on fait :<br>
	<div class="code-section"><img src="img/js/159.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/160.png" class="image" /></div>
	Et si nous voulons assigner le reste d'un tableau :<br>
	<div class="code-section"><img src="img/js/161.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/162.png" class="image" /></div>
	Et si nous voulons utilisation des valeurs par défaut : <br>
	<div class="code-section"><img src="img/js/163.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/164.png" class="image" /></div>
	Une dernière chose. Nous pouvons utiliser l’affectation de déstructuration pour échanger les valeurs des variables : <br>
	<div class="code-section"><img src="img/js/165.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/166.png" class="image" /></div>
	`
);

javascript.set(
	"Les objets",
	`
	Nouveauté JavaScript avec ES6, si vous souhaitez définir un objet dont les clés portent le même nom que les variables transmises en tant que propriétés, vous pouvez utiliser le raccourci et simplement passer le nom de la clé.<br><br>
	Voici comment vous pouvez déclarer un objet avec la nouvelle syntaxe ES6 :<br>
	<div class="code-section"><img src="img/js/167.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/168.png" class="image" /></div>
	<h3>Raccourci pour l'écriture des méthodes</h3>
	Avec ES6, nous n'avons pas besoin d'écrire beaucoup de code pour faire fonctionner une méthode, Les : et function ne sont plus nécessaires pour définir une méthode :<br>
	<div class="code-section"><img src="img/js/169.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/js/170.png" class="image" /></div>
	<br><br><br>
	`
);

// JETTY

var jetty = new Map();

jetty.set("coursImg", "jetty");

jetty.set(
	"Présentation de Jetty",
	`
	Jetty est un serveur HTTP et un conteneur de servlets conçus pour être légers et facilement intégrables. Nous verrons comment installer et configurer une ou plusieurs instances du serveur. <br><br>
	La version actuelle de Jetty est Jetty 9, qui prend en charge l’API Servlet 3.1.<br>
	`
);

jetty.set(
	"Installation de Jetty",
	`
	La distribution standalone Jetty peut être téléchargée à partir du site officiel de la fondation Eclipse :<br>
	<a class="link" href="https://www.eclipse.org/jetty/download.html">https://www.eclipse.org/jetty/download.html</a><br><br>
	Lorsque vous téléchargez et décompressez le fichier zip, il est extrait dans un répertoire appelé jetty-distribution-VERSION.<br>
	`
);

jetty.set(
	"Structure des répertoires de Jetty",
	`
	Voilà un résumé le contenu de la distribution :<br>
	<ul><li><b>license-eplv10-aslv20.html</b> : fichier de licence pour Jetty.</li>
	<li><b>README.txt</b> : informations utiles pour commencer.</li>
	<li><b>VERSION.txt</b> : les informations de la release.</li>
	<li><b>bin/</b> : informations utiles pour commencer.</li>
	<li><b>demo-base/</b> : un répertoire de base Jetty pour exécuter un serveur Jetty avec des applications Web de démonstration.</li>
	<li><b>etc/</b> : répertoire des fichiers de configuration XML Jetty.</li>
	<li><b>lib/</b> : tous les fichiers JAR nécessaires à l'exécution de Jetty.</li>
	<li><b>logs/</b> : répertoire des journaux de demandes.</li>
	<li><b>modules/</b> : répertoire des définitions de module.</li>
	<li><b>notice.html</b> : informations de licence et exceptions.</li>
	<li><b>resources/</b> : répertoire contenant des ressources supplémentaires pour classpath, activé via la configuration.</li>
	<li><b>start.ini</b> : fichier contenant les arguments ajoutés à la ligne de commande effective (modules, propriétés et fichiers de configuration XML).</li>
	<li><b>start.jar</b> : le fichier jar qui invoque Jetty.</li>
	<li><b>webapps/</b> : répertoire contenant les applications Web qui s'exécutent sous la configuration par défaut de Jetty.</li></ul>
	`
);

jetty.set(
	"Démarrage de Jetty",
	`
	Pour démarrer le serveur Jetty il suffit de localiser le répertoire racine à chaque utilisation dans l’invite de commande et exécuter la commande <b>java -jar start.jar</b> : <br>
	<div class="code-section"><img src="img/jetty/0.png" class="image" /></div>
	`
);

jetty.set(
	"Déploiement sur Jetty",
	`
	L’utilisation de déploiement automatique d’applications Web est simple et rapide, mais vous devrez parfois ajuster certaines propriétés de déploiement (par exemple, vous souhaitez déployer avec un chemin de contexte qui n’est pas basé sur le nom du fichier, 
	ou vous voulez définir un paramètre spécial. Connexion de base de données uniquement pour cette application Web). Vous pouvez utiliser un fichier XML de descripteur déployable Jetty pour effectuer un tel réglage.<br>
	<h3>Fichier XML de descripteur déployable Jetty</h3>
	Jetty prend en charge le déploiement d'applications Web via des fichiers XML placer dans le répertoire <b>webapps</b>.<br>
	<h3>Utilisation de fichiers descripteurs de base</h3>
	Dans une installation par défaut de Jetty, Jetty analyse son répertoire <b>$JETTY_HOME/webapps</b> à la recherche de fichiers de descripteur de déploiement de contexte. Pour déployer une application Web à l'aide d'un tel fichier, placez-le simplement dans ce répertoire.<br><br>
	Le fichier descripteur de déploiement lui-même est un fichier XML qui configure une classe WebAppContext. Pour une installation de base, seules deux propriétés doivent être configurées :<br>
	<ul><li><b>war</b> : le chemin du système de fichiers vers le fichier (ou le répertoire) de l'application Web.</li>
	<li><b>contextPath</b> : le chemin de contexte à utiliser pour l'application Web.</li></ul>
	Par exemple, voici un fichier descripteur qui déploie le fichier <b>/helloMQL.war</b> sur le chemin <b>/mql</b> du contexte :<br>
	<div class="code-section"><img src="img/jetty/1.png" class="image" /></div>
	L’éléments Property peut être utilisé dans le fichier de descripteur. Par exemple, dans cette exemple la propriété est définie sur jetty.webapps pour localiser le répertoire webapps.<br><br>
	Résultat : <br><br>
	<img src="img/jetty/2.png" class="image-center" /><br>
	<h3>Utilisation de Jetty pour déployer du contenu Web statique</h3>
	Pour déployer un contenu web statique (des fichiers *.html, *.js, *.png …), on crée un fichier xml nommé par exemple myapp.xml avec le contenu suivant :<br>
	<div class="code-section"><img src="img/jetty/3.png" class="image" /></div>
	<ul><li><b>contextPath</b> : c'est le contexte de l'application Web. Voici un exemple : <b>http://localhost:8080/myapp</b>, la partie nommée "<b/>myapp</b>" est spécifiée ici.</li>
	<li><b>handler</b> : ceci spécifie le gestionnaire de requêtes. Pour la livraison de contenu Web statique, le handler utilisé ici s’appelle : <b>org.eclipse.jetty.server.handler.ResourceHandler</b>. </li>
	<li>Le handler doit avoir un répertoire de base pour trouver tout le contenu Web statique, c’est ce que "<b>resourceBase</b>" est utilisé ici. Et il spécifie <b>C:\\mql\\myapp</b> comme dossier de base.</li>
	<li>La suivante "<b>directoryListed</b>" spécifie s'il faut ou non lister le contenu du répertoire lorsque le chemin de l'URL interprété par ce handler est un répertoire.</li></ul>
	Résultat : <br><br>
	<img src="img/jetty/4.png" class="image-center" /><br>
	`
);

jetty.set(
	"Eclipse et Jetty",
	`
	Dans cette partie, on va voir comment déployer une application Web sur Jetty directement à partir d'Eclipse.<br><br>
	Le moyen le plus simple de connecter Jetty à Eclipse consiste à utiliser le plug-in Eclipse Jetty.<br>
	Le moyen le plus rapide d'installer le plug-in est via le Marketplace. Dans eclipse, le Marketplace nous permet d’installer des plugins en quelques clics :<br><br>
	<img src="img/jetty/5.png" style="width: 65%;" class="image-center" /><br>
	Après l’installation nous pouvons déployer les applications web avec ce server par une clique droite sur le projet puis Run As > Run with Jetty :<br><br>
	<img src="img/jetty/6.png" style="width: 65%;" class="image-center" /><br>
	`
);

// Tomcat

var tomcat = new Map();

tomcat.set("coursImg", "tomcat");

tomcat.set(
	"Description de Tomcat",
	`
	ApacheTomcat, souvent appelé Tomcat, est un conteneur de servlets Java open-source développé par ApacheSoftwareFoundation. Tomcat implémente plusieurs spécifications Java EE, notamment Java Servlet, JavaServer Pages, Java EL et WebSocket, et fournit un environnement serveur HTTP web « pure Java » dans lequel le codec Java peut être exécuté. Il a été créé dans le cadre du sous-projet Apache-Jakarta. Cependant, en raison de sa popularité, il est maintenant hébergé en tant que projet Apache distinct, où il est pris en charge et amélioré par un groupe de volontaires de la communauté Java open source.<br><br>
	Apache Tomcat est très stable et possède toutes les fonctionnalités d'un conteneur d'applications Web commercial, tout en étant soumis à une licence Open Source Apache. Tomcat fournit également des fonctionnalités supplémentaires qui en font un excellent choix pour développer une solution d'application Web complète. Parmi les fonctionnalités supplémentaires fournies par Tomcat, outre le fait qu'elles soient open source et gratuites, comprennent l'application Tomcat Manager, des implémentations de domaines spécialisés et les valves Tomcat.<br><br>
	Les versions actuellement prises en charge sur Apache Tomcat sont 7.0X, 8.5X et 9.0X. Les versions antérieures à 7.0 sont toujours disponibles pour le téléchargement, mais elles sont archivées et ne sont pas prises en charge. Les utilisateurs sont donc encouragés à utiliser la dernière version possible de Tomcat, le cas échéant.<br>
	`
);

tomcat.set(
	"Installation de Tomcat",
	`
	La distribution Tomcat peut être téléchargée à partir du site officiel d’apache Tomcat :<br>
	<a class="link" href="https://tomcat.apache.org/index.html">https://tomcat.apache.org/index.html</a><br><br>
	Lorsque vous téléchargez et décompressez le fichier zip, il est extrait dans un répertoire appelé apache-tomcat-VERSION.
	`
);

tomcat.set(
	"Structure des répertoires de Tomcat",
	`
		Voilà un résumé le contenu de la distribution :<br>
	<ul><li><b>bin/</b> : contient (comme souvent) les fichiers exécutables de Tomcat. En l'occurrence, principalement les scripts Linux ou fichiers batchs Windows permettant le démarrage et l'arrêt du serveur. Mais également l'archive <b>bootstrap.jar</b>, contenant les classes permettant le démarrage et l'initialisation du serveur.</li>
	<li><b>conf/</b> : contient les fichiers de configuration de Tomcat (server.xml tomcat-users.xml).</li>
	<li><b>lib/</b> : contient les librairies Java dont Tomcat a besoin pour fonctionner.</li>
	<li><b>logs/</b> : contient tous les logs, à moins que, pour certains loggeurs, on ait spécifié d'autres chemins d'enregistrement.</li>
	<li><b>temp/</b> : est un simple répertoire temporaire.</li>
	<li><b>webapps/</b> : : contiendra les applications web. C'est en tout cas le répertoire par défaut pour ce faire. Par ce que, comme nous allons expliquer dans la configuration, il est tout à fait possible de mettre une application ailleurs, en spécifiant un chemin absolu. Par défaut, il contient cinq applications : 
	<ul><li><i>docs</i> : contient les pages de documentation de Tomcat, également accessibles en ligne.</li>
	<li><i>examples</i> : contient des exemples simples de servlets et de pages JSP. </li>
	<li><i>host-manager</i> et <i>manager</i> : contiennent l'application de gestion des applications web de Tomcat. Cette application permet de charger des applications web à chaud, et de les visualiser dans une interface web.</li>
	<li><i>ROOT</i> : racine des applications web chargées par défaut.</li></ul></li>
	<li><b>work/</b> : est le répertoire workDir par défaut, qui contiendra notamment les JSP compilées.</li></ul>
	`
);

tomcat.set(
	"Configuration de Tomcat",
	`
	La configuration de Tomcat passe par l'édition du fichier <b>server.xml</b> situé dans le répertoire <b>TOMCAT_HOME/conf</b>. Celui-ci contient les éléments de configuration du serveur que nous allons voir une par une.<br><br>
	L'arborescence du fichier server.xml représente en fait l'arborescence des composants Java de Tomcat. Ce serveur est en effet, nous l'avons déjà dit, développé en Java. En tant que tel, il est composé d'objets qui interagissent les uns avec les autres. L'arborescence de ces objets (quels objets ont quelles relations avec quels autres ?) est relativement reflétée dans le fichier de configuration. L'autre avantage d'un serveur écrit en Java est que l'on pourra choisir, pour certains des composants, l'implémentation à utiliser. Tomcat définit en effet des interfaces Java pour les différents composants. Interfaces qui peuvent être implémentées pour modifier le serveur.<br><br>
	Ces éléments XML se divisent en deux groupes. Le premier est constiué des éléments <b>Server</b>, <b>Connector</b>, <b>Engine</b>, <b>Host</b> et <b>Context</b>. Ces éléments s'imbriquent les uns dans les autres suivant des règles très précises, et sont obligatoires. Le second groupe est constitué d'éléments facultatifs et flottants, au sens où ils peuvent être placés dans les différents conteneurs : <b>GlobalNamingResources</b>, <b>Resources</b>, Realm et <b>Valve</b>.
	<h3>L’élément Server</h3>
	La balise Server est la balise principale du fichier de configuration de Tomcat. C'est la seule balise racine du fichier. Aucune autre balise ne peut être à son niveau. L'élément Server peut contenir un ou plusieurs conteneurs Service. Elle présente toutes les caractéristiques du conteneur de servlets Catalina (coeur de Tomcat). C'est-à-dire qu'elle contient toute la configuration de Tomcat, en ce qui concerne le conteneur de servlets. Cela signifie qu'elle ne contiendra pas, par exemple, de données de configuration sur les utilisateurs du serveur.<br><br>
	Cet élément supporte deux attributs : <br>
	<ul><li><b>port</b> : le port d'arrêt ( shutdown ) de Tomcat. Ce port ne correspond pas au port HTTP écouté par Tomcat, mais à un port sur lequel Tomcat reçoit la commande de s'arrêter. Lorsque l'on tape la commande shutdown sur l'invite de commande, cet ordre est émis, et Tomcat s'éteint alors.</li>
	<li><b>shutdown</b> : La commande (chaîne de caractères) de shutdown que le serveur doit recevoir sur le port spécifié.</li></ul>
	<div class="code-section"><img src="img/tomcat/1.png" class="image" /></div>
	<h3>L’élément Service</h3>
	La balise Service représente un mode d'exécution de Tomcat. Il contient une collection d'un ou plusieurs éléments Connector (par lesquels arrivent les requêtes) qui partagent un seul élément Engine (une unité de traitement de ces requêtes). N-nombre d'éléments Service peuvent être imbriqués dans un seul élément <Server>.<br><br>
	Cet élément possède un attribut : <br>
	<ul><li><b>name</b> : Le nom logique du Service. Il est utilisé pour identifier le service, notamment pour le démarrer. L'indication "Starting Tomcat StandAlone" que l'on voit apparaître au démarrage de Tomcat par exemple signifie que le fichier server.xml définit un Service nommé "StandAlone".</li></ul>
	<div class="code-section"><img src="img/tomcat/2.png" class="image" /></div>
	<h3>L’élément Connector</h3>
	La balise Connector permet de configurer un connecteur pour Tomcat. Un connecteur est le composant "frontière" du serveur d'applications, puisqu'il reçoit les requêtes provenant du client, qui seront ensuite traitées (voir notre première application web). C'est également par le connecteur que la réponse passera, une fois le traitement terminé.<br><br>
	Cet élément possède un certain nombre d'attributs :<br>
	<ul><li><b>port</b> : Nomme le numéro de port TCP/IP sur lequel le connecteur écoute les demandes. La valeur par défaut est 8080. Il s'agit du seul attribut requis pour l'élément Connector.</li>
	<li><b>enableLookups</b> : Détermine si les recherches DNS sont activées. La valeur par défaut pour cet attribut est true. Lorsque les recherches DNS sont activées, une application appelant request.getRemoteHost() reçoit le nom de domaine du client appelant. L'activation des recherches DNS peut nuire aux performances. Par conséquent, cette valeur doit le plus souvent être définie sur false.</li>
	<li><b>redirectPort</b> : Nomme le numéro de port TCP / IP vers lequel une demande doit être redirigée, si elle arrive sur un port non SSL et est soumise à une contrainte de sécurité avec une garantie de transport nécessitant SSL.</li>
	<li><b>maxPostSize</b> : la taille maximale des requêtes POST supportée par ce serveur. La valeur par défaut est fixée à 2Mo. Une valeur de -1 signifie qu'il n'y a pas de limite.</li></ul><br>
	Il existe plusieurs types de connecteurs, selon le "client" dont la requête provient. Pour l'instant, seul le connecteur capable de recevoir des requêtes HTTP directement du client web est évoqué dans ce site. Il est utilisé pour un fonctionnement de Tomcat en mode StandAlone (autonome), où Tomcat sert à la fois de serveur web et de serveur d'applications. Mais il existe d'autres connecteurs, notamment pour dialoguer avec un serveur web classique, qui n'enverra à Tomcat que les requêtes qu'il doit traiter.<br>
	<h4>Connecteur HTTP</h4>
	Le connecteur HTTP gère toutes les demandes HTTP directes reçues par Tomcat. Outre les attributs de connecteur standard, nous pouvons configurer des attributs supplémentaires lors de la configuration du connecteur HTTP. La liste suivante décrit certains des attributs possibles pour la configuration du connecteur HTTP :<br>
	<ul><li><b>protocol</b> : Définit le protocole à utiliser pour transporter les demandes entrantes. La valeur par défaut est HTTP / 1.1, qui utilise le mécanisme interne de Tomcat pour sélectionner le connecteur Java bloquant ou le connecteur APR.</li>
	<li><b>address</b> : Cet attribut est utile lorsque le serveur possède plusieurs adresses IP. On peut alors définir sur quelle adresse ce connecteur attend des requêtes. Par défaut, toutes les adresses IP du serveur sont écoutées par le connecteur.</li>
	<li><b>compression</b> : Spécifie si Tomcat doit utiliser la compression lors de l'envoi de contenu textuel, en économisant de la bande passante. Les valeurs autorisées sont désactivées, ce qui désactive la compression. on, qui active la compression uniquement pour le contenu textuel; et force, qui force la compression pour tout le contenu. La valeur par défaut est désactivée.</li>
	<li><b>compressableMimeType</b> : Liste de types mime séparables par des virgules pouvant être compressés si l'attribut de compression est défini. La valeur par défaut est text/html, text/xml, text/plain.</li>
	<li><b>SSLEnabled</b> : Si défini sur true, le trafic SSL sera activé sur le connecteur. La valeur par défaut est false.</li>
	<li><b>connectionTimeout</b> : La durée (en millisecondes) pendant laquelle ce connecteur peut attendre qu'une URL lui soit demandée, après avoir accepté une connexion entrante. Par défaut, il peut attendre jusqu'à 60000 ms (60 secondes).</li>
	<li><b>maxThreads</b> : Spécifie le nombre maximal de threads créés pour traiter les demandes sur ce connecteur. La valeur par défaut est 200.</li>
	<li><b>acceptCount</b> : Lorsque tous les threads traitant les requêtes sont occupés, et que le serveur ne peut en créer d'autres, les nouvelles requêtes entrantes peuvent être mise en attente (explications en haut de la page). Cet attribut définit le nombre de requêtes que l'on peut mettre en attente. La valeur par défaut est 10.</li></ul>
	<div class="code-section"><img src="img/tomcat/3.png" class="image" /></div>
	<h3>Connecteur AJP</h3>
	Le connecteur AJP gère les demandes qui ont été transférées par un serveur Web auquel Tomcat s’intègre, comme le serveur Web Apache situé devant Tomcat. Il existe deux connecteurs de ce type : <br>
	<ul><li><b>JK 1.2.*</b> : permet de communiquer avec tous les serveurs web qui supportent le protocole JK.</li>
	<li><b>mod_proxy</b>: permet de communiquer avec Apache 2.2.*.</li></ul>
	<div class="code-section"><img src="img/tomcat/4.png" class="image" /></div>
	<h3>L’élément Engine</h3>
	Le conteneur Engine permet de configurer une unité de traitement de Tomcat. Une unité de traitement est associée à un Service. Elle est chargée de traiter toutes les requêtes qui arrivent sur les connecteurs de ce service. A l'issue du traitement des requêtes, c'est également l'engine qui repasse la réponse au connecteur, qui lui-même la renvoie au client. Chaque conteneur de service défini peut avoir un et un seul conteneur de moteur, et ce moteur unique reçoit toutes les demandes reçues par tous les connecteurs définis. L'élément Engine doit être imbriqué après les éléments Connector, dans son propre élément Service. L'élément Engine est défini par l'interface org.apache.catalina.Engine.<br><br>
	La liste suivante décrit les attributs obligatoires d'élément <Engine> :<br>
	<ul><li><b>defaultHost</b> : Définit l'Host par défaut auquel seront adressées toutes les requêtes entrantes. Il s'agit bien de l'hôte par défaut. Il ne concerne donc que les requêtes qui ne seront pas explicitement dirigées ailleurs. Cette balise doit être paramétrée avec le nom d'un Host figurant dans la liste des Host du fichier de configuration.</li>
	<li><b>name</b> : Définit le nom logique de ce moteur. Le nom défini est utilisé dans les messages de journal et doit être unique dans le composant serveur auquel ce moteur appartient.</li></ul>
	<div class="code-section"><img src="img/tomcat/5.png" class="image" /></div>
	<h3>L’élément Host</h3>
	Le conteneur Host relie la machine serveur sur laquelle Tomcat est exécuté au nom du réseau. Chaque Host peut être le parent d'une ou de plusieurs applications Web, représenté par un conteneur de contexte. Un Host permet ainsi de définir que pour le domaine "www.exemple.com", les applications web concernées (susceptibles d'être invoquées) sont situées à tel endroit sur le serveur. Bien entendu, le nom fourni doit être enregistré auprès d'une autorité DNS.<br><br>
	Toutes les implémentations d’Host doivent supporter les attributs suivants : <br>
	<ul><li><b>name</b> : Définit le nom d'hôte de cet hôte virtuel. Cet attribut est requis et doit être unique parmi les hôtes virtuels exécutés dans ce conteneur de servlet.</li>
	<li><b>appBase</b> : Le chemin par défaut vers les applications web hébergées par cet Host. Le chemin spécifié peut être absolu, ou relatif au répertoire de base de votre installation de Tomcat (TOMCAT_HOME). C'est dans ce répertoire que les applications web seront recherchées, sauf si un chemin absolu est précisé pour elles. Cet attribut est requis.</li>
	<li><b>autoDeploy</b> : Spécifie si Tomcat doit vérifier si des applications Web nouvelles ou mises à jour doivent être déployées sur cet hôte. Le défaut est true.</li></ul>
	L'implémentation par défaut supporte en plus les attributs suivants. <br>
	<ul><li><b>deployOnStartup</b> : Indique si les applications Web trouvées dans les répertoires appBase et xmlBase doivent être déployées au démarrage du serveur. La valeur par défaut est true.</li>
	<li><b>workDir</b>: répertoire de travail propre à cet hôte. Par défaut, Catalina utilise un sousrépertoire de $CATALINA_BASE/work pour chaque hôte, mais il est possible d'en choisir un autre. On peut accéder à ce répertoire d'une servlet, via l'attribut d'application javax.servlet.context.tempdir.</li>
	<li><b>unpackWARs</b> : Si ce paramètre est à true, les archives WAR déposées dans le répertoire appBase de cet Host seront automatiquement décompactées (dans un répertoire portant le même nom que le WAR). Sinon, les applications seront exécutées directement depuis le WAR.</li>
	<li><b>deployXML</b> : indique à Catalina s'il peut ou non prendre en compte les fichiers /METAINF/context.xml des applications web. La valeur par défaut de cet attribut est true.</li></ul>
	<h3>L’élément Context</h3>
	Dans le fichier de configuration Tomcat, l'élément Context représente une application web hébergé sur le serveur, sur un Host particulier. Un contexte a un chemin, qui représente son chemin d'accès à partir du chemin de l'Host auquel il est associé. Donc, si un Context a comme chemin "/appli" dans l'Host "localhost", on pourra y accéder par l'adresse suivante : "http://localhost:port/appli". Le chemin de chaque Context doit bien sûr être unique.<br><br>
	On peut définir autant de Context que possible pour un Host, ce qui revient à dire qu'un hôte virtuel peut héberger autant d'applications web que souhaité. Dans le fichier de configuration, un Context avec un path vide (chaîne de caractères "") correspond à l'application web par défaut pour le Host, si aucune application ne correspond au chemin demandé.<br>
	<br>Nous pouvons configurer plus de 50 attributs différents pour l'élément <Context>. La liste suivante répertorie les principaux attributs de configuration et les attributs les plus couramment utilisés pour la configuration Tomcat de production :<br>
	<ul><li><b>cookies</b> : Détermine si vous souhaitez que les cookies soient utilisés pour un identifiant de session. La valeur par défaut est true.</li>
	<li><b>crossContext</b> : Par défaut à false. Le mettre à true permet aux développeurs d'applications de récupérer un request dispatcher (objet permettant d'envoyer une requête) valable pour les autres contextes de l'Host de référence. En d'autres termes, l'on pourrait envoyer une requête à une autre application web du même Host, en partageant certains paramètres. Cela serait possible grâce à la méthode ServletContext.getContext(). Par sécurité, on préférera laisse ce paramètre à false.</li>
	<li><b>docBase</b> : Définit le répertoire de l'application Web associée à ce <Contexte>. C'est le chemin d'accès d'un répertoire contenant les ressources de l'application Web. Cet attribut est requis.</li>
	<li><b>path</b> : Chemin (partie de l'URL) permettant d'atteindre cette application web sur l'Host associé. Si l'Host a pour nom "localhost", et que le path de ce Context est "/appli", on pourra l'atteindre par l'URL "http://localhost:port/appli".</li>
	<li><b>reloadable</b> : Si la valeur est true, Tomcat vérifie les modifications de classe dans les répertoires /WEB-INF/classes/ et /WEB-INF/lib. Si ces classes ont changé, l'application possédant ces classes est automatiquement rechargée. Cette fonctionnalité doit être utilisée uniquement pendant le développement. La définition de cet attribut sur true entraîne une dégradation importante des performances et doit donc être définie sur false dans un environnement de production.</li>
	<li><b>wrapperClass</b> : Nom de la classe (implémentant l'interface org.apache.catalina.wrapper) de wrapper à utiliser.</li>
	<li><b>sessionCookieName</b> : Remplace tout nom de cookie de session spécifié par des applications Web individuelles. Si non spécifié et qu'aucune valeur spécifique à l'application Web n'est définie, le nom JSESSIONID sera utilisé. Nous pouvons configurer d'autres attributs de cookie de session à l'aide des attributs <b>sessionCookiePath</b> et <b>sessionCookieDomain</b>.</li>
	<li><b>override</b> : Par défaut à false. Permet d'écraser les paramètres définis dans le DefaultContext spécifié pour l'Host associé. Par défaut, les paramètres du <b>DefaultContext</b> sont utilisés.</li>
	<li><b>swallowOutput</b> : Si la valeur est true, toutes les sorties System.out et System.err seront redirigées vers le moteur de journalisation de l'application Web, si elles sont écrites dans le fichier catalina.out. La valeur par défaut est false.</li></ul>
	L'élément Context qui définit l'application /examples est inclus dans l'extrait de code suivant :<br>
	<div class="code-section"><img src="img/tomcat/7.png" class="image" /></div>
	<h3>L’élément GlobalNamingResources</h3>
	Cet élément permet de configurer des ressources et des variables d'environnement, qui seront ensuite disponibles pour toutes les applications web gérées par cette instance de Tomcat. La distribution par défaut nous donne l'exemple de la base d'utilisateurs reconnue par cette instance de Tomcat. <br><br>
	<div class="code-section"><img src="img/tomcat/6.png" class="image" /></div>
	<h3>L’élément Realm</h3>
	Les Realm font partie d'un mécanisme de sécurité, basé sur l'authentification. Ils permettent de protéger l'accès des ressources du serveur en leur appliquant des contraintes de sécurité. Le principe d'un Realm est de gérer une liste d'utilisateurs, avec des rôles (que l'on peut rapprocher de la notion de groupes sur les OS courants). Une contrainte de sécurité consistera donc à définir que tel utilisateur ou tel rôle a accès à telle ressource protégée.<br><br>
	Un élément Realm est un peu particulier dans la configuration de Tomcat. Il s'agit d'un élément pouvant être inséré comme fils de différents conteneurs : Engine, Host ou Context. Dans la logique arborescente interne du serveur, si l'on définit un Realm pour un Context, il écrasera celui, éventuel, du Host parent.<br><br>
	Un Realm implémente l'interface Java org.apache.catalina.Realm. Les Realm, dont le but est de gérer les utilisateurs, diffèrent les uns des autres par leur mode de gestion (fichier XML, base de données...).<br>
	<div class="code-section"><img src="img/tomcat/8.png" class="image" /></div>
	<h3>L’élément Valve</h3>
	Un élément Valve est un peu particulier dans la configuration de Tomcat. Il s'agit d'un élément pouvant être inséré comme fils de différents conteneurs : Engine, Host ou Context. La Valve en question s'insérera alors dans le traitement des requêtes. Une Valve en tant que telle ne remplit pas de fonctionnalité précise. Il existe plusieurs types de Valve, ayant chacune un rôle et des comportements distincts.<br><br>
	Un élément Valve comporte toujours un attribut className, qui indique quelle implémentation de Valve est utilisée pour cet élément. Suivent ensuite une liste d'attributs propres à chaque implémentation. <br><br>
	Voyons les principales implémentations de Valve :<br>
	<h4>Valve de journalisation (Access Log Valve)</h4>
	Il s'agit d'une Valve dont le but est de produire des fichiers de logs dans un format similaire à celui des serveurs web classiques. Le but est de permettre l'analyse de ces logs par des outils d'analyse standard (nombre de pages visistées, tracking de session...). On associe une telle Valve à un conteneur Tomcat (Engine, Host ou Context) et elle enregistrera toutes les requêtes traitées par celui-ci.<br>
	<div class="code-section"><img src="img/tomcat/9.png" class="image" /></div>
	<h4>Valve de filtrage par adresse IP</h4>
	Le meilleur moyen de sécuriser les applications Web du gestionnaire et de l'administration Tomcat consiste à restreindre l'ensemble des adresses IP pouvant y accéder. Cela peut être accompli en incluant un RemoteAddrValve dans l'élément Context de ces applications. Par exemple, pour n'autoriser que les connexions à partir de l'hôte local (127.0.0.1), c'est-à-dire la machine sur laquelle le serveur Tomcat est en cours d'exécution, procédez comme suit :<br>
	<div class="code-section"><img src="img/tomcat/10.png" class="image" /></div>
	<h4>Le Valve Single Sign-On</h4>
	Il s'agit d'une Valve dont le but est de permettre l'authentification unique d'un utilisateur pour toutes les applications web sur un Host. Imaginons que votre site web contienne plusieurs applications web chargées de différentes missions (une pour la gestion du contenu du site, l'autre pour un forum par exemple). Il s'avèrera vite lassant pour vos visiteurs de devoir s'authentifier à moults reprises. Dès lors, la fonctionnalité Single Sign-On est très pratique. Elle permet de ne demander qu'une seule fois à un utilisateur de s'authentifier.<br>
	<h4>Autres valves</h4>
	Tomcat propose d'autres valves que celles présentées ici :<br>
	<ul><li>Une valve de débugage : Request Dumper Valve est un outil utile pour le débogage des interactions avec une application cliente (ou un navigateur) qui envoie des demandes HTTP à notre serveur Tomcat. Une fois configuré, il enregistre les informations relatives à chaque demande traitée par son moteur, son hôte ou son contexte associé dans le consignateur correspondant à ce conteneur.</li>
	<li>BasicAuthenticator et DigestAuthenticator : permettent de forcer l'authentification HTTP basic ou digest pour l'accès à une application web. </li>
	<li>FormAuthenticator et SSLAuthenticator : activent l'authentification par formulaire, en mode normal ou SSL.</li></ul>
	`
);

tomcat.set(
	"Démarrage de Tomcat",
	`
	<h3>Démarrage par défaut</h3>
	Tomcat est écrit en Java, et fait tourner des applications écrites en Java. Dans cette circonstance, il est indispensable d'avoir un environnement d'exécution Java installé et en état de fonctionnement sur la machine ! La variable d'environnement JAVA_HOME doit pointer sur le répertoire d'installation de la JDK.<br><br>
	A l'issue de l'installation, nous pouvons tout de suite tester Tomcat, pour vérifier que tout s'est bien passé. Nous appelons TOMCAT_HOME le répertoire d'installation de Tomcat. Tout d'abord, il faut démarrer le serveur. En exécutant le script TOMCAT_HOME/bin/startup.bat.<br>
	<div class="code-section"><img src="img/tomcat/11.png" class="image" /></div>
	Une fenêtre s'ouvre alors, qui détaille le déroulement des opérations de lancement.<br><br>
	<img src="img/tomcat/12.png" style="width: 65%;" class="image-center" /><br>
	Pour tester le serveur, on accède dans un navigateur web à l'adresse : http://localhost:8080/. Par défaut, Tomcat est en effet configuré en StandAlone, pour faire office de serveur web et de serveur d'applications. Nous devrions obtenir la page suivante, page d'accueil du serveur par défaut :<br><br>
	<img src="img/tomcat/13.png" style="width: 65%;" class="image-center" /><br>
	Cette page d'accueil permet d'accéder à l'intégralité de la documentation de Tomcat, en local (cartouche Documentation), aux ressources en ligne sur le site de l'ASF, et à des exemples de servlet ou de JSP. <br><br>
	Le cartouche Administration n'est pas encore accessible : il faut pour cela modifier certains droits d'accès, ce que nous allons faire.<br><br>
	Le serveur s'éteint à l'aide du raccourci dans le menu Démarrer, ou en exécutant le script TOMCAT_HOME/bin/shutdown.bat.<br>
	<div class="code-section"><img src="img/tomcat/14.png" class="image" /></div>
	`
);

tomcat.set(
	"Déploiement des application web sur Tomcat",
	`
	Pour être exécutée, une application Web doit être déployée sur un conteneur de servlet. Ceci est vrai même pendant le développement. Nous décrirons l’utilisation de Tomcat pour fournir un environnement d’exécution. Une application web peut être déployée dans Tomcat par l’une des approches suivantes.<br><br>
	<h4>Copier la hiérarchie des répertoires décompressés.</h4>
	On peut copier la hiérarchie des répertoires décompressés dans un sous-répertoire du répertoire $CATALINA_BASE/webapps/. Tomcat assignera un chemin de contexte à l’application en fonction du nom du sous-répertoire qui a été choisi. On utilisera cette technique dans le fichier build.xml que l’on construit, car c’est l’approche la plus rapide et la plus simple lors du développement. Il faut s’assurer du redémarrage de Tomcat après avoir installé ou mis à jour l’application.<br><br>
	<h4>Copier le fichier d’archive de l’application Web.</h4>
	On peut copier le fichier d’archive de l’application Web dans le répertoire $CATALINA_BASE/webapps/. Lorsque Tomcat est démarré, il développera automatiquement le fichier d’archive de l’application Web dans sa forme décompressée et exécutera l’application de cette façon. Cette approche est généralement utilisée pour installer une application supplémentaire, fournie par un fournisseur tiers ou par votre équipe de développement interne, dans une installation Tomcat existante. Si on utilise cette approche et que l’on souhaite mettre à jour l’application ultérieurement, on doit remplacer le fichier d’archive de l’application Web ET supprimer le répertoire étendu que Tomcat a créé, puis redémarrer Tomcat, afin de refléter les modifications.<br><br>
	<h4>Via la console d’administration.</h4>
	La console d’administration permet de déployer et de désinstaller des applications sur un serveur Tomcat en cours d’exécution sans redémarrer celui-ci. On va voir plus d’informations sur l’utilisation de l’application Web Manager dans le chapitre suivant.<br><br>
	<h4>Avec des tâches de Ant “Manager” dans le script de construction</h4>
	Tomcat inclut un ensemble de définitions de tâches personnalisées pour l’outil de construction Ant qui permettent d’automatiser l’exécution des commandes de l’application web “Manager”. Ces tâches sont utilisées dans le déploiement Tomcat.<br><br>
	<h4>Avec Tomcat Deployer</h4>
	Tomcat inclut un outil packagé regroupant les tâches Ant, et peut être utilisé pour pré-compiler automatiquement les JSPs qui font partie de l’application web avant le déploiement sur le serveur.<br>
	`
);

tomcat.set(
	"L’application Tomcat Manager",
	`
	Dans de nombreux environnements de production, il est très utile d’avoir la capacité de déployer une nouvelle application Web, ou de retirer une application existante sans avoir à arrêter et redémarrer le conteneur entier. En outre, on peut demander à une application existante de se recharger elle-même, même si on ne l’a pas déclarée rechargeable dans le fichier de configuration de serveur Tomcat.<br><br>
	Pour prendre en charge ces fonctionnalités, Tomcat inclut une application Web (installée par défaut sur le chemin de contexte <i>/manager</i>) qui prend en charge les fonctions suivantes :
	<ul><li>Déployer une nouvelle application Web à partir du contenu téléchargé d’un fichier WAR.</li>
	<li>Déployer une nouvelle application Web, sur un chemin de contexte spécifié, à partir du système de fichiers du serveur.</li>
	<li>Énumérer les applications Web actuellement déployées, ainsi que les sessions qui sont actuellement actives pour ces applications Web.</li>
	<li>Recharger une application Web existante, pour refléter les changements dans le contenu de /WEB-INF/classes ou /WEB-INF/lib.</li>
	<li>Énumérer les valeurs des propriétés OS et JVM.</li>
	<li>Énumérer les ressources JNDI globales disponibles, à utiliser dans les outils de déploiement qui préparent des éléments <ResourceLink> imbriqués dans un <Contexte> description de déploiement.</li>
	<li>Démarrer une application arrêtée (la rendant ainsi à nouveau disponible).</li>
	<li>Arrêter une application existante (pour qu’elle devienne indisponible).</li>
	<li>Retirer une application Web déployée et supprimer son répertoire de base de documents (à moins qu’elle n’ait été déployée à partir du système de fichiers).</li></ul>
	Il y a trois façons d’utiliser l’application Web Manager :
	<h3>Interface utilisateur</h3>
	<h4>Accès à l’interface utilisateur</h4>
	En tant qu’application avec une interface utilisateur que vous utilisez dans un navigateur. La console d’administration Web qui peut être démarrée via le lien suivant : <b>http://localhost:8080/manager/html</b><br><br>
	<img src="img/tomcat/16.png" style="width: 65%;" class="image-center" /><br>
	Dans la configuration par défaut, les rôles et les utilisateurs sont définis dans le fichier conf/tomcat-users.xml. Tomcat supporte bien sûr d'autres moyens de définir ce point, il sait entre autres accéder à des bases de données pour aller chercher ce genre d'informations.<br><br>
	Le fichier tomcat-users.xml est vide, et contient des exemples de déclaration de rôles et d'utilisateurs mis en commentaires. Il nous faut créer un rôle manager, et un utilisateur qui possède ce rôle.<br>
	<div class="code-section"><img src="img/tomcat/15.png" class="image" /></div>
	Il faut redémarrer Tomcat pour que ce fichier soit pris en compte.<br>
	L'utilisateur par défaut de la console d'administration Tomcat sous Windows est admin avec le mot de passe admin.<br>
	On peut également obtenir la liste des applications web actives.<br>
	<h4>Vérification de l’état du serveur</h4>
	À partir de lien suivant, vous pouvez afficher des informations sur le statut du serveur. N'importe lequel des rôles <i>manager-xxx</i> permet d'accéder à cette page: <b>http://localhost:8080/manager/status</b><br><br>
	<img src="img/tomcat/17.png" style="width: 65%;" class="image-center" /><br>
	Sur la page server status, nous avons le numéro de version du serveur et de la JVM, le fournisseur JVM, le nom et le numéro du système d'exploitation, suivis du type d'architecture.<br>
	Deuxièmement, il existe des informations sur l'utilisation de la mémoire de la machine virtuelle Java.<br>
	Ensuite, vous trouverez des informations sur les connecteurs Tomcat AJP et HTTP.<br>
	<h4>Déploiement d’un nouvelle application web</h4>
	Avec cette méthode, nous pouvons déployer l’application Web à distance via une interface Web fournie par l’application de gestion de Tomcat par l’utilisation du formulaire HTML du gestionnaire de page d'accueil.<br><br>
	<img src="img/tomcat/18.png" style="width: 65%;" class="image-center" /><br>
	Comme on peut le constater, il existe deux manières de déployer une application Web à l'aide du gestionnaire :
	<ul><li>Répertoire de déploiement ou fichier WAR situé sur le serveur.</li>
	<li>Fichier WAR à déployer.</li></ul>
	La première méthode ne convient que si le fichier WAR ou le répertoire de l’application réside sur le serveur et que nous devons connaître l’URL. Ce dernier moyen est plus facile, car nous pouvons récupérer un fichier WAR et le télécharger sur le serveur.<br>
	<br>On clique sur le bouton Choisir un fichier pour sélectionner un fichier WAR, puis sur le bouton Déployer. Par exemple, nous sélectionnons helloMQL.war file. Dès que le fichier WAR est chargé sur le serveur, il est décompressé dans le répertoire $ CATALINA_HOME\\webapps. <br><br>
	Le gestionnaire ajoute la nouvelle application déployée à la liste des applications :<br>
	<br><img src="img/tomcat/19.png" style="width: 65%;" class="image-center" /><br>
	Il est généralement possible d’accéder à une application Web en tapant son chemin de contexte qui suit l’adresse IP/le domaine du serveur (y compris le numéro de port, le cas échéant). Par exemple, l'application helloMQL ci-dessus est accessible dans un navigateur Web en tapant : <b>http://localhost:8080/helloMQL</b><br><br>
	Ou nous pouvons accéder à une application individuelle à partir de l’application du gestionnaire en cliquant sur le chemin du contexte (première colonne de la liste des applications).<br>
	<br><img src="img/tomcat/20.png" style="width: 45%;" class="image-center" /><br>
	<h3>Interface texte</h3>
	Le rôle manager-script doit être associé à l’utilisateur dans le fichier tomcat-users.xml<br>
	<div class="code-section"><img src="img/tomcat/21.png" class="image" /></div>
	On charge l’url authentifiée en variable :<br>
	<div class="code-section"><img src="img/tomcat/22.png" class="image" /></div>
	Liste des informations sur la version Tomcat, de l’OS et des propriétés de la JVM :<br>
	<div class="code-section"><img src="img/tomcat/23.png" class="image" /></div>
	La liste des ressources JNDI globales disponibles :<br>
	<div class="code-section"><img src="img/tomcat/24.png" class="image" /></div>
	Statut du serveur :<br>
	<div class="code-section"><img src="img/tomcat/25.png" class="image" /></div>
	Liste des applications :<br>
	<div class="code-section"><img src="img/tomcat/26.png" class="image" /></div>
	Redémarrer une application :<br>
	<div class="code-section"><img src="img/tomcat/27.png" class="image" /></div>
	Arrêter une application :<br>
	<div class="code-section"><img src="img/tomcat/28.png" class="image" /></div>
	Démarrer une application :<br>
	<div class="code-section"><img src="img/tomcat/29.png" class="image" /></div>
	Déployer un nouveau WAR à distance :<br>
	<div class="code-section"><img src="img/tomcat/30.png" class="image" /></div>
	Retirer une application (undeploy) :<br>
	<div class="code-section"><img src="img/tomcat/31.png" class="image" /></div>
	`
);

tomcat.set(
	"Sécurisation d’accès avec Tomcat",
	`
	<h3>Realm de sécurité</h3>
	Les Realm font partie d'un mécanisme de sécurité, basé sur l'authentification. Ils permettent de protéger l'accès des ressources du serveur en leur appliquant des contraintes de sécurité. Le principe d'un Realm est de gérer une liste d'utilisateurs, avec des rôles (que l'on peut rapprocher de la notion de groupes sur les OS courants). Une contrainte de sécurité consistera donc à définir que tel utilisateur ou tel rôle a accès à telle ressource protégée.<br><br>
	Un élément Realm est un peu particulier dans la configuration de Tomcat. Il s'agit d'un élément pouvant être inséré comme fils de différents conteneurs : Engine, Host ou Context. Dans la logique arborescente interne du serveur, si l'on définit un Realm pour un Context, il écrasera celui, éventuel, de l’Host parent.<br><br>
	Un Realm implémente l'interface Java org.apache.catalina.Realm. Les Realm, dont le but est de gérer les utilisateurs, diffèrent les uns des autres par leur mode de gestion (fichier XML, base de données...).<br><br>
	<h3>Memory Based</h3>
	Il s'agit d'un Realm qui stocke la liste des utilisateurs dans un simple fichier XML. Lorsqu'il est sollicité, ce Realm lit le fichier et stocke son contenu (les utilisateurs) en mémoire (une collection d'objets Java, un par utilisateur). Ce Realm est le plus simple fourni par Tomcat. Il est même simpliste, en ce qu'il ne fournit pas beaucoup de fonctionnalités. Une modification dans le fichier XML (donc dans la liste des utilisateurs ou des rôles) oblige à redémarrer le serveur pour être prise en compte. Un handicap qui interdit son utilisation en production. Imaginez un site sur lequel des utilisateurs peuvent ouvrir un compte, et où il faudrait redémarrer le serveur à chaque nouvelle inscription.<br><br>
	Pour utiliser ce Realm, on spécifie dans le fichier de configuration une balise Realm à laquelle on fournira comme attribut className la valeur "<b>org.apache.catalina.realm.MemoryRealm</b>". Un Realm peut être inséré comme balise fille d'un Engine, d'un Host ou d'un Context. Un Realm défini à un niveau inférieur (exemple : Context) écrase localement l'éventuel Realm du niveau supérieur (exemple : Host).<br><br>
	On pourra donc configurer ainsi un <b>MemoryBasedRealm</b> dans un Host du fichier de configuration :<br>
	<div class="code-section"><img src="img/tomcat/32.png" class="image" /></div><br>
	<h3>JDBC Database</h3>
	Il s'agit d'un Realm qui stocke la liste des utilisateurs dans une base de données JDBC, c'est-à-dire un système de base de données possédant un connecteur JDBC, donc accessible en Java. Lorsqu'il est sollicité, ce Realm cherche les utilisateurs dans cette base.<br><br>
	Pour utiliser ce Realm, on spécifie dans le fichier de configuration une balise Realm à laquelle on fournira comme attribut className la valeur "<b>org.apache.catalina.realm.JDBCRealm</b>". Un Realm peut être inséré comme balise fille d'un Engine, d'un Host ou d'un Context. Un Realm défini à un niveau inférieur (exemple : Context) écrase localement l'éventuel Realm du niveau supérieur (exemple : Host).<br><br>
	Le JDBC Database Realm accepte les attributs suivants dans la balise Realm :
	<ul><li><b>connectionName</b> : Le nom d'utilisateur pour établir la connexion JDBC avec la base.</li>
	<li><b>connectionPassword</b> : Le mot de passe pour cet utilisateur.</li>
	<li><b>connectionURL</b> : L'URL de connexion pour accéder à la base adéquate. Cette URL est dépendante du SGBD utilisé.</li>
	<li><b>driverName</b> : Nom complet (paquetages puis classe) de la classe Java du driver à utiliser.</li>
	<li><b>roleNameCol</b> : Nom de la colonne de la table des "rôles" qui contient le nom du rôle affecté à un utilisateur.</li>
	<li><b>userCredCol</b> : Nom de la colonne de la table des "utilisateurs" qui contient le mot de passe d'un utilisateur.</li>
	<li><b>userNameCol</b> : Nom de la colonne qui, dans les tables des "rôles" et des "utilisateurs" contient le nom d'un utilisateur.</li>
	<li><b>userRoleTable</b> : Nom de la table des "rôles", qui devra contenir les colonnes définies dans les attributs userNameCol and roleNameCol.</li>
	<li><b>userTable</b> : Nom de la table des "utilisateurs", qui devra contenir les colonnes définies dans les attributs userNameCol et userCredCol.</li></ul>
	On pourra donc configurer ainsi un MemoryBasedRealm dans un Host du fichier de configuration :<br>
	<div class="code-section"><img src="img/tomcat/33.png" class="image" /></div>
	Le JDBC Database Realm utilise donc une base de données pour stocker les utilisateurs. Cette base doit contenir au moins deux tables :
	<ul><li>La table des "<i>users</i>" (déjà évoquée dans les attributs de configuration), destinée à contenir un enregistrement par utilisateur que le Realm doit permettre d'authentifier. Elle contiendra au moins deux colonnes : une pour le login, une pour le mot de passe. Le nom de la table et le nom des colonnes doit être spécifié dans la configuration.<br><br>
	<img src="img/tomcat/34.png" style="width: 65%;" class="image-center" /></li><br>
	<li>La table des "<i>user_roles</i>" (déjà évoquée dans les attributs de configuration), destinée à contenir un enregistrement par association login / rôle. Comme nous l'avons déjà expliqué, un utilisateur peut avoir plusieurs rôles. Donc, il est tout à fait possible d'avoir plusieurs enregistrements avec le même login, ou avec le même rôle (pas les deux). Un utilisateur peut avoir un, plusieurs ou aucun rôle. La clé primaire de cette table peut être définie comme le couple login, rôle. On l'aura compris, cette table doit contenir au moins deux colonnes : une pour le login, une pour le nom du rôle. Le nom de la table et le nom des colonnes doit être spécifié dans la configuration.<br><br>
	<img src="img/tomcat/35.png" style="width: 65%;" class="image-center" /></li>
	<h3>Protéger ressources</h3>
	Dans Tomcat, grâce aux Realms, il est possible de protéger l'accès aux ressources du serveur, en demandant aux utilisateurs de s'authentifier. Le principe est simple (tout le monde l'a déjà rencontré sur un site) : lorsque l'utilisateur tente d'accéder à l'URL d'une ressource protégée, une boîte de dialogue lui demande son login (nom d'utilisateur) et son mot de passe.<br><br>
	Protéger l'accès à une ressource consiste à lui appliquer une contrainte de sécurité. Cette contrainte sera définie au sein d'une application, donc dans le descripteur de déploiement web.xml situé dans le répertoire WEB-INF de l'application web. Toute l'application ne sera pas nécessairement sécurisée, nous allons pouvoir définir quelles ressources sont à protéger.<br><br>
	Au sein de ce fichier (donc, entre les balises <web-app> et </web-app>), on définit une contrainte de sécurité entre la <i>balise security-constraint</i> :<br>
	<div class="code-section"><img src="img/tomcat/36.png" class="image" /></div>
	Tout d’abord, nous définissons l’élément <i>security-constraint</i>, qui agit en tant que détenteur de toute sécurité Configurations pour cette application Web. Cet élément a deux éléments enfants requis : <i>web-resourcecollection</i>, qui définit le chemin d'URL des applications Web à protéger, et <i>auth-constraint</i>, qui définit les rôles d'autorisation qu'un utilisateur accédant aux URL protégées doit avoir.<br><br>
	Maintenant si vous naviguez à l’application, nous allons voir une erreur :<br><br>
	<img src="img/tomcat/37.png" style="width: 65%;" class="image-center" /><br>
	Toujours dans le descripteur de déploiement, on va pouvoir, après les security-constraint configurer le processus de login des utilisateurs. Cela se fait dans un élément XML nommé login-config. Le contenu de cet élément varie selon la méthode d'authentification. Nous allons tout d'abord nous intéresser à la méthode basique. Elle consiste en une boîte de dialogue, gérée par le client web (votre navigateur), qui demande le login (nom d'utilisateur) et le mot de passe. Elle envoie ensuite l'information au serveur qui se charge des vérifications nécessaires. Attention, si l'on peut mettre plusieurs contraintes de sécurités dans une webapp, un seul login-config est acceptable, ce qui est logique.<br>
	<div class="code-section"><img src="img/tomcat/38.png" class="image" /></div>
	Cela aura pour effet, lorsque l'utilisateur demandera une URL protégée, d'afficher la boîte de dialogue suivante dans le navigateur :<br><br>
	<img src="img/tomcat/39.png" style="width: 65%;" class="image-center" /><br>
	Maintenant, entrez le nom d'utilisateur et le mot de passe de l'utilisateur qui a le rôle requis :<br><br>
	<img src="img/tomcat/20.png" style="width: 45%;" class="image-center" /><br>
	`
);

// Undertow

var undertow = new Map();
undertow.set("coursImg", "undertow");
undertow.set(
	"Description d'Undertow",
	`
	Undertow est un serveur Web flexible et performant écrit en Java, fournissant à la fois des API bloquantes et non bloquantes, basées sur XNIO, l'abstraction sur Java NIO qui représente New IO, une implémentation alternative à l'API IO standard utilisée dans le langage Java.<br><br>
	Undertow a une architecture basée sur la composition qui vous permet de créer un serveur Web en combinant de petits gestionnaires à but unique. Cela vous donne la possibilité de choisir entre un conteneur complet Java EE Servlet 3.1 ou un gestionnaire de bas niveau non bloquant, entre les deux.<br><br>
	Undertow est conçu pour être entièrement intégrable, avec des API de constructeur faciles à utiliser. Le cycle de vie d’Undertow est entièrement contrôlé par l’application d’intégration. <br>
	<br>Présentation des fonctionnalités clés : 
	<ul><li>Léger : le fichier jar principal fait moins de 1 Mo, le temps d'exécution prend environ 4 Mo de mémoire. </li>
	<li>Prise en charge de la mise à niveau HTTP : protocoles multiples via HTTP. </li>
	<li>Web Socket : assistance complète, y compris JSR-356. </li>
	<li>Servlet 3.1 : entièrement exécutable depuis l'intérieur de l'application.</li>
	<li>Flexible : nous pouvons utiliser la quantité appropriée de fonctionnalités pour la tâche en enchaînant les gestionnaires.</li></ul>
	`
);

undertow.set(
	"Serveur embarqué Undertow",
	`
	Undertow est entièrement embarqué. Il y a deux façons d'y parvenir. Le moyen le plus simple consiste à utiliser l'API de générateur et à définir diverses propriétés en tant que gestionnaires, écouteurs, chemins de contexte et ports d'écoute. La deuxième approche consiste à assembler manuellement l’ensemble du serveur à l’aide de XNIO et des classes d’écoute directement. L'utilisation de l'API de générateur est suffisante pour les besoins de cette thèse. Il n'y a pas de conteneur, il faut pour commencer. Le serveur Web intégré est géré par l'application intégrée. L'utilisation et le chaînage des gestionnaires sont également sous le contrôle de l'application.
	`
);

undertow.set(
	"Installation d'Undertow",
	`
	On deux manières pour intégrer Undertow, soit en utilisant Maven, on ajoute dans la balise dependencies :<br>
	<div class="code-section"><img src="img/undertow/0.png" class="image" /></div>
	Si nous souhaitons simplement télécharger les jars directement, nous pouvons les télécharger à partir de : <br>
	<a class="link" href="https://search.maven.org/search?q=g:io.undertow">https://search.maven.org/search?q=g:io.undertow</a><br><br>
	<img src="img/undertow/1.png" style="width: 75%;" class="image-center" /><br>
	`
);

undertow.set(
	"Création d’un serveur simple avec Undertow",
	`
	Avec le code suivant, nous pouvons créer un serveur Web simple à l'aide de l'API Undertow's Builder :<br>
	<div class="code-section"><img src="img/undertow/2.png" class="image" /></div>
	Comme nous pouvons le constater dans la classe ci-dessus, la classe io.undertow.Undertow est une classe Factory qui contient un générateur de méthode pratique permettant de créer de nouvelles instances du serveur Web. Pour être utilisable, le serveur Web doit inclure au moins deux composants :
	<ul><li>Un <b>listener</b> qui va intercepter les requêtes HTTP/HTTPS sur une interface et un port spécifique.</li>
	<li>Un <b>handler</b> associé au listener. Le handler doit éventuellement appeler un autre handler ou mettre fin à l'échange.</li></ul>
	Dans ce cas, nous avons ajouté un handler personnalisé qui ajouterait l'en-tête de réponse Content-Type : <i>text/plain</i> à chaque demande.<br><br>
	On exécute notre programme et on accède à localhost:8080, on obtient :<br><br>
	<img src="img/undertow/3.png" style="width: 35%;" class="image-center" /><br>
	`
);

undertow.set(
	"Déploiement d'applications sur Undertow",
	`
	Premièrement, On crée notre classe Servlet simple qui affiche un message :<br>
	<div class="code-section"><img src="img/undertow/4.png" class="image" /></div>
	Pour déployer une application Web sur Undertow contenant un ensemble de composants tels qu’une servlet on va utiliser l’API <i>DeploymentInfo</i> pour déployer un servlet (attribution du chemin de l’URL "/servlets"), et ajouter des servlets et d'autres informations à cette structure, puis à la déployer dans un conteneur de servlets :<br>
	<div class="code-section"><img src="img/undertow/5.png" class="image" /></div>
	On transmet des paramètres à notre servlet par la méthode <i>addInitParam()</i>. Et on peut mapper la servlet à une URL par la méthode <i>addMapping()</i>. Ceci est fait par la méthode <i>addMapping()</i>.<br><br>
	On exécute notre programme :<br>
	<ul><li>http://localhost:8080/servlets/hellomql<br><br>
	<img src="img/undertow/7.png" style="width: 35%;" class="image-center" /></li>
	<li>http://localhost:8080/servlets/undertow<br><br>
	<img src="img/undertow/6.png" style="width: 35%;" class="image-center" /></li></ul>
	`
);

// Ant

var ant = new Map();

ant.set("coursImg", "ant");

ant.set(
	"Description d'Ant",
	`
	Ant est un logiciel créé par la fondation Apache qui vise à automatiser les opérations répétitives du développement de logiciel telles que la compilation, la génération de documents (Javadoc) ou l'archivage au format JAR, à l'instar des logiciels Make. Ant est écrit en Java et son nom est un acronyme pour « Another Neat Tool » (un autre chouette outil). Il est principalement utilisé pour automatiser la construction de projets en langage Java, mais il peut être utilisé pour tout autre type d'automatisation dans n'importe quel langage. Parmi les tâches les plus courantes, Ant permet la compilation, la génération de pages HTML de documentation (Javadoc), la génération de rapports, l'exécution d'outils annexes (checkstyle, FindBugs, etc.), l'archivage sous forme distribuable (JAR, etc.).<br><br>
	Ant repose sur un fichier de configuration au format XML. Ant fournit par défaut un groupe de tâches courantes représentées sous forme d'objet en langage Java. Ant fournit également la possibilité de créer ses propres objets Java pour exécuter des tâches plus spécifiques et non fournies avec l'application de base.
	`
);

ant.set(
	"Installation d'Ant",
	`
	Puisque Ant repose sur la technologie Java, il faut d'abord installer le JDK. Ant s'installe sur la majorité des plates-formes.<br><br>
	Sur Windows, il suffit de télécharger la distribution binaire de l'outil Ant pour Windows : apache-ant-version-bin.zip sur le site de Ant :<br>
	<a class="link" href="https://ant.apache.org/bindownload.cgi">https://ant.apache.org/bindownload.cgi</a><br>
	Décompresser le fichier (un répertoire apache-ant-version contenant l'outil et sa documentation est créé) :
	<ul><li><b>bin/</b> : scripts de lancement d’Ant.</li>
	<li><b>lib/</b> : les jars d’Ant.</li>
	<li><b>manuel/</b> : documentation.</li>
	<li><b>etc/</b> : XSL pour le formatage de la sortie XML Ant.</li></ul>
	Ajouter le chemin complet du répertoire bin de l'outil Ant à la variable système PATH (pour pouvoir facilement appeler Ant n'importe où dans l'arborescence du système).<br>
	S’assurer que la variable JAVA_HOME pointe sur le répertoire contenant le JDK.<br>
	Créer une variable d'environnement ANT_HOME qui pointe sur le répertoire jakarta-ant-version créé lors de la décompression du fichier.<br>
	<h4>Exécution de Ant par la ligne de commande</h4>
	Voici la syntaxe de base pour utiliser Ant en mode ligne de commande : ant [options] [cible]<br>
	Par défaut, Ant recherche un fichier nommé build.xml dans le répertoire courant. Si il trouve ce fichier, il exécute la cible par défaut. <br>br>
	Ant possède plusieurs options dont voici les principales :<br>
	<ul><li><b>-buildfile</b> : Pour préciser le nom du fichier de configuration si différent de build.xml</li>
	<li><b>-quiet</b> : Pour obtenir un résumé d'informations lors de l'exécution</li>
	<li><b>-verbose</b> : Pour obtenir un maximum d'informations lors de l'exécution</li>
	<li><b>-version</b> : Pour afficher la version de Ant</li>
	<li><b>-projecthelp</b> : Pour afficher les cibles définies avec leurs descriptions</li>
	<li><b>-D[nom]=[valeur]</b> : permet de définir une propriété et de lui assigner une valeur</li></ul>
	<div class="code-section"><img src="img/ant/0.png" class="image" /></div>
	`
);

ant.set(
	"Exemple simple de l'utilisation d'Ant",
	`
	Voici un exemple pour illustrer à quel point Ant facilite le processus de construction, supposons que nous ayons un fichier java HelloMQL.java :<br>
	<div class="code-section"><img src="img/ant/1.png" class="image" /></div>
	Supposons que nous souhaitions compiler ce code et stocker les résultats dans un fichier Jar HelloMQL.jar. Ant recherche un fichier de construction nommé build.xml :<br>
	<div class="code-section"><img src="img/ant/2.png" class="image" /></div>
	Lorsque nous exécutons Ant sur ce fichier, voici le résultat :<br>
	<div class="code-section"><img src="img/ant/3.png" class="image" /></div>
	Quand Ant a fini d'exécuter le fichier de construction, vous aurez build.xml, HelloMQL.java, les fichiers compilés HelloMQL.class et HelloMQL.jar :<br><br>
	<img src="img/ant/4.png" style="width: 180px;" class="image-center" />
	`
);

ant.set(
	"Ant Buildfile",
	`
	Le fichier de construction utilisé par Ant est écrit en XML, enregistré sous le nom "build.xml" et contient un élément project. L'élément <b>project</b> contient un certain nombre d'éléments. Les plus courants sont les éléments de propriété et les éléments cibles. Les éléments cible spécifient une cible spécifique qui peut être exécutée et comprend généralement une ou plusieurs tâches intégrées.<br>
	<h3>Project</h3>
	L'élément project est l'élément racine du fichier de construction et peut contenir trois attributs : name, basedir et default. Parmi les trois, seul l'attribut default est requis. Le nom définit le nom du projet, le basedir définit le répertoire de base du projet et l'attribut par défaut définit la cible par défaut du projet.<br>
	<div class="code-section"><img src="img/ant/5.png" class="image" /></div>
	<h3>Properties</h3>
	Un projet peut spécifier un ensemble de propriétés à utiliser dans le fichier de construction. Ceux-ci peuvent être définis à l'aide de la tâche de propriété, une propriété a un nom et une valeur ; les deux seront des attributs de cette tâche.<br><br>
	Les propriétés peuvent être utilisées dans les attributs de tâche en plaçant le nom de la propriété entre "$ {" et "}", par exemple, supposons qu'il existe une propriété nommée build.dir et que sa valeur est build, elle pourrait alors être utilisée dans un attribut "\${build.dir}/classes" en supposant que le répertoire "classes" se trouve dans le répertoire "build". Ceci serait alors résolu en : build/classes.<br>
	<div class="code-section"><img src="img/ant/6.png" class="image" /></div>
	<ul><li><b>name</b> : Permet de définir le nom de la propriété.</li>
	<li><b>value</b> : Permet d'attribuer la valeur de la propriété.</li>
	<li><b>file</b> : Permet de préciser le nom d'un fichier qui contient la définition d'un ensemble de propriétés. Ceci permet d'éviter de se retrouver avec une liste considérable de balise property en début de fichier. Le fichier en question porte habituellement l'extenssion .properties.</li>
	<li><b>location</b> : Permet de définir un fichier avec son chemin absolu qui peut être utilisé en remplacement de l'attribut value.</li></ul>
	<h4>Utilisation des propriétés Ant dans le fichier build.xml</h4>
	Pour utiliser une propriété définie dans le fichier build.xml, on doit utiliser la syntaxe suivante : <br>
	<i>\${nom_de_propriete}</i><br>
	Par exemple, si nous avons défini notre propriété «version» de la façon suivante :<br>
	<i>\${version}</i><br>
	<h4>Les propriétés prédéfinies dans Ant</h4>
	Il existe quelques propriétés prédéfinies dans Ant et utilisables dans vos fichiers build.xml. En voici la liste :<br>
	<ul><li><b>basedir</b> : Même chose que l'attribut du même nom dans la balise project.</li>
	<li><b>ant.file</b> : Représente le chemin absolu du fichier build en cours de traitement.</li>
	<li><b>ant.java.version</b> : Représente la version de la JVM qui exécute Ant.</li>
	<li><b>ant.project.name</b> : Représente le nom du projet en cours d'utilisation.</li></ul>
	<h4>Tragets</h4>
	Les cibles spécifient la ou les tâches à exécuter pour accomplir une activité donnée. Une cible peut dépendre d'une autre cible, par exemple, vous avez deux cibles : une pour compiler et une autre pour construire un fichier jar. Vous ne pouvez pas construire un fichier JAR sans avoir préalablement compilé. La cible du fichier jar dépend donc de la cible de la compilation.<br><br>
	Voici la liste des attributs de la balise target :
	<ul><li><b>name</b> : Pour indiquer le nom de la cible.</li>
	<li><b>description</b> : Pour indiquer une courte description de la cible.</li>
	<li><b>if</b> : Permet de préciser une condition d'exécution.</li>
	<li><b>unless</b> : Permet présicer une condition d'exécution en se basant sur l'inexistence de la définition d'une propriété.</li>
	<li><b>depends</b> : Permet de spécifier une liste des cibles dont dépend la cible.</li></ul>
	L'attribut "depends" spécifie quelles autres cibles doivent être exécutées avant celle-ci. Ceci est une liste séparée par des virgules. Vous ne devriez pas émettre d'hypothèses sur l'ordre dans lequel les cibles sont appelées si vous avez les éléments suivants :<br>
	<div class="code-section"><img src="img/ant/7.png" class="image" /></div>
	Et nous lançons la cible D, l’ordre d’exécution n’est pas C, B, A, D mais plutôt A, B, C et enfin D.
	`
);

ant.set(
	"Les types de Ant",
	`
	<h3>Les ensembles de motifs</h3>
	Un ensemble de motifs (pattern set) est utilisé pour définir un modèle spécial pouvant être utilisé dans des ensembles de fichiers ou des ensembles de répertoires. Il inclut des modèles qui correspondent ou non, ceux qui correspondent sont inclus dans l'ensemble tandis que ceux qui ne correspondent pas sont exclus. Il est également possible d'exclure explicitement les éléments d'un ensemble à l'aide d'un modèle.<br><br>
	L'expression **/ permet de désigner tous les sous-répertoires du répertoire définit dans l'attribut dir. Le caractère ? représente un unique caractère quelconque et le caractère * représente zéro ou n caractères quelconques.<br><br>
	Les patterns sont utilisés comme valeurs dans les attributs des éléments d'inclusion et d'exclusion. Supposons que nous souhaitions inclure tous les fichiers source et exclure tout fichier source qui est un test, nous pouvons utiliser les modèles donnés ci-dessus dans un jeu de modèles :<br>
	<div class="code-section"><img src="img/ant/8.png" class="image" /></div>
	<h3>Les ensembles de répertoire</h3>
	Les ensembles de répertoires permettent de sélectionner un ensemble de répertoires en fonction d'un jeu de modèles, en commençant par un répertoire de base spécifié dans l'élément dirset en tant qu'attribut. Supposons que nous souhaitions sélectionner le répertoire classes dans le répertoire de construction mais pas dans le répertoire images :<br>
	<div class="code-section"><img src="img/ant/9.png" class="image" /></div>
	<h3>Les ensembles de fichiers</h3>
	La balise fileset permet de définir un ensemble de fichiers. Cet ensemble de fichiers sera utilisé dans une autre tâche. La définition d'un tel ensemble est réalisée grâce à des attributs du tag fileset :
	<ul><li><b>dir</b> : Définit le répertoire de départ de l'ensemble de fichiers.</li>
	<li><b>includes</b> : Liste des fichiers à inclure.</li>
	<li><b>excludes</b> : Liste des fichiers à exclure.</li></ul>
	L'expression **/ permet de désigner tous les sous-répertoires du répertoire défini dans l'attribut dir.
	<div class="code-section"><img src="img/ant/10.png" class="image" /></div>
	<h3>Les éléments de chemins</h3>
	Nous pouvons très facilement utiliser le groupe de fichiers pour définir un chemin de classe pour la compilation du code source. Supposons que notre projet utilise les fichiers JAR d'un autre projet et que ces fichiers JAR sont stockés dans le répertoire lib. Nous pouvons définir un chemin de classe comme suit :<br>
	<div class="code-section"><img src="img/ant/11.png" class="image" /></div>
	`
);

ant.set(
	"Les tâches de Ant",
	`
	<h3>Tâches d'archives</h3>
	Ant a un certain nombre de tâches qui nous aident à travailler avec des fichiers d’archives compressés. Nous pouvons facilement créer et extraire ces archives dans un certain nombre de formats.<br><br>
	<b>zip, unzip</b><br>
	Les tâches zip et unzip peuvent être utilisées pour créer et extraire des archives au format zip.<br>
	<div class="code-section"><img src="img/ant/12.png" class="image" /></div>
	<b>gzip, gunzip</b><br>
	Similaire aux tâches zip et unzip, à la différence près qu'elles utilisent l'algorithme de compression GZIP. Il est à noter que la tâche gzip fonctionne sur un seul fichier. Par conséquent, si vous souhaitez compresser un groupe de fichiers, vous devez utiliser cette tâche conjointement avec la tâche <b>tar</b>.<br>
	<div class="code-section"><img src="img/ant/13.png" class="image" /></div>
	<b>tar, untar</b><br>
	La tâche tar et untar est utilisée pour créer et extraire des archives en utilisant le format tar. Il faut comprendre que ce n'est pas un utilitaire de compression, mais seulement un utilitaire d'archivage. Vous pouvez créer une archive à l'aide de tar, puis la compresser à l'aide de gzip ou de bzip.<br>
	<div class="code-section"><img src="img/ant/14.png" class="image" /></div>
	Il existe autres tâches pour la gestion des archives :
	<ul>
	<li><strong>cab</strong> : Créer une archive cab de type Microsoft.</li>
	<li><strong>ear</strong> : Créer une archive contenant une application J2EE.</li>
	<li><strong>jar</strong> : Créer une archive de type jar.</li>
	<li><strong>unjar</strong> : Décompresser une archive de type jar.</li>
	<li><strong>unwar</strong> : Décompresser une archive de type war.</li>
	<li><strong>war</strong> : Créer une archive de type war.</li>
	</ul>
	<h3>Tâches de Java</h3>
	Il n’est pas surprenant que Ant vous permette d’exécuter les outils fournis avec le JDK.<br>
	<b>javac</b><br>
	Cette tâche est utilisée pour compiler les fichiers source. L'attribut srcdir spécifie le répertoire contenant les fichiers source et le répertoire destdir est le répertoire dans lequel les fichiers de classe résultants doivent être placés.<br>
	<div class="code-section"><img src="img/ant/15.png" class="image" /></div>
	<b>java</b><br>
	Nous pouvons exécuter un programme Java à l'aide de la tâche java :<br>
	<div class="code-section"><img src="img/ant/21.png" class="image" /></div>
	Il existe autres tâches pour les compilations Java :
	<ul>
	<li><strong>rmic</strong> : Générer les classes stub et skeleton nécessaires à la technologie RMI.</li>
	<li><strong>signjar</strong> : Signer un fichier jar.</li>
	</ul>
	<h3>Tâches de fichiers</h3>
	Il serait impossible pour un outil de construction de ne pas vous permettre de manipuler des fichiers. Ce sont quelques-unes des tâches les plus importantes.<br>
	<b>mkdir</b><br>
	Celui-ci crée un répertoire :<br>
	<div class="code-section"><img src="img/ant/17.png" class="image" /></div>
	<b>copy</b><br>
	Copier des fichiers et des répertoires :<br>
	<div class="code-section"><img src="img/ant/18.png" class="image" /></div>
	<b>move</b><br>
	Déplacer des fichiers et des répertoires :<br>
	<div class="code-section"><img src="img/ant/19.png" class="image" /></div>
	<b>delete</b><br>
	Supprimer des fichiers et des répertoires :<br>
	<div class="code-section"><img src="img/ant/20.png" class="image" /></div>
	Il existe autres tâches pour la gestion des fichiers :
	<ul>
	<li><strong>chmod</strong> : Modifier les droits d'un fichier.</li>
	<li><strong>concat</strong> : Permet de concaténer une série de fichiers pour en former un seul.</li>
	<li><strong>get</strong> : Obtenir un fichier depuis une URL.</li>
	<li><strong>tempfile</strong> : Générer un nom pour un fichier temporaire.</li>
	<li><strong>touch</strong> : Modifier la date de modification du fichier avec la date courante</li>
	</ul>
	<h3>La tâches echo</h3>
	La tâche echo permet d'écrire dans un fichier ou d'afficher un message ou des informations durant l'exécution d'un traitement.<br>br>
	Voici la liste des principaux attributs de la tâche echo :
	<ul>
	<li><strong>message</strong> : Le message à afficher.</li>
	<li><strong>file</strong> : Le fichier dans lequel le message sera inséré.</li>
	<li><strong>append</strong> : Valeur booléenne qui permet de préciser si le message est ajouté à la fin du fichier (true) ou si le contenu du fichier doit être écrasé et remplacé par le message fourni (false).</li>
	</ul>
	Exemple :<br>
	<div class="code-section"><img src="img/ant/22.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/ant/23.png" class="image" /></div>
	<h3>Création de notre propre tâche</h3>
	Dans cette partie, on va montrer quel point il est facile de créer une petite tâche ANT simple. <br>
	On ajoute le fichier jat ant.jar au build path de notre projet :<br>
	<img src="img/ant/24.png" style="width: 250px;" class="image-center" />
	Voici le fichier java qui définit la tâche :<br>
	<div class="code-section"><img src="img/ant/25.png" class="image" /></div>
	Et voilà le fichier XML qui utilise la tâche :<br>
	<div class="code-section"><img src="img/ant/26.png" class="image" /></div>
	`
);

ant.set(
	"Utilisation d'Ant dans Eclipse",
	`
	Pour que Eclipse construise un projet avec Ant, vous devez créer un nouveau générateur, que vous pouvez utiliser à partir des propriétés du projet.<br><br>
	<img src="img/ant/27.png" style="width: 55%;" class="image-center" /><br>
	La sélection de “New…” ouvre la fenêtre de la Figure 10 qui offre le choix entre une compilation Ant et un autre programme.<br><br>
	<img src="img/ant/28.png" style="width: 35%;" class="image-center" /><br>
	La boîte de dialogue Outils externes apparaît. Dans l'onglet Main qui fournit un contrôle détaillé sur la construction, y compris le définissez l'emplacement sur le fichier de construction, des cibles et du chemin de classe, des propriétés et de l'environnement opérationnel de Ant. La première action consiste à sélectionner le fichier de construction et son répertoire de base :<br><br>
	<img src="img/ant/29.png" style="width: 55%;" class="image-center" /><br>
	Dans l'onglet Targets, nous pouvons spécifier quand ce générateur de projet est exécuté et quelles cibles. Par défaut, la cible par défaut est configurée pour s'exécuter après un "clean" et une construction manuelle. Nous pouvons spécifier d'autres cibles et d'autres déclencheurs. L'exécution de votre générateur de projet lors de la génération automatique est possible, mais déconseillée pour des raisons de performances.<br><br>
	<img src="img/ant/30.png" style="width: 55%;" class="image-center" /><br>
	Résultat de compilation :<br><br>
	<img src="img/ant/31.png" style="width: 45%;" class="image-center" /><br>
	`
);

ant.set(
	"Ant et JUnit",
	`
	JUnit est la structure standard de test unitaire pour le développement Java. Il est incroyablement utile et facile à étendre. Vous pouvez donc utiliser de nombreuses extensions pour votre application, dont HttpUnit et DbUnit. Ces extensions sont spécialement conçues pour fonctionner avec des applications Web et des applications basées sur une base de données, respectivement.<br>
	<h3>Installation les frameworks de test</h3>
	Les tâches JUnit sont des tâches Ant facultatives. Par conséquent, avant que Ant puisse utiliser l'un des frameworks de test, nous devons assurer que les classes se trouvent sur son chemin de classe. Cela signifie que nous devons placer le fichier junit.jar du téléchargement JUnit dans ANT_HOME/lib.<br><br>
	Nous utilisons des propriétés et des types de données Ant pour rendre l'écriture de nos cibles de test plus propre, pour éviter les chemins codés en dur et pour permettre un contrôle flexible du processus de test. Tout d'abord, nous affectons des propriétés aux différents répertoires utilisés par nos cibles de test : <br>
	<div class="code-section"><img src="img/ant/32.png" class="image" /></div>
	<h3>Initialisation de l'environnement de test</h3>
	Lors de l'exécution des tests, vous souhaiterez disposer de données et de rapports actualisés pour l'analyse. Cependant, les tâches JUnit ne suivent pas les rapports et les données qu’elles génèrent, elles ne suppriment donc pas les anciennes données. Cela signifie que si nous supprimons ou renommons un test, les résultats de l'ancien test seront conservés et apparaîtront dans les rapports ultérieurs si nous ne faites pas attention. Une façon de résoudre ce problème consiste à supprimer les données et les rapports avant chaque test, comme indiqué suivant :<br>
	<div class="code-section"><img src="img/ant/33.png" class="image" /></div>
	<h3>Compilation les classes de test</h3>
	Avant de pouvoir utiliser les classes de test pour tester une application, nous devons les compiler avec succès. Comme nous l'avons vu précédemment, nous allons conserver la source de test dans le répertoire de test et utiliser les mêmes packages que l'application principale. La tâche <javac> qui compile les classes de test devra utiliser les classes de l’extension. Nous devons donc créer un chemin de classe de test.<br><br>
	Commençons par le chemin de classe pour la compilation de notre bibliothèque. Il inclut tous les JAR du sous-répertoire lib :<br>
	<div class="code-section"><img src="img/ant/34.png" class="image" /></div>
	Pour compiler les tests, nous devons ajouter les classes compilées :<br>
	<div class="code-section"><img src="img/ant/35.png" class="image" /></div>
	Pour exécuter les tests, nous avons également besoin des tests compilés sur le classpath :<br>
	<div class="code-section"><img src="img/ant/36.png" class="image" /></div>
	Maintenant que nous avons le classpath, vous pouvez compiler les classes. Dans ce cas, la cible a besoin des versions les plus récentes du code à tester. Par conséquent, nous ne compilerons les tests que si l’application est compilée :<br>
	<div class="code-section"><img src="img/ant/37.png" class="image" /></div>
	Il s'agit d'une commande directe javac qui prend un chemin de classe et compile certaines sources Java dans un répertoire de destination spécifié.<br>
	<h3>Test de l'application</h3>
	La tâche <b>junit</b> est une tâche « optionnelle », une tâche tellement importante que vous devez l'avoir avec junit.jar dans votre distribution Ant. La tâche exécute un ou plusieurs tests JUnit, puis collecte et affiche les résultats. Cela peut également arrêter la construction lorsqu'un test échoue.<br><br>
	La tâche <b>junit</b> utilise également un certain nombre d’éléments imbriqués, dont vous allez utiliser certains dans cet exemple. Nous commencerons par examiner les éléments <classpath> et <test> imbriqués, car ce sont les éléments de base et ceux que vous utiliserez dans chaque construction. Le code montre les tests de base en utilisant un seul cas de test :<br>
	<div class="code-section"><img src="img/ant/38.png" class="image" /></div>
	L’attribut <i>refid</i> de l'élément classpath fait référence au classpath de test que nous avons construit. L'attribut <i>name</i> de l'élément test prend un nom de classe qualifié complet, qui dans ce cas est org.mql.test.HelloTest (une classe de test simple). Cette classe exécutera un test sur l'application. Pour spécifier plus de tests, on ajoute simplement plus d’éléments test. Si nous exécutons le test et que celui-ci échouait, nous verrons quelque chose comme ce qui suit :<br>
	<div class="code-section"><img src="img/ant/39.png" class="image" /></div>
	<h4>Amélioration le test avec une meilleure production et un échec de construction</h4>
	Nous pouvons facilement résoudre les problèmes de production fragmentée et de succès de construction erronés en utilisant deux attributs de la tâche &lt;junit&gt;, Spécifiquement, nous pouvons améliorer la sortie clairsemée en définissant <em>printsummary</em> sur true et nous pouvons également échouer à la construction sur un échec de test en définissant <em>haltonfailure</em> sur true :<br>
	<div class="code-section"><img src="img/ant/40.png" class="image" /></div>
	Nous obtenons maintenant le résultat suivant :<br>
	<div class="code-section"><img src="img/ant/41.png" class="image" /></div>
	Un formateur ajoute plus d'informations que le résumé présenté précédemment et vous pouvez spécifier le format que vous souhaitez utiliser. Les trois choix sont brief, plain et xml. brief est une version moins explicite de plain, qui affiche à son tour une bonne quantité d'informations sur les tests et les échecs survenus. Dans cet exemple, nous utiliserons un formateur standard :<br>
	<div class="code-section"><img src="img/ant/42.png" class="image" /></div>
	Notez que nous définissons usefile sur false, ce qui signifie que Ant imprimera les résultats sur la console. Nous définissons également false avec printsummary pour nous assurer que seul le formateur écrit sur la console. Le résumé vous dit quand même le même genre de choses que le formateur. Si nous souhaitons utiliser un fichier pour stocker la sortie, on supprime cet attribut ou on définisse-le sur true. Le nom du fichier résultant est déterminé par le nom de la classe de test et, dans le cas de ce test, sera TEST-org.mql.test.HelloTest.txt. Si vous utilisiez le formateur XML, ce serait TEST-org.mql.test.HelloTest .xml. En d'autres termes, Si nous devions exécuter la nouvelle cible, vous verrions quelque chose comme ce qui suit :<br>
	<div class="code-section"><img src="img/ant/43.png" class="image" /></div>
	`
);

ant.set(
	" Ant et génération de documentation",
	`
	L’outil en ligne de commande javadoc est une méthode utile pour la construction de la documentation sur les API Java. Il faut énormément d'options en ligne de commande et nous saurons mieux quelles sont celles qui s'appliquent à notre génération Javadoc. Il suffit de dire que Ant nous offre des options pour répliquer toute fonctionnalité avec sa tâche &lt;javadoc&gt;.<br><br>
	Un des grands avantages de la tâche &lt;javadoc&gt; dans Ant est qu’il est facile de combiner des paquets provenant de lieux disparates. C'est une chance, car de nombreux projets ont des fichiers source dans différentes sections du projet. La généreration des Javadocs combinant tous les éléments de code du projet est aussi simple que de les combiner dans un seul ensemble de fichiers. La tâche &lt;javadoc&gt; fonctionne ensuite sur tous ces éléments et crée un ensemble Javadoc couvrant l’ensemble du projet.<br>
	<div class="code-section"><img src="img/ant/44.png" class="image" /></div>
	Lorsque la cible javadoc est exécutée, le résultat suivant est obtenu :<br>
	<div class="code-section"><img src="img/ant/45.png" class="image" /></div>
	Les fichiers de documentation java sont maintenant présents dans le dossier doc :<br><br>
	<img src="img/ant/46.png" style="width: 25%;" class="image-center" /><br>
	La figure suivante montre le résultat Les pages HTML qui couvrent notre bibliothèque.<br><br>
	<img src="img/ant/47.png" style="width: 65%;" class="image-center" />
	`
);

// Maven

var maven = new Map();

maven.set("coursImg", "maven");

maven.set(
	"Description de Maven",
	`
	Maven est un outil de gestion de projet qui comprend un modèle d'objet de projet, un ensemble de normes, un cycle de vie de projet, un système de gestion de dépendances et une logique pour l'exécution d'objectifs de plug-in à des phases définies du cycle de vie.
	<ul>
	<li>Maven fournit un sur-ensemble de fonctionnalités présentes dans l'outil de construction.</li>
	<li>Maven gère la construction du projet, les rapports et la documentation à partir d'une information centrale.</li>
	</ul>
	`
);

maven.set(
	"Architecture de Maven",
	`
	<img src="img/maven/0.png" style="width: 55%;" class="image-center" /><br>
	Lorsqu’on execute maven la premiere chose il va chercher le fichier de configuration pom.xml, depuis ce fichier il va prendre la liste de tous les sources, et à partir de besions il va prendre la liste des resources (plugins/dependencies) nécessaires qui est dans local repository qui est un repertoire crée lorsqu’on execute maven.<br><br>
	Si les resources nécessaires ne sont pas disponibles dans le locale repository il va chercher les resources dans le remote repository les télécharger depuis l’internet et les placer dans le local repository depuis lequel il va les utiliser.
	`
);

maven.set(
	"Cycle de vie d’un construction Maven",
	`
	Afin d'automatiser la construction d'un projet, Maven s'appuie sur des cycles de vie de construction appelés <b>build lifecycle</b> dans le jargon de Maven.<br><br>
	Il y a 3 build lifecycles de base dans Maven : <strong>default</strong>, <strong>clean</strong> et <strong>site</strong> qui sans non-default signifie que ces étapes ne suivent pas l'ordre, si on exécute clean il sera s'exécuter sans invoquer les étapes qui le précèdent.
	<ul>
	<li><strong>Clean</strong><strong>:</strong> qui permet de nettoyer le projet en supprimant les éléments issus de la construction de celui-ci (runtime files).</li>
	<li><strong>Site : </strong>qui permet de créer un site web pour le projet.</li>
	</ul>
	Ces build lifecycles sont découpés en phases qui sont exécutées séquentiellement les unes à la suite des autres.<br><br>
	Voilà les phases de build lifecycle default :
	<ul>
	<li><strong>validate : </strong>vérifie que la configuration projet est correcte (POM, pas d'éléments manquants...).</li>
	<li><strong>compile : </strong>compile les sources du projet.</li>
	<li><strong>test : </strong>teste le code compilé avec les classes de tests unitaires contenues dans le projet.</li>
	<li><strong>package : </strong>package les éléments issus de la compilation dans un format distribuable (JAR, WAR...).</li>
	<li><strong>install : </strong>installe le package dans votre repository local.</li>
	<li><strong>deploy : </strong>envoie le package dans le repository distant défini dans le POM, serveur web par exemple.</li>
	</ul>
	`
);

maven.set(
	"Maven besions Exemple",
	`
	Pour invoquer une construction Maven, vous définissez un « besoin » de cycle de vie.
	<ul>
	<li><strong>mvn install : </strong>invoque validate, compile, test, package, integration-test and install.</li>
	<li><strong>mvn clean : </strong>invoque seulement clean.</li>
	<li><strong>mvn clean compile : </strong>clean les anciennes constructions et execute validate and compile.</li>
	<li><strong>mvn compile install : </strong>invoque validate, compile, test, package, integration-test and install.</li>
	<li><strong>mvn test clean : : </strong>invoque validate, compile et test puis clean.</li>
	</ul>

	`
);

maven.set(
	"Disposition de répertoire standard de Maven",
	`
	<ul>
	<li><strong>src/main/java : </strong>Sources d'application/bibliothèque.</li>
	<li><strong>src/main/resources : </strong>Resources d'application/bibliothèque.</li>
	<li><strong>src/main/filters : </strong>Fichiers de filtres de ressources.</li>
	<li><strong>src/main/webapp : </strong>Sources d'applications Web.</li>
	<li><strong>src/test/java : </strong>Sources de test.</li>
	<li><strong>src/test/resources : </strong>Resources de test.</li>
	<li><strong>src/test/filters : </strong>Fichiers de filtres de ressources de test.</li>
	<li><strong>src/it : </strong>Tests d'intégration (principalement pour les plugins).</li>
	<li><strong>src/assembly : </strong>Descripteurs d'assemblage.</li>
	<li><strong>src/site : </strong></li>
	<li><strong>txt : </strong>Licence du projet.</li>
	<li><strong>txt : </strong>Avis et attributions requis par les bibliothèques dont dépend le projet.</li>
	<li><strong>txt : </strong>Lisez-moi du projet.</li>
	<li><strong>xml : </strong>Contient une description détaillée le projet, avec en particulier des informations concernant le versionnage et la gestion des configurations, les dépendances, les ressources de l'application, les tests, la structure et bien plus encore.</li>
	</ul>
	`
);

maven.set(
	"Maven nom du projet (GAV)",
	`
	<ul>
	<li>Maven identifie de manière unique un projet en utilisant:
	<ul>
	<li><strong>groupId</strong> : identifiant de regroupement de projet arbitraire (sans espaces ni deux points), généralement basé sur le package Java.</li>
	<li><strong>artifactId</strong> : Nom arbitraire du projet (sans espaces ni deux-points).</li>
	<li><strong>version</strong> : version du projet.</li>
	</ul>
	</li>
	<li>Syntaxe GAV : groupId:artifactId:version.</li>
	<li>Le type de construction identifié à l'aide de l'élément « packaging ».</li>
	<li>Explique à Maven comment construire le projet.</li>
	<li>Exemple de types de packaging :
	<ul>
	<li>pom, jar, war, ear,…</li>
	<li>La valeur par défaut est jar.</li>
	</ul>
	</li>
	</ul>
	<div class="code-section"><img src="img/maven/2.png" class="image" /></div>
	`
);

maven.set(
	"Installation de Maven",
	`
	Maven peut être téléchargée à partir du site officiel de la fondation Apache :<br>
	<a class="link" href="http://maven.apache.org/download.cgi">http://maven.apache.org/download.cgi</a><br><br>
	Lorsque vous téléchargez et décompressez le fichier zip, il est extrait dans un répertoire appelé <b>apache-maven-3.6.1-bin</b>.<br><br>
	On va ajouter le chemin du répertoire « bin » à la variable d’environnement PATH :<br><br>
	<img src="img/maven/3.png" style="width: 45%;" class="image-center" /><br>
	`
);

maven.set(
	"Application Maven",
	`
	Maven nous permet de générer un squelette de votre projet.<br>
	Voici comment générer le squelette en mode console :<br>
	<ol>
	<li>On ouvre un terminal (ou une console) et on accède au répertoire où on veut créer le projet.</li>
	<li>Lancez la génération à partir de l'archétype <strong>quickstart </strong>:</li>
	<div class="code-section"><img src="img/maven/4.png" class="image" /></div>
	<li>Maven va vous poser des questions afin de personnaliser la génération de votre projet :
	<ul>
	<li>groupId : org.mql.maven</li>
	<li>artifactId : my-project</li>
	<li>version (1.0-SNAPSHOT) : laissez vide</li>
	<li>package (org.mql.maven) : laissez vide</li>
	</ul>
	</li></ul></ul>
	<div class="code-section"><img src="img/maven/6.png" class="image" /></div>
	Voici la structure du répertoire crée :<br>
	<div class="code-section"><img src="img/maven/7.png" class="image" /></div>
	Pour les sources générées dans ce projet, nous avons une classe (App.java) avec la méthode main, et un test unitaire (AppTest.java).<br>
	<br>Compilons le project :<br>
	<div class="code-section"><img src="img/maven/8.png" class="image" /></div>
	Remarquons que la phase compile été réalisé après la phase de génération des sources et des ressources.<br><br>
	Le build lifecycle validate utilise le plugin : maven-resources-plugin et la phase compile utilise le plugin maven-compiler-plugin.<br><br>
	Comme résultat de compilation le fichier App.class et crée dans le répertoire classes :<br>
	<div class="code-section"><img src="img/maven/9.png" class="image" /></div>
	Si on compile une autre fois et qu’on n’a changé pas dans App.java Maven ne le compilera pas une autre fois :<br>
	<div class="code-section"><img src="img/maven/10.png" class="image" /></div>
	La même chose pour les autre build lifecycles.
	`
);

maven.set(
	"Maven POM",
	`
	POM signifie Project Object Model.<br><br>
	En tant qu’unité fondamentale du travail dans Maven, POM est un fichier XML contenant des informations sur le projet (GAV, emplacements du code source, dependencies, plug-ins,…) et les détails de configuration utilisés par Maven pour construire le projet.<br><br>
	Exemple :
	<div class="code-section"><img src="img/maven/11.png" class="image" /></div>
	`
);

maven.set(
	"Gestion du plugin Maven",
	`
	Maven est en fait un framework d’exécution de plugins où chaque tâche est réellement effectuée par des plugins.<br><br>
	Un plugin fournit généralement un ensemble de besions qui peuvent être exécutés à l'aide de la syntaxe suivante :<br>
	<b>$ mvn [nom-du-plugin]:[nom-de-besion]</b>
	<h4>Types de plugins</h4>
	<ul>
	<li><strong>Plugins de construction</strong> : ils s'exécutent pendant la construction et doivent être configurés dans l'élément &lt;build /&gt; de pom.xml.</li>
	<li><strong>Plugins de reporting</strong> : ils s'exécutent lors de la génération du site et doivent être configurés dans l'élément &lt;reporting /&gt; du fichier pom.xml.</li>
	</ul>
	Ils sont spécifiés dans pom.xml en utilisant l’élément plugins, et chaque plugin peut avoir plusieurs besions.<br><br>
	Nous pouvons définir la phase à partir de laquelle le plug-in doit commencer son traitement à l'aide de son élément phase. Nous pouvons configurer les tâches à exécuter en les liant aux besions du plugin.<br><br>
	Maven se chargera du reste. Il téléchargera le plugin s'il n'est pas disponible dans le local repository.<br>
	Exemple :<br>
	<div class="code-section"><img src="img/maven/12.png" class="image" /></div>
	`
);

maven.set(
	"Gestion des dépendances Maven",
	`
	La gestion des dépendances permet ajouter facilement des bibliothèques tierces à votre application.<br><br>
	Nous pouvons ajouter une dépendance dans le fichier de configuration pom.xml en utilisant la balise &lt;dependency&gt; dans la section &lt;dependencies&gt;.<br><br>
	Exemple :<br>
	Voici comment ajouter une dépendance vers <b>org.apache.commons:commons-collections4:4.1</b> :<br>
	<div class="code-section"><img src="img/maven/13.png" class="image" /></div>
	<b>Scoop</b>
	Il se peut que la dépendance que vous voulez ajouter ne soit liée qu'à un contexte particulier comme l'exécution des tests par exemple. C'est le cas de la dépendance vers JUnit ajoutée par l'archétype quickstart. En effet, il s'agit d'un framework de test unitaire et cette bibliothèque n'a pas à être déployée avec votre application en production.<br><br>
	Pour indiquer cela à Maven, les dépendances sont attachées à un scope.<br><br>
	Par défaut ce scope est compile. Ce scope indique que la dépendance est utilisée lors de la compilation et sera accessible dans tous les contextes.<br><br>
	Exemple : <br>
	<div class="code-section"><img src="img/maven/14.png" class="image" /></div>
	`
);

// Gradle

var gradle = new Map();

gradle.set("coursImg", "gradle");

gradle.set(
	"Description de Gradle",
	`
	Gradle est un système de gestion de construction avancée basé sur Groovy conçu spécifiquement pour la construction de projets basés sur Java. Il s’agit d’un système d’automatisation de compilation open source qui s’appuie sur les référentiels ANT, Maven et Lvy. Cela permet de réutiliser les artefacts des systèmes de construction existants. Gradle permet de modéliser de manière déclarative le domaine de notre problème en utilisant un langage DSL puissant et expressif implémenté dans Groovy au lieu de XML. Il prend en charge le téléchargement et la configuration automatiques de dépendances ou d'autres bibliothèques. Il supporte les référentiels Maven et Ivy pour récupérer ces dépendances. Cela permet de réutiliser les artefacts des systèmes de construction existants.
	`
);

gradle.set(
	"Installation de Gradle",
	`
	Gradle nécessite l'installation d'un JDK ou JRE Java, nécessitant une version 7 ou supérieure pour la version Gradle 3.x. Certaines fonctionnalités peuvent ne pas fonctionner avec JRE, il est donc recommandé d'installer JDK. En outre, Gradle est livré avec sa propre bibliothèque Groovy. par conséquent, Groovy n'a pas besoin d'être installé. Toute installation Groovy existante est ignorée par Gradle.<br><br>
	Nous pouvons télécharger la distribution directement à partir de la page d'accueil de Gradle à l'adresse <a class="link" href="http://gradle.org/downloads">http://gradle.org/downloads</a>. Une fois téléchargé, nous devons décompresser le fichier zip et le configurer en Ajoutant le chemin d'installation de Gradle à la variable GRADLE_HOME. Notez que cet emplacement doit être le répertoire parent du dossier bin ou lib. Et on Ajoute GRADLE_HOME/bin à la variable PATH.<br><br>
	Lorsque nous somme prêt à utiliser Gradle, on vérifie notre installation en exécutant la commande gradle avec le paramètre de ligne de commande <i>--version</i> ou <i>-v</i>.<br>
	<div class="code-section"><img src="img/gradle/0.png" class="image" /></div>
	`
);

gradle.set(
	"Cycle de vie de construction de Gradle",
	`
	La construction de Gradle a un cycle de vie composé de trois phases : initialisation, configuration et exécution. Gradle build est principalement un ensemble de tâches et un utilisateur peut définir la dépendance entre les tâches. Ainsi, même si deux tâches dépendent de la même tâche, par exemple, la tâche C et la tâche B dépendent toutes deux de la tâche A, Gradle s'assure que la tâche A ne sera exécutée qu'une seule fois au cours de l'exécution du script de construction.<br><br>
	<h4>Initialisation</h4>
	L'utilisateur peut créer un script de construction pour un projet unique ainsi que pour une construction multi-projets. Au cours de la phase d’initialisation, Gradle détermine les projets qui participeront au processus de création et crée une instance de projet pour chacun de ces projets.<br><br>
	<h4>Configuration</h4>
	Cette phase configure l'objet du projet. Tous les scripts de construction (dans le cas où l'utilisateur exécute une construction multi-projet), qui font partie du processus de construction, sont exécutés sans exécuter de tâche. Cela signifie que toutes les instructions que nous avons écrites en dehors de la tâche dans le bloc de configuration seraient exécutées dans la phase de configuration.<br><br>
	<h4>Exécution</h4>
	Dans cette phase, Gradle exécute toutes les tâches conformément à l'ordre indiqué dans la ligne de commande. Cependant, s'il existe des dépendances entre les tâches, ces relations seront respectées avant le classement en ligne de commande.
	`
);

gradle.set(
	"Première application Gradle",
	`
	Nous avons appris à installer Gradle. Il est maintenant temps de créer notre tout premier script Gradle. Ce script imprimera Hello MQL - Ceci est votre premier script sur la console. On ouvre simplement un éditeur de texte, on tape les trois lignes suivantes et enregistrez le fichier sous build.gradle.<br>
	<div class="code-section"><img src="img/gradle/1.png" class="image" /></div>
	Exécutez ensuite la commande gradle helloMQL comme suit :<br>
	<div class="code-section"><img src="img/gradle/2.png" class="image" /></div>
	Avec la commande gradle, nous avons exécuté une tâche appelée helloMQL, qui affiche une ligne dans la console. Ainsi. Nous pouvons exécuter l'une des tâches de notre choix à l'aide de la commande Gradle. Ces tâches seront exécutées dans le même ordre qu'elles apparaissent dans la ligne de commande.
	`
);

gradle.set(
	"La gestion des tâches Gradle",
	`
	Un script de construction n'est rien d'autre qu'un ensemble d'actions qui s'exécutent dans un ordre prédéfini et effectuent certaines opérations. Dans Gradle, nous appelons ces actions ou groupe d’actions une tâche qui fait partie de l’entité parente appelée Projet. L'unité d'exécution atomique dans le fichier de construction de Gradle s'appelle une tâche. Le fichier de construction peut avoir pour résultat certains actifs, tels que JAR, WAR, etc., ou exécuter certaines opérations telles que le déploiement et la configuration des actifs. Chaque fichier de construction qui est <i>build.gradle</i> représente au moins un projet. Il peut contenir plusieurs projets, même en cas de construction multi-projet ou multi-module.<br><br>
	Par défaut, chaque tâche nouvellement créée est de type <i>org.gradle.api.DefaultTask</i>, l'implémentation standard de <i>org.gradle.api.Task</i>. Tous les champs de la classe <i>DefaultTask</i> sont marqués comme privés. Cela signifie qu'ils ne sont accessibles que par leurs méthodes de lecture et de définition publiques. Heureusement, Groovy vous fournit du sucre syntaxique qui vous permet d’utiliser les champs par leur nom. Sous le capot, Groovy appelle la méthode pour vous. Dans cette section, nous allons explorer les caractéristiques les plus importantes d’une tâche par exemple.<br>
	<h3>Les méthodes de DefaultTask</h3>
	<h4>dependsOn(task)</h4>
	Ajoute une tâche en tant que dépendance de la tâche appelante. Une tâche dépendante sera toujours exécutée avant la tâche qui en dépend. Il existe plusieurs façons d’appeler cette méthode. Si le monde de la tâche dépend de la tâche hello, nous pourrions utiliser le code suivant :<br>
	<div class="code-section"><img src="img/gradle/3.png" class="image" /></div>
	Nous allons exécuter la chaîne de dépendance des tâches en appelant la deuxième tâche à partir de la ligne de commande :<br>
	<div class="code-section"><img src="img/gradle/4.png" class="image" /></div>
	Prenons le même exemple de second dépendant de helloMQL mais nous utilisons des objets de tâche au lieu de noms de référence de tâche.<br>
	<div class="code-section"><img src="img/gradle/5.png" class="image" /></div>
	<h4>doFirst(closure), doLast(closure)</h4>
	Ajoute un bloc de code exécutable au début de l’action d’une tâche. Pendant la phase d'exécution, le bloc d'actions de chaque tâche pertinente est exécuté. La méthode doFirst vous permet d’ajouter un peu de comportement au début d’une action existante, même si cette action est définie par un fichier de construction ou un plug-in que nous ne contrôlons pas. L'appel de doFirst plusieurs fois continue d'ajouter de nouveaux blocs de code d'action au début de la séquence d'exécution de la tâche. Nous pouvons appeler la méthode doFirst directement sur l'objet de tâche, en lui passant une fermeture. La fermeture contient le code à exécuter avant l’action existante de la tâche.<br><br>
	La méthode doLast est très similaire à la méthode doFirst, à ceci près qu'elle ajoute un comportement à la fin d'une action plutôt qu'avant. Si vous vouliez exécuter un bloc de code après l'exécution d'une tâche existante.<br><br>
	Voici un exemple d'appeler ces deux méthodes dans une tâche :<br>
	<div class="code-section"><img src="img/gradle/6.png" class="image" /></div>
	Résultat :<br>
	<div class="code-section"><img src="img/gradle/7.png" class="image" /></div>
	<h3>Les propriétés</h3>
	Chaque instance de projet et de tâche fournit des propriétés accessibles via les méthodes getter et setter. Une propriété peut être une description de la tâche ou la version du projet. <br><br>
	Souvent, vous voudrez définir vos propres propriétés. Par exemple, nous souhaiterons peut-être déclarer une variable qui référence un fichier utilisé plusieurs fois dans le même script de génération. Gradle permet de définir des variables définies par l'utilisateur via des propriétés supplémentaires.<br><br>
	<h4>Définir des propriétés personnalisées dans un script</h4>
	Pour ajouter nos propres propriétés, nous devons les définir dans un bloc de script ext {} dans un fichier de construction. Préfixer le nom de la propriété avec ext. est un autre moyen de définir la valeur. Pour lire la valeur de la propriété, nous n’avons pas à utiliser le ext. préfixe, nous pouvons simplement faire référence au nom de la propriété. La propriété est également automatiquement ajoutée à la propriété de projet interne.<br><br>
	Dans le script suivant, nous ajoutons une propriété customProperty avec une valeur de chaîne personnalisée. Dans la tâche showProperties, nous montrons la valeur de la propriété :<br>
	<div class="code-section"><img src="img/gradle/8.png" class="image" /></div>
	Après avoir exécuté le script, nous obtenons le résultat suivant :<br>
	<div class="code-section"><img src="img/gradle/9.png" class="image" /></div><br>
	<h4>Définition de propriétés à l'aide d'un fichier externe</h4>
	Nous pouvons également définir les propriétés de notre projet dans un fichier externe. Le fichier doit être nommé <i>gradle.properties</i>. Il doit s'agir d'un fichier texte avec le nom de la propriété et sa valeur sur des lignes séparées. Nous pouvons placer le fichier dans le répertoire du projet ou dans le répertoire de base de l'utilisateur Gradle. Le répertoire de base de l'utilisateur Gradle par défaut est <i>$USER_HOME/.gradle</i>. Une propriété définie dans le fichier de propriétés, dans le répertoire de base de l'utilisateur Gradle, remplace les valeurs de propriété définies dans un fichier de propriétés dans le répertoire du projet.<br><br>
	Nous allons maintenant créer un fichier <i>gradle.properties</i> dans le répertoire de notre projet, avec le contenu suivant :<br>
	<div class="code-section"><img src="img/gradle/10.png" class="image" /></div><br>
	Nous utilisons notre fichier de construction pour afficher les valeurs de propriété :<br>
	<div class="code-section"><img src="img/gradle/11.png" class="image" /></div>
	Résultat : <br>
	<div class="code-section"><img src="img/gradle/12.png" class="image" /></div>
	`
);

gradle.set(
	"La gestion des dépendances Gradle",
	`
	Gradle prend en charge un système de gestion de la dépendance très flexible, compatible avec la grande variété d’approches disponibles.<br><br>
	Les meilleures pratiques pour la gestion des dépendances dans Gradle sont le contrôle de version, le contrôle de version dynamique, la résolution des conflits de version et la gestion des dépendances transitives.<br>
	<h3>Flux de gestion des dépendances</h3>
	Voici, le flux global de gestion des dépendances :
	<ul>
	<li>Gradle crée un dépôt local sur votre machine</li>
	<li>Gradle vérifie si la dépendance demandée est présente dans le dépôt</li>
	<li>Si elle est présente, elle est ajoutée au classpath du projet</li>
	<li>Si elle n’est pas présente, Gradle va la chercher dans les dépôts distants connus, l’ajoute au dépôt local puis au classpath</li>
	<li>On vérifie si cette dépendance nécessite également des dépendances. Si oui, on repart en étape b.</li>
	</ul>
	<h3>Configuration des repositories</h3>
	Nous pouvons utiliser les méthodes suivantes pour configurer les référentiels. Gradle nous permet d'utiliser plus d'une configuration dans un fichier de construction.
	<ul>
	<li><strong>Maven Central repository</strong> : Cette configuration permet de télécharger directement vos dépendances à partir du référentiel Maven Central. Vous n'avez pas besoin de vous souvenir de l'URL du référentiel. Vous pouvez directement ajouter mavenCentral() à la fermeture du dépôt.</li>
	<li><strong>Ivy repository</strong> : Si vous souhaitez faire référence au référentiel Ivy, vous pouvez le définir comme suit :</li>
	</ul>
	<div class="code-section"><img src="img/gradle/13.png" class="image" /></div>
	<h3>Déclaration des dépendances</h3>
	La configuration des dépendances n'est rien mais définit un ensemble de dépendances. Nous pouvons utiliser cette fonctionnalité pour déclarer des dépendances externes signifie que nous souhaitons télécharger à partir du Web. Ceci définit différents types de sujets tels que ceux-ci :<br>
	<div class="code-section"><img src="img/gradle/14.png" class="image" /></div>
	`
);

gradle.set(
	"La gestion des plugins Gradle",
	`
	Il existe deux types de plugins dans Gradle-script, et binary.<br>
	Pour bénéficier d’une fonctionnalité supplémentaire, chaque plugin doit passer par deux phases : resolving et applying.
	<ul>
	<li><strong>Resolving</strong> signifie trouver la version correcte du fichier jar du plug-in et l’ajouter au classpath du projet. **</li>
	<li><strong>Applying</strong> plugins exécute Plugin.apply (T) sur le projet **.</li>
	</ul>
	<h3>Application de plugins de script</h3>
	Dans le fichier aplugin.gradle, nous pouvons définir une tâche :<br>
	<div class="code-section"><img src="img/gradle/15.png" class="image" /></div>
	Si nous voulons appliquer ce plugin à notre fichier projet build.gradle , il suffit d’ajouter cette ligne à notre build.gradle :<br>
	<div class="code-section"><img src="img/gradle/16.png" class="image" /></div>
	Maintenant, l’exécution de la commande <i>gradle tasks --all</i> devrait afficher la tâche fromPlugin dans la liste des tâches.
	<div class="code-section"><img src="img/gradle/17.png" class="image" /></div>
	<h3>Application de plugins binaires à l’aide de plugins DSL</h3>
	Dans le cas de l’ajout d’un plugin binaire principal, nous pouvons ajouter des noms abrégés ou un identifiant de plugin :<br>
	<div class="code-section"><img src="img/gradle/18.png" class="image" /></div>
	Maintenant, la tâche run du plugin application devrait être disponible dans un projet pour exécuter n’importe quel jar runnable. Pour appliquer un plugin de communauté, nous devons mentionner un identifiant de plugin pleinement qualifié :<br>
	<div class="code-section"><img src="img/gradle/20.png" class="image" /></div>
	Maintenant, les tâches Shipkit devraient être disponibles dans la liste gradle tasks .<br>
	Les limitations des plugins DSL sont :
	<ul>
	<li>Il ne prend pas en charge le code Groovy dans le bloc plugins</li>
	<li>Le bloc plugins doit être la déclaration de niveau supérieur dans la construction du projet</li>
	</ul>
	`
);

gradle.set(
	"Gradle et construction des projets Java",
	`
	Gradle ne prend pas encore en charge plusieurs modèles de projet (appelés archétypes) comme Maven. Mais il offre une tâche initiale pour créer la structure d’un nouveau projet Gradle. Sans paramètres supplémentaires, cette tâche crée un projet Gradle, qui contient les fichiers wrapper Gradle, un fichier <i>build.gradle</i> et un fichier settings.gradle.<br><br>
	Commencons par créer un projet initial avec gradle init <b>--type java-application</b>. Cela créera les fichiers et dossiers de base qui forment le structuer de base d'une application Gradle. 
	<div class="code-section"><img src="img/gradle/21.png" class="image" /></div>
	Voici la structure du projet crée :<br><br>
	<img src="img/gradle/22.png" style="width: 25%;" class="image-center" /><br><br>
	Dans le projet généré on trouve : 
	<ul>
	<li>Répertoire src/main/java : Contient les sources Java de l'application.</li>
	<li>Répertoire src/test/java : Contient les sources Java pour les tests.</li>
	<li>Répertoires ressources pour l’application et pour les tests.</li>
	<li>Le fichier de configuration de projet build.gradle (équivalent à POM de Maven).</li>
	<li>Un autre fichier de configuration settings.gradle.</li>
	</ul>
	Concentrons-nous sur le fichier build.gralde. Il définit notre projet, ses dépendances et toutes les tâches à exécuter.<br>
	<div class="code-section"><img src="img/gradle/23.png" class="image" /></div>
	Dans l'exemple ci-dessus, le fichier JAR JUnit a été ajouté à la configuration testCompile car il ne sert à rien dans l'application terminée. La chaîne entre guillemets simples représente la notation d'artefact Maven, à savoir le groupId, le artifactId et la version. Cela permet à Gradle d'identifier la dépendance, de la localiser dans le référentiel et de la télécharger avec ses dépendances.
	`
);

// JUnit

var junit = new Map();

junit.set("coursImg", "junit");

junit.set(
	"Description de JUnit",
	`
	JUnit est un Framework de tests pour Java créé par Kent Beck et Erich Gamma. Il permet de simplifier considérablement l’écriture des tests en offrant une panoplie d’outils. Le principal intérêt est de s'assurer que le code répond toujours aux besoins même après d'éventuelles modifications. Plus généralement, ce type de tests est appelé tests unitaires de non-régression. Sa première version était SUnit sortie en 1994, la version actuelle de JUnit est la version 5 sortie en 2016.
	`
);

junit.set(
	"Fonctionnalités de JUnit",
	`
	JUnit permet l'écriture de tests automatisés et à vérification automatique en Java. Il prit en charge des assertions de test.<br><br>
	JUnit est adapté au développement dirigé par les tests (Tests Driven Développement) dont la particularité majeure est de développer le test unitaire avant le code lui-même. Il garantit que le code source est minutieusement testé et conduit à un code modulaire, flexible et extensible. Il se concentre uniquement sur l'écriture du code nécessaire à la réussite des tests, rendant la conception simple et claire.<br><br>
	JUnit est également un outil permet de réaliser des tests de non-régressions du fait qu'il permet de valider que la mise en ligne d’une nouvelle fonctionnalité sur un logiciel n’impactera pas les fonctions déjà existantes.<br><br>
	Les tests JUnit génèrent des fichiers XML de rapport simples pour son exécution de test. Ces fichiers XML peuvent ensuite être utilisés pour générer des rapports personnalisés conformément aux exigences de test. <br><br>
	JUnit utilise les annotations pour identifier les méthodes de test (Après JUnit 4).
	`
);

junit.set(
	"Architecture de JUnit 5",
	`
	Une nouvelle approche, modulaire, était nécessaire pour permettre l’évolution du JUnit. La séparation logique des préoccupations requises :
	<ul>
	<li>Une API pour écrire des tests, dédiée principalement aux développeurs.</li>
	<li>Un mécanisme de découverte et d'exécution des tests.</li>
	<li>Et une API pour permettre une interaction facile avec les IDE et les outils et exécuter les tests à partir de ceux-ci.</li>
	</ul>
	En conséquence, l’architecture résultante de JUnit 5 contenait 3 modules :<br><br>
	<img src="img/junit/0.png" style="width: 70%;" class="image-center" /><br>
	<b>JUnit Platform</b> qui sert de base au lancement de frameworks de test sur la JVM. Il fournit également une API pour lancer des tests à partir de la console, des IDE ou des outils de génération.<br><br>
	<b>JUnit Jupiter</b> est la combinaison du nouveau modèle de programmation et du modèle d'extension pour l'écriture de tests et d'extensions dans JUnit 5.<br><br>
	<b>JUnit Vintage</b> fournit un moteur de test pour l'exécution de tests basés sur JUnit 3 et JUnit 4 sur la plate-forme, garantissant la compatibilité amont requise.
	`
);

junit.set(
	"Installation de JUnit",
	`
	On peut utiliser JUnit 5 dans notre projet maven ou gradle en incluant au moins deux dépendances, à savoir Jupiter Engine Dependency et Platform Runner Dependency :<br>
	<div class="code-section"><img src="img/junit/1.png" class="image" /></div>
	`
);

junit.set(
	"Les annotations JUnit",
	`
	Les annotations JUnit Jupiter principales sont situées dans le package <i>org.junit.jupiter.api</i> du module junit-jupiter-api.<br><br>
	Voici la liste des annotations de la configuration des tests et l'extension du cadre :
	<ul>
	<li><strong>@Test : </strong>La méthode est attachée peut être exécutée en tant que cas de test.</li>
	<li><strong>@ParameterizedTest : </strong>permet d'exécuter un test plusieurs fois avec des arguments différents.</li>
	<li><strong>@RepeatedTest : </strong>JUnit 5 a la capacité de répéter un test un nombre spécifié de fois en annotant simplement une méthode avec @RepeatedTest et en spécifiant le nombre total de répétitions souhaité.</li>
	<li><strong>@TestFactory : </strong>La méthode annotée est une fabrique pour des tests dynamiques.</li>
	<li><strong>@TestInstance : </strong>Configurer le cycle de vie des instances de tests.</li>
	<li><strong>@TestTemplate : </strong>La méthode est un modèle pour des cas de tests à exécution multiple.</li>
	<li><strong>@DisplayName : </strong>Les classes de test et les méthodes de test peuvent déclarer des noms d'affichage personnalisés qui seront affichés par les exécuteurs de tests et les rapports de tests.</li>
	<li><strong>@BeforeEach : </strong>L’annotation @BeforeEach indique que la méthode annotée doit être exécutée avant chaque méthode de test, de la même manière que @Before de JUnit 4.</li>
	<li><strong>@AfterEach : </strong>Cette annotation indique que la méthode annotée doit être exécutée après chaque méthode de test, à l’instar de @After de JUnit 4. Par exemple, si les tests doivent réinitialiser une propriété après chaque test, nous pouvons annoter une méthode avec @AfterEach pour cette tâche.</li>
	<li><strong>@BeforeAll : </strong>La méthode annotée sera exécutée une fois avant toutes les méthodes de test de la classe en cours.</li>
	<li><strong>@AfterAll : </strong>La méthode annotée sera exécutée une fois après toutes les méthodes de test de la classe en cours.</li>
	<li><strong>@Nested : </strong>Indiquer que la classe annotée correspond à un test imbriqué.</li>
	<li><strong>@Tag : </strong>Définir une balise sur une classe ou une méthode qui permettra de filtrer les tests exécutés.</li>
	<li><strong>@Disabled : </strong>cette annotation est utilisée pour désactiver ou ignorer les tests au niveau de la classe ou de la méthode. Ceci est analogue à @Ignore de JUnit 4.</li>
	<li><strong>@ExtendWith : </strong>Enregistrer une extension.</li>
	</ul>
	Les méthodes annotées avec les annotations @Test, @TestTemplate, @RepeatedTest, @BeforeAll, @AfterAll, @BeforeEach ou @AfterEach ne doivent pas renvoyer de valeur.<br><br>
	Exemple (@beforeEach) :<br>
	<div class="code-section"><img src="img/junit/2.png" class="image" /></div>
	Résultat : <br><br>
	<img src="img/junit/3.png" style="width: 50%;" class="image-center" /><br>
	`
);

junit.set(
	"Les assertions JUnit",
	`
	Les assertions sont des méthodes utilitaires permettant de prendre en charge les conditions d’affirmation dans les tests ** ; ces méthodes sont accessibles via la classe Assertions, dans JUnit 5.<br>
	<h4>Les assertions de l’égalité</h4>
	<ul>
	<li><strong>assertEquals()</strong>, <strong>assertNotEquals() :</strong> Si nous voulons vérifier qu’une certaines valeurs sont égales ou non , nous pouvons utiliser respectivement l’assertion assertEquals ou la assertNotEquals.</li>
	<li><strong>assertTrue(), assertFalse() :</strong> Si nous voulons vérifier qu’une certaine condition est true ou false , nous pouvons utiliser respectivement l’assertion assertTrue ou la assertFalse.</li>
	<li><strong>assertSame(),  assertNotSame(): </strong>Avec assertSame , il est possible de vérifier si deux variables font référence au même objet, Sinon, lorsque nous voulons vérifier que deux variables ne se rapportent pas au même objet, nous pouvons utiliser l’assertion assertNotSame .</li>
	</ul>
	<h4>Les assertions de Nullité</h4>
	Lorsque nous voulons tester si un objet est null , nous pouvons utiliser l’assertion <b>assertNull()</b>, Inversement, si nous voulons affirmer qu’un objet ne doit pas être nul, nous pouvons utiliser l’assertion <b>assertNotNull()</b>.<br>
	<h4>Les assertions d’exceptions</h4>
	L’assertion <b>assertThrows()</b> à nous offre un moyen clair et simple d’affirmer si un exécutable lève le type d’exception spécifié.
	<h4>Autres assertions</h4>
	<ul>
	<li><strong>assertThat() : </strong>L’assertion assertThat est la seule de JUnit 4 à avoir un ordre inverse des paramètres par rapport aux autres assertions. L’assertion comporte un message facultatif, la valeur réelle et un objet Matcher.</li>
	<li><strong>assertTimeout () : </strong>Si nous voulons affirmer que l’exécution d’un Executable fourni se termine avant un Timeout donné, nous pouvons utiliser l’assertion assertTimeout<strong>.</strong></li>
	</ul>
	Exemple (assertNotSame) :<br>
	<div class="code-section"><img src="img/junit/4.png" class="image" /></div>
	`
);

junit.set(
	"Les assumptions JUnit",
	`
	<h4>AssumeTrue</h4>
	La méthode <b>assumeTrue()</b> Permet d'exécuter la suite des traitements du test uniquement si la valeur booléenne fournie est true. Elle possède plusieurs surcharges qui attendent en paramètre la valeur booléenne (boolean ou BooleanSupplier) et un message affiché si le booléen vaut false (String ou Supplier<String>).<br>
	static void assumeTrue(boolean assumption)<br>
	static void assumeTrue(boolean assumption, String message)<br>
	static void assumeTrue(BooleanSupplier assumptionSupplier)<br>
	static void assumeTrue(boolean assumption, Supplier<String> messageSupplier)<br>
	static void assumeTrue(BooleanSupplier assumptionSupplier, String message)<br>
	static void assumeTrue(BooleanSupplier assumptionSupplier, Supplier<String> messageSupplier)<br>
	<h4>AssumeFalse</h4>
	La méthode <b>assumeFalse()</b> Permet d'exécuter la suite des traitements du test uniquement si la valeur booléenne fournie est false. Elle possède plusieurs surcharges qui attendent en paramètre la valeur booléenne (boolean ou BooleanSupplier) et un message affiché si le booléen vaut false (String ou Supplier<String>).<br>
	static void assumeFalse(boolean assumption)<br>
	static void assumeFalse(boolean assumption, String message)<br>
	static void assumeFalse(BooleanSupplier assumptionSupplier)<br>
	static void assumeFalse(boolean assumption, Supplier<String> messageSupplier)<br>
	static void assumeFalse(BooleanSupplier assumptionSupplier, String message)<br>
	static void assumeFalse(BooleanSupplier assumptionSupplier, Supplier<String> messageSupplier)<br>
	<h4>assumingThat</h4>
	La méthode <b>assumingThat()</b> Permet d'exécuter le traitement fourni uniquement si la valeur booléenne fournie est true. Elle possède deux surcharges qui attendent en paramètre la valeur booléenne sous la forme d'un boolean ou d'un BooleanSupplier et un objet de type Executable qui contient les traitements à exécuter.<br>
	static void assumingThat(boolean assumption, Executable executable)<br>
	static void assumingThat(BooleanSupplier assumptionSupplier, Executable executable).<br><br>
	Exemple : <br>
	<div class="code-section"><img src="img/junit/5.png" class="image" /></div>
	`
);

junit.set(
	"Les suites JUnit",
	`
	La suite de tests est utilisée pour regrouper quelques cas de tests unitaires et les exécuter ensemble. Dans JUnit, les annotations <b>@RunWith</b> et <b>@Suite</b> sont utilisées pour exécuter les tests de la suite.<br><br>
	<h4>Les étapes pour créer Test Suite et Test Runner</h4>
	On crée une classe de test simple (par exemple, ClassTestA) et ajoutez une méthode annotée avec @test.<br>
	<div class="code-section"><img src="img/junit/6.png" class="image" /></div>
	On crée une autre classe de test à ajouter (par exemple, ClassTestB) et créez une méthode annotée avec @test.<br>
	<div class="code-section"><img src="img/junit/7.png" class="image" /></div>
	Pour créer un testSuite, on doit d'abord annoter la classe avec @RunWith (Suite.class) et @SuiteClasses (class1.class2 ...).<br>
	<div class="code-section"><img src="img/junit/8.png" class="image" /></div>
	On crée une classe TestRunner pour exécuter notre suite de tests comme indiqué ci-dessous :<br>
	<div class="code-section"><img src="img/junit/9.png" class="image" /></div>
	Voici le résultat qui montre que le test a réussi sans trace d'échec, comme indiqué ci-dessous :<br><br>
	<img src="img/junit/10.png" style="width: 40%;" class="image-center" /><br><br>
	Voici la liste des annotations de la configuration d’une suite de tests :
	<ul>
	<li><strong>@ExcludeClassNamePatterns : </strong>Préciser une ou plusieurs expressions régulières que le nom pleinement qualifié des classes à exclure dans la suite doivent respecter.</li>
	<li><strong>@ExcludePackages : </strong>Préciser des packages dont les tests doivent être ignorés lors de l'exécution de la suite.</li>
	<li><strong>@ExcludeTags : </strong>Préciser des tags dont les tests doivent être ignorés lors de l'exécution de la suite.</li>
	<li><strong>@IncludeClassNamePatterns : </strong>Préciser une ou plusieurs expressions régulières que le nom pleinement qualifié des classes à inclure dans la suite doivent respecter.</li>
	<li><strong>@IncludePackages : </strong>Préciser des packages et leur sous-packages dont les tests doivent être utilisés lors de l'exécution de la suite.</li>
	<li><strong>@IncludeTags : </strong>Préciser des tags dont les tests doivent être utilisés lors de l'exécution de la suite.</li>
	<li><strong>@SelectClasses : </strong>Préciser un ensemble de classes à sélectionner lors de l'exécution de la suite de tests.</li>
	<li><strong>@SelectPackages : </strong>Préciser des packages dont les tests doivent être utilisés lors de l'exécution de la suite.</li>
	<li><strong>@UseTechnicalNames : </strong>Demander d'utiliser le nom technique plutôt que le nom par défaut.</li>
	</ul>
	`
);

// TestNG

var testng = new Map();

testng.set("coursImg", "testng");

testng.set(
	"Description de TestNG",
	`
	TestNG est un framework de test d’automatisation dans lequel NG signifie "Next Generation" créé par Cédric Beust. TestNG est inspiré de JUnit qui utilise les annotations (@). L'objectif de TestNG étant de couvrir un large spectre de catégories de tests unitaires, d'intégration, système et d'acceptation.
	`
);

testng.set(
	"Les fonctionnalités de TestNG",
	`
	À l’aide de TestNG, on peut générer un rapport approprié et savoir facilement combien de tests élémentaires sont passés, ont échoué et sont ignorés.<br><br>
	Nous pouvons exécuter le scénario de test ayant échoué séparément. Par exemple.<br><br>
	Supposons que nous avons cinq cas de test, une méthode est écrite pour chaque cas de test (supposons que le programme soit écrit en utilisant la méthode main sans utiliser testNG). Lorsque nous exécutons ce programme en premier, trois méthodes sont exécutées avec succès et la quatrième méthode échoue. Corrigons ensuite les erreurs présentes dans la quatrième méthode. Désormais, nous souhaitons exécuter uniquement la quatrième méthode, car les trois premières méthodes sont néanmoins exécutées avec succès. Ceci n'est pas possible sans utiliser TestNG.<br><br>
	TestNG fournit une option, c'est-à-dire un fichier testng-failed.xml dans le dossier test-output. Si nous souhaitons exécuter uniquement les cas de test ayant échoué, cela signifie que nous exécutons ce fichier XML. Il n'exécutera que les cas de test ayant échoué.<br>
	<h4>Caractéristique</h4>
	<ul>
	<li>Prend en charge les annotations.</li>
	<li>TestNG utilise plus de fonctionnalités Java et OO.</li>
	<li>Prend en charge le test des classes intégrées (par exemple, par défaut, il n'est pas nécessaire de créer une nouvelle instance de classe de test pour chaque méthode de test).</li>
	<li>Sépare le code de test à la compilation des informations de configuration / données au moment de l'exécution.</li>
	<li>Configuration d'exécution flexible.</li>
	<li>Introduit les 'groupes de test'. Une fois que vous avez compilé vos tests, nous pouvons simplement demander à TestNG d’exécuter tous les tests "front-end", ou "rapides", "lents", "de base de données", etc.</li>
	<li>Prend en charge les méthodes de test dépendantes, les tests en parallèle, les tests de charge et les défaillances partielles.</li>
	<li>API de plug-in flexible.</li>
	<li>Prise en charge des tests multi-threadés.</li>
	</ul>
	`
);

testng.set(
	"Les avantages de TestNG sur JUnit",
	`
	TestNG présente trois avantages majeurs sur JUnit :
	<ul>
	<li>Les annotations sont plus faciles à comprendre</li>
	<li>Les cas de test peuvent être regroupés plus facilement</li>
	<li>Le test en parallèle est possible</li>
	</ul>
	`
);

testng.set(
	"Les annotations TestNG",
	`
	Tout comme avec JUnit, il existe des annotations pour testNG, il y a les mêmes que JUnit ainsi que de nouvelles introduites par testNG. On peut regrouper ces différentes annotations :
	<ul>
	<li><strong>@BeforeSuite</strong> : La méthode annotée sera exécutée avant l'exécution de tous les tests de cette suite.</li>
	<li><strong>@AfterSuite</strong> : La méthode annotée sera exécutée une fois tous les tests de cette suite exécutés.</li>
	<li><strong>@BeforeTest</strong> : la méthode annotée sera exécutée avant toute méthode de test appartenant aux classes à l'intérieur de la balise.</li>
	<li><strong>@AfterTest</strong> : la méthode annotée sera exécutée une fois toutes les méthodes de test appartenant aux classes de la balise exécutées.</li>
	<li><strong>@BeforeGroups</strong> : la liste des groupes que cette méthode de configuration exécutera avant. Il est garanti que cette méthode sera exécutée peu de temps avant que la première méthode de test appartenant à l’un de ces groupes soit appelée.</li>
	<li><strong>@AfterGroups</strong> : la liste des groupes que cette méthode de configuration exécutera après. Il est garanti que cette méthode sera exécutée peu de temps après l’appel de la dernière méthode de test appartenant à l’un de ces groupes.</li>
	<li><strong>@BeforeClass</strong> : la méthode annotée sera exécutée avant l' appel de la première méthode de test de la classe actuelle.</li>
	<li><strong>@AfterClass</strong> : la méthode annotée sera exécutée une fois que toutes les méthodes de test de la classe en cours ont été exécutées.</li>
	<li><strong>@BeforeMethod</strong> : La méthode annotée sera exécutée avant chaque méthode de test.</li>
	<li><strong>@AfterMethod</strong> : La méthode annotée sera exécutée après chaque méthode de test.</li>
	<li><strong>@DataProvider</strong>: Cette annotation nous permet de définir les méthodes qui vont fournir des données à des méthodes de tests.</li>
	<li><strong>@Factory</strong>: Marque les méthodes comme étant des fournisseurs, ces méthodes doivent retourner un tableau d'Object.</li>
	<li><strong>@Listeners</strong>: Définit les listeners utilisés sur une classe de tests.</li>
	<li><strong>@Parameters</strong>: Décrit comment on passe les paramètres à notre méthode de tests.</li>
	<li><strong>@Test</strong> : La méthode annotée fait partie d'un scénario de test.</li>
	</ul>
	`
);

testng.set(
	"Installation de TestNG",
	`
	Commençons par ajouter la dépendance Maven dans notre fichier pom.xml :<br>
	<div class="code-section"><img src="img/testng/0.png" class="image" /></div>
	La dernière version peut être trouvée dans <a class="link" href="https://search.maven.org/classic/#search%7Cga%7C1%7Cg%3A%22org.testng%22%20AND%20a%3A%22testng%22">Maven repository</a>.<br><br>
	Lorsque on utilise Eclipse, le plug-in TestNG peut être téléchargé et installé à partir Marché Eclipse :<br>
	On ouvre Eclipse et on sélectionne Aide> Marché Eclipse.<br><br>
	<img src="img/testng/1.png" style="width: 30%;" class="image-center" /><br>
	Dans la section Rechercher de la boîte de dialogue Marché Eclipse, on entre TestNG, puis on clique sur OK. « TestNG for Eclipse » apparaîtra dans les résultats de la recherche.<br><br>
	On clique sur Installer pour installer le plug-in TestNG pour Eclipse.<br><br>
	<img src="img/testng/2.png" style="width: 40%;" class="image-center" /><br>
	On clique sur Confirmer pour confirmer les fonctionnalités.<br><br>
	<img src="img/testng/3.png" style="width: 40%;" class="image-center" /><br>
	On passe en revue les licences et on clique sur Terminer. Le plug-in sera installé.<br><br>
	<img src="img/testng/4.png" style="width: 40%;" class="image-center" /><br>
	On redémarre Eclipse pour que les modifications prennent effet et après, on crée un nouveau projet en Eclipse.<br><br>
	<img src="img/testng/5.png" style="width: 40%;" class="image-center" /><br>
	On sélectionne l'onglet Libraries, on clique sur Ajouter library, on sélectionne TestNG et on clique sur Suivant, puis on clique sur Terminer pour définir la bibliothèque TestNG par défaut sur ce projet.<br><br>
	<img src="img/testng/6.png" style="width: 40%;" class="image-center" /><br>
	`
);

testng.set(
	"Mise en œuvre de TestNG",
	`
	<h3>Écrire un cas de test</h3>
	Pour écrire un test en utilisant TestNG, il suffit d’annoter la méthode de test avec org.testng.annotations.Test annotation :<br>
	<div class="code-section"><img src="img/testng/20.png" class="image" /></div>
	<h3>Configuration de test</h3>
	Lors de l’écriture de scénarios de test, nous devons souvent exécuter certaines instructions de configuration ou d’initialisation avant l’exécution de tests, ainsi qu’un certain nettoyage une fois les tests terminés. TestNG fournit un certain nombre de fonctions d’initialisation et de nettoyage aux niveaux de la méthode, de la classe, du groupe et de la suite :<br>
	<div class="code-section"><img src="img/testng/7.png" class="image" /></div>
	La méthode <i>setup()</i> annotée avec les annotations <i>@BeforeClass</i> sera appelée avant l’exécution de toute méthode de cette classe de test et <i>tearDown()</i> après l’exécution de toutes les méthodes de la classe de test.
	<h3>Test d’exécution</h3>
	Nous pouvons exécuter les scénarios de test avec la commande «test» de Maven, qui exécutera tous les scénarios de test annotés avec @Test en les plaçant dans une suite de tests par défaut. Nous pouvons également exécuter des scénarios de test à partir des fichiers XML de la suite de tests TestNG :<br>
	<div class="code-section"><img src="img/testng/8.png" class="image" /></div>
	Si nous avons plusieurs fichiers XML couvrant tous les cas de test, nous pouvons tous les ajouter dans la balise <i>suiteXmlFiles</i> :<br>
	<div class="code-section"><img src="img/testng/9.png" class="image" /></div>
	Pour pouvoir exécuter le test en mode autonome, nous devons disposer de la bibliothèque TestNG dans le chemin de classe et de la classe de test compilée, ainsi que du fichier de configuration XML : <i>java org.testng.TestNG test__suite.xml</i>
	<h3>Regroupement de tests</h3>
	Les tests peuvent être exécutés en groupes. Par exemple, sur 50 scénarios de test, 15 peuvent être regroupés et exécutés, laissant les autres tels quels.<br><br>
	Dans TestNG, les tests de regroupement en suites sont effectués à l’aide d’un fichier XML :<br>
	<div class="code-section"><img src="img/testng/10.png" class="image" /></div>
	Les deux classes de test TestA, TestB appartiennent maintenant à la même suite et qu’une fois la suite exécutée, les scénarios de test de cette classe seront exécutés.<br><br>
	Outre les suites de tests, On peut créer des groupes de tests dans TestNG, les méthodes de classes de tests sont regroupées. Pour ce faire, on ajoute le paramètre groups dans l’annotation @Test :<br>
	<div class="code-section"><img src="img/testng/11.png" class="image" /></div>
	Pour lancer cet exemple, nous pouvons écrire cela dans le fichier testng.xml :<br>
	<div class="code-section"><img src="img/testng/12.png" class="image" /></div>
	Ceci exécutera la méthode de test étiquetée avec le groupe regression, dans la classe Test.
	<h3>Test paramétrés</h3>
	L'une des caractéristiques importantes de TestNG est le paramétrage. Cette fonctionnalité permet à l'utilisateur de passer des paramètres aux tests sous forme d'arguments. Ceci est pris en charge en utilisant l'annotation TestNG <i>@Parameters</i>.<br><br>
	Lorsque on utilise le fichier XML, on annote la méthode de test avec <i>@Parameter</i> :<br>
	<div class="code-section"><img src="img/testng/13.png" class="image" /></div>
	Et on fournisse les données en utilisant le fichier XML :<br>
	<div class="code-section"><img src="img/testng/14.png" class="image" /></div>
	<h3>Ignorer les cas de test</h3>
	Nous voulons parfois ne pas exécuter un certain cas de test, temporairement pendant le processus de développement. Cela peut être fait en ajoutant <i>enabled = false</i>, dans l’annotation @Test :<br>
	<div class="code-section"><img src="img/testng/15.png" class="image" /></div>
	<h3>Test dépendants</h3>
	La dépendance est une fonctionnalité de TestNG qui permet à une méthode de test de dépendre d’une ou de plusieurs méthodes de test. Cela aidera à exécuter un ensemble de tests à exécuter avant une méthode de test. La dépendance de méthode ne fonctionne que si la "méthode dépendante" fait partie de la même classe ou de l'une des classes de base héritées (c'est-à-dire lors de l'extension d'une classe). TestNG fournit cette fonctionnalité avec le paramètre <i>dependsOnMethods</i> de l’annotation @Test :<br>
	<div class="code-section"><img src="img/testng/16.png" class="image" /></div>
	Résultat :<br>
	<img src="img/testng/17.png" class="image-center" /><br>
	Cela montre que la méthode testA a été exécutée après testB car elle dépend de testB.
	<h3>Exécution de tests simultanés</h3>
	TestNG permet aux tests de s’exécuter en parallèle ou en mode multi-thread, offrant ainsi un moyen de tester ces morceaux de code multi-thread.<br><br>
	<b>Classes et méthodes en parallèle</b><br>
	Pour exécuter des classes de test en parallèle, mentionnez l’attribut parallel dans la balise suite du fichier de configuration XML, avec la valeur classes :<br>
	<div class="code-section"><img src="img/testng/18.png" class="image" /></div>
	Si nous avons plusieurs balises test dans le fichier XML, ces tests peuvent également être exécutés en parallèle, en mentionnant <i>parallel = "tests"</i>. Pour exécuter également des méthodes individuelles en parallèle, mentionnez <i>parallel = "méthodes"</i>.<br><br>
	<b>Exécution multi-thread de la méthode de test</b><br>
	TestNG permet d’exécuter une méthode de test dans plusieurs threads :<br>
	<div class="code-section"><img src="img/testng/19.png" class="image" /></div>
	<i>ThreadPoolSize</i> indique que la méthode sera exécutée dans le nombre n de threads indiqué. <i>InvocationCount</i> et <i>timeOut</i> indiquent que le test sera exécuté plusieurs fois et échouent s’il prend plus de temps.
	`
);

// Selenium

var selenium = new Map();

selenium.set("coursImg", "selenium");

selenium.set(
	"Description de Selenium",
	`
	Selenium est un framework, permettant d'effectuer des tests fonctionnels, c'est-à-dire qu'il peut enregistrer les tests métiers faits sur une application (Test d'une nouvelle fonctionnalité par exemple) dans l'optique d'avoir un ensemble de tests rejouables permettant d'assurer le bon fonctionnement de l'application.<br><br>
	Selenium offre la possibilité de créer des tests sur différents navigateurs (Chrome/Firefox/Opera...) et sur leurs différentes versions.<br><br>
	Selenium est composé de plusieurs outils logiciels. Chacun a un rôle spécifique :<br><br>
	<img src="img/selenium/0.png" style="width: 40%;" class="image-center" /><br>
	<h3>Selenium IDE</h3>
	Selenium IDE est un outil de prototypage permettant de créer des scripts de test. Il est le framework le plus simple de la suite Selenium et le plus simple à apprendre. Il s’agit d’un plugin Firefox et Chrome qui fournit une interface conviviale pour le développement de tests automatisés. <br><br>
	Selenium IDE possède une fonction d'enregistrement, qui enregistre les actions de l'utilisateur au fur et à mesure, puis les exporte sous forme de script réutilisable dans l'un des nombreux langages de programmation pouvant être exécutés ultérieurement. Si on souhaite créer des scénarios de test plus avancés, vous devrez utiliser Selenium RC ou WebDriver.
	<h3>WebDriver</h3>
	Il s'agit cette fois d'une API, disponible pour plusieurs langages, permettant de programmer des actions sur l'interface, et à vérifier les réponses. Les actions à réaliser peuvent être exportées depuis Selenium IDE.<br><br>
	Le WebDriver s'avère être meilleur que Selenium IDE et Selenium RC à bien des égards. Il implémente une approche plus moderne et stable dans l'automatisation des actions du navigateur. WebDriver, contrairement à Selenium RC, ne repose pas sur JavaScript pour l'automatisation. Il contrôle le navigateur en communiquant directement avec lui.<br><br>
	Sélénium 2 constitue l’orientation future du projet et la plus récente addition à la boîte à outils Sélénium. Ce tout nouvel outil d'automatisation fournit toutes sortes de fonctionnalités impressionnantes, y compris une API plus cohérente et orientée objet, ainsi qu'une réponse aux limitations de l'ancienne implémentation.
	<h3>Selenium Grid</h3>
	Selenium Grid est un outil utilisé conjointement avec Selenium RC pour exécuter des tests en parallèle sur différentes machines et différents navigateurs en même temps. L'exécution parallèle signifie l'exécution de plusieurs tests à la fois.
	`
);


selenium.set(
	"Installation (WebDriver)",
	`
	<h4>Téléchargement du pilote ChromeDriver</h4>
	Tous les principaux navigateurs fournissent leur propre implémentation de l'interface WebDriver. Par exemple, si vous testiez Chrome, le site Selenium vous indiquera :<br>
	<a class="link" href="https://sites.google.com/a/chromium.org/chromedriver/downloads">https://sites.google.com/a/chromium.org/chromedriver/downloads</a><br><br>
	On extrait l'archive ZIP et stocké le fichier exécutable chromedriver.exe.
	<h4>Ajout de la bibliothèque sélénium à notre projet dans Eclipse</h4>
	On télécharge la dernière version de la bibliothèque Java Selenium depuis :<br>
	<a class="link" href="https://www.seleniumhq.org/download/">https://www.seleniumhq.org/download</a><br><br>
	<img src="img/selenium/1.png" style="width: 50%;" class="image-center" /><br>
	On obtient les jars suivants : <br><br>
	<img src="img/selenium/2.png" style="width: 30%;" class="image-center" /><br>
	Dans Eclipse on va dans "Projet" → "Propriétés" pour intégrer le Sélénium WebDriver dans notre projet.<br><br>
	<img src="img/selenium/3.png"  class="image-center" /><br>
	Dans la boîte de dialogue, on va dans "Java Build Path" et ensuite pour enregistrer "Libraries." on clique sur "Add External JARs."<br><br>
	<img src="img/selenium/4.png" style="width: 65%;" class="image-center" /><br>
	On accéde au dossier qui vient d'être téléchargé avec la bibliothèque Selenium. On met tous les fichiers .jar et on clique sur "Ouvrir", la même chose pour tous les fichiers .jar dans le sous-dossier <i>libs</i> :<br><br>
	<img src="img/selenium/5.png" style="width: 65%;" class="image-center" /><br>
	Le Framework Selenium WebDriver a été intégré avec succès dans notre projet : <br><br>
	<img src="img/selenium/6.png" class="image-center" /><br>
	`
);

selenium.set(
	"Mise en œuvre de Selenium",
	`
	<h3>L’Interface WebElement</h3>
	WebElement est une interface qui Représente un élément HTML. En règle générale, toutes les opérations liées à l'interaction avec une page Web seront effectuées via cette interface.
	<h4>Actions sur les WebElements</h4>
	<ul>
	<li><strong>clear()</strong> : Effacer la valeur d’un élément.</li>
	<li><strong>click()</strong> : Cliquer un élément.</li>
	<li><strong>findElement()</strong> : Planifiez une commande pour trouver un descendant d’un élément.</li>
	<li><strong>findElements()</strong> : Localise tous les descendants d’un élément qui correspondent aux critères de recherche donnés.</li>
	<li><strong>getAttribute()</strong> : Récupère la valeur actuelle de l'attribut donné d’un élément.</li>
	<li><strong>getCssValue()</strong> : Récupère la valeur d'une propriété de style calculée pour une instance.</li>
	<li><strong>getDriver()</strong> : Le pilote parent pour une instance.</li>
	<li><strong>getId().</strong></li>
	<li><strong>getRect()</strong> : Renvoie un objet décrivant la position d'un élément, en pixels par rapport à l'élément de document, et la taille de l'élément en pixels.</li>
	<li><strong>getTagName()</strong> : Récupère le nom de la balise de l'élément.</li>
	<li><strong>getText()</strong> : Obtenez le visible (c'est-à-dire, pas caché par CSS) innerText d’un élément, y compris les sous-éléments, sans aucun espace au début ni à la fin.</li>
	<li><strong>isDisplayed()</strong> : Teste si un élément est actuellement affiché.</li>
	<li><strong>isEnabled()</strong> : Teste si un élément est activé, comme dicté par l'attribut disabled.</li>
	<li><strong>isSelected()</strong> : Teste si cet élément est sélectionné.</li>
	<li><strong>sendKeys()</strong> : Taper une séquence de clés sur l'élément DOM représenté par une instance.</li>
	<li><strong>submit()</strong> : Soumet le formulaire contenant cet élément (ou cet élément s'il s'agit d'un élément FORM). Sa commande est un no-op si l'élément n'est pas contenu dans un formulaire.</li>
	<li><strong>takeScreenshot()</strong> : Prenez une capture d'écran de la région visible entourée par le rectangle englobant de cet élément.</li>
	</ul>
	<h4>Types de localisateurs et leur syntaxe</h4>
	<ul>
	<li><strong>id</strong>: driver.findElement (By.id(“ID_of_Element”)), localiser par la valeur de l'attribut "id".</li>
	<li><strong>className</strong> : driver.findElement (By.className (“Class_of_Element”)), localiser par la valeur de l'attribut "class".</li>
	<li><strong>linkText</strong> : driver.findElement (By.linkText(“Text”)), localiser par valeur du texte du lien hypertexte.</li>
	<li><strong>partialLinkText</strong>: driver.findElement (By.partialLinkText (“PartialText”)), localiser par valeur du sous-texte du lien hypertexte.</li>
	<li><strong>name</strong>: driver.findElement (By.name (“Name_of_Element”)), localiser par la valeur de l'attribut "name".</li>
	<li><strong>xpath</strong> : findElement (By.xpath(“Xpath”)), localiser par la valeur du xpath.</li>
	<li><strong>cssSelector</strong>: driver.findElement (By.cssSelector (“CSS Selector”)), localiser par la valeur du sélecteur CSS.</li>
	<li><strong>tagName</strong>: driver.findElement (By.tagName(“input”)), localiser par la valeur de son nom de tag.</li>
	</ul>
	<h4>Exemples :</h4>
	<b>findElements, getAttribute : </b><br>
	La recherche le texte des boutons radio et imprimez-le sur la console de sortie :</br>
	Le code Java :<br>
	<div class="code-section"><img src="img/selenium/7.png" class="image" /></div>
	Le ficher HTML :<br>
	<div class="code-section"><img src="img/selenium/8.png" class="image" /></div>
	La page HTML :<br><br>
	<img src="img/selenium/9.png" class="image-center" /><br>
	Le résultat d’exécution :<br><br>
	<img src="img/selenium/10.png" class="image-center" /><br><br>
	<b>Entrer des valeurs dans les zones de saisie :</b><br>
	<i>SendKeys()</i> est la méthode disponible sur WebElement pour saisir du texte dans les champs de texte et les champs de mot de passe.<br><br>
	Code Java :<br>
	<div class="code-section"><img src="img/selenium/11.png" class="image" /></div>
	Fichier HTML :<br>
	<div class="code-section"><img src="img/selenium/12.png" class="image" /></div>
	Le résultat d’exécution :<br><br>
	<img src="img/selenium/13.png" class="image-center" /><br><br>
	<b>Lecture d'un tableau Web HTML</b><br>
	Il est parfois nécessaire d'accéder à des éléments (généralement des textes) contenus dans des tableaux HTML. Cependant, il est très rare qu'un concepteur Web fournisse un attribut id ou name à une cellule donnée de la table. Par conséquent, nous ne pouvons pas utiliser les méthodes habituelles telles que "By.id ()", "By.name ()" ou "By.cssSelector ()". Dans ce cas, l'option la plus fiable consiste à y accéder à l'aide de la méthode "By.xpath ()".<br><br>
	Le fichier HTML :<br>
	<div class="code-section"><img src="img/selenium/14.png" class="image" /></div>
	La page HTML :<br><br>
	<img src="img/selenium/15.png" class="image-center" /><br><br>
	Code Java :<br>
	<div class="code-section"><img src="img/selenium/16.png" class="image" /></div>
	XPath contient le chemin de l'élément situé sur la page Web.<br>
	//table/tbody/tr[2]/td[2] c’est-à-dire accéder à la quatrième cellule du tableau.<br>
	Le résultat d’exécution :<br><br>
	<img src="img/selenium/17.png" class="image-center" /><br><br>
	`
);

// JMeter

var jmeter = new Map();

jmeter.set("coursImg", "jmeter");

jmeter.set(
	"Description de JMeter",
	`
	JMeter est un logiciel qui a été créé le 15 décembre 1998 par Stefano Mazzocchi de Apache Software Foundation. Il est codé 100% en Java et son interface graphique est développée en Swing. Il est conçu pour analyser et mesurer les performances d'une application Web ou de divers services en simulant des utilisateurs et permet d'enregistrer les temps de réponse.<br><br>
	Le test de performance consiste à tester une application Web contre une charge de trafic lourde, multiple et simultanée. JMeter a été utilisé à l'origine pour tester l'application Web ou l'application FTP. De nos jours, il est utilisé pour un test fonctionnel, un test de serveur de base de données, etc.<br><br>
	La derniére version du JMeter est 5.1.1.
	`
);

jmeter.set(
	"Les avantages de JMeter",
	`
	<ul>
	<li><strong>Licence Open Source</strong> : JMeter est totalement gratuit, permet au développeur d’utiliser le code source pour le développement.</li>
	<li><strong>Interface graphique conviviale </strong>: JMeter est extrêmement facile à utiliser et ne prend pas le temps de se familiariser avec elle.</li>
	<li><strong>Indépendant de la plate-forme </strong>: JMeter est une application de bureau Java 100% pure. Donc, il peut fonctionner sur plusieurs plates-formes.</li>
	<li><strong>Framework multithreading complet</strong>: JMeter permet l'échantillonnage simultané et simultané de différentes fonctions par un groupe de threads séparé.</li>
	<li><strong>Visualiser le résultat du test</strong> : le résultat du test peut être affiché dans un format différent, tel qu'un graphique, un tableau, une arborescence et un fichier journal.</li>
	<li><strong>Installation facile </strong>: il suffit de copier et d’exécuter le fichier *.bat pour exécuter JMeter. Aucune installation nécessaire.</li>
	<li><strong>Très extensible </strong>: nous pouvons écrire nos propres tests. JMeter prend également en charge les plug-ins de visualisation vous permettant d'étendre nos tests</li>
	<li><strong>Stratégie de test multiple </strong>: JMeter prend en charge de nombreuses stratégies de test telles que le test de charge, le test distribué et le test fonctionnel.</li>
	<li><strong>Simulation</strong> : JMeter peut simuler plusieurs utilisateurs avec des threads simultanés, ce qui crée une charge importante pour l'application Web testée.</li>
	<li><strong>Prise en charge multiprotocole </strong>: JMeter ne prend pas seulement en charge le test des applications Web, mais évalue également les performances du serveur de base de données. Tous les protocoles de base tels que HTTP, JDBC, LDAP, SOAP, JMS et FTP sont pris en charge par JMeter.</li>
	<li><strong>Record &amp; Playback</strong>: enregistre l'activité de l'utilisateur sur le navigateur et simule-la dans une application Web à l'aide de JMeter.</li>
	<li><strong>Test de script </strong>: Jmeter peut être intégré à Bean Shell &amp; Selenium pour des tests automatisés.</li>
	</ul>
	`
);

jmeter.set(
	"Comment fonctionne JMeter",
	`
	JMeter simule un groupe d'utilisateurs qui envoient des demandes à un serveur cible et renvoie les informations statistiques du serveur cible via des diagrammes graphiques.<br><br>
	Le flux de travail de base de JMeter comme indiqué dans les figures ci-dessous :<br><br>
	<img src="img/jmeter/0.png" class="image-center" /><br><br>
	Le flux de travail terminé de JMeter comme indiqué dans la figure ci-dessous :<br><br>
	<img src="img/jmeter/1.png" class="image-center" /><br><br>
	`
);

jmeter.set(
	"Installation de JMeter",
	`
	JMeter est compatible avec Java 8 ou Java 9, un JRE / JDK correctement doit être installé et la variable d’environnement JAVA_HOME doit être définie.<br><br>
	La distribution Apache JMeter peut être téléchargée à partir du site officiel de JMeter :<br>
	<a class="link" href="http://jmeter.apache.org/download_jmeter.cgi">http://jmeter.apache.org/download_jmeter.cgi</a><br><br>
	Lorsque vous téléchargez et décompressez le fichier zip, il est extrait dans un répertoire appelé apache-jmeter-VERSION.
	`
);

jmeter.set(
	"Structure des répertoires JMeter",
	`
	Une fois la décompression terminée, la structure du répertoire d'installation doit ressembler à la figure ci-dessous.<br><br>
	<img src="img/jmeter/2.png" class="image-center" /><br>
	Ci-dessous, la description des répertoires JMeter et son importance. Le répertoire JMeter contient de nombreux fichiers et répertoires.
	<ul>
	<li><strong>/bin</strong> : contient le fichier de script JMeter pour le démarrage de JMeter.</li>
	<li><strong>/docs</strong> : fichiers de documentation JMeter.</li>
	<li><strong>/extras</strong> : fichiers supplémentaires liés à ant.</li>
	<li><strong>/lib/</strong> : contient la bibliothèque Java requise pour JMeter.</li>
	<li><strong>/lib/ext </strong>: contient les fichiers jar de base pour JMeter et les protocoles.</li>
	<li><strong>/lib/junit</strong> : bibliothèque Junit utilisée pour JMeter.</li>
	<li><strong>/printable_docs</strong>: contient une documentation/User Manual HTML pour aider les utilisateurs, aussi des références des différents composants, propriétés, fonctions.</li>
	</ul>
	`
);

jmeter.set(
	"Composants de JMeter",
	`
	Les composants de base de JMeter sont les éléments indispensables pour réaliser le test d'un Site Internet. Ces éléments sont obligatoirement présents :
	<ul>
	<li><strong>Test Plan</strong> : c’est à partir de cet emplacement que l’on peut définir ce que l’on veut tester et comment. On peut également y créer des variables (par exemple le nom d'un serveur à tester) qui pourront être réutilisée dans l'ensemble du test.</li>
	<li><strong>WorkBench</strong> : c'est l'emplacement qui permet de garder les composants de test non utilisés. Cela évite de les supprimer si on sait que l'on va les réutiliser par la suite.</li>
	<li><strong>Thread Group</strong> : c'est ici que sont définis les paramètres de la simulation : le nombre d'utilisateurs qui se connectent (Numbers of threads), l'intervalle de temps où ces utilisateurs se connectent (Ramp-up Period) et le nombre de fois où ces utilisateurs se connectent (Loop Count). On peut également spécifier que les utilisateurs se connectent indéfiniment en cochant la case Forever.</li>
	<li><strong>Logic Controller</strong> : Permet de définir le flux d'exécution et le regroupement des échantillonneurs. L'un des exemples utiles est Transaction Controller, où on peut combiner tous les échantillonneurs de la page de connexion (toutes les ressources, y compris les images, les fichiers .css et .js) de sorte que le temps de réponse combiné puisse être récupéré.</li>
	<li><strong>Samplers </strong>: c’est le cœur du JMeter. Il donne des composants pour simuler des requêtes de différents protocoles tels que HTTP, JDBC, FTP, SMTP etc. Par exemple, HTTP sampler permet de simuler un paquet HTTP (de GET, POST ou de toute méthode supportée). Les protocoles de flux principaux sont pris en charge, pour d'autres, vous pouvez utiliser des plug-ins gratuits ou commerciaux.</li>
	<li><strong>Listeners </strong>: montre les résultats de l'exécution du test. Ils peuvent afficher les résultats dans un format différent, comme un arbre, un tableau, un graphique ou un fichier journal.</li>
	<li><strong>Timers </strong>: les timers sont des composants permettant d’insérer une pause entre chaque requête envoyée, afin que la simulation soit plus réaliste.</li>
	<li><strong>Pre</strong> <strong>Processors</strong>: les Pre Processors sont des outils permettant de récupérer les liens et les formulaires d’une page (HTML Link Parser), de récupérer et renvoyer aux autres requêtes les paramètres passés dans l’URL de la page (HTML URL Re-writing Modifier) et de définir des variables spécifiques à chaque utilisateur (User Parameters) et qui peuvent être utilisée n'importe où dans le test avec la syntaxe \${nom_de_la_variable}.</li>
	<li><strong>Config Element</strong> : Les éléments de configuration peuvent être utilisés pour définir les valeurs par défaut et les variables à utiliser ultérieurement par les échantillonneurs. Par exemple CSV Dataset Config permet de fournir des données de test telles que les noms d'utilisateur, les mots de passe du scénario de connexion à partir d’un fichier csv.</li>
	<li><strong>Assertions</strong>: permettent de tester le contenu des données renvoyées par le serveur pour vérifier, soit qu'elles sont bien conformes à ce que l'on veut, soient qu'elles constituent un document valide.</li>
	</ul>
	`
);

jmeter.set(
	"Application JMeter",
	`
	<h3>Exemple 1 : Variabilisation de données</h3>
	Prenons l’exemple d’une application d’ajout des utilisateurs :<br><br>
	<img src="img/jmeter/3.png" class="image-center" /><br>
	Résultat : <br><br>
	<img src="img/jmeter/4.png" class="image-center" /><br>
	Et dans le cas d’erreur (le même identificateur) :<br><br>
	<img src="img/jmeter/5.png" class="image-center" /><br>
	JMeter comporte un élément permettant d'utiliser des fichiers de données externes au format CSV. Cet élément s'appelle "CSV Data Set Config". La configuration de l'ensemble de données CSV est utilisée pour lire les lignes d'un fichier et les scinder en variables.<br><br>
	On souhaite utiliser cet élément lors de la création de nos tests de performance dans JMeter.<br>
	Voici notre fichier csv :<br><br>
	<img src="img/jmeter/6.png" class="image-center" /><br>
	Il contient 3 utilisateurs, et 2 utilisateurs ont le même id.<br><br>
	On crée un plan de test. Le plan de test contient un groupe de threads en simulant 20 utilisateurs se connectant en une seconde, le tout répété une seule fois. Il faut sélectionner le Test Plan dans l'arborescence de gauche, puis insérer un Thread Group par un clic droit de la souris :<br><br>
	<img src="img/jmeter/7.png" class="image-center" /><br>
	<img src="img/jmeter/8.png" class="image-center" /><br>
	<img src="img/jmeter/9.png" class="image-center" /><br>
	Pour utiliser les données stockées dans le fichier csv, on ajoute un élément de configuration (Config Element) nommé CSV Data Set Config, On choisit le chemin de fichier, les noms des variables et enfin le délimiteur :<br><br>
	<img src="img/jmeter/10.png" class="image-center" /><br>
	<img src="img/jmeter/11.png" class="image-center" /><br>
	La configuration CSV comporte trois configurations.
	<ul>
	<li><strong>Recycle on EOF </strong>: s’il est défini sur true lorsque JMeter atteint la fin du fichier, il reviendra au début et itérera le fichier CSV.</li>
	<li><strong>Stop Thread on EOF</strong> : le thread arrêtera son exécution lorsque JMeter atteindra la fin du fichier. Si vous avez 20 itérations dans une boucle et 10 lignes de données, JMeter arrêtera l'exécution à la 10ème requête. Donc, cela va remplacer le nombre d'itérations.</li>
	<li><strong>Sharing Mode</strong> : Selon la configuration, vous décidez d'autoriser ou non d'autres groupes de threads à utiliser le fichier CSV.</li>
	</ul>
	Après, on ajoute la requête HTTP, on ajoute les paramètres de la méthode GET, et on utilise les variables qu’on a renseigné dans le dataset. On va activer l’option URL ENCODE afin d’encoder les caractères spéciaux s’ils sont présents dans les variables.<br><br>
	<img src="img/jmeter/12.png" class="image-center" /><br>
	<img src="img/jmeter/13.png" class="image-center" /><br>
	Ensuite, On ajoute deux response assertions :
	<ul>
	<li>La première pour assurer que la page contient le message : utilisateur bien enregistrée !</li>
	<li>La deuxième pour assurer que le code de la réponse est toujours 200.</li>
	</ul>
	<img src="img/jmeter/14.png" class="image-center" /><br>
	<img src="img/jmeter/15.png" class="image-center" /><br>
	<img src="img/jmeter/16.png" class="image-center" /><br>
	Enfin on ajoute un listener pour visualiser les détails de chaque requête envoyée :<br><br>
	<img src="img/jmeter/17.png" class="image-center" /><br>
	On lance le test, on peut voir dans le <i>View Results Tree</i> qu’une assertion a été échoué, Et c’est à cause des données dans le fichier CSV, On a dupliqué un identificateur.<br><br>
	<img src="img/jmeter/18.png" class="image-center" /><br>
	Les paramètres de la méthode GET :<br><br>
	<img src="img/jmeter/19.png" class="image-center" /><br>
	La réponse de la requête :<br><br>
	<img src="img/jmeter/20.png" class="image-center" /><br>
	<h3>Exemple 2 : Utilisation d'un jar personnalisé dans un BeanShell Sampler dans JMeter</h3>
	Dans cet exemple on va utiliser une classe Java personnalisées dans le BeanShell Sampler dans JMeter.<br>
	<ul>
	<li>Écriture d’une classe et des méthodes Java dans Eclipse.</li>
	<li>Création d’un fichier jar du projet.</li>
	<li>Importation le fichier jar vers l'emplacement JMeter.</li>
	<li>Utilisation de la méthode Java dans le BeanShell Sampler dans JMeter.</li>
	<li>Exécution du plan de test et vérification des résultats</li>
	</ul>
	On crée une classe simple qui fait la somme de deux nombres entiers.<br>
	<div class="code-section"><img src="img/jmeter/21.png" class="image" /></div>
	On crée un fichier jar à partir du projet, cliquez avec le bouton droit de la souris sur le projet, sélectionnez Exporter… et choisissez l’option Fichier jar dans la liste déroulante Java.<br><br>
	<img src="img/jmeter/22.png" class="image-center" /><br>
	Et on choisit l’emplacement du fichier :<br><br>
	<img src="img/jmeter/23.png" class="image-center" /><br>
	Maintenant on lance JMeter et on ajoute le fichier jar au plan de test JMeter sous la section Library :<br><br>
	<img src="img/jmeter/24.png" style="width:100%;" class="image-center" /><br>
	Puis on ajoute un groupe de threads et un BeanShell Sampler :<br><br>
	<img src="img/jmeter/25.png" class="image-center" /><br>
	On ajoute un code de test dans le BeanShell Sampler pour importer la classe et les méthodes :<br><br>
	<img src="img/jmeter/26.png" class="image-center" /><br>
	On exécute le code depuis le bouton run et consultez le résultat dans l’invite de commande lancer depuis jmeter.bat :<br><br>
	<img src="img/jmeter/27.png" class="image-center" /><br>
	`
);


//Java Logging API

var javaloggingapi = new Map();

javaloggingapi.set("coursImg", "javaloggingapi");

javaloggingapi.set(
	"L’API de journalisation",
	`
	L'API <i>java.util.logging</i> contient les classes pour gérer simplement des fichiers journaux (fichiers logs) dans lesquels les applications laissent une trace de leur exécution. Les lignes de ces journaux sont habituellement constituées de la date, l'heure, la classe et la méthode où s'est produit l'événement noté dans le journal, et un message. Plusieurs sources : les <i>loggers</i> peuvent écrire dans différents supports : les handlers des messages de différents niveaux.<br><br>
	L'API repose sur plusieurs classes principales et une interface :
	<ul>
	<li><strong>Logger</strong> : cette classe permet d'envoyer des messages dans le système de log</li>
	<li><strong>LogRecord</strong> : cette classe encapsule le message</li>
	<li><strong>Handler</strong> : cette classe représente la destination des messages</li>
	<li><strong>Formatter</strong> : cette classe permet de formater le message avant son envoi vers la destination</li>
	<li><strong>Filter</strong> : cette interface, dont le but est de déterminer si le message sera enregistré, doit être implémentée par les classes désireuses de filtrer les messages</li>
	<li><strong>Level</strong> : cette classe représente le niveau de gravité du message</li>
	<li><strong>LogManager</strong> : cette classe est un singleton qui permet de gérer l'état des Loggers</li>
	</ul>
	`
);

javaloggingapi.set(
	"Niveaux de journalisation Java",
	`
	Parce que nous voulons laisser le code de journalisation dans une application qui entre en production, nous avons besoin que la journalisation nous coûte très peu au moment de l'exécution, lorsqu'il n'est pas utilisé. Pour ce faire, le système de journalisation définit une classe appelée Level afin de spécifier l'importance d'un enregistrement de journalisation. La bibliothèque de journalisation possède un ensemble de niveaux de journalisation prédéfinis :
	<ul>
	<li><strong>SEVERE</strong>: La plus haute valeur ; destiné aux messages extrêmement importants (par exemple, erreurs de programme fatales).</li>
	<li><strong>WARNING</strong>: Destiné aux messages d'avertissement.</li>
	<li><strong>INFO</strong>: Messages d’information d’exécution.</li>
	<li><strong>CONFIG</strong>: Messages d'information sur les paramètres de configuration / la configuration.</li>
	<li><strong>FINE</strong>: Utilisé pour plus de détails lors du débogage / diagnostic des problèmes.</li>
	<li><strong>FINER</strong>: Encore plus de détails.</li>
	<li><strong>FINEST</strong>: La valeur la plus basse ; plus grand détail.</li>
	</ul>
	<p>En plus de ces niveaux, il existe un niveau <strong>ALL</strong>, qui permet de consigner tous les enregistrements, et un autre appelé <strong>OFF</strong>, pouvant être utilisé pour désactiver la consignation. Il est également possible de définir des niveaux personnalisés, mais dans cet article, nous nous en tiendrons aux niveaux prédéfinis.</p>
	<p>Par défaut, seuls les enregistrements de niveau <em>Level.INFO</em> ou supérieur seront consignés dans la console.</p>
	`
);

javaloggingapi.set(
	"Hiérarchie de journalisation et transmission des enregistrements",
	`
	<p>Une fois qu'un <em>Logger</em> particulier décide d'enregistrer un <em>LogRecord</em>, il l'envoie non seulement aux <em>Handler</em>(s) qui lui sont rattachés, mais il transfère également l'enregistrement au <em>Logger</em> parent. Le <em>Logger</em> parent n'effectue aucune vérification de niveau ou de <em>Filtre</em>, mais le transfert à un ou plusieurs <em>Handler</em>(s) attachés et le transmet à son <em>Logger</em> parent. Finalement, l’enregistrement atteint le <em>Logger</em> racine. Le Logger racine a un <em>ConsoleHandler</em> qui produit la sortie que nous voyons.</p>
	`
);

javaloggingapi.set(
	"Exemple d'utilisation de Java logging API",
	`
	Pour aider à motiver l'utilisation de l'API de journalisation, nous utiliserons un programme simple "Hello MQL" :<br>
	<div class="code-section"><img src="img/javaloggingapi/0.png" class="image" /></div>
	La classe Main :<br>
	<div class="code-section"><img src="img/javaloggingapi/1.png" class="image" /></div>
	Nous développerons ce programme simple afin de démontrer et de motiver l’API de journalisation. La première chose à faire est de générer un message de journalisation. Ceci est simple, nous devons créer un objet Logger, qui représente la classe HelloMQL, comme suit :<br>
	<div class="code-section"><img src="img/javaloggingapi/2.png" class="image" /></div>
	Maintenant, quand nous exécutons ce programme, nous voyons une sortie comme ceci :<br><br>
	<img src="img/javaloggingapi/3.png" class="image-center" />

	`
);

javaloggingapi.set(
	"Les classes Handler",
	`
	<p>Les classes Handler sont les classes représentant les différents supports dans lesquels les messages sont écrits. Ces messages sont écrits en utilisant un Formatter. Les classes Handler ont un niveau : les messages d'un niveau inférieur ne sont pas pris en compte. Le format <em>SimpleFormatter</em> est le format par défaut d'un <em>ConsoleHandler</em> et le format <em>XMLFormatter</em> est le format par défaut de <em>FileHandler</em> et <em>SoketHandler</em>.</p><br>
	<img src="img/javaloggingapi/4.png" class="image-center" /><br>
	<ul>
	<li><strong>StreamHandler</strong> : envoie des messages dans un flux de sortie.</li>
	<li><strong>ConsoleHandler</strong> : envoie des messages sur la sortie standard d'erreurs.</li>
	<li><strong>FileHandler</strong> : envoie des messages sur un fichier.</li>
	<li><strong>SocketHandler</strong> : envoie des messages dans une socket réseau.</li>
	<li><strong>MemoryHandler</strong> : envoie des messages dans un tampon en mémoire.</li>
	</ul>
	Exemple :<br>
	<div class="code-section"><img src="img/javaloggingapi/5.png" class="image" /></div>
	L’exécution génère le document XML suivant :<br>
	<div class="code-section"><img src="img/javaloggingapi/6.png" class="image" /></div>
	`
);

javaloggingapi.set(
	"L'interface Filter",
	`
	<p>L'interface <em>java.util.logging.Filter</em> définit une seule méthode <em>isLoggable(LogRecord)</em> qui retourne un booléen. Cette méthode permet de déterminer si le message doit être loggué ou non. Si la méthode renvoie false alors l'objet de type <em>LogRecord</em> est ignoré.</p>
	<p>Un objet de type <em>Filter</em> peut être associé à un Logger ou à un Handler. La méthode <em>setFilter()</em> de la classe Logger permet de lui associer un filtre.</p>
	<p>Pour créer son propre filtre, il suffit de créer une classe qui implémente l'interface <em>Filter</em>.</p>
	`
);

javaloggingapi.set(
	"La classe Formatter",
	`
	<p>La classe Formatter permet de formater un message. Une instance de type Formatter est associée à chaque Handler.</p>
	<p>Le Framework propose deux implémentations :</p>
	<ul>
	<li><strong>SimpleFormatter</strong> : pour formater l'enregistrement sous forme de chaînes de caractères.</li>
	<li><strong>XMLFormatter</strong> : pour formater l'enregistrement en XML.</li>
	</ul>
	<p>Exemple :</p>
	<div class="code-section"><img src="img/javaloggingapi/7.png" class="image" /></div>
	<p>La classe HelloMQL :</p>
	<div class="code-section"><img src="img/javaloggingapi/8.png" class="image" /></div>
	<p>Résultat :</p>
	<img src="img/javaloggingapi/9.png" class="image-center" />
	`
);

// Log4j

var log4j = new Map();

log4j.set("coursImg", "log4j");

log4j.set(
	"Description de Log4j",
	`
	<p>Log4j est une API de journalisation très répandue dans le monde Java. Il s'agit d'un système hautement configurable, que ce soit au niveau de ce qui doit être enregistre ou de la destination des enregistrements (serveur de logging, fichiers tournants, etc.).</p>
	<p>Log4j utilise trois composants principaux pour assurer l'envoi de messages selon un certain niveau de gravité et contrôler à l'exécution le format et la ou les cibles de destination des messages :</p>
	<ul>
	<li><strong>Category/Logger</strong> : ces classes permettent de gérer les messages associés à un niveau de gravité</li>
	<li><strong>Appenders</strong> : ils représentent les flux qui vont recevoir les messages de log</li>
	<li><strong>Layouts</strong> : ils permettent de formater le contenu des messages de log</li>
	</ul>
	<p>Les principales caractéristiques de Log4j sont :</p>
	<ul>
	<li>Utilisation d'une hiérarchie de loggers basée sur leurs noms</li>
	<li>Support en standard de plusieurs niveaux de gravité</li>
	<li>Configuration externalisable dans un fichier au format .properties ou XML</li>
	<li>Thread-safe</li>
	<li>Optimisé pour réduire les temps de traitements</li>
	<li>Prise en charge des exceptions associables aux messages</li>
	<li>Support de nombreuses cibles de destination des messages</li>
	<li>Extensible</li>
	</ul>
	`
);

log4j.set(
	"Installation de Log4j",
	`
	<p>Il faut télécharger le fichier apache-log4j-VERSION.zip à l'url <a class="link" href="https://logging.apache.org/log4j/2.x/download.html">https://logging.apache.org/log4j/2.x/download.html</a></p>
	<p>Il suffit ensuite de décompresser l'archive dans un répertoire du système. L'archive contient entre autres les sources, la documentation, des exemples et la bibliothèque log4j-VERSION.jar.</p>
	<p>Une autre alternative est de créer un projet Maven en ajoutant les dépendances de log4j dans le fichier pom.xml :</p>
	<div class="code-section"><img src="img/log4j/10.png" class="image" /></div>
	`
);

log4j.set(
	"Un exemple de mise en œuvre de Log4j",
	`
	<p>Cette partie va mettre en oeuvre Log4j dans un exemple très simple.</p>
	<p>Il faut créer un fichier log4j.properties stocké dans le classpath de l'application : ce fichier contient la configuration de Log4j pour l'application.</p>
	<div class="code-section"><img src="img/log4j/11.png" class="image" /></div>
	<p>Cette configuration définit le niveau de gravité DEBUG pour le logger racine et lui associe un logger nommer arbitrairement stdout. Par héritage, tous les loggers de l'application vont hériter de cette configuration.</p>
	<p>L'appender nommé stdout est de type ConsoleAppender : il envoie les messages sur la console standard.</p>
	<p>Un layout personnalisé est associé à l'appender nommé stdout pour formater les messages. Chaque séquence commençant par le caractère % sera remplacée dynamiquement par sa valeur correspondante. Par exemple : %d correspond à la date/heure, %p au niveau de gravité, %m le message, %n une nouvelle ligne, ...</p>
	<p>Pour mettre en oeuvre l'API dans le code source, il faut tout d'abord obtenir une instance du logger à utiliser en utilisant la méthode getLogger() de la classe Logger.</p>
	<p>Chaque message est émis en utilisant la méthode correspondant au niveau de gravité choisi de la classe Logger :</p>
	<div class="code-section"><img src="img/log4j/12.png" class="image" /></div>
	<p>L'exécution de cette classe permet d'afficher sur la console les différents messages :</p>
	<img src="img/log4j/13.png" class="image-center" />
	<p>Une simple modification du fichier de configuration permet de changer le niveau de gravité des messages pris en compte. Par exemple en remplaçant DEBUG par ERROR.</p>
	<p>La réexécution de la classe qui n'a pas été modifiée et donc pas recompilée permet d'afficher sur la console uniquement les messages dont la gravité est supérieure ou égale à ERROR.</p>
	<img src="img/log4j/14.png" class="image-center" />
	`
);

log4j.set(
	"Configuration Log4j par fichier xml",
	`
	<p>La structure des données contenues dans le fichier XML est organisée en plusieurs parties définies dans la DTD log4j.dtd et comprend :</p>
	<p>La définition et la configuration des Appenders</p>
	<ul>
	<li>La définition et la configuration des Logger</li>
	<li>La configuration du logger racine</li>
	</ul>
	<p>Voici un exemple de fichier de configuration XML dans lequel on a deux Appenders ceux de la console et d’un fichier .log.</p>
	<br>
	<p><strong>Journalisation dans la console</strong></p>
	<p>Si nous souhaitons afficher la journalisation dans la console, nous devons avoir les lignes suivantes dans log4j.xml :</p>
	<div class="code-section"><img src="img/log4j/15.png" class="image" /></div>
	<p>Résultat : </p>
	<img src="img/log4j/16.png" class="image-center" /><br>
	<p><strong>Journalisation dans un fichier</strong></p>
	<p>Si nous souhaitons afficher la journalisation dans un fichier, nous devons avoir les lignes suivantes dans log4j.xml et également indiquer le nom du fichier journal.</p>
	<div class="code-section"><img src="img/log4j/17.png" class="image" /></div>
	<p>Résultat</p>
	<img src="img/log4j/18.png" class="image-center" /><br>
	`
);

// Logback

var logback = new Map();

logback.set("coursImg", "logback");

logback.set(
	"Description de Logback",
	`
	Logback est destiné à succéder au projet log4j populaire. Il a été conçu par Ceki Gülcü, fondateur de log4j. Il s'appuie sur une décennie d'expérience acquise dans la conception de systèmes d'exploitation forestière performants. Le produit résultant, à savoir la journalisation, est plus rapide et son encombrement est inférieur à celui de tous les systèmes de journalisation existants, parfois avec une marge importante. De manière tout aussi importante, la consignation offre des fonctionnalités uniques et plutôt utiles qui manquent dans les autres systèmes de journalisation.
	`
);

logback.set(
	"Architecture de Logback",
	`
	<p>L’architecture de base de la consignation est généralement générique et s’applique dans différentes circonstances. À l’heure actuelle, la consignation est divisée en trois modules : logback-core, logback-classic et logback-access.</p>
	<p>Le module de base jette les bases des deux autres modules. Le module classique étend le noyau. Le module classique correspond à une version considérablement améliorée de log4j. Logback-classic implémente nativement l'API SLF4J afin que vous puissiez facilement basculer entre les systèmes de consignation et les autres systèmes de journalisation tels que log4j ou java.util.logging (JUL) introduit dans JDK 1.4. Le troisième module appelé access s'intègre aux conteneurs Servlet pour fournir la fonctionnalité de journal d'accès HTTP. Un document séparé couvre la documentation du module d'accès.</p>
	<p>Logback est construit sur trois classes principales : <em>Logger</em>, <em>Appender</em> et <em>Layout</em>. Ces trois types de composants fonctionnent ensemble pour permettre aux développeurs de journaliser les messages en fonction du type et du niveau de message et de contrôler au moment de l'exécution le formatage de ces messages et le lieu où ils sont rapportés.</p>
	<p>La classe <em>Logger</em> fait partie du module logback-classic. D'autre part, les interfaces <em>Appender</em> et <em>Layout</em> font partie de logback-core. En tant que module polyvalent, logback-core n'a aucune notion d'enregistreur.</p>
	`
);

logback.set(
	"Installation de logback",
	`
	<p>Logback utilise la SLF4J (Simple Logging Facade for Java) comme interface native. Avant de pouvoir commencer à enregistrer des messages, nous devons ajouter Logback et Slf4j à notre pom.xml :</p>
	<div class="code-section"><img src="img/logback/19.png" class="image" /></div>
	<p>Maven Central dispose de la dernière version de Logback-Core et de la version la plus récente de slf4j-api.</p>
	<p>Logback nécessite également logback-classic.jar sur le chemin d'accès aux classes pour l'exécution.</p>
	<p>Nous allons ajouter ceci à pom.xml en tant que dépendance de test :</p>
	<div class="code-section"><img src="img/logback/20.png" class="image" /></div>
	`
);

logback.set(
	"Première application Logback",
	`
	<p>Tout d'abord, nous avons besoin d'un fichier de configuration. Nous allons créer un fichier texte nommé logback.xml et le placer quelque part dans notre chemin de classe :</p>
	<div class="code-section"><img src="img/logback/21.png" class="image" /></div>
	<p>Il crée un <em>appender</em> de la classe <em>ConsoleAppender</em> qui produira des messages de journal sur la console, comme le ferait normalement <em>System.out.print</em>. Un modèle est défini pour que les messages de journal adhèrent. Il est fourni avec certaines notations qui sont remplacées par des valeurs générées en fonction du message envoyé à l'enregistreur. Certaines notations ont été incluses dans l'exemple et vous trouverez ci-dessous des explications sur ce que chacun fait.</p>
	<p><strong>%d</strong> : affiche l'heure à laquelle le message de journal s'est produit dans les formats autorisés par SimpleDateFormat.</p>
	<p><strong>%t</strong> : renvoie le nom du thread dans lequel le message de journal s'est produit.</p>
	<p><strong>%-5level</strong> : renvoie le niveau de journalisation du message de journal.</p>
	<p><strong>% logger{36}</strong> : renvoie le package + le nom de la classe dans laquelle le message de journalisation s'est produit. Le nombre entre parenthèses représente la longueur maximale du paquet + le nom de la classe. Si la sortie est plus longue que la longueur spécifiée, une sous-chaîne du premier caractère de chaque paquet individuel sera créée en commençant par le paquet racine jusqu'à ce que la sortie soit inférieure à la longueur maximale. Le nom de la classe ne sera jamais réduit. Un beau diagramme de ceci peut être trouvé dans la documentation de mots de conversion.</p>
	<p><strong>%msg</strong> : renvoie le message de journal réel.</p>
	<p><strong>%n</strong> - saut de ligne.</p>
	<p>Voici le programme qui montre comment écrire un simple exemple de journal en Java :</p>
	<div class="code-section"><img src="img/logback/22.png" class="image" /></div>
	<p>Cette classe crée un enregistreur et appelle getMessage() pour générer un message de journalisation.</p>
	<p>Lors de l'exécution initiale du programme suivant, on obtient la sortie suivante :</p>
	<img src="img/logback/23.png" class="image-center" /><br>
	`
);

logback.set(
	"FileAppender",
	`
	<p>FileAppender, une sous-classe de OutputStreamAppender, ajoute les événements de journal dans un fichier. Le fichier cible est spécifié par l'option Fichier. Si le fichier existe déjà, il est soit ajouté à, soit tronqué en fonction de la valeur de la propriété append.</p>
	<p>Voici un exemple du fichier de configuration pour FileAppender :</p>
	<div class="code-section"><img src="img/logback/24.png" class="image" /></div>
	<p>Résultat</p>
	<img src="img/logback/25.png" class="image-center" /><br>
	`
);

// DP

var dp = new Map();

dp.set("coursImg", "dp");

dp.set(
	"Que sont les Design Patterns ?",
	`
	<p>Les design patterns ou modèles de conception décrivent des organisations pratiques de classes objets. Ces organisations résultent souvent d'une conception empirique, le concepteur objet tente de faciliter la réutilisation et la maintenance du code. On peut donc concevoir un modèle d'application comme une forme d'organisation transposable à plusieurs applications. Ces systèmes peuvent apparaître complexes aux débutants voire inutiles, il est pourtant très important d'en connaître plusieurs et de les appliquer systématiquement (dans les cas reconnus comme pouvant évoluer). L'architecte objet se construit petit à petit un "panier" de modèles.</p>
	<p>Les design patterns offrent des solutions aux problèmes courants de conception d'applications. Dans la programmation orientée objet, les modèles de conception sont généralement ciblés pour résoudre les problèmes liés à la création et à l'interaction d'objets, plutôt qu'aux problèmes à grande échelle rencontrés par l'architecture logicielle globale. Ils proposent des solutions généralisées sous forme de passe-partout pouvant être appliqués à des problèmes concrets.</p>
	<p>Chaque pattern décrit un problème récurrent dans notre environnement, ainsi que ce qui constitue le noyau de la solution à ce problème, d’une telle façon que vous pouvez utiliser cette solution un million de fois sans jamais le faire deux fois de la même façon.</p>
	`
);

dp.set(
	"Nécessité des design patterns",
	`
	<p>Les design patterns sont utilisés pour :</p>
	<ul>
	<li>Pour accélérer le processus de développement en fournissant des paradigmes de développement éprouvés.</li>
	<li>Pour anticiper des problématiques qui peuvent ne devenir visibles que plus tard dans la mise en œuvre.</li>
	<li>Pour améliorer la lisibilité du code en fournissant une standardisation.</li>
	</ul>
	`
);

dp.set(
	"Intercepting Filter",
	`
	<p>Le mécanisme de traitement des demandes de la couche présentation reçoit de nombreux types de demandes différents, qui nécessitent différents types de traitement. Certaines demandes sont simplement transmises au composant de gestionnaire approprié, tandis que d'autres doivent être modifiées, auditées ou décompressées avant d'être traitées ultérieurement.</p>
	<p>Un des meilleurs exemples d'interception de modèle de filtre est DelegatingFilterProxy de Spring Security, qui intercepte la requête HTTP et effectue la vérification de l'authentification. La sécurité de printemps s'appuie sur une chaîne de filtres.</p>
	<p>Voyons comment le modèle de filtre d'interception résout le problème à l'aide d'exemples. Ce modèle est divisé en plusieurs sections pour des raisons de simplicité : problème, solution, implémentation, etc.</p>
	<br><h3>Problème</h3>
	<p>Le pré-traitement et le post-traitement d'une requête Web client et d'une réponse sont requis. Lorsqu'une demande entre dans une application Web, elle doit souvent passer plusieurs tests d'entrée avant l'étape de traitement principale. Par exemple :</p>
	<ul>
	<li>Le client a-t-il été authentifié ?</li>
	<li>Le client a-t-il une session valide ?</li>
	<li>L'adresse IP du client provient-elle d'un réseau approuvé ?</li>
	<li>Le chemin de la demande enfreint-il des contraintes ?</li>
	<li>Quel codage le client utilise-t-il pour envoyer les données ?</li>
	<li>Est-ce que nous supportons le type de navigateur du client ?</li>
	</ul>
	<p>Certaines de ces vérifications sont des tests, aboutissant à une réponse par oui ou par non qui détermine si le traitement va continuer. D'autres contrôles manipulent le flux de données entrant sous une forme adaptée au traitement. Vous souhaitez intercepter et manipuler une demande et une réponse avant et après le traitement de la demande.</p>
	<p>La solution classique consiste en une série de vérifications conditionnelles, toute vérification ayant échoué mettant fin à la demande. Les instructions if/else imbriquées sont une stratégie standard, mais cette solution conduit à la fragilité du code et à un style de programmation copier-coller, car le flux de filtrage et l'action des filtres sont compilés dans l'application.</p>
	<p>La solution pour résoudre ce problème de manière souple et discrète consiste à disposer d’un mécanisme simple d’ajout et de suppression de composants de traitement, dans lequel chaque composant complète une action de filtrage spécifique.</p>
	<br><h3>Motivation</h3>
	<ul>
	<li>Le traitement commun, tel que la vérification du schéma de codage des données ou la consignation des informations relatives à chaque demande, est terminé pour chaque demande.</li>
	<li>La centralisation de la logique commune est souhaitée.</li>
	<li>Les services doivent être faciles à ajouter ou à supprimer de manière discrète sans affecter les composants existants, afin de pouvoir être utilisés dans une variété de combinaisons, telles que :
	<ul>
	<li>Journalisation et authentification.</li>
	<li>Débogage et transformation de la sortie pour un client spécifique.</li>
	<li>Décompression et conversion du schéma d'encodage d'entrée.</li>
	</ul>
	</li>
	</ul>
	<br><h3>Solution</h3>
	<p>Créez des filtres enfichables pour traiter les services courants de manière standard sans nécessiter de modification du code de traitement de la requête principale. Les filtres interceptent, les demandes entrantes et les réponses sortantes, permettant ainsi un prétraitement et un post-traitement. Nous sommes en mesure d'ajouter et de supprimer ces filtres de manière discrète, sans nécessiter de modification de notre code existant.</p>
	<p>Nous sommes en mesure de décorer notre traitement principal avec une variété de services communs, tels que la sécurité, la journalisation, le débogage, etc. Ces filtres sont des composants indépendants du code de l'application principale et peuvent être ajoutés ou supprimés de manière déclarative. Par exemple, un descripteur de déploiement peut être modifié pour configurer une chaîne de filtres. Le même fichier de configuration peut inclure un mappage d'URL spécifiques sur cette chaîne de filtres. Lorsqu'un client demande une ressource correspondant à ce mappage d'URL configuré, les filtres de la chaîne sont chacun traités dans l'ordre avant que la ressource cible demandée ne soit appelée.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<p><u>Centralise le contrôle avec des gestionnaires faiblement couplés</u></p>
	<p>Les filtres constituent un emplacement central pour le traitement de plusieurs demandes, à l'instar d'un contrôleur. Les filtres sont mieux adaptés au traitement des demandes et des réponses pour un traitement ultime par une ressource cible, telle qu'un contrôleur. En outre, un contrôleur associe souvent la gestion de nombreux services communs non liés, tels que l'authentification, la journalisation, le cryptage, etc., tandis que le filtrage permet de créer des gestionnaires beaucoup plus faiblement couplés, qui peuvent être combinés de différentes manières.</p>
	<p><u>Améliore la réutilisabilité</u></p>
	<p>Les filtres favorisent le partitionnement des applications plus propres et encouragent la réutilisation. Ces intercepteurs enfichables sont ajoutés ou supprimés de manière transparente du code existant et, en raison de leur interface standard, ils fonctionnent dans n'importe quelle combinaison et sont réutilisables pour diverses présentations.</p>
	<p><u>Configuration déclarative et flexible</u></p>
	<p>De nombreux services sont combinés dans différentes permutations sans une seule recompilation de la base de code.</p>
	<p><u>Le partage d'informations est inefficace</u></p>
	<p>Le partage d'informations entre les filtres peut s'avérer inefficace puisque, par définition, chaque filtre est faiblement couplé. Si de grandes quantités d'informations doivent être partagées entre les filtres, cette approche peut s'avérer coûteuse.</p>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le Intercepting Filter design pattern.</p>
	<img src="img/dp/0.png" class="image-center" /><br>
	<p><strong>Filtre</strong></p>
	<p>Le filtre est responsable de l'exécution d'une tâche particulière avant ou après l'exécution de la demande par son gestionnaire de demandes.</p>
	<p><strong>Target</strong></p>
	<p>La cible est en fait l'objet cible, un gestionnaire de demandes.</p>
	<p><strong>FilterChain</strong></p>
	<p>La chaîne de filtres porte une chaîne de filtres qui doivent être implémentés sur la cible, dans un ordre différent et défini.</p>
	<p><strong>FilterManager</strong></p>
	<p>Le gestionnaire de filtres est responsable de la gestion des filtres et de la chaîne de filtres.</p>
	<p><strong>Client</strong></p>
	<p>Le client est l'objet qui envoie les demandes à l'objet cible.</p>
	<br><h3>Implémentation</h3>
	<p>Nous allons créer un FilterChain, un FilterManager, une cible et un client sous forme d'objets divers représentant nos entités. AuthenticationFilter et DebugFilter représentent des filtres concrets.</p>
	<p>L’interface Filter :</p>
	<div class="code-section"><img src="img/dp/1.png" class="image" /></div>
	<p>Le filter concret AuthentificationFilter :</p>
	<div class="code-section"><img src="img/dp/2.png" class="image" /></div>
	<p>Le filter concret DebugFilter :</p>
	<div class="code-section"><img src="img/dp/3.png" class="image" /></div>
	<p>La classe Target :</p>
	<div class="code-section"><img src="img/dp/4.png" class="image" /></div>
	<p>La classe FilterChain :</p>
	<div class="code-section"><img src="img/dp/5.png" class="image" /></div>
	<p>La classe FilerManager :</p>
	<div class="code-section"><img src="img/dp/6.png" class="image" /></div>
	<p>La classe Client :</p>
	<div class="code-section"><img src="img/dp/7.png" class="image" /></div>
	<p>Utilisons le client pour démontrer le modèle de conception du filtre d'interception :</p>
	<div class="code-section"><img src="img/dp/8.png" class="image" /></div>
	<p>Résultat d’exécution :</p>
	<img src="img/dp/9.png" class="image-center" /><br>
	<br><h3>Utilisations remarquables</h3>
	<ul>
	<li>servlet.FilterChain and javax.servlet.Filter</li>
	<li>Spring – HandlerInterceptor</li>
	<li>DelegatingFilterProxy</li>
	</ul>
	`
);

dp.set(
	"Front Controller",
	`
	<p>Dans les applications Web, les Front Controllers sont utilisés pour implémenter les flux de travail. Cela n'est pas nécessairement requis dans le processus, mais cela aide à contrôler le moment où l'utilisateur navigue à travers un certain nombre de pages liées.</p>
	<p>Utilisez un contrôleur frontal comme point de contact initial pour traiter toutes les demandes associées. Le Front Controller centralise la logique de contrôle qui pourrait autrement être dupliquée et gère les activités de traitement des demandes de clé.</p>
	<br><h3>Problème</h3>
	<p>Le système nécessite un point d'accès centralisé pour la gestion des demandes au niveau présentation, afin de prendre en charge l'intégration des services système, la récupération du contenu, la gestion des vues et la navigation. Lorsque l'utilisateur accède directement à la vue sans passer par un mécanisme centralisé, deux problèmes peuvent survenir :</p>
	<ul>
	<li>Chaque vue est nécessaire pour fournir ses propres services système, ce qui entraîne souvent un code en double.</li>
	<li>La navigation entre les vues est laissée aux vues. Cela peut entraîner un mélange de contenu de vue et de navigation de vue.</li>
	</ul>
	<p>De plus, le contrôle distribué est plus difficile à maintenir, car des modifications devront souvent être apportées à de nombreux endroits.</p>
	<br><h3>Motivation</h3>
	<ul>
	<li>Le traitement des services système communs se termine par demande. Par exemple, le service de sécurité termine les vérifications d'authentification et d'autorisation.</li>
	<li>La logique la mieux gérée dans un emplacement central est répliquée dans de nombreuses vues.</li>
	<li>Des points de décision existent concernant la récupération et la manipulation des données.</li>
	<li>Plusieurs vues sont utilisées pour répondre à des demandes commerciales similaires.</li>
	<li>Un point de contact centralisé pour le traitement d'une demande peut être utile, par exemple, pour contrôler et consigner la progression d'un utilisateur sur le site.</li>
	<li>Les services système et la logique de gestion des vues sont relativement sophistiqués.</li>
	</ul>
	<br><h3>Solution</h3>
	<p>Utilisez un contrôleur comme point de contact initial pour traiter une demande. Le contrôleur gère le traitement de la demande, notamment en invoquant des services de sécurité tels que l'authentification et l'autorisation, la délégation du traitement, le choix d'une vue appropriée, le traitement des erreurs et la sélection des stratégies de création de contenu.</p>
	<p>Le contrôleur fournit un point d’entrée centralisé qui contrôle et gère le traitement des demandes Web. En centralisant les points de décision et les contrôles, le contrôleur contribue également à réduire la quantité de code Java, appelée scriptlet, incorporée dans le JSP.</p>
	<p>La centralisation du contrôle dans le contrôleur et la réduction de la logique métier dans la vue favorisent la réutilisation du code dans les requêtes. C'est une approche préférable, à savoir incorporer du code dans plusieurs vues, car elle pourrait créer un environnement plus sujet aux erreurs et à la réutilisation par copier-coller.</p>
	<p>Généralement, un contrôleur se coordonne avec un composant de répartition. Les répartiteurs sont responsables de la gestion des vues et de la navigation. Ainsi, un répartiteur choisit la vue suivante pour l'utilisateur et le contrôle des vecteurs à la ressource. Les répartiteurs peuvent être directement encapsulés dans le contrôleur ou peuvent être extraits dans un composant séparé.</p>
	<p>Bien que le modèle de contrôleur frontal suggère de centraliser le traitement de toutes les demandes, il ne limite pas le nombre de gestionnaires dans le système, contrairement à Singleton. Une application peut utiliser plusieurs contrôleurs dans un système, chaque mappage sur un ensemble de services distincts.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<p><u>Centralise le contrôle</u></p>
	<p>Un contrôleur fournit un emplacement central pour gérer les services système et la logique métier entre plusieurs demandes. Un contrôleur gère le traitement de la logique métier et le traitement des demandes. L'accès centralisé à une application signifie que les demandes sont facilement suivies et consignées. Gardez toutefois à l'esprit que, lorsque le contrôle est centralisé, il est possible d'introduire un point de défaillance unique. En pratique, cependant, cela pose rarement un problème, car il existe généralement plusieurs contrôleurs, que ce soit sur un seul serveur ou dans un cluster.</p>
	<p><u>Améliore la facilité de gestion de la sécurité</u></p>
	<p>Un contrôleur centralise le contrôle en fournissant un point d'étranglement pour les tentatives d'accès illicites à l'application Web. En outre, l'audit d'une entrée unique dans l'application nécessite moins de ressources que la distribution de contrôles de sécurité sur toutes les pages.</p>
	<p><u>Améliore la réutilisabilité</u></p>
	<p>Un contrôleur favorise un partitionnement plus propre des applications et encourage la réutilisation, car le code commun entre les composants est transféré dans un contrôleur ou géré par un contrôleur.</p>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le Front Controller design pattern.</p>
	<img src="img/dp/10.png" class="image-center" /><br>
	<p><strong>FrontController</strong></p>
	<p>C’est le point de contact initial pour le traitement des demandes dans le système. Il délègue à un ApplicationController pour effectuer la gestion des actions et des vues.</p>
	<p><strong>ApplicationController </strong></p>
	<p>C’est le responsable de la gestion des actions et des vues, notamment de la localisation et du routage vers les actions spécifiques qui serviront une demande, ainsi que de la recherche et de l'envoi à la vue appropriée.</p>
	<p><strong>Command </strong></p>
	<p>Une commande exécute l'action qui gère la demande.</p>
	<p><strong>View</strong></p>
	<p>Une vue représente l'affichage renvoyé au client.</p>
	<br><h3>Implémentation</h3>
	<p>Voyons l’exemple suivant pour l’implémentation de ce modèle :</p>
	<p>La classe HomeView :</p>
	<div class="code-section"><img src="img/dp/11.png" class="image" /></div>
	<p>La classe StudentView :</p>
	<div class="code-section"><img src="img/dp/12.png" class="image" /></div>
	<p>La classe ErrorView :</p>
	<div class="code-section"><img src="img/dp/13.png" class="image" /></div>
	<p>La classe DashboardView :</p>
	<div class="code-section"><img src="img/dp/14.png" class="image" /></div>
	<p>La classe Dispatcher :</p>
	<div class="code-section"><img src="img/dp/15.png" class="image" /></div>
	<p>La classe FrontController :</p>
	<div class="code-section"><img src="img/dp/16.png" class="image" /></div>
	<p>La classe FrontControllerPatternDemo :</p>
	<div class="code-section"><img src="img/dp/17.png" class="image" /></div>
	<p>Résultat d’exécution :</p>
	<img src="img/dp/18.png" class="image-center" /><br>
	<br><h3>Utilisations remarquables</h3>
	<ul>
	<li>Apache Struts</li>
	<li>Spring – DispatcherServlet</li>
	</ul>
	`
);

dp.set(
	"View Helper",
	`
	<p>View Helper Pattern sépare la vue statique telle que les JSP du traitement des données du modèle métier.</p>
	<br><h3>Problème</h3>
	<p>Les changements de niveau de présentation se produisent souvent et sont difficiles à développer et à maintenir lorsque la logique d’accès aux données d’entreprise et la logique de formatage de la présentation sont imbriquées. Cela rend le système moins flexible, moins réutilisable et généralement moins résistant aux changements.</p>
	<p>Le fait de mêler la logique métier et la logique système au traitement de la vue réduit la modularité et crée une mauvaise séparation des rôles entre les équipes de production Web et de développement logiciel.</p>
	<br><h3>Motivation</h3>
	<ul>
	<li>Les exigences d’assimilation des données d’entreprise ne sont pas triviales.</li>
	<li>L'intégration de la logique métier dans la vue favorise un type de réutilisation copier-coller. Cela pose des problèmes de maintenance et des bogues car une partie de la logique est réutilisée dans la même vue ou dans une vue différente en la dupliquant simplement dans le nouvel emplacement.</li>
	<li>Il est souhaitable de promouvoir une séparation nette du travail en faisant en sorte que différentes personnes remplissent les rôles de développeur de logiciel et de membre de l'équipe de production Web.</li>
	<li>Une vue est couramment utilisée pour répondre à une demande commerciale particulière.</li>
	</ul>
	<br><h3>Solution</h3>
	<p>Utilisez Vues pour encapsuler le code de mise en forme et Helpers pour encapsuler la logique de traitement des vues.</p>
	<p>Une vue délègue ses responsabilités de traitement à ses classes auxiliaires, implémentées en tant que POJO, balises personnalisées ou fichiers de balises.</p>
	<p>Les assistants servent d’adaptateurs entre la vue et le modèle et effectuent des traitements liés à la logique de formatage, tels que la génération d’un tableau HTML.</p>
	<p>La bibliothèque de balises standard JavaServer Pages [JSTL] fournit un ensemble standard de balises prenant en charge des besoins communs, tels que l'itération et la logique conditionnelle. L'utilisation de ces balises vous permet d'éviter d'incorporer une logique de traitement sous forme de code de scriptlet dans le JSP.</p>
	<p>Développer vos propres aides, sous forme de balises personnalisées ou de fichiers de balises, apportera également des avantages, en offrant des abstractions de niveau supérieur qui communiquent plus clairement l'intention de votre code. Que vous utilisiez JSTL ou créiez des balises personnalisées, l'objectif est d'éviter d'utiliser des aides en tant que scriptlets. J'ai créé une balise personnalisée que vous verrez dans la section du code source.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<p><u>Améliore la partition, la réutilisation et la facilité de maintenance des applications</u></p>
	<p>L'utilisation des utilitaires permet de séparer plus clairement la vue du traitement de l'activité dans une application. Les aides, sous la forme de JavaBeans (JSP 1.0+) et de balises personnalisées (JSP 1.1+), fournissent un emplacement externe à la vue pour encapsuler la logique métier. Sinon, le code de scriptlet encombre le JSP, une situation lourde et difficile à manier, en particulier dans les grands projets.</p>
	<p>En outre, la logique métier factorisée à partir des fichiers JSP et dans des beans Java et des balises personnalisées est réutilisée, ce qui réduit les doublons et facilite la maintenance.</p>
	<p><u>Améliore la séparation des rôles</u></p>
	<p>La séparation de la logique de mise en forme de la logique métier de l'application réduit les dépendances que pourraient avoir des individus jouant différents rôles sur les mêmes ressources. Par exemple, un développeur de logiciels peut posséder du code incorporé dans un balisage HTML, tandis qu'un membre de l'équipe de production Web peut avoir besoin de modifier la mise en page et les composants de conception entremêlés avec la logique métier. Aucune des personnes remplissant ces rôles ne peut être familiarisée avec les détails de la mise en œuvre du travail de l'autre personne, ce qui augmente le risque de modifications accidentelles introduisant des erreurs dans le système.</p>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le View Helper design pattern.</p>
	<img src="img/dp/19.png" class="image-center" /><br>
	<p><strong>Client</strong></p>
	<p>Un client envoie à la vue.</p>
	<p><strong>View</strong></p>
	<p>Une vue représente et affiche des informations pour le client. Les informations utilisées dans un affichage dynamique sont extraites et converties à partir d'un modèle de présentation par des assistants.</p>
	<p><strong>Helper</strong></p>
	<p>Un assistant encapsule la logique de traitement pour générer et formater une vue. Un assistant adapte généralement un PresentationModel pour une vue ou fournit un accès aux données brutes du PresentationModel. Une vue fonctionne avec un nombre quelconque d'auxiliaires, généralement implémentée sous forme de Java-Beans, de balises personnalisées ou de fichiers de balises.</p>
	<p><strong>PresentationModel </strong></p>
	<p>Contient les données extraites du service métier, utilisées pour générer la vue.</p>
	<br><h3>Les stratégies</h3>
	<p>Il existe de nombreuses stratégies pour utiliser ce modèle.</p>
	<p><strong>JSP View Strategy</strong></p>
	<ul>
	<li>Le composant de vue est implémenté en tant que page JSP</li>
	<li>Stratégie préférée</li>
	</ul>
	<p><strong>Servlet View Strategy</strong></p>
	<ul>
	<li>Le composant de vue est implémenté en tant que Servlet</li>
	</ul>
	<p><strong>JavaBean Helper Strategy</strong></p>
	<ul>
	<li>Helper est implémenté en tant que JavaBean</li>
	<li>Les JavaBeans sont faciles à construire et à intégrer dans un environnement JSP</li>
	</ul>
	<p><strong>Custom Tag Helper Strategy</strong></p>
	<ul>
	<li>Helper est implémenté en tant que balise personnalisée (JSP 1.1 et ultérieures)</li>
	</ul>
	<p><strong>Business Delegate Helper Strategy</strong></p>
	<ul>
	<li>Les composants auxiliaires effectuent souvent des invocations distribuées vers le niveau métier.</li>
	<li>Helper appelle un service métier sans connaître les détails de son fonctionnement physique.</li>
	<li>Mise en oeuvre et distribution</li>
	<li>Peut-être implémenté en tant que JavaBean.</li>
	</ul>
	<br><h3>Utilisations remarquables</h3>
	<ul>
	<li>Structs tab libraries</li>
	<li>Spring-form JSP Tag Library</li>
	</ul>
	`
);

dp.set(
	"Composite View",
	`
	<p>Les pages Web sophistiquées présentent le contenu de nombreuses sources de données, à l'aide de plusieurs sous-vues comprenant une seule page d'affichage. En outre, diverses personnes possédant des compétences différentes contribuent au développement et à la maintenance de ces pages Web.</p>
	<br><h3>Problème</h3>
	<p>Au lieu de fournir un mécanisme permettant de combiner des parties atomiques modulaires d'une vue dans un ensemble composite, les pages sont construites en incorporant du code de mise en forme directement dans chaque vue.</p>
	<p>La modification de la disposition de plusieurs vues est difficile et sujette aux erreurs, en raison de la duplication de code.</p>
	<br><h3>Motivation</h3>
	<ul>
	<li>Les parties atomiques du contenu de la vue changent fréquemment.</li>
	<li>Plusieurs vues composites utilisent des sous-vues similaires, telles qu'une table d'inventaire du client. Ces parties atomiques sont décorées avec un texte de modèle environnant différent ou apparaissent à un emplacement différent dans la page.</li>
	<li>Les modifications de mise en page sont plus difficiles à gérer et les codes plus difficiles à gérer lorsque les sous-vues sont directement intégrées et dupliquées dans plusieurs vues.</li>
	<li>L'intégration directe dans les vues de parties fréquemment modifiées du modèle de texte peut également affecter la disponibilité et l'administration du système.</li>
	<li>Le serveur doit peut-être être redémarré avant que les clients ne voient les modifications ou les mises à jour de ces composants de modèle.</li>
	</ul>
	<br><h3>Solution</h3>
	<p>Utilisez des vues composites composées de plusieurs sous-vues atomiques. Chaque composant du modèle peut être inclus de manière dynamique dans l'ensemble et la présentation de la page peut être gérée indépendamment du contenu.</p>
	<p>Cette solution permet de créer une vue composite basée sur l'inclusion et la substitution de fragments de modèles modulaires dynamiques et statiques. Il favorise la réutilisation des parties atomiques de la vue en encourageant la conception modulaire. Il est approprié d’utiliser une vue composite pour générer des pages contenant des composants d’affichage pouvant être combinés de différentes manières. Ce scénario se produit, par exemple, avec des sites portail comprenant de nombreuses sous-vues indépendantes, telles que des flux d'actualités, des informations météo et des cours boursiers sur une seule page. La mise en page de la page est gérée et modifiée indépendamment du contenu de la sous-vue.</p>
	<p>Un autre avantage de ce modèle est que les concepteurs Web peuvent prototyper la mise en page d'un site, en branchant du contenu statique dans chacune des régions de modèle. Au fur et à mesure que le développement du site avance, le contenu réel est remplacé par ces espaces réservés.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<ul>
	<li>Améliore la modularité et la réutilisation</li>
	<li>Ajoute un contrôle basé sur un rôle ou une politique</li>
	<li>Améliore la maintenabilité</li>
	<li>Réduit la maintenabilité</li>
	<li>Réduit les performances</li>
	</ul>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le Composite View design pattern.</p>
	<img src="img/dp/20.png" class="image-center" /><br>
	<p><strong>Client  </strong></p>
	<p>Un client envoie une vue.</p>
	<p><strong>View</strong></p>
	<p>Une vue représente l'affichage.</p>
	<p><strong>SimpleView </strong></p>
	<p>Représente une partie atomique d'un tout composite. Il est également appelé segment de vue ou sous-vue.</p>
	<p><strong>CompositeView </strong></p>
	<p>Est composée de plusieurs vues. Chacune de ces vues est une vue simple ou potentiellement une vue composite.</p>
	<p><strong>Template</strong></p>
	<p>Un modèle représente la disposition de la vue.</p>
	<br><h3>Implémentation</h3>
	<p>Nous pouvons définir des modèles statiques pouvant être réutilisés dans les autres pages de vue de la même application Web. Selon le modèle de conception GOF du modèle Composite Design, nous composons les composants de sous-vue pour un composant de vue particulier. Le modèle de vue composite favorise la réutilisation des vues et est facile à gérer en raison des multiples sous-vues au lieu de créer une vue volumineuse et compliquée.</p>
	<p><strong>Exemple d'intégration des Tiles</strong></p>
	<p>On définit les fichiers de disposition Tiles :</p>
	<div class="code-section"><img src="img/dp/21.png" class="image" /></div>
	<p>Tiles Template :</p>
	<div class="code-section"><img src="img/dp/22.png" class="image" /></div>
	<p>Cette structure s'appelle "Classic Layout". Le modèle organise la page en fonction de cette mise en page, en plaçant chaque "pièce" à la place voulue pour que l'en-tête remonte, le footer de page, etc.</p>
	<p>Il peut arriver que, par exemple, en cliquant sur un lien, il ne soit nécessaire de modifier qu'une partie de la page, généralement le corps.</p>
	<img src="img/dp/23.png" style="width:65%;" class="image-center" /><br>
	<br><h3>Utilisations remarquables</h3>
	<ul>
	<li>Apache Tiles</li>
	<li>SiteMesh</li>
	</ul>
	`
);

dp.set(
	"Service to Worker",
	`
	<p>Le système contrôle le flux d'exécution et l'accès aux données de l'entreprise, à partir desquels il crée le contenu de la présentation.</p>
	<br><h3>Problème</h3>
	<p>Le problème est une combinaison des problèmes résolus par les modèles de contrôleur frontal et d’aide de vue dans le niveau présentation. Il n'y a pas de composant centralisé pour la gestion du contrôle d'accès, de la récupération du contenu ou de la gestion des vues, et un code de contrôle en double est dispersé dans diverses vues. De plus, la logique métier et la logique de formatage de la présentation sont mélangées dans ces vues, ce qui rend le système moins flexible, moins réutilisable et généralement moins résistant aux changements.</p>
	<p>Le fait de mêler la logique métier au traitement des vues réduit également la modularité et crée une séparation médiocre des rôles entre les équipes de production Web et de développement logiciel.</p>
	<br><h3>Motivation</h3>
	<ul>
	<li>Les vérifications d'authentification et d'autorisation sont effectuées à la demande.</li>
	<li>Le code de script dans les vues doit être minimisé.</li>
	<li>La logique applicative doit être encapsulée dans des composants autres que la vue.</li>
	<li>Le flux de contrôle est relativement complexe et basé sur les valeurs du contenu dynamique.</li>
	<li>La logique de gestion des vues est relativement sophistiquée, plusieurs vues pouvant être mappées à la même demande.</li>
	</ul>
	<br><h3>Solution</h3>
	<p>Combinez les modèles Front Controller et View Helper pour déplacer une logique de présentation transférer dans le contrôleur et la logique de l'application dans Helpers.</p>
	<p>Un contrôleur frontal est le point de contact initial pour la demande et est responsable de</p>
	<ul>
	<li>Gérer de nombreux aspects de la gestion des demandes</li>
	<li>Services système tels que l'authentification et l'autorisation</li>
	<li>Délégation de processus métier, choix d'une vue appropriée, sélection de stratégies de création de contenu.</li>
	<li>Préparation du modèle pour utilisation par la vue, qu'il envoie</li>
	</ul>
	<br><h3>Conséquence d’utilisation</h3>
	<p><u>Centralise le contrôle et améliore la modularité et la réutilisation</u></p>
	<p>Ce modèle suggère de fournir un emplacement central pour gérer les services système et la logique métier entre plusieurs demandes. Le contrôleur gère le traitement de la logique métier et le traitement des demandes. Gardez toutefois à l'esprit que, lorsque le contrôle est centralisé, il est possible d'introduire un point de défaillance unique.</p>
	<p>Le modèle favorise également le partitionnement des applications plus propre et encourage la réutilisation. Le code commun est déplacé dans un contrôleur et réutilisé par requête, puis déplacé dans des composants auxiliaires auxquels les contrôleurs et les vues délèguent. La modularité et la réutilisation améliorées signifient moins de duplication, ce qui signifie généralement un environnement plus exempt de bogues.</p>
	<p><u>Améliore le partitionnement des applications</u></p>
	<p>L'utilisation des utilitaires permet de séparer plus clairement la vue du traitement de l'activité dans une application. Les helpers, sous la forme de JavaBeans (JSP 1.0+) et de balises personnalisées (JSP 1.1+), fournissent un emplacement pour la logique métier à factoriser en dehors du JSP. Si la logique métier est laissé dans un JSP, les projets volumineux génèrent un code de scriptlet encombrant et encombrant.</p>
	<p><u>Améliore la séparation des rôles</u></p>
	<p>La séparation de la logique de formatage de la logique métier de l’application réduit également les dépendances sur les mêmes ressources entre les individus remplissant des rôles différents. Sans cette séparation, par exemple, un développeur de logiciels posséderait du code incorporé dans un balisage HTML, tandis qu'un membre de l'équipe de production Web aurait besoin de modifier la mise en page et les composants de conception entremêlés avec la logique métier. Étant donné qu'aucune personne remplissant ces rôles n'est au courant des détails de la mise en œuvre du travail de l'autre personne, cela augmente le risque de modifications qui introduiraient accidentellement des bogues dans le système.</p>
	<br><h3>Structure</h3>
	<p>Le diagramme de classe de ce design pattern est le suivant :</p>
	<img src="img/dp/24.png" class="image-center" /><br>
	<p><strong>FrontController</strong></p>
	<p>Un FrontController gère initialement une demande, déléguant à un contrôleur d'application pour la gestion des actions et des vues.</p>
	<p><strong>ApplicationController</strong></p>
	<p>C’est le responsable de la gestion des actions et des vues. Il gère le choix de l'action appropriée et la vue permettant de répondre à une demande.</p>
	<p><strong>View</strong></p>
	<p>Une vue représente et affiche des informations pour le client.</p>
	<p><strong>BusinessHelper</strong>, <strong>ViewHelper</strong></p>
	<p>Un Helper est chargé d'aider une vue ou un contrôleur à effectuer un traitement spécifique. Un BusinessHelper aide un contrôleur à initier un traitement métier pour traiter une demande, tandis qu'un ViewHelper récupère et adapte les aspects d'un PresentationModel afin de générer une vue.</p>
	<p><strong>PrésentationModèle</strong></p>
	<p>PresentationModel contient les données extraites du service métier, utilisées pour générer la vue.</p>
	<p><strong>BusinessService</strong></p>
	<p>BusinessService encapsule la logique et l'état de l'entreprise.</p>
	<br><h3>Les stratégies</h3>
	<p><strong>Servlet Front Strategy </strong></p>
	<ul>
	<li>Le contrôleur frontal est implémenté en tant que servlet.</li>
	<li>C’est la stratégie préférée de la stratégie JSP Front.</li>
	</ul>
	<p><strong>JSP Front Strategy </strong></p>
	<ul>
	<li>Le contrôleur frontal est implémenté en tant que page JSP.</li>
	</ul>
	<p><strong>JSP View Strategy </strong></p>
	<ul>
	<li>Le composant de vue est implémenté en tant que page JSP.</li>
	<li>Stratégie préférée.</li>
	</ul>
	<p><strong>Servlet View Strategy </strong></p>
	<ul>
	<li>Le composant de vue est implémenté en tant que Servlet</li>
	</ul>
	<p><strong>JavaBean Helper Strategy </strong></p>
	<ul>
	<li>Helper est implémenté en tant que JavaBean</li>
	<li>Les JavaBeans sont faciles à construire et à intégrer dans un environnement JSP</li>
	</ul>
	<p><strong>Custom Tag Helper Strategy </strong></p>
	<ul>
	<li>Helper est implémenté en tant que balise personnalisée (JSP 1.1 et ultérieures)</li>
	</ul>
	`
);

dp.set(
	"Business Delegate",
	`
	<p>Le Business Delegate ajoute une couche d'abstraction entre les niveaux présentation et métier. En utilisant le design pattern, nous obtenons un couplage lâche entre les niveaux et encapsulons les connaissances sur la manière de localiser, de se connecter et d'interagir avec les objets métier qui constituent l'application.</p>
	<br><h3>Problème</h3>
	<p>Les composants de la couche présentation interagissent directement avec les services métier. Cette interaction directe expose les détails d'implémentation sous-jacents de l'interface de programme d'application de service métier (API) au niveau présentation. Par conséquent, les composants du niveau présentation sont vulnérables aux modifications de l'implémentation des services métier : lorsque la mise en œuvre des services métier est modifiée, le code d'implémentation exposé dans le niveau présentation doit également être modifié.</p>
	<p>En outre, les performances du réseau peuvent être affectées par le fait que les composants de niveau présentation qui utilisent l'API de service métier effectuent trop d'appels sur le réseau. Cela se produit lorsque les composants de niveau présentation utilisent directement l'API sous-jacente, sans mécanisme de mise en cache côté client ni service d'agrégation.</p>
	<p>Enfin, exposer les API de service directement au client oblige celui-ci à résoudre les problèmes de réseau associés à la nature distribuée de la technologie EJB.</p>
	<br><h3>Motivation</h3>
	<ul>
	<li>Les clients du niveau présentation doivent avoir accès aux services métier.</li>
	<li>Différents clients, tels que les périphériques, les clients Web et les clients lourds, ont besoin d'accéder à un service métier.</li>
	<li>Les API de services métier peuvent changer en fonction de l'évolution des besoins.</li>
	<li>Il est souhaitable de minimiser le couplage entre les clients de niveau présentation et le service métier, masquant ainsi les détails d'implémentation sous-jacents du service, tels que la recherche et l'accès.</li>
	<li>Les clients peuvent avoir besoin d'implémenter des mécanismes de mise en cache pour les informations de service métier.</li>
	<li>Il est souhaitable de réduire le trafic réseau entre le client et les services métier.</li>
	</ul>
	<br><h3>Solution</h3>
	<p>Utilisez un délégué d’entreprise pour encapsuler l’accès à un service professionnel. Le délégué commercial masque les détails d'implémentation du service métier, tels que les mécanismes de recherche et d'accès.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<p><u>Réduit le couplage, améliore la maniabilité</u></p>
	<p>Le délégué commercial réduit le couplage entre le niveau de présentation et le niveau de gestion en masquant tous les détails d'implémentation du niveau de gestion. Il est plus facile de gérer les changements car ils sont centralisés à un seul endroit, le délégué commercial.</p>
	<p><u>Traduit les exceptions de service métier</u></p>
	<p>Le délégué commercial est responsable de la traduction de toutes les exceptions liées au réseau ou à l'infrastructure en exceptions métier, en protégeant les clients de la connaissance des spécificités d'implémentation sous-jacentes.</p>
	<p><u>Implémentation de la récupération après échec et de la synchronisation des threads</u></p>
	<p>En cas de défaillance d'un service professionnel, le délégué commercial peut implémenter des fonctionnalités de reprise automatique sans exposer le problème au client. Si la récupération réussit, le client n'a pas besoin de connaître l'échec. Si la tentative de récupération échoue, le délégué commercial doit informer le client de l'échec. De plus, les méthodes de délégué commercial peuvent être synchronisées, si nécessaire.</p>
	<p><u>Interface plus simple et uniforme avec la couche métier</u></p>
	<p>Afin de mieux servir ses clients, le délégué commercial peut fournir une variante de l'interface fournie par les beans enterprise sous-jacents.</p>
	<p><u>Impacts sur la performance</u></p>
	<p>Le délégué commercial peut fournir des services de mise en cache (et de meilleures performances) au niveau présentation pour les demandes de service courantes.</p>
	<p><u>Introduit une couche supplémentaire</u></p>
	<p>On peut considérer que le délégué commercial ajoute une couche inutile entre le client et le service, introduisant ainsi une complexité accrue et une flexibilité décroissante. Certains développeurs peuvent estimer qu'il s'agit d'un effort supplémentaire de développer des délégués commerciaux avec des implémentations qui utilisent la stratégie du mandataire par délégué. Dans le même temps, les avantages du modèle l'emportent généralement sur ces inconvénients.</p>
	<p><u>Cache l'éloignement</u></p>
	<p>Bien que la transparence de l'emplacement soit l'un des avantages de ce modèle, un problème différent peut survenir car le développeur traite un service distant comme s'il s'agissait d'un service local. Cela peut arriver si le développeur du client ne comprend pas que le délégué commercial est un proxy côté client d'un service distant. En règle générale, un appel de méthode sur le délégué d’entreprise aboutit à une méthode distante d’invocation sous les enveloppes. En ignorant cela, le développeur peut avoir tendance à faire de nombreuses invocations de méthodes pour effectuer une tâche unique, augmentant ainsi le trafic réseau.</p>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le Business Delegate design pattern.</p>
	<img src="img/dp/25.png" class="image-center" /><br>
	<p><strong>BusinessDelegate</strong></p>
	<p>Le rôle de BusinessDelegate est d’assurer le contrôle et la protection du service métier.</p>
	<p><strong>ServiceLocator</strong></p>
	<p>ServiceLocator encapsule les détails d'implémentation de la localisation d'un composant BusinessService.</p>
	<p><strong>BusinessService</strong></p>
	<p>BusinessService est un composant de niveau métier, tel qu'un bean enterprise, auquel le client a accès.</p>
	<p><strong>Client</strong></p>
	<p>Le client peut être un code JSP, un servlet ou une interface utilisateur.</p>
	<br><h3>Implémentation</h3>
	<p>Commençons par définir une interface pour nos services métier :</p>
	<div class="code-section"><img src="img/dp/26.png" class="image" /></div>
	<p>Ensuite, définissons deux classes concrètes implémentant cette interface :</p>
	<div class="code-section"><img src="img/dp/27.png" class="image" /></div>
	<div class="code-section"><img src="img/dp/28.png" class="image" /></div>
	<p>Définissons un service de recherche. L'objet de service de recherche doit fournir les implémentations métier relatives et l'accès de l'objet métier à la logique du délégué métier :</p>
	<div class="code-section"><img src="img/dp/29.png" class="image" /></div>
	<p>Maintenant, nous pouvons définir notre Business Delegate :</p>
	<div class="code-section"><img src="img/dp/30.png" class="image" /></div>
	<p>Il agit comme un point d’accès aux services métier que le client peut utiliser :</p>
	<div class="code-section"><img src="img/dp/31.png" class="image" /></div>
	<p>Et maintenant, pour illustrer le point de ce design pattern :</p>
	<div class="code-section"><img src="img/dp/32.png" class="image" /></div>
	<p>Résultat d’exécution :</p>
	<img src="img/dp/33.png" class="image-center" /><br>
	<br><h3>Utilisations</h3>
	<p>Utilisez le modèle de délégué d’affaires lorsque</p>
	<ul>
	<li>Vous voulez un couplage lâche entre les niveaux présentation et métier</li>
	<li>Vous souhaitez orchestrer des appels vers plusieurs services métier</li>
	<li>Vous voulez encapsuler des recherches de service et des appels de service</li>
	</ul>
	`
);

dp.set(
	"Service Locator",
	`
	<p>La recherche et la création de services impliquent des interfaces et des opérations réseau complexes.</p>
	<br><h3>Problème</h3>
	<p>Vous souhaitez localiser de manière transparente les composants et les services de l'entreprise de manière uniforme.</p>
	<br><h3>Motivation</h3>
	<ul>
	<li>Les clients EJB doivent utiliser l'API JNDI pour rechercher des objets EJBHome à l'aide du nom JNDI enregistré du bean enterprise.</li>
	<li>Les clients JMS doivent utiliser l'API JNDI pour rechercher des composants JMS à l'aide des noms JNDI enregistrés pour les composants JMS, tels que les fabriques de connexion, les files d'attente et les rubriques.</li>
	<li>La fabrique de contexte à utiliser pour la création initiale du contexte JNDI est fournie par le fournisseur du fournisseur de services et dépend donc du fournisseur. La fabrique de contexte dépend également du type d’objet recherché. Le contexte pour JMS est différent du contexte pour EJB, avec différents fournisseurs.</li>
	<li>La recherche et la création de composants de service peuvent être complexes et peuvent être utilisées à plusieurs reprises dans plusieurs clients de l'application.</li>
	<li>La création initiale de contexte et les recherches d'objets de service, si elles sont fréquemment requises, peuvent nécessiter beaucoup de ressources et peuvent avoir une incidence sur les performances de l'application. Cela est particulièrement vrai si les clients et les services sont situés à des niveaux différents.</li>
	<li>Les clients EJB peuvent avoir besoin de rétablir la connexion à une instance de bean entreprise précédemment consultée, avec uniquement son objet Handle.</li>
	</ul>
	<br><h3>Solution</h3>
	<p>Utilisez un objet Service Locator pour résumer toute l'utilisation de JNDI et pour masquer les complexités de la création de contexte initial, de la recherche d'objet de base EJB et de la recréation d'un objet EJB. Plusieurs clients peuvent réutiliser l'objet Service Locator pour réduire la complexité du code, fournir un point de contrôle unique et améliorer les performances en fournissant une fonction de mise en cache.</p>
	<p>Ce modèle réduit la complexité du client résultant de sa dépendance et de la nécessité d'effectuer des processus de recherche et de création, qui utilisent beaucoup de ressources. Pour éliminer ces problèmes, ce modèle fournit un mécanisme permettant d'extraire toutes les dépendances et tous les détails du réseau dans le localisateur de services.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<p><u>Réduire la complexité</u></p>
	<p>Le Service Locator encapsule la complexité de ce processus de recherche et de création (décrit dans le problème) et le garde masqué du client. Le client n'a pas besoin de s'occuper de la recherche des objets de fabrique de composants (EJBHome, QueueConnectionFactory et TopicConnectionFactory, entre autres), car cette responsabilité est déléguée à ServiceLocator.</p>
	<p><u>Fournit un accès uniforme aux services pour les clients</u></p>
	<p>Le modèle de localisateur de service résume toutes les complexités, comme expliqué précédemment. Ce faisant, il fournit une interface très utile et précise que tous les clients peuvent utiliser. Son interface garantit que tous les types de clients de l'application accèdent uniformément aux objets métier, en termes de recherche et de création. Cette uniformité réduit les frais généraux de développement et de maintenance.</p>
	<p><u>Facilite l’ajout de nouveaux composants métier</u></p>
	<p>Etant donné que les clients des beans enterprise ne connaissent pas les objets EJBHome, il est possible d'ajouter de nouveaux objets EJBHome pour les beans enterprise développés et déployés à une date ultérieure, sans impact sur les clients. Les clients JMS ne sont pas directement au courant des fabriques de connexions JMS. Par conséquent, de nouvelles fabriques de connexions peuvent être ajoutées sans impact sur les clients.</p>
	<p><u>Améliore les performances du réseau</u></p>
	<p>Les clients ne sont pas impliqués dans la recherche JNDI et la création d'objet usine / maison. Etant donné que Service Locator effectue ce travail, il peut regrouper les appels réseau requis pour rechercher et créer des objets métier.</p>
	<p><u>Améliore les performances du client en mettant en cache</u></p>
	<p>Le localisateur de service peut mettre en cache les objets de contexte initiaux et les références aux objets de fabrique (fabriques de connexion EJBHome, JMS) afin d'éliminer les activités JNDI inutiles lors de l'obtention du contexte initial et des autres objets. Cela améliore les performances de l'application.</p>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le Service Locator design pattern.</p>
	<img src="img/dp/34.png" class="image-center" /><br>
	<p><strong>Client</strong></p>
	<p>Le client représente un client du localisateur de service qui doit localiser et accéder à un composant ou à un service du niveau métier ou d'intégration.</p>
	<p><strong>ServiceLocator </strong></p>
	<p>ServiceLocator encapsule les services de recherche d'API (attribution de noms), les dépendances des fournisseurs, les complexités de la recherche et la création d'objet métier, et fournit une interface simple aux clients. Cela réduit la complexité du client et augmente la réutilisation.</p>
	<p><strong>Cache </strong></p>
	<p>Cache représente un ServiceLocator facultatif destiné à conserver les références précédemment consultées. L'utilisation du cache a pour seul objectif d'optimiser ServiceLocator en réduisant les recherches redondantes.</p>
	<p><strong>InitialContext</strong></p>
	<p>L'objet InitialContext est le point de départ du processus de recherche et de création. Les fournisseurs de services fournissent l'objet de contexte, qui varie en fonction du type de cible recherchée par ServiceLocator.</p>
	<p><strong>Target</strong></p>
	<p>La cible représente le service ou le composant, dans les niveaux métier ou d'intégration, que le client recherche à l'aide de ServiceLocator.</p>
	<p><strong>RegistryService</strong></p>
	<p>RegistryService représente l'implémentation du registre contenant les références aux services ou composants enregistrés en tant que fournisseurs de services pour les clients.</p>
	<br><h3>Implémentation</h3>
	<p>Commençons cette implémentation en définissant une interface de service commune :</p>
	<div class="code-section"><img src="img/dp/35.png" class="image" /></div>
	<p>Quelques classes concrètes implémenteront cette interface :</p>
	<div class="code-section"><img src="img/dp/36.png" class="image" /></div>
	<div class="code-section"><img src="img/dp/37.png" class="image" /></div>
	<p>Selon le design pattern, lors de la recherche de ces services, nous devrions les mettre en cache pour réduire la charge du serveur :</p>
	<div class="code-section"><img src="img/dp/38.png" class="image" /></div>
	<p>Nous avons également besoin d'une classe à rechercher et instancier nos services :</p>
	<div class="code-section"><img src="img/dp/39.png" class="image" /></div>
	<p>Et enfin, nous pouvons définir une classe Locator à exposer au client, qui utilise la classe InitialContext pour rechercher des services, et la classe Cache pour les mettre en cache pour une utilisation ultérieure.</p>
	<div class="code-section"><img src="img/dp/40.png" class="image" /></div>
	<p>Et pour illustrer le propos de ce design pattern :</p>
	<div class="code-section"><img src="img/dp/41.png" class="image" /></div>
	<p>Résultat d’exécution :</p>
	<img src="img/dp/42.png" class="image-center" /><br>
	<br><h3>Utilisations</h3>
	<p>Le design pattern Service Locator est applicable chaque fois que nous souhaitons localiser/récupérer divers services à l'aide de JNDI, qui est généralement une recherche redondante et coûteuse.</p>
	<p>Le design pattern Service Locator répond à cette recherche coûteuse en utilisant des techniques de mise en cache, c'est-à-dire. Pour la toute première fois qu'un service particulier est demandé, le localisateur de services recherche dans JNDI, récupère le service correspondant, puis met en cache cet objet de service. Désormais, des recherches supplémentaires du même service via Service Locator sont effectuées dans son cache, ce qui améliore considérablement les performances de l'application.</p>
	`
);

dp.set(
	"Session Facade",
	`
	<p>L’application principale du design pattern Session Facade est le développement d’applications d’entreprise. Vous pouvez également appeler cela une extension logique des conceptions GoF. Le design pattern contient les interactions qui se produisent entre les composants de bas niveau, à savoir Entity EJB. Il est implémenté en tant que composant de niveau supérieur, Session EJB. Après quoi, il est chargé de fournir une interface commune et unique afin que l'application fonctionne ou fasse partie de l'application.</p>
	<br><h3>Problème et motivation</h3>
	<ul>
	<li>Le client appelle directement les interfaces fournies par Business Objects, ce qui conduit à un couplage étroit, ce qui entraîne une dépendance directe entre les clients et les objets métier.</li>
	<li>Trop d'appels de méthodes entre le client et le serveur, entraînant des problèmes de performances du réseau.</li>
	<li>Fournir une interface plus simple aux clients en masquant toutes les interactions et interdépendances complexes entre les composants métier</li>
	<li>Une couche de service unifiée doit être fournie pour tous les clients en accès simplifié, en fonction des cas d'utilisation.</li>
	</ul>
	<p>L'objet métier n'est pas protégé contre les utilisations abusives.</p>
	<br><h3>Solution</h3>
	<p>Utilisez un bean de session en tant que façade pour encapsuler la complexité des interactions entre les objets métier d'un flux de travail.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<ul>
	<li>Approche par cas d'utilisation pour définir l'interface de façade de session.</li>
	<li>Interface simple et uniforme avec les clients.</li>
	<li>Réduire le couplage entre les clients et les objets métier.</li>
	<li>Moins de trafic réseau.</li>
	<li>Abstraction à gros grains du flux de travail.</li>
	<li>Centraliser la sécurité et la gestion des transactions.</li>
	</ul>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le Session Facade design pattern.</p>
	<img src="img/dp/43.png" class="image-center" /><br>
	<p><strong>Client</strong></p>
	<p>Le client représente le client de la façade de session devant accéder au service métier.</p>
	<p><strong>SessionFacade</strong></p>
	<p>SessionFacade est le rôle principal de ce modèle. SessionFacade est implémenté en tant que bean de session, avec état ou sans état, selon les besoins, pour prendre en charge les cas d'utilisation qu'il sert. SessionFacade cache la complexité de la gestion de plusieurs BusinessComponents qui participent à un cas d'utilisation et fournit ainsi aux clients un abstraction de service distant de niveau supérieur et à grain grossier.</p>
	<p><strong>BusinessComponent</strong></p>
	<p>BusinessComponent participe à la satisfaction de la demande du client. Un BusinessComponent peut être implémenté en tant qu'objet métier modélisant les données et le comportement de l'entreprise, ou en tant que service d'application.</p>
	<p><strong>ApplicationService</strong></p>
	<p>ApplicationService encapsule BusinessObjects et implémente la logique applicative exécutée pour fournir le service requis. SessionFacade peut interagir avec plusieurs objets ApplicationService pour répondre à une seule demande du client.</p>
	<p><strong>DataAccessObject</strong></p>
	<p>DataAccessObject représente un rôle lorsque vous utilisez des objets d'accès aux données avec une façade de session.</p>
	<br><h3>Les stratégies</h3>
	<p><strong>Stratégie de façade de session sans état</strong></p>
	<p>Si l’interaction client n’est pas conversationnelle (l’État n’a pas besoin d’être entre les appels de méthode), implémente Session Façade en tant que Bean session sans état.</p>
	<p><strong>Stratégie de façade avec session avec état</strong></p>
	<p> Si l’interaction client est conversationnelle (l’État doit nécessairement être entre les appels de méthode), implémente Session Façade en tant que Bean Stateful Session</p>
	`
);

dp.set(
	"Transfer Object",
	`
	<p>Le design pattern Transfer Object est un design pattern fréquemment utilisé. Il est essentiellement utilisé pour transmettre des données avec plusieurs attributs en une seule fois d'un client à un serveur, afin d'éviter plusieurs appels vers un serveur distant.</p>
	<br><h3>Problème et motivation</h3>
	<ul>
	<li>Le client appelle les méthodes get d'un objet métier (EJB de session ou d'entité) plusieurs fois jusqu'à ce qu'il obtienne toutes les valeurs d'attribut</li>
	<li>Chaque appel à un bean enterprise est potentiellement un appel de méthode distant avec surcharge du réseau.</li>
	<li>Le nombre d'appels passés par le client aux impacts du bean enterprise la performance du réseau et donc la performance des applications.</li>
	</ul>
	<br><h3>Solution</h3>
	<p>Lorsque le client demande le bean enterprise pour les données métier, il peut construire l'objet de transfert, le renseigner avec ses valeurs d'attribut et le transmettre par valeur au client.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<ul>
	<li>Réduit le trafic réseau.</li>
	<li>Simplifie l'objet distant et l'interface distante</li>
	<li>Transfère plus de données en moins d'appels distants</li>
	<li>Réduit la duplication de code</li>
	<li>Introduit les objets de transfert périmés</li>
	<li>Augmente la complexité en raison de la synchronisation et du contrôle de version.</li>
	</ul>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le Trasnfer Object design pattern.</p>
	<img src="img/dp/44.png" class="image-center" /><br>
	<p><strong>Client</strong></p>
	<p>Le client doit accéder à un composant pour envoyer et recevoir des données. Généralement, le client est un composant d'un autre niveau. Par exemple, un composant de la couche de présentation peut agir en tant que client de certains composants de la couche métier.</p>
	<p><strong>Component</strong></p>
	<p>Le composant peut être n'importe quel composant d'un autre niveau auquel le client accède pour envoyer et recevoir des données. Le composant peut appartenir au niveau présentation (PresComponent), au niveau métier (BizComponent) ou au niveau d'intégration (IntComponent).</p>
	<p><strong>PrésComposant</strong></p>
	<p>Le composant PresComponent est un composant du niveau présentation, tel qu'un objet d'assistance, une instance de BusinessDelegate, un objet de commande, etc.</p>
	<p><strong>BizComponent</strong></p>
	<p>Le composant BizComponent est un composant de la couche métier.</p>
	<p><strong>IntComponent</strong></p>
	<p>IntComponent est un composant du niveau d'intégration, tel qu'un objet d'accès aux données.</p>
	<p><strong>TransferObject</strong></p>
	<p>TransferObject est un ancien objet Java standard sérialisable qui contient plusieurs membres à agréger et à transporter toutes les données dans un seul appel de méthode.</p>
	<br><h3>Implémentation</h3>
	<p>Un objet peut ressembler à ceci :</p>
	<div class="code-section"><img src="img/dp/45.png" class="image" /></div>
	<p>Un exemple de nouvel objet utilisé uniquement à des fins de transfert :</p>
	<div class="code-section"><img src="img/dp/46.png" class="image" /></div>
	<p>Et pour illustrer le point du design pattern :</p>
	<div class="code-section"><img src="img/dp/47.png" class="image" /></div>
	<p>Résultat d’exécution :</p>
	<img src="img/dp/48.png" class="image-center" /><br>
	<br><h3>Utilisations</h3>
	<p>Utilisez le design pattern Transfer Object lorsque :</p>
	<ul>
	<li>Le client demande plusieurs informations. Et l'information est liée.</li>
	<li>Lorsque vous souhaitez augmenter les performances pour obtenir des ressources.</li>
	<li>Vous voulez un nombre réduit d'appels à distance.</li>
	</ul>
	`
);

dp.set(
	"Value List Handler",
	`
	<p>Le Value List Handler design pattern fournit les fonctionnalités de recherche et d'itération. Pour effectuer une recherche, le gestionnaire de liste de valeurs utilise un objet d'accès aux données pour exécuter la requête et extraire les résultats correspondants de la base de données.</p>
	<br><h3>Problème</h3>
	<p>La plupart des applications JavaEE nécessitent une recherche et une requête pour rechercher et répertorier certaines données. Dans certains cas, une telle opération de recherche et d'interrogation peut donner des résultats assez volumineux. Il n'est pas pratique de renvoyer l'ensemble complet de résultats lorsque les exigences du client doivent traverser les résultats, plutôt que de traiter l'ensemble complet. En règle générale, un client utilise les résultats d'une requête à des fins de lecture seule, telles que l'affichage de la liste des résultats. Souvent, le client ne visualise que les quelques premiers enregistrements correspondants, puis peut ignorer les enregistrements restants et tenter une nouvelle requête. L'activité de recherche n'implique souvent pas de transaction immédiate sur les objets correspondants. Obtenir une liste de valeurs représentées dans des beans entité en appelant une méthode ejbFind(), qui renvoie une collection d'objets distants, puis en appelant chaque bean entité pour obtenir la valeur, coûte très cher au réseau et est considéré comme une mauvaise pratique.</p>
	<br><h3>Motivation</h3>
	<ul>
	<li>Le client d'application a besoin d'une fonction de requête efficace pour éviter d'appeler la méthode ejbFind() du bean entity et d'appeler chaque objet distant renvoyé.</li>
	<li>Un mécanisme de mise en cache de niveau serveur est nécessaire pour servir les clients qui ne peuvent pas recevoir et traiter l'ensemble des résultats.</li>
	<li>Une requête exécutée de manière répétée sur des données raisonnablement statiques peut être optimisée pour fournir des résultats plus rapides. Cela dépend de l'application et de la mise en œuvre de ce design pattern.</li>
	<li>Les méthodes de recherche EJB ne conviennent pas pour parcourir des tables entières de la base de données ou pour rechercher des ensembles de résultats volumineux à partir d'une table.</li>
	<li>Les méthodes du Finder peuvent entraîner une surcharge considérable lorsqu'elles sont utilisées pour rechercher un grand nombre d'objets de résultat. Le conteneur peut créer un grand nombre d'objets d'infrastructure pour faciliter la recherche.</li>
	<li>Les méthodes de recherche EJB ne conviennent pas pour la mise en cache des résultats. Le client peut ne pas être en mesure de gérer l'intégralité du jeu de résultats en un seul appel. Si tel est le cas, le client peut avoir besoin de fonctions de cache et de navigation côté serveur pour parcourir l'ensemble de résultats.</li>
	<li>Les méthodes de recherche EJB ont des constructions de requête prédéterminées et offrent une flexibilité minimale. La spécification EJB 2.0 autorise un langage de requête, EJB QL, pour les beans entity gérés par le conteneur. EJB QL facilite l'écriture de finders portables et offre une plus grande flexibilité pour les requêtes.</li>
	<li>Le client veut faire défiler en avant et en arrière dans un jeu de résultats.</li>
	</ul>
	<br><h3>Solution</h3>
	<p>Utilisez le design pattern Value List Handler pour contrôler la recherche, mettre en cache les résultats et fournir les résultats au client dans un ensemble de résultats dont la taille et la traversée répondent aux exigences du client.</p>
	<p>Ce design pattern crée un ValueListHandler pour contrôler la fonctionnalité d'exécution de requête et la mise en cache des résultats. ValueListHandler accède directement à un DAO capable d'exécuter la requête requise. ValueListHandler stocke les résultats obtenus à partir de DAO en tant que collection d'objets de valeur. Le client demande à ValueListHandler de fournir les résultats de la requête selon les besoins.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<p><u>Offre une alternative efficace aux détecteurs EJB</u></p>
	<p>Value List Handler offre un moyen alternatif d'effectuer des recherches et d'éviter d'utiliser les détecteurs EJB, inefficaces pour les recherches volumineuses.</p>
	<p><u>Résultats de la recherche de caches</u></p>
	<p>L'ensemble de résultats doit être mis en cache lorsqu'un client doit afficher le sous-ensemble des résultats d'un ensemble de résultats volumineux.</p>
	<p><u>Fournit des capacités de recherche flexibles</u></p>
	<p>Vous pouvez implémenter un gestionnaire de liste de valeurs pour qu'il soit flexible en fournissant des fonctions de recherche ad-hoc, en construisant des arguments de recherche à l'exécution à l'aide de méthodes de modèle, etc. En d'autres termes, un développeur Value List Handler peut implémenter des algorithmes de recherche et de mise en cache intelligents sans être limité par les méthodes de recherche d'EJB.</p>
	<p><u>Améliore les performances du réseau</u></p>
	<p>Les performances du réseau s'améliorent car seul un sous-ensemble de résultats demandé, et non l'ensemble du jeu de résultats, est envoyé au client à la demande. Si le client / utilisateur affiche les premiers résultats puis abandonne la requête, la bande passante réseau n'est pas gaspillée, car les données sont mises en cache côté serveur et ne sont jamais envoyées au client.</p>
	<p><u>Autorise le report de transactions de beans entité</u></p>
	<p>La mise en cache des résultats côté serveur et la réduction de la charge du viseur pourraient améliorer la gestion des transactions.</p>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le Value List Handler design pattern.</p>
	<img src="img/dp/49.png" class="image-center" /><br>
	<p><strong>Client </strong></p>
	<p>Un client est un client qui doit exécuter une requête qui renvoie un grand nombre de résultats. Le client peut être un composant de niveau présentation qui souhaite afficher les résultats de la recherche pour un utilisateur. Le client peut également être un bean de session qui encapsule le ValueListHandler.</p>
	<p><strong>ValueListIterator </strong></p>
	<p>Un ValueListIterator fournit un mécanisme d'itération avec les méthodes suivantes pour itérer sur le contenu de ValueList.</p>
	<p><strong>ValueListHandler </strong></p>
	<p>ValueListHandler exécute la recherche et obtient les résultats de la requête, qu'il gère dans une collection privée représentée par l'objet ValueList. ValueListHandler crée et manipule la collection ValueList généralement à l'aide d'un objet d'accès aux données. Lorsque le client demande les résultats, ValueListHandler crée une sous-liste à partir de la ValueList d'origine et l'envoie au client. Typiquement, un ValueListHandler gère une seule ValueList. Cependant, ValueListHandler peut gérer plusieurs instances ValueList s'il doit combiner et gérer plusieurs résultats de recherche.</p>
	<p><strong>DataAccessObject </strong></p>
	<p>ValueListHandler utilise DataAccessObject pour accéder à la source de données, exécuter la requête et extraire les résultats.</p>
	<p><strong>ValueList </strong></p>
	<p>La ValueList est une collection qui contient les résultats de la requête. En règle générale, vous pouvez utiliser une implémentation de liste à partir de l'API Java Collections ou implémenter votre propre liste personnalisée en fonction de vos besoins.</p>
	<p><strong>Valeur </strong></p>
	<p>La valeur représente un objet de données résultant de la recherche.</p>
	<br><h3>Implémentation</h3>
	<p>Prenons un exemple dans lequel une liste d'objets de gestion de projet est récupérée et affichée. Nous pouvons utiliser le Value List Handler dans ce cas.</p>
	<p>La classe ProjectListHandler, chargée de fournir la liste des projets. Cette classe étend la classe abstraite de base ValueListHandler, qui fournit l'implémentation générique d'un gestionnaire de liste de valeurs.</p>
	<p>La classe Project :</p>
	<div class="code-section"><img src="img/dp/50.png" class="image" /></div>
	<p>Implémentation du Value List Handler : ProjectListHandler :</p>
	<div class="code-section"><img src="img/dp/51.png" class="image" /></div>
	<p>Implémentation de la classe générique ValueListHandler.</p>
	<p>ValueListHandler est une classe itérateur générique qui fournit la fonctionnalité d'itération.</p>
	<div class="code-section"><img src="img/dp/52.png" style="width: 96%;" class="image" /></div>
	<p>La classe ProjectDAO :</p>
	<div class="code-section"><img src="img/dp/53.png" class="image" /></div>
	<p>L’interface ValueListIterator :</p>
	<div class="code-section"><img src="img/dp/54.png" class="image" /></div>
	<p>La classe Main pour tester :</p>
	<div class="code-section"><img src="img/dp/55.png" class="image" /></div>
	<p>Résultat d’exécution :</p>
	<img src="img/dp/56.png" class="image-center" /><br>
	`
);

dp.set(
	"Data Access Object",
	`
	<p>L'objet d'accès aux données dans un logiciel qui est en tant qu'objet est chargé de fournir une interface abstraite pour la communication avec une forme spécifique de base de données. Grâce à la méthode de mappage, l'application peut appeler la couche de persistance et le DAO fournit ensuite un certain type d'opérations de données. Vous n'avez pas besoin d'exposer ce que la base de données contient réellement.</p>
	<br><h3>Problème et motivation</h3>
	<ul>
	<li>Les composants tels que les beans entity, les beans session, les servlets et autres objets gérés par des beans utilisent des API appropriées pour établir la connectivité et manipuler la source de données, ce qui introduit un couplage étroit entre les composants et l'implémentation de la source de données.</li>
	<li>Les API de stockage persistantes varient en fonction du fournisseur du produit.</li>
	<li>La portabilité des composants est directement affectée lorsque des mécanismes d'accès spécifiques et des API sont inclus dans les composants.</li>
	<li>Les composants doivent être transparents pour l'implémentation réelle du magasin persistant ou de la source de données afin de faciliter la migration vers différents produits de fournisseurs, différents types de stockage et différents types de sources de données.</li>
	</ul>
	<br><h3>Solution</h3>
	<p>Utilisez un objet DAO (Data Access Object) pour résumer et encapsuler tous les accès à la source de données. Le DAO gère la connexion avec la source de données pour obtenir et stocker des données.</p>
	<p>DAO implémente le mécanisme d'accès requis pour travailler avec la source de données. La source de données peut être un magasin persistant tel qu'un SGBDR, un service externe tel qu'un commutateur B2B, un référentiel tel qu'une base de données LDAP ou un service métier accessible via le protocole IIBA (CORBA Internet Inter-ORB Protocol) ou des sockets de bas niveau. Le composant métier qui repose sur le DAO utilise l'interface plus simple exposée par le DAO pour ses clients. DAO masque complètement les détails de la mise en œuvre de la source de données à ses clients. Etant donné que l'interface exposée par le DAO aux clients ne change pas lorsque l'implémentation de la source de données sous-jacente change, ce modèle permet au DAO de s'adapter à différents schémas de stockage sans affecter ses clients ou ses composants métier. Le DAO agit essentiellement comme un adaptateur entre le composant et la source de données.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<ul>
	<li>L'accès au stockage de persistance est transparent car l'implémentation.</li>
	<li>Les détails sont cachés à l'intérieur du DAO.</li>
	<li>Réduit la complexité du code dans les objets métier.</li>
	<li>Permet une migration plus facile.</li>
	<li>Ajoute une couche supplémentaire.</li>
	</ul>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le Data Access Object design pattern.</p>
	<img src="img/dp/57.png" class="image-center" /><br>
	<p><strong>Client </strong></p>
	<p>Un client est un objet qui nécessite un accès à la source de données pour obtenir et stocker des données. Le client peut être un objet de gestion, une façade de session, des services d'application, un gestionnaire de liste de valeurs, un assembleur d'objets de transfert ou tout autre objet d'assistance ayant besoin d'accéder à des données persistantes.</p>
	<p><strong>DataAccessObject</strong></p>
	<p>DataAccessObject est le rôle principal de ce modèle. DataAccessObject résume l'implémentation d'accès aux données sous-jacente pour le client afin de permettre un accès transparent à la source de données. DataAccessObject implémente les opérations create (insert), find (chargement), find (mise à jour) et delete.</p>
	<p><strong>DataSource</strong></p>
	<p>Le DataSource représente une implémentation de source de données. Une source de données peut être une base de données, telle qu'un SGBDR, LDAP, OODB, un référentiel XML, un système de fichiers à plat, etc.</p>
	<p><strong>ResultSet</strong> </p>
	<p>Le ResultSet représente les résultats de l'exécution d'une requête. Pour une source de données SGBDR, lorsqu'une application utilise l'API JDBC, ce rôle est rempli par une instance de java.sql.ResultSet.</p>
	<p><strong>Data</strong></p>
	<p>Les données représentent un objet de transfert utilisé comme support de données. DataAccessObject peut utiliser un objet de transfert pour renvoyer des données au client. DataAccessObject peut également recevoir les données du client en tant qu'objet de transfert pour mettre à jour les données dans la source de données.</p>
	<br><h3>Implémentation</h3>
	<p>En suivant la pratique standard, définissons notre interface DAO :</p>
	<div class="code-section"><img src="img/dp/58.png" class="image" /></div>
	<p>Et notre classe d'implémentation concrète :</p>
	<div class="code-section"><img src="img/dp/59.png" class="image" /></div>
	<p>La classe model :</p>
	<div class="code-section"><img src="img/dp/60.png" class="image" /></div>
	<p>Et pour illustrer le propos de ce design pattern :</p>
	<div class="code-section"><img src="img/dp/61.png" class="image" /></div>
	<p>Résultat :</p>
	<img src="img/dp/62.png" class="image-center" /><br>
	<p><strong>Utilisations</strong></p>
	<p>Utilisez DAO dans l'une des situations suivantes :</p>
	<ul>
	<li>Lorsque vous souhaitez consolider le mode d'accès à la couche de données.</li>
	<li>Lorsque vous souhaitez éviter d'écrire plusieurs couches d'extraction/persistance des données.</li>
	</ul>
	`
);

dp.set(
	"Service Activator",
	`
	<p>Les beans entreprise et autres services métier nécessitent un moyen d'être activés de manière asynchrone.</p>
	<br><h3>Problème</h3>
	<p>Vous souhaitez appeler des services de manière asynchrone.</p>
	<p>Dans les applications d'entreprise, la majorité des traitements sont effectués de manière synchrone. Un client appelle un service métier et attend que le service métier revienne du traitement. Cependant, dans certains cas d'utilisation, le traitement de l'activité prend un temps et des ressources considérables. Le traitement métier peut même s’étendre à plusieurs applications, s’intégrant éventuellement avec des applications internes et externes à l’entreprise. Pour ces processus de longue durée, il n'est pas possible pour les clients d'application d'attendre la fin du traitement de l'entreprise.</p>
	<br><h3>Motivation</h3>
	<ul>
	<li>Vous souhaitez appeler des services métier, des POJO ou des composants EJB de manière asynchrone.</li>
	<li>Vous souhaitez intégrer la publication/abonnement et la messagerie point à point pour activer les services de traitement asynchrone.</li>
	<li>Vous souhaitez exécuter une tâche de gestion composée logiquement de plusieurs tâches. </li>
	</ul>
	<br><h3>Solution</h3>
	<p>Utilisez un activateur de service pour recevoir des demandes et des messages client asynchrones. À la réception d'un message, Service Activator localise et appelle les méthodes métier nécessaires sur les composants du service métier pour répondre à la demande de manière asynchrone.</p>
	<p>ServiceActivator est un service d'écoute et de délégation JMS qui requiert l'implémentation de l'écouteur de messages JMS, ce qui en fait un objet écouteur JMS pouvant écouter les messages JMS. ServiceActivator peut être implémenté en tant que service autonome. Les clients agissent en tant que générateur de message, générant des événements en fonction de leur activité.</p>
	<p>Tout client ayant besoin d'appeler de manière asynchrone un service métier, tel qu'un bean enterprise, peut créer et envoyer un message à Service Activator. Service Activator reçoit le message et l’analyse pour interpréter la demande du client. Une fois que la demande du client est analysée ou non, Service Activator identifie et localise le composant de service métier nécessaire et appelle des méthodes métier pour terminer le traitement de la demande du client de manière asynchrone.</p>
	<p>Service Activator peut éventuellement envoyer un accusé de réception au client une fois le traitement de la demande terminé avec succès. Service Activator peut également informer le client ou d'autres services des événements d'échec s'il ne parvient pas à terminer le traitement de la demande asynchrone.</p>
	<br><h3>Conséquence d’utilisation</h3>
	<ul>
	<li>Intègre JMS dans les applications d'entreprise.</li>
	<li>Fournit un traitement asynchrone pour tout composant de niveau métier.</li>
	<li>Active l'écouteur JMS autonome.</li>
	</ul>
	<br><h3>Structure</h3>
	<p>La figure suivante représente le Service Activator Object design pattern :</p>
	<img src="img/dp/63.png" class="image-center" /><br>
	<p><strong>Client</strong></p>
	<p>Le client est tout client de l'application qui doit appeler un service métier de manière asynchrone. Le client peut être n'importe quel type de composant d'application, tel qu'un composant POJO ou un composant EJB, capable de créer et d'envoyer des messages JMS.</p>
	<p><strong>Resquest </strong></p>
	<p>La requête est l'objet de message créé par le client et envoyé à ServiceActivator à l'aide du middleware orienté message (MOM). Selon la spécification JMS, l'objet Request doit implémenter l'interface javax.jms.Message. L'API JMS fournit plusieurs types de message, tels que TextMessage, ObjectMessage, etc., qui peuvent être utilisés en tant qu'objets de requête en fonction du type de message que vous souhaitez envoyer.</p>
	<p><strong>ServiceActivator</strong></p>
	<p>ServiceActivator est la classe principale du modèle. Il implémente l'interface javax.jms.MessageListener, définie par la spécification JMS. ServiceActivator implémente une méthode onMessage() qui est appelée lors de l'arrivée d'un nouveau message. ServiceActivator analyse le message (demande) pour déterminer ce qui doit être fait. ServiceActivator peut utiliser un localisateur de service pour rechercher ou créer des composants BusinessService.</p>
	<p><strong>BusinessService </strong></p>
	<p>BusinessService est l'objet cible demandé au client pour effectuer un traitement asynchrone.</p>
	<p><strong>Response</strong></p>
	<p>La réponse est un objet de message créé et envoyé par ServiceActivator ou par BusinessService. La réponse peut être un accusé de réception indiquant au client que la demande a été reçue. La réponse peut également être le résultat du traitement asynchrone.</p>
	<br><h3>Utilisations</h3>
	<ul>
	<li>Certains cas d'utilisation de longue durée prennent beaucoup de temps. Au lieu de bloquer les utilisateurs, nous pouvons les exécuter de manière asynchrone.</li>
	<li>JMS est un bon exemple de modèle d'activateur de service - JMS (Java Message Service) est une API qui permet de créer, d'envoyer et de lire des messages. Il fournit une communication fiable et asynchrone faiblement couplée.</li>
	</ul>
	`
);

// Web Services

var webservices = new Map();

webservices.set("coursImg", "webservices");

webservices.set(
	"Description des web services",
	`
	<p>Un "Service Web" est une application logicielle à laquelle on peut accéder à distance à partir de différents langages basés sur XML. Un "Service Web" est identifié par une URL, comme n'importe quel site Web. Il s'exécute sur un "Serveur d'Applications".  Peu importent l'ordinateur, le système d'exploitation ou le langage utilisés par le Client ! Une application peut ainsi utiliser plusieurs "Services Web" s'exécutant sur des serveurs distants. De nombreuses normes sous-tendent cette architecture : "SOAP" pour l'échange de messages, "XML" langage de base pour décrire tous les documents sur lesquels les messages sont construits, "HTTP" pour transporter les messages, "WSDL" pour décrire les services et enfin "UDDI" pour les publier.</p>
	<p>L’approche "Services Web" constitue un changement fondamental dans la manière de concevoir et réaliser les applications informatiques et de programmer les ordinateurs. A court terme, il est probable que cette approche se substitue aux architectures et systèmes basés sur des LAN ou sur Internet.</p>
	`
);

webservices.set(
	"Architecture des web services",
	`
	<p>Chaque Framework a besoin d’une sorte d’architecture pour s’assurer que tout le Framework fonctionne comme souhaité. De même, dans les services Web, il existe une architecture composée de trois rôles distincts, décrits ci-dessous :</p>
	<ul>
	<li><strong>Provider</strong> : il crée le service Web et le met à la disposition des applications clientes qui souhaitent l’utiliser.</li>
	<li><strong>Requestor</strong>: c’est l'application client qui doit contacter un service Web. L'application client peut être une application .Net, Java ou toute autre application basée sur un langage qui recherche une fonctionnalité quelconque via un service Web.</li>
	<li><strong>Registry</strong>: c’est une "application bien connue" qui retourne au Requêteur les informations permettant de trouver un service à partir de critères de recherche, et de s'y connecter. Pour obtenir ce résultat, le fournisseur de service doit avoir publié ces informations préalablement.</li>
	</ul>
	<p>Le diagramme ci-dessous montre comment le fournisseur de services, le demandeur de service et le registre de services interagissent.</p>
	<img src="img/webservices/0.png" style="width: 65%;" class="image-center" /><br>
	<ul>
	<li><strong>Publish</strong>: Le Service Provider informe le Service Registry de l'existence du service Web en utilisant l'interface de publication du courtier pour rendre le service accessible aux clients.</li>
	<li><strong>Find </strong>: Le Service Requester consulte le courtier pour localiser un service Web publié.</li>
	<li><strong>Bind </strong>: Grâce aux informations obtenues du Service Registry sur le service Web, le demandeur peut lier ou invoquer le service Web.</li>
	</ul>
	`
);

webservices.set(
	"Les composants des web services",
	`
	<ul>
	<li><strong>SOAP (Simple Object Access Protocol) : </strong>est un protocole d'échange inter-applications indépendant de toute plate-forme, basé sur le langage XML. Un appel de service SOAP est un flux ASCII encadré dans des balises XML et transporté dans le protocole HTTP.</li>
	<li><strong>WSDL (Web Services Description Language) : </strong>donne la description au format XML des Web Services en précisant les méthodes pouvant être invoquées, leurs signatures et le point d’accès (URL, port, etc..). C’est, en quelque sorte, l’équivalent du langage IDL pour la programmation distribuée CORBA.</li>
	<li><strong>UDDI (UniversalDescription, Discoveryand Integration) : </strong>normalise une solution d’annuaire distribué de Web Services, permettant à la fois la publication et l'exploration (recherche) de Web Services. UDDI se comporte lui-même comme un Web service dont les méthodes sont appelées via le protocole SOAP.</li>
	</ul>
	`
);

webservices.set(
	"SOAP",
	`
	<h3>Définition</h3>
	<p>SOAP est connu comme un protocole de messagerie indépendant du transport. SOAP est basé sur le transfert de données XML en tant que messages SOAP. Chaque message a quelque chose qui s'appelle un document XML. Seule la structure du document XML suit un modèle spécifique, mais pas le contenu. La meilleure partie des services Web et SOAP réside dans le fait qu’il est entièrement envoyé via HTTP, qui est le protocole Web standard.</p>
	<h3>Le message SOAP</h3>
	<p>Chaque document SOAP doit avoir un élément racine appelé élément &lt;<strong>Envelope</strong>&gt;. L'élément racine est le premier élément d'un document XML.</p>
	<p>L'enveloppe est à son tour divisée en 2 parties. Le premier est le <strong>Header</strong> et le second est le <strong>Body</strong>.</p>
	<p>Le <strong>Header</strong> contient les données de routage, qui sont essentiellement les informations qui indiquent au document XML à quel client il doit être envoyé.</p>
	<p>Le <strong>Body</strong> contiendra le message réel.</p>
	<img src="img/webservices/1.png" class="image-center" /><br>
	`
);

webservices.set(
	"Les web services et JAX-WS / JAXB",
	`
	<p>JAX-WS est la nouvelle appellation de JAX-RPC (Java API for XML Based RPC) qui permet de développer très simplement des services web en Java. JAX-WS fournit un ensemble d'annotations pour mapper la correspondance Java-WSDL. Il suffit pour cela d'annoter directement les classes Java qui vont représenter le service web.</p>
	<p>JAX-WS s'appuie sur l'API JAXB 2.0 pour tout ce qui concerne la correspondance entre document XML et objets Java.  Il permet de mapper des objets Java dans un document XML et vice versa. Il permet aussi de générer des classes Java à partir un schéma XML et vice et versa.</p>
	<p>Voici quelques annotations JAXB :</p>
	<ul>
	<li><strong>@XmlRootElement</strong>: Associer une classe ou une énumération à un élément XML.</li>
	<li><strong>@XmlSchema</strong>: Associer un espace de nommage à un package.</li>
	<li><strong>@XmlTransient </strong>: Marquer une entité pour ne pas être mappée dans le document XML.</li>
	<li><strong>@XmlAttribute </strong>: Convertir une propriété en un attribut dans le document XML.</li>
	<li><strong>@XmlElement</strong>: Convertir une propriété en un élément dans le document XML.</li>
	<li><strong>@XmlAccessorType </strong>: Préciser comment un champ ou une propriété est sérialisé.</li>
	<li><strong>@XmlNs </strong>: Associer un prefixed'un espace de nommage à un URI.</li>
	</ul>
	<p>JAX-WS et JAXB font tous deux parties de JDK depuis la version 6. JAX-WS utilise JAXB en interne en tant que couche de liaison pour convertir les objets Java en XML.</p>
	`
);

webservices.set(
	"WSDL",
	`
	<h3>Définition</h3>
	<p>Un service Web ne peut pas être utilisé s'il est introuvable. Le client qui appelle le service Web doit savoir où réside réellement le service Web.</p>
	<p>Deuxièmement, l’application cliente doit savoir ce que fait réellement le service Web pour pouvoir appeler le bon service Web. Cette opération est effectuée à l'aide du WSDL, appelé langage de description des services Web. Le fichier WSDL est à nouveau un fichier XML qui indique essentiellement à l'application cliente ce que fait le service Web. En utilisant le document WSDL, l’application client pourrait comprendre l’emplacement du service Web et son utilisation.</p>
	<h3>Structure du WSDL</h3>
	<p>Les aspects importants à noter concernant la déclaration WSDL sont les suivants :</p>
	<ul>
	<li><strong>&lt;message&gt;</strong>: Le paramètre message de la définition WSDL permet de définir les différents éléments de données pour chaque opération effectuée par le service Web.</li>
	<li><strong>&lt;portType&gt;</strong>: Ceci décrit en fait l'opération qui peut être effectuée par le service Web. Cette opération peut prendre 2 messages. L’un est un message d'entrée et l'autre est le message de sortie.</li>
	<li><strong>&lt;binding&gt;</strong> - Cet élément contient le protocole utilisé (SOAP, HTTP...). Nous spécifions également d'autres détails pour le Body de l'opération, tels que l'espace de nom et si le message doit être codé.</li>
	</ul>
	`
);

webservices.set(
	"Application des services web (application Java)",
	`
	<p>Les services Web fonctionnent sur un modèle client-serveur où ils communiquent via le réseau. Le composant côté serveur fournit l'URL du terminal client où se trouve le service et où l'application cliente peut appeler différentes méthodes.</p>
	<p>Nous allons créer un service Web qui exposera des méthodes pour ajouter, supprimer et récupérer des objets document. Donc, tout d’abord, après la création d’un projet Java nous allons créer notre classe model <strong>Document.java</strong> :</p>
	<div class="code-section"><img src="img/webservices/2.png" class="image" /></div>
	<p>Puis on crée une interface où nous allons déclarer les méthodes que nous exposerons dans nos exemples de services Web JAX-WS :</p>
	<div class="code-section"><img src="img/webservices/3.png" class="image" /></div>
	<p>L'utilisation des annotations <em>@WebService</em> et <em>@SOAPBinding</em> de l'API JAX-WS. Nous pouvons créer des services Web SOAP.</p>
	<p>On écrit la classe d'implémentation comme indiqué ci-dessous :</p>
	<div class="code-section"><img src="img/webservices/4.png" class="image" /></div>
	<p>La partie la plus importante est l'annotation <em>@WebService</em> où nous fournissons la valeur endpointInterface en tant qu'interface que nous avons pour notre service Web. Ainsi, JAX-WS connaît la classe à utiliser pour l'implémentation lorsque des méthodes de service Web sont appelées.</p>
	<p>Notre logique métier de service Web est prête, publions-la à l’aide de la classe JAX-WS Endpoint :</p>
	<div class="code-section"><img src="img/webservices/5.png" class="image" /></div>
	<p>Il suffit de l’exécuter et notre service Web sera publié au point de terminaison donné dans le programme. Nous pouvons accéder à ce document WSDL en ajoutant ?wsdl à l’URL, comme indiqué dans l’image ci-dessous :</p>
	<img src="img/webservices/6.png" class="image-center" /><br>
	<p>Nous pouvons tester les méthodes du web service avec un analyseur SOAP SoapUI :</p>
	<p>On crée un nouveau projet SOAP :</p>
	<img src="img/webservices/7.png" class="image-center" /><br>
	<p>Puis on entre l'URL du schéma WSDL dans le champ Initial WSDL de SoapUI etle nom du projet dans le champ Nom du :</p>
	<img src="img/webservices/8.png" class="image-center" /><br>
	<p>On clique sur OK. Cela créera un nouveau projet SOAP dans SoapUI.</p>
	<img src="img/webservices/9.png" class="image-center" /><br>
	<p>On clique sur <em>« Request 1 » </em>du addDocument par exemple pour consulter le message SAOP :</p>
	<img src="img/webservices/10.png" class="image-center" /><br>
	<p>Pour tester on modifie le paramètre arg0 dans la partie requête et on clique sur le run pour soumettre la requête :</p>
	<img src="img/webservices/11.png" style="width: 100%;" class="image-center" /><br>
	<p>SoapUI permet générer les artefacts. Le JDK fournit une commande simple qui permet de générer un STUB JaxWS pour l’accès à un web service. Cette commande s’appelle wsimport. SoapUI a besoin de savoir le chemin de cette commande Avec File &gt;Preferences&gt;Tools, nous pouvons configurer le ce chemin comme le montre la figure suivante :</p>
	<img src="img/webservices/12.png" style="width: 90%;" class="image-center" /><br>
	<p>Puis on Génére le STUB JaxWS :</p>
	<img src="img/webservices/13.png" class="image-center" /><br>
	<img src="img/webservices/14.png" class="image-center" /><br>
	<p>Dans cette fenêtre on spécifier l’url de WSDL, les répertoires bin et src de notre project client.</p>
	<p>Voici les fichier sources Java générer :</p>
	<img src="img/webservices/15.png" class="image-center" /><br>
	<p>Voici un programme client dans lequel nous appelons notre exemple de service Web JAX-WS :</p>
	<div class="code-section"><img src="img/webservices/16.png" class="image" /></div>
	<p>Lorsque nous exécutons le programme client JAX-WS ci-dessus, nous obtenons ce résultat :</p>
	<img src="img/webservices/17.png" class="image-center" /><br>
	`
);

webservices.set(
	"UDDI",
	`
	<h3> Définition</h3>
	<p>UDDI est un standard de description, de publication et de découverte des services Web fournis par un fournisseur de services donné. Il fournit une spécification qui aide à héberger les informations sur les services Web.</p>
	<p>Nous avons abordé le sujet de WSDL et de la manière dont il contient des informations sur le travail réel du service Web. Mais comment une application client peut-elle localiser un fichier WSDL pour comprendre les différentes opérations offertes par un service Web ? Donc, UDDI est la réponse à cette question et fournit un référentiel sur lequel les fichiers WSDL peuvent être hébergés. Ainsi, l'application client aura un accès complet à l'UDDI, qui sert de base de données contenant tous les fichiers WSDL.</p>
	<h3>Structure de données UDDI</h3>
	<p>Un registre UDDI se compose de quatre types de structures de données :</p>
	<ul>
	<li><strong>BusinessEntity </strong>: représente le fournisseur de services Web. Dans le registre UDDI, cette structure contient des informations sur la société elle-même, y compris des informations de contact, des catégories de secteur, des identificateurs d'entreprise et une liste des services fournis.</li>
	<li><strong>BusinessService </strong>: représente un service Web individuel fourni par l'entité commerciale. Sa description comprend des informations sur la manière de se lier au service Web.</li>
	<li><strong>BindingTemplate </strong>: sont les descriptions techniques des services Web représentés par la structure de services métier. Un seul service métier peut avoir plusieurs modèles de liaison. Le modèle de liaison représente la mise en œuvre réelle du service Web.</li>
	<li><strong>tModel</strong> : Le tModel est un moyen de décrire les différentes structures d'entreprise, de service et de modèle stockées dans le registre UDDI. Tout concept abstrait peut-être enregistrer dans l'UDDI en tant que tModel. Par exemple, si vous définissez un nouveau type de port WSDL, nous pouvons définir un tModel qui représente ce type de port dans l'UDDI. Ensuite, nous pouvons spécifier qu'un service métier donné implémente ce type de port en associant le tModel à l'un des modèles de liaison de ce service métier.</li>
	</ul>
	`
);

webservices.set(
	"RESTful",
	`
	<h3>Définition</h3>
	<p>Les services Web RESTful sont une architecture client-serveur sans état dans laquelle les services Web sont des ressources et peuvent être identifiés par leurs URI.</p>
	<p>Les applications client REST peuvent utiliser des méthodes HTTP GET/POST pour appeler des services Web restants. REST ne spécifie aucun protocole spécifique à utiliser, mais dans presque tous les cas, il est utilisé via HTTP/HTTPS. Comparés aux services Web SOAP, ils sont légers et ne suivent aucune norme. Nous pouvons utiliser XML, JSON, texte ou tout autre type de données pour la demande et la réponse.</p>
	<h3>API de services Web Java RESTful</h3>
	<p>L'API Java pour les services Web RESTful (JAX-RS) est l'API Java permettant de créer des services Web REST. JAX-RS utilise des annotations pour simplifier le développement et le déploiement de services Web. JAX-RS fait partie de JDK, vous n’avez donc besoin d’inclure quoi que ce soit pour utiliser ses annotations.</p>
	<p>Certaines des annotations importantes de JAX-RS sont les suivantes :</p>
	<ul>
	<li><strong>@Path</strong> : utilisé pour spécifier le chemin relatif de la classe et des méthodes. Nous pouvons obtenir l'URI d'un service Web en scannant la valeur d'annotation de chemin.</li>
	<li><strong>@GET</strong>, <strong>@PUT</strong>, <strong>@POST</strong>, <strong>@DELETE</strong> et <strong>@HEAD</strong> : utilisés pour spécifier le type de requête HTTP d'une méthode.</li>
	<li><strong>@Produces</strong>, <strong>@Consumes </strong>: utilisé pour spécifier les types de demande et de réponse.</li>
	<li><strong>@PathParam</strong> : utilisé pour lier le paramètre de méthode à la valeur du chemin en l'analysant.</li>
	</ul>
	<h3>Services Web RESTful et SOAP</h3>
	<ul>
	<li>SOAP est un protocole tandis que REST est un style architectural.</li>
	<li>Les applications serveur et client SOAP sont étroitement liées et liées au contrat WSDL, alors qu'il n'y a pas de contrat dans les services Web REST et le client.</li>
	<li>Les types de demande et de réponse de services Web REST peuvent être XML, JSON, texte, etc., tandis que SOAP fonctionne uniquement avec XML.</li>
	<li>JAX-RS est l'API Java pour les services Web REST alors que JAX-WS est l'API Java pour les services Web SOAP.</li>
	</ul>
	<h3>Exemple</h3>
	<p>Voyons à quel point il est facile de créer un service Web reposant à l’aide de Jersey. Nous exposerons les méthodes suivantes sur HTTP et utiliserons l’extension Chrome Postman pour les tester.</p>
	<img src="img/webservices/18.png" class="image-center" /><br>
	<p>On crée un projet Web dynamique.</p>
	<p>Nous pouvons télécharger la distribution de Jersey sous forme de fichier zip à partir du site de téléchargement de Jersey :</p>
	<p><a class="link" href="https://jersey.github.io/download.html">https://jersey.github.io/download.html</a></p>
	<p>Le zip contient le fichier JAR d'implémentation de Jersey et ses dépendances principales. Il ne fournit pas de dépendances pour les fichiers JAR tiers au-delà de ceux pour la prise en charge JSON et JavaDoc.</p>
	<p>On copie tous les fichiers JAR de votre téléchargement de Jersey dans le dossier WEB-INF/lib.</p>
	<p>L'image ci-dessous montre la structure du projet final :</p>
	<img src="img/webservices/19.png" class="image-center" /><br>
	<p>Nous devons enregistrer Jersey en tant que répartiteur de servlets pour les demandes REST.</p>
	<p>On ouvre le fichier web.xml et on modifie-le comme suit :</p>
	<div class="code-section"><img src="img/webservices/20.png" class="image" /></div>
	<p>Le paramètre <strong>jersey.config.server.provider.packages</strong> définit dans quel package Jersey recherchera les classes de service Web. Cette propriété doit pointer vers nos classes de ressources. Le modèle d'URL définit la partie de l'URL de base où notre application sera placée.</p>
	<p>Tout d'abord, on crée notre classe modèle :</p>
	<div class="code-section"><img src="img/webservices/2.png" class="image" /></div>
	<p>En fonction de notre structure d'URI, l'interface de service et son code d'implémentation sont présentés ci-dessous :</p>
	<div class="code-section"><img src="img/webservices/22.png" class="image" /></div>
	<div class="code-section"><img src="img/webservices/23.png" class="image" /></div>
	<p><em>@Produces(MediaType.APPLICATION_JSON)</em> utilisé pour spécifier les types de demande et de réponse JSON.</p>
	<p>Notre service Web est prêt. Il suffit maintenant de l’exécuter avec le serveur Tomcat ou de le déployer dans tout autre conteneur de votre choix :</p>
	<ul>
	<li><strong>getAll</strong></li>
	</ul>
	<img src="img/webservices/24.png" class="image-center" /><br>
	<ul>
	<li><strong>get</strong></li>
	</ul>
	<img src="img/webservices/25.png" class="image-center" /><br>
	<ul>
	<li><strong>delete</strong></li>
	</ul>
	<img src="img/webservices/26.png" class="image-center" /><br>
	<h3>WADL</h3>
	<p>En principe, WADL est similaire à WSDL, mais la structure du langage est très différente. Alors que WSDL définit une liste plate de messages et d’opérations qui en consomment ou en produisent, WADL insiste sur la nature hiérarchique des services Web RESTful. Dans REST, l'artefact principal est la ressource. Chaque ressource (nom) est représentée sous la forme d'un URI.</p>
	<p>Le WADL est généré automatiquement par le conteneur REST. Dans notre cas : <em>http://localhost:8080/JavaRS-Project/application.wadl</em></p>
	<img src="img/webservices/27.png" class="image-center" /><br>
	<p>Les types de données structurés échangés via ce web service sont décrites par un schéma XML lié au WSDL.</p>
	<p>La balise <em>&lt;ressource&gt; </em>définit le path et contient la balise &lt;method&gt; pour spécifier la méthode de la classe avec deux méthodes possibles : GET et POST.</p>
	<p>Le schéma xml de l’application REST peut être consulté par l’adresse de suivante :  http://localhost:8080/banqueWS/application.wadl/xsd0.xsd</p>
	<img src="img/webservices/28.png" class="image-center" /><br>
	<h3>Client Java JaxRS</h3>
	<p>Considérons, l’exemple précédant, lors de l'exécution d'une demande GET à l'adresse <em>http://localhost:8080/JavaRS-Project/document/102/get</em>, REST fournit le code JSON suivant :</p>
	<img src="img/webservices/25.png" class="image-center" /><br>
	<p>Nous allons développer un client JAX-RS pour utiliser les API REST JSON que nous avons développée, la structure de notre projet client est la suivante :</p>
	<img src="img/webservices/30.png" class="image-center" /><br>
	<p>A l'aide de l'API client JAX-RS, le JSON peut être demandé comme suit, mappant l'entité demandée à la classe Document :</p>
	<ul>
	<li>La première chose dont nous avons besoin est une instance de client.</li>
	<li>Une fois que nous avons l'instance Client, nous pouvons créer un WebTarget en utilisant l'URI de la ressource Web ciblée.</li>
	<li>En utilisant WebTarget, nous pouvons définir un chemin vers une ressource spécifique.</li>
	<li>On invoque HTTP GET.</li>
	<li>Enfin on affiche le document récupéré.</li>
	</ul>
	<div class="code-section"><img src="img/webservices/31.png" class="image" /></div>
	<p>Résultat :</p>
	<img src="img/webservices/32.png" class="image-center" /><br>
	`
);

var docs = new Map();
docs.set("javascript", javascript);
docs.set("jetty", jetty);
docs.set("tomcat", tomcat);
docs.set("undertow", undertow);
docs.set("ant", ant);
docs.set("maven", maven);
docs.set("gradle", gradle);
docs.set("junit", junit);
docs.set("testng", testng);
docs.set("selenium", selenium);
docs.set("jmeter", jmeter);
docs.set("javaloggingapi", javaloggingapi);
docs.set("log4j", log4j);
docs.set("logback", logback);
docs.set("dp", dp);
docs.set("webservices", webservices);