const TOTAL_SECONDS = 2 * 60 * 60;
const letters = ["A", "B", "C", "D"];

const questions = [
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "triangle",
    q: "En un triángulo rectángulo, la hipotenusa mide 25 cm y uno de los catetos mide 7 cm. Si se construye un cuadrado sobre el otro cateto, ¿cuál es el área de ese cuadrado?",
    options: ["144 cm²", "324 cm²", "576 cm²", "625 cm²"],
    answer: 2,
    exp: "Por Pitágoras, el otro cateto cumple x² = 25² - 7² = 576. Esa es el área del cuadrado."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "circle",
    q: "Una rueda de radio 35 cm da 120 vueltas completas. Usando π = 22/7, ¿qué distancia recorre?",
    options: ["132 m", "220 m", "264 m", "420 m"],
    answer: 2,
    exp: "La circunferencia es 2πr = 220 cm. En 120 vueltas recorre 26.400 cm = 264 m."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "trapezoid",
    q: "Un trapecio tiene bases de 18 cm y 30 cm. Su área es 240 cm². ¿Cuál es su altura?",
    options: ["8 cm", "10 cm", "12 cm", "16 cm"],
    answer: 1,
    exp: "A = ((B + b)h)/2. Entonces 240 = 24h, de donde h = 10 cm."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "coordinate",
    q: "Los puntos A(2, 1), B(8, 1) y C(8, 9) forman un triángulo. ¿Cuál es su área?",
    options: ["24 u²", "30 u²", "42 u²", "48 u²"],
    answer: 0,
    exp: "AB mide 6 y BC mide 8; son perpendiculares. Área = 6 x 8 / 2 = 24."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "sector",
    q: "Un sector circular tiene radio 12 cm y ángulo central de 150°. ¿Cuál es su área en términos de π?",
    options: ["30π cm²", "48π cm²", "60π cm²", "72π cm²"],
    answer: 2,
    exp: "Área del sector = (150/360)π(12²) = (5/12)144π = 60π."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "prism",
    q: "Un prisma rectangular mide 4 cm, 6 cm y 9 cm. Si todas sus dimensiones se duplican, ¿por qué factor aumenta su volumen?",
    options: ["2", "4", "6", "8"],
    answer: 3,
    exp: "El volumen escala con el cubo del factor lineal: 2³ = 8."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "triangle",
    q: "Dos triángulos son semejantes. La razón entre lados correspondientes del pequeño al grande es 3:5. Si el área del pequeño es 54 cm², ¿cuál es el área del grande?",
    options: ["90 cm²", "120 cm²", "150 cm²", "250 cm²"],
    answer: 2,
    exp: "Las áreas escalan con el cuadrado de la razón: 54 x (5/3)² = 150."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "circle",
    q: "Una cuerda de una circunferencia está a 5 cm del centro. Si el radio mide 13 cm, ¿cuánto mide la cuerda?",
    options: ["12 cm", "18 cm", "24 cm", "26 cm"],
    answer: 2,
    exp: "La mitad de la cuerda mide √(13² - 5²) = 12. La cuerda completa mide 24."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "coordinate",
    q: "¿Cuál es la pendiente de la recta perpendicular a la recta que pasa por P(1, 4) y Q(7, 1)?",
    options: ["-2", "-1/2", "1/2", "2"],
    answer: 3,
    exp: "La pendiente de PQ es (1-4)/(7-1) = -1/2. La perpendicular tiene pendiente 2."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "polygon",
    q: "La suma de los ángulos interiores de un polígono regular es 1.440°. ¿Cuántos lados tiene?",
    options: ["8", "9", "10", "12"],
    answer: 2,
    exp: "(n - 2)180 = 1440, entonces n - 2 = 8 y n = 10."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "triangle",
    q: "En un triángulo isósceles, los lados iguales miden 13 cm y la base mide 10 cm. ¿Cuál es su área?",
    options: ["50 cm²", "60 cm²", "65 cm²", "120 cm²"],
    answer: 1,
    exp: "La altura parte la base en 5 y 5. h = √(13² - 5²) = 12. Área = 10 x 12 / 2 = 60."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "circle",
    q: "Un cilindro tiene radio 4 cm y altura 15 cm. ¿Cuál es su volumen?",
    options: ["60π cm³", "120π cm³", "180π cm³", "240π cm³"],
    answer: 3,
    exp: "V = πr²h = π(16)(15) = 240π."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "trapezoid",
    q: "Un rombo tiene diagonales de 14 cm y 48 cm. ¿Cuál es su perímetro?",
    options: ["50 cm", "70 cm", "100 cm", "124 cm"],
    answer: 2,
    exp: "Las semidiagonales son 7 y 24; el lado mide √(7²+24²)=25. Perímetro = 100."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "coordinate",
    q: "El punto medio de AB es M(5, -2). Si A(1, 6), ¿cuáles son las coordenadas de B?",
    options: ["(9, -10)", "(6, 4)", "(11, -8)", "(3, -4)"],
    answer: 0,
    exp: "((1+x)/2, (6+y)/2) = (5,-2). Así x = 9 y y = -10."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "sector",
    q: "Un arco de circunferencia mide 10π cm y corresponde a un ángulo central de 120°. ¿Cuál es el radio?",
    options: ["10 cm", "15 cm", "20 cm", "30 cm"],
    answer: 1,
    exp: "Longitud de arco = (120/360)2πr = 2πr/3. Si vale 10π, r = 15."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "prism",
    q: "Una caja sin tapa tiene base de 8 cm por 5 cm y altura 6 cm. ¿Cuánta cartulina se necesita para construirla?",
    options: ["118 cm²", "156 cm²", "196 cm²", "236 cm²"],
    answer: 2,
    exp: "Área sin tapa = base 40 + laterales 2(8x6)+2(5x6)=40+96+60=196."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "triangle",
    q: "En un triángulo, dos ángulos miden 3x + 10° y 2x + 20°. El tercero mide x + 30°. ¿Cuál es el mayor ángulo?",
    options: ["40°", "50°", "70°", "80°"],
    answer: 2,
    exp: "6x + 60 = 180, x = 20. Los ángulos son 70°, 60° y 50°."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "circle",
    q: "El área de un círculo es 81π cm². Si se aumenta el radio en 3 cm, ¿cuál es la nueva área?",
    options: ["100π cm²", "121π cm²", "144π cm²", "162π cm²"],
    answer: 2,
    exp: "El radio inicial es 9. El nuevo radio es 12 y el área es 144π."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "coordinate",
    q: "La distancia entre A(-3, 4) y B(5, -2) es:",
    options: ["8", "10", "12", "14"],
    answer: 1,
    exp: "d = √((8)² + (-6)²) = √100 = 10."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "polygon",
    q: "Cada ángulo exterior de un polígono regular mide 24°. ¿Cuántos lados tiene?",
    options: ["12", "15", "18", "24"],
    answer: 1,
    exp: "En un polígono regular, exterior = 360/n. Entonces n = 360/24 = 15."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "triangle",
    q: "Una escalera de 10 m se apoya en una pared. Su base está a 6 m de la pared. ¿A qué altura toca la pared?",
    options: ["6 m", "7 m", "8 m", "9 m"],
    answer: 2,
    exp: "h = √(10² - 6²) = √64 = 8."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "trapezoid",
    q: "Un paralelogramo tiene base 16 cm y altura 9 cm. Un triángulo con la misma base tiene igual área. ¿Cuál es la altura del triángulo?",
    options: ["9 cm", "12 cm", "16 cm", "18 cm"],
    answer: 3,
    exp: "Área del paralelogramo = 144. Para el triángulo: 16h/2 = 144, h = 18."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "prism",
    q: "Un cono tiene radio 6 cm y altura 10 cm. ¿Cuál es su volumen?",
    options: ["60π cm³", "90π cm³", "120π cm³", "360π cm³"],
    answer: 2,
    exp: "V = (1/3)πr²h = (1/3)π(36)(10)=120π."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "circle",
    q: "Dos circunferencias tienen radios 3 cm y 9 cm. ¿Cuál es la razón entre sus áreas, de la menor a la mayor?",
    options: ["1:3", "1:6", "1:9", "1:27"],
    answer: 2,
    exp: "Las áreas son proporcionales al cuadrado del radio: 3²:9² = 9:81 = 1:9."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "coordinate",
    q: "La ecuación de una recta es y = -3x + 7. ¿Cuál es el punto donde corta al eje y?",
    options: ["(-3, 0)", "(0, -3)", "(0, 7)", "(7, 0)"],
    answer: 2,
    exp: "El corte con el eje y ocurre cuando x = 0. Entonces y = 7."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "sector",
    q: "Un reloj marca las 3:20. ¿Cuál es el ángulo menor entre las manecillas?",
    options: ["10°", "20°", "30°", "40°"],
    answer: 1,
    exp: "A las 3:20, el minutero está a 120° y el horario a 100°. La diferencia es 20°."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "triangle",
    q: "Un triángulo equilátero tiene perímetro 42 cm. ¿Cuál es su altura?",
    options: ["7√3 cm", "14√3 cm", "21√3 cm", "28√3 cm"],
    answer: 0,
    exp: "Cada lado mide 14. Altura = (lado√3)/2 = 7√3."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "polygon",
    q: "Un hexágono regular tiene lado 8 cm. ¿Cuál es su perímetro y cuántos triángulos equiláteros congruentes lo forman?",
    options: ["40 cm y 5", "48 cm y 6", "56 cm y 6", "64 cm y 8"],
    answer: 1,
    exp: "Un hexágono regular tiene 6 lados y se divide en 6 triángulos equiláteros. Perímetro = 48."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "trapezoid",
    q: "Un terreno rectangular de 24 m por 18 m se rodea con una franja uniforme de 2 m de ancho. ¿Cuál es el área de la franja?",
    options: ["176 m²", "184 m²", "192 m²", "200 m²"],
    answer: 1,
    exp: "Rectángulo exterior: 28 x 22 = 616. Interior: 24 x 18 = 432. Franja = 184."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "circle",
    q: "Un cilindro y un cono tienen igual base e igual altura. Si el volumen del cono es 50π cm³, ¿cuál es el volumen del cilindro?",
    options: ["50π cm³", "100π cm³", "150π cm³", "200π cm³"],
    answer: 2,
    exp: "Con igual base y altura, el cono tiene un tercio del volumen del cilindro."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "coordinate",
    q: "Una traslación lleva el punto (4, -1) hasta (-2, 3). ¿A dónde lleva el punto (7, 5)?",
    options: ["(1, 9)", "(5, 1)", "(13, 1)", "(-1, 11)"],
    answer: 0,
    exp: "El vector de traslación es (-6, 4). Entonces (7,5) pasa a (1,9)."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "triangle",
    q: "En un mapa a escala 1:25.000, dos puntos están separados 7 cm. ¿Cuál es la distancia real?",
    options: ["1,25 km", "1,75 km", "2,5 km", "17,5 km"],
    answer: 1,
    exp: "7 cm representan 175.000 cm, que equivalen a 1.750 m = 1,75 km."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "circle",
    q: "Una esfera tiene radio 3 cm. ¿Cuál es su volumen?",
    options: ["12π cm³", "27π cm³", "36π cm³", "108π cm³"],
    answer: 2,
    exp: "V = (4/3)πr³ = (4/3)π(27) = 36π."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "prism",
    q: "Un sólido se forma con 5 cubos iguales de arista 2 cm. ¿Cuál es su volumen total?",
    options: ["10 cm³", "20 cm³", "40 cm³", "80 cm³"],
    answer: 2,
    exp: "Cada cubo tiene volumen 2³ = 8 cm³. Cinco cubos tienen 40 cm³."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "coordinate",
    q: "Al rotar el punto (3, 5) 90° en sentido antihorario alrededor del origen, se obtiene:",
    options: ["(-5, 3)", "(5, -3)", "(-3, -5)", "(3, -5)"],
    answer: 0,
    exp: "Una rotación de 90° antihoraria transforma (x,y) en (-y,x)."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "triangle",
    q: "Si dos lados de un triángulo miden 8 cm y 15 cm, ¿cuál de las siguientes longitudes puede ser el tercer lado?",
    options: ["7 cm", "8 cm", "23 cm", "24 cm"],
    answer: 1,
    exp: "Debe cumplirse 7 < x < 23. La única longitud posible entre las opciones es 8 cm."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "circle",
    q: "Un círculo tiene diámetro 18 cm. ¿Cuál es la longitud de su circunferencia?",
    options: ["9π cm", "18π cm", "36π cm", "81π cm"],
    answer: 1,
    exp: "La longitud de circunferencia es πd = 18π."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "trapezoid",
    q: "Un triángulo de base 20 cm y altura 12 cm se reduce con escala 1/2. ¿Cuál es el área del triángulo reducido?",
    options: ["30 cm²", "60 cm²", "120 cm²", "240 cm²"],
    answer: 0,
    exp: "El área original es 120. Al reducir longitudes a la mitad, el área se multiplica por 1/4: 30."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "polygon",
    q: "Un pentágono regular tiene ángulo interior de:",
    options: ["72°", "90°", "108°", "120°"],
    answer: 2,
    exp: "Suma interior = 540°. Cada ángulo mide 540/5 = 108°."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "sector",
    q: "Una pizza circular se corta en 8 porciones iguales. Si el radio es 16 cm, ¿cuál es el área de una porción?",
    options: ["16π cm²", "24π cm²", "32π cm²", "64π cm²"],
    answer: 2,
    exp: "Área total = 256π. Una de 8 porciones tiene 32π."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "coordinate",
    q: "La recta que pasa por (0, 2) y (4, 10) tiene ecuación:",
    options: ["y = 2x + 2", "y = 4x + 2", "y = 2x - 2", "y = x + 2"],
    answer: 0,
    exp: "La pendiente es (10-2)/(4-0)=2 y el corte con y es 2."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "prism",
    q: "Un tanque rectangular de 1,2 m por 0,8 m por 0,5 m se llena de agua. ¿Cuántos litros contiene?",
    options: ["48 L", "240 L", "480 L", "960 L"],
    answer: 2,
    exp: "Volumen = 0,48 m³. Cada m³ son 1.000 L, por tanto 480 L."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "circle",
    q: "El área lateral de un cilindro es 96π cm² y su altura es 12 cm. ¿Cuál es el radio?",
    options: ["2 cm", "4 cm", "6 cm", "8 cm"],
    answer: 1,
    exp: "Área lateral = 2πrh. 96π = 2πr(12), entonces r = 4."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "triangle",
    q: "Una sombra de 15 m corresponde a un árbol de 9 m. En el mismo momento, una torre proyecta sombra de 40 m. ¿Cuál es su altura?",
    options: ["18 m", "20 m", "24 m", "30 m"],
    answer: 2,
    exp: "Por semejanza, altura/sombra = 9/15 = 3/5. La torre mide 40 x 3/5 = 24."
  },
  {
    subject: "Matemáticas",
    topic: "Geometría",
    fig: "trapezoid",
    q: "Un cuadrado tiene diagonal 10√2 cm. ¿Cuál es su área?",
    options: ["50 cm²", "100 cm²", "120 cm²", "200 cm²"],
    answer: 1,
    exp: "En un cuadrado, d = lado√2. El lado es 10 y el área es 100."
  },
  {
    subject: "Matemáticas",
    topic: "Álgebra",
    fig: "none",
    q: "Si 3(2x - 5) - 2(x + 1) = 19, entonces x vale:",
    options: ["6", "7", "8", "9"],
    answer: 3,
    exp: "6x - 15 - 2x - 2 = 19, así 4x = 36 y x = 9."
  },
  {
    subject: "Matemáticas",
    topic: "Álgebra",
    fig: "none",
    q: "La expresión (x² - 9)/(x - 3), para x diferente de 3, equivale a:",
    options: ["x - 3", "x + 3", "x² + 3", "1"],
    answer: 1,
    exp: "x² - 9 = (x - 3)(x + 3). Al simplificar queda x + 3."
  },
  {
    subject: "Matemáticas",
    topic: "Funciones",
    fig: "coordinate",
    q: "Una función lineal pasa por (2, 7) y tiene pendiente 3. ¿Cuál es f(5)?",
    options: ["10", "13", "16", "19"],
    answer: 2,
    exp: "Al aumentar x de 2 a 5, sube 3 unidades de x; y aumenta 9. f(5)=16."
  },
  {
    subject: "Matemáticas",
    topic: "Estadística",
    fig: "none",
    q: "Las notas de un grupo son 3, 4, 4, 5, 7, 9. ¿Cuál es la mediana?",
    options: ["4", "4,5", "5", "5,3"],
    answer: 1,
    exp: "Hay 6 datos. La mediana es el promedio del tercero y cuarto: (4+5)/2 = 4,5."
  },
  {
    subject: "Matemáticas",
    topic: "Probabilidad",
    fig: "none",
    q: "En una bolsa hay 5 fichas rojas, 3 azules y 2 verdes. Si se extrae una ficha al azar, ¿cuál es la probabilidad de que no sea azul?",
    options: ["3/10", "5/10", "7/10", "8/10"],
    answer: 2,
    exp: "No azul significa roja o verde: 5 + 2 = 7 de 10."
  },
  {
    subject: "Matemáticas",
    topic: "Aritmética",
    fig: "none",
    q: "El 35% de un número es 84. ¿Cuál es el número?",
    options: ["210", "220", "240", "260"],
    answer: 2,
    exp: "0,35n = 84, entonces n = 84/0,35 = 240."
  },
  {
    subject: "Matemáticas",
    topic: "Álgebra",
    fig: "none",
    q: "Si a/b = 3/4 y b/c = 2/5, entonces a/c es:",
    options: ["3/10", "3/5", "6/5", "15/8"],
    answer: 0,
    exp: "a/c = (a/b)(b/c) = (3/4)(2/5)=6/20=3/10."
  },
  {
    subject: "Matemáticas",
    topic: "Funciones",
    fig: "coordinate",
    q: "La parábola y = x² - 4x + 3 corta el eje x en:",
    options: ["x = -1 y x = -3", "x = 1 y x = 3", "x = 0 y x = 3", "x = 2 solamente"],
    answer: 1,
    exp: "x² - 4x + 3 = (x - 1)(x - 3). Los cortes son x = 1 y x = 3."
  },
  {
    subject: "Matemáticas",
    topic: "Estadística",
    fig: "none",
    q: "Un conjunto tiene media 12. Si sus datos son 8, 10, 13, 15 y x, ¿cuál es x?",
    options: ["10", "12", "14", "16"],
    answer: 2,
    exp: "La suma debe ser 12 x 5 = 60. Los conocidos suman 46; x = 14."
  },
  {
    subject: "Matemáticas",
    topic: "Aritmética",
    fig: "none",
    q: "Una cantidad aumenta 20% y luego disminuye 20%. ¿Qué ocurre respecto al valor inicial?",
    options: ["Queda igual", "Aumenta 4%", "Disminuye 4%", "Disminuye 20%"],
    answer: 2,
    exp: "Multiplicar por 1,2 y luego por 0,8 da 0,96. Queda 4% menor."
  },
  {
    subject: "Matemáticas",
    topic: "Probabilidad",
    fig: "none",
    q: "Se lanzan dos dados justos. ¿Cuál es la probabilidad de obtener suma 9?",
    options: ["1/6", "1/9", "1/12", "1/18"],
    answer: 1,
    exp: "Las sumas 9 son (3,6), (4,5), (5,4), (6,3): 4 casos de 36 = 1/9."
  },
  {
    subject: "Matemáticas",
    topic: "Álgebra",
    fig: "none",
    q: "La solución de x² - 5x + 6 = 0 es:",
    options: ["x = 1 y 6", "x = 2 y 3", "x = -2 y -3", "x = 0 y 6"],
    answer: 1,
    exp: "x² - 5x + 6 = (x - 2)(x - 3)."
  },
  {
    subject: "Matemáticas",
    topic: "Funciones",
    fig: "coordinate",
    q: "Si f(x)=2x²-1, entonces f(-3) es:",
    options: ["-19", "11", "17", "19"],
    answer: 2,
    exp: "f(-3)=2(9)-1=17."
  },
  {
    subject: "Matemáticas",
    topic: "Aritmética",
    fig: "none",
    q: "El mínimo común múltiplo de 18 y 24 es:",
    options: ["48", "54", "72", "96"],
    answer: 2,
    exp: "18 = 2 x 3² y 24 = 2³ x 3. MCM = 2³ x 3² = 72."
  },
  {
    subject: "Ciencias",
    topic: "Física",
    fig: "none",
    q: "Un objeto parte del reposo y acelera uniformemente a 3 m/s² durante 4 s. ¿Qué distancia recorre?",
    options: ["12 m", "18 m", "24 m", "48 m"],
    answer: 2,
    exp: "d = (1/2)at² = 0,5 x 3 x 16 = 24 m."
  },
  {
    subject: "Ciencias",
    topic: "Física",
    fig: "none",
    q: "Una fuerza neta de 20 N actúa sobre una masa de 5 kg. ¿Cuál es la aceleración?",
    options: ["2 m/s²", "4 m/s²", "10 m/s²", "25 m/s²"],
    answer: 1,
    exp: "Por la segunda ley de Newton, a = F/m = 20/5 = 4 m/s²."
  },
  {
    subject: "Ciencias",
    topic: "Química",
    fig: "none",
    q: "Un átomo neutro tiene 17 protones. ¿Cuántos electrones tiene?",
    options: ["7", "17", "18", "34"],
    answer: 1,
    exp: "En un átomo neutro, protones y electrones son iguales."
  },
  {
    subject: "Ciencias",
    topic: "Química",
    fig: "none",
    q: "¿Cuál cambio indica una reacción química y no solo un cambio físico?",
    options: ["El hielo se derrite", "El agua se evapora", "El hierro se oxida", "El vidrio se rompe"],
    answer: 2,
    exp: "La oxidación forma nuevas sustancias; los otros son cambios físicos."
  },
  {
    subject: "Ciencias",
    topic: "Biología",
    fig: "none",
    q: "En la fotosíntesis, la energía luminosa se transforma principalmente en:",
    options: ["Energía térmica", "Energía química", "Energía sonora", "Energía nuclear"],
    answer: 1,
    exp: "La fotosíntesis almacena energía en enlaces químicos de moléculas como la glucosa."
  },
  {
    subject: "Ciencias",
    topic: "Biología",
    fig: "none",
    q: "Si una población de insectos resistentes sobrevive a un pesticida y se reproduce, el proceso que mejor explica el aumento de resistencia es:",
    options: ["Selección natural", "Respiración celular", "Difusión simple", "Homeostasis"],
    answer: 0,
    exp: "Los individuos con rasgos favorables sobreviven más y dejan más descendencia."
  },
  {
    subject: "Ciencias",
    topic: "Ecología",
    fig: "none",
    q: "En una cadena alimentaria, si disminuyen drásticamente los productores, lo más probable es que:",
    options: ["Aumenten todos los consumidores", "Disminuya la energía disponible para los consumidores", "No cambie el ecosistema", "Desaparezcan solo los depredadores finales"],
    answer: 1,
    exp: "Los productores son la base energética de la cadena alimentaria."
  },
  {
    subject: "Ciencias",
    topic: "Física",
    fig: "none",
    q: "Una onda tiene frecuencia de 5 Hz y longitud de onda de 2 m. ¿Cuál es su velocidad?",
    options: ["2,5 m/s", "7 m/s", "10 m/s", "20 m/s"],
    answer: 2,
    exp: "v = fλ = 5 x 2 = 10 m/s."
  },
  {
    subject: "Ciencias",
    topic: "Química",
    fig: "none",
    q: "Una solución con pH 3 se clasifica como:",
    options: ["Ácida", "Neutra", "Básica", "Saturada"],
    answer: 0,
    exp: "Las soluciones con pH menor que 7 son ácidas."
  },
  {
    subject: "Ciencias",
    topic: "Biología",
    fig: "none",
    q: "La mitosis produce células hijas que, respecto a la célula original, son:",
    options: ["Genéticamente idénticas", "Con la mitad de cromosomas", "Siempre gametos", "Sin ADN"],
    answer: 0,
    exp: "La mitosis conserva el número de cromosomas y produce células genéticamente iguales."
  },
  {
    subject: "Ciencias",
    topic: "Física",
    fig: "none",
    q: "Un objeto de 2 kg está a 5 m de altura. Tomando g = 10 m/s², su energía potencial gravitacional es:",
    options: ["10 J", "25 J", "50 J", "100 J"],
    answer: 3,
    exp: "E = mgh = 2 x 10 x 5 = 100 J."
  },
  {
    subject: "Ciencias",
    topic: "Química",
    fig: "none",
    q: "En la ecuación 2H₂ + O₂ → 2H₂O, la proporción molar entre H₂ y O₂ es:",
    options: ["1:1", "2:1", "1:2", "2:2"],
    answer: 1,
    exp: "Los coeficientes indican 2 moles de H₂ por 1 mol de O₂."
  },
  {
    subject: "Ciencias",
    topic: "Biología",
    fig: "none",
    q: "La función principal de los ribosomas es:",
    options: ["Producir proteínas", "Almacenar agua", "Realizar fotosíntesis", "Transportar oxígeno"],
    answer: 0,
    exp: "Los ribosomas ensamblan proteínas a partir de aminoácidos."
  },
  {
    subject: "Ciencias",
    topic: "Ecología",
    fig: "none",
    q: "La acumulación de pesticidas en niveles tróficos superiores se llama:",
    options: ["Evaporación", "Biomagnificación", "Condensación", "Fijación"],
    answer: 1,
    exp: "La biomagnificación aumenta la concentración de contaminantes en depredadores superiores."
  },
  {
    subject: "Ciencias",
    topic: "Física",
    fig: "none",
    q: "Si se duplica la resistencia en un circuito con voltaje constante, la corriente:",
    options: ["Se duplica", "Se reduce a la mitad", "No cambia", "Se cuadruplica"],
    answer: 1,
    exp: "Por la ley de Ohm, I = V/R. Si R se duplica, I se reduce a la mitad."
  },
  {
    subject: "Ciencias",
    topic: "Química",
    fig: "none",
    q: "Una mezcla de arena y limaduras de hierro puede separarse mejor mediante:",
    options: ["Evaporación", "Filtración", "Imantación", "Destilación"],
    answer: 2,
    exp: "El hierro es atraído por un imán; la arena no."
  },
  {
    subject: "Ciencias",
    topic: "Biología",
    fig: "none",
    q: "En una célula vegetal, la estructura que aporta rigidez y protección externa es:",
    options: ["Membrana nuclear", "Pared celular", "Mitocondria", "Vacuola"],
    answer: 1,
    exp: "La pared celular da soporte rígido a las células vegetales."
  },
  {
    subject: "Ciencias",
    topic: "Física",
    fig: "none",
    q: "Una máquina realiza 600 J de trabajo en 30 s. ¿Cuál es su potencia?",
    options: ["10 W", "20 W", "30 W", "60 W"],
    answer: 1,
    exp: "Potencia = trabajo/tiempo = 600/30 = 20 W."
  },
  {
    subject: "Ciencias",
    topic: "Química",
    fig: "none",
    q: "Los elementos de un mismo grupo en la tabla periódica suelen tener propiedades químicas similares porque tienen:",
    options: ["Igual número de neutrones", "Igual masa atómica", "Igual número de electrones de valencia", "Igual radio atómico"],
    answer: 2,
    exp: "Los electrones de valencia determinan gran parte del comportamiento químico."
  },
  {
    subject: "Ciencias",
    topic: "Biología",
    fig: "none",
    q: "Si una membrana permite el paso de agua pero no de solutos, el movimiento neto de agua hacia la solución más concentrada se llama:",
    options: ["Ósmosis", "Mitosis", "Fermentación", "Transpiración"],
    answer: 0,
    exp: "La ósmosis es el movimiento de agua a través de una membrana semipermeable."
  },
  {
    subject: "Ciencias",
    topic: "Ecología",
    fig: "none",
    q: "Un ejemplo de relación mutualista es:",
    options: ["Un depredador cazando una presa", "Una garrapata alimentándose de un perro", "Abejas polinizando flores mientras obtienen néctar", "Dos plantas compitiendo por luz"],
    answer: 2,
    exp: "Ambas especies se benefician: la abeja obtiene alimento y la planta es polinizada."
  }
];

const state = {
  answers: JSON.parse(localStorage.getItem("icfesAnswers") || "{}"),
  startTime: Number(localStorage.getItem("icfesStartTime")) || Date.now(),
  review: localStorage.getItem("icfesReview") === "true",
  filter: "all"
};

localStorage.setItem("icfesStartTime", String(state.startTime));

const timerLabel = document.querySelector("#timerLabel");
const answeredCount = document.querySelector("#answeredCount");
const remainingCount = document.querySelector("#remainingCount");
const nav = document.querySelector("#questionNav");
const questionsNode = document.querySelector("#questions");
const resultBox = document.querySelector("#resultBox");
const finishBtn = document.querySelector("#finishBtn");
const resetBtn = document.querySelector("#resetBtn");
const filterButtons = document.querySelectorAll(".filter");

function figure(type, index) {
  const stroke = "#126b68";
  const muted = "#5e6a72";
  const n = index + 1;
  const map = {
    triangle: `<svg viewBox="0 0 260 190" role="img" aria-label="Diagrama triangular"><path d="M42 155 L218 155 L218 35 Z" fill="#dff3ef" stroke="${stroke}" stroke-width="4"/><path d="M206 155 L206 143 L218 143" fill="none" stroke="${muted}" stroke-width="3"/><text x="112" y="174">base</text><text x="226" y="98">altura</text><text x="118" y="88">P${n}</text></svg>`,
    circle: `<svg viewBox="0 0 260 190" role="img" aria-label="Diagrama circular"><circle cx="130" cy="95" r="64" fill="#e8f0fb" stroke="#2f66b1" stroke-width="4"/><line x1="130" y1="95" x2="194" y2="95" stroke="${stroke}" stroke-width="4"/><line x1="66" y1="95" x2="194" y2="95" stroke="${muted}" stroke-dasharray="7 5" stroke-width="2"/><text x="143" y="87">r</text><text x="110" y="172">círculo</text></svg>`,
    trapezoid: `<svg viewBox="0 0 260 190" role="img" aria-label="Diagrama de cuadrilátero"><path d="M60 145 L205 145 L175 55 L92 55 Z" fill="#fff9e8" stroke="#e4a11b" stroke-width="4"/><line x1="92" y1="55" x2="92" y2="145" stroke="${muted}" stroke-dasharray="6 5" stroke-width="3"/><text x="122" y="42">base menor</text><text x="102" y="166">base mayor</text></svg>`,
    coordinate: `<svg viewBox="0 0 260 190" role="img" aria-label="Plano cartesiano"><path d="M30 150 H230 M55 170 V25" stroke="${muted}" stroke-width="2"/><path d="M55 150 L185 60 L215 130" fill="none" stroke="${stroke}" stroke-width="4"/><circle cx="55" cy="150" r="5" fill="#c9563d"/><circle cx="185" cy="60" r="5" fill="#c9563d"/><circle cx="215" cy="130" r="5" fill="#c9563d"/><text x="203" y="42">y</text><text x="232" y="147">x</text></svg>`,
    sector: `<svg viewBox="0 0 260 190" role="img" aria-label="Sector circular"><path d="M130 100 L205 100 A75 75 0 0 0 92 35 Z" fill="#fff0ec" stroke="#c9563d" stroke-width="4"/><circle cx="130" cy="100" r="4" fill="${stroke}"/><text x="144" y="82">θ</text><text x="157" y="118">r</text></svg>`,
    prism: `<svg viewBox="0 0 260 190" role="img" aria-label="Sólido geométrico"><path d="M72 65 H168 L205 100 V158 H110 L72 124 Z" fill="#edf8f1" stroke="#2f7d4f" stroke-width="4"/><path d="M72 65 L110 100 H205 M110 100 V158 M168 65 L205 100" fill="none" stroke="#2f7d4f" stroke-width="3"/><text x="112" y="45">volumen</text></svg>`,
    polygon: `<svg viewBox="0 0 260 190" role="img" aria-label="Polígono regular"><polygon points="130,28 190,62 190,130 130,164 70,130 70,62" fill="#e8f0fb" stroke="#2f66b1" stroke-width="4"/><line x1="130" y1="28" x2="130" y2="164" stroke="${muted}" stroke-dasharray="6 5" stroke-width="2"/><line x1="70" y1="62" x2="190" y2="130" stroke="${muted}" stroke-dasharray="6 5" stroke-width="2"/><text x="99" y="99">regular</text></svg>`,
    none: `<svg viewBox="0 0 260 190" role="img" aria-label="Patrón matemático"><path d="M34 140 C72 42 112 42 150 140 S228 238 238 72" fill="none" stroke="#2f66b1" stroke-width="5"/><circle cx="78" cy="96" r="8" fill="#c9563d"/><circle cx="150" cy="140" r="8" fill="#126b68"/><circle cx="218" cy="104" r="8" fill="#e4a11b"/><text x="54" y="42">análisis</text></svg>`
  };
  return map[type] || map.none;
}

function saveAnswers() {
  localStorage.setItem("icfesAnswers", JSON.stringify(state.answers));
}

function isVisible(q) {
  if (state.filter === "all") return true;
  return q.subject === state.filter || q.topic === state.filter;
}

function render() {
  renderNav();
  renderQuestions();
  updateStats();
  if (state.review) showResults();
}

function renderNav() {
  nav.innerHTML = "";
  questions.forEach((q, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = i + 1;
    btn.hidden = !isVisible(q);
    if (state.answers[i] !== undefined) btn.classList.add("answered");
    if (state.review) {
      btn.classList.toggle("review-right", state.answers[i] === q.answer);
      btn.classList.toggle("review-wrong", state.answers[i] !== q.answer);
    }
    btn.addEventListener("click", () => {
      document.querySelector(`#q-${i}`).scrollIntoView({ behavior: "smooth", block: "start" });
    });
    nav.appendChild(btn);
  });
}

function renderQuestions() {
  questionsNode.innerHTML = "";
  questions.forEach((q, i) => {
    const selected = state.answers[i];
    const card = document.createElement("article");
    card.className = `question-card ${state.review ? "review" : ""}`;
    card.id = `q-${i}`;
    card.hidden = !isVisible(q);
    card.innerHTML = `
      <div class="card-head">
        <div>
          <div class="badge-row">
            <span class="badge">${q.subject}</span>
            <span class="badge alt">${q.topic}</span>
          </div>
        </div>
        <span class="number">${i + 1}</span>
      </div>
      <div class="question-body">
        <div>
          <p class="prompt">${q.q}</p>
          <div class="options">
            ${q.options.map((option, optionIndex) => {
              const chosen = selected === optionIndex;
              const right = state.review && optionIndex === q.answer;
              const wrong = state.review && chosen && optionIndex !== q.answer;
              return `<button type="button" class="option ${chosen ? "selected" : ""} ${right ? "correct" : ""} ${wrong ? "incorrect" : ""}" data-question="${i}" data-option="${optionIndex}" ${state.review ? "disabled" : ""}>
                <span class="letter">${letters[optionIndex]}</span>
                <span>${option}</span>
              </button>`;
            }).join("")}
          </div>
        </div>
        <div class="figure">${figure(q.fig, i)}</div>
      </div>
      <div class="feedback"><strong>Explicación:</strong> ${q.exp}</div>
    `;
    questionsNode.appendChild(card);
  });

  questionsNode.querySelectorAll(".option").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers[btn.dataset.question] = Number(btn.dataset.option);
      saveAnswers();
      render();
    });
  });
}

function updateStats() {
  const answered = Object.keys(state.answers).length;
  answeredCount.textContent = answered;
  remainingCount.textContent = questions.length - answered;
}

function score() {
  const correct = questions.reduce((sum, q, i) => sum + (state.answers[i] === q.answer ? 1 : 0), 0);
  const byTopic = {};
  questions.forEach((q, i) => {
    byTopic[q.topic] ||= { total: 0, correct: 0 };
    byTopic[q.topic].total += 1;
    if (state.answers[i] === q.answer) byTopic[q.topic].correct += 1;
  });
  return { correct, byTopic };
}

function showResults() {
  const { correct, byTopic } = score();
  const percent = Math.round((correct / questions.length) * 100);
  const geometry = byTopic["Geometría"];
  const weak = Object.entries(byTopic)
    .map(([topic, data]) => ({ topic, rate: data.correct / data.total, text: `${topic}: ${data.correct}/${data.total}` }))
    .sort((a, b) => a.rate - b.rate)
    .slice(0, 4);

  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <h2>Resultado del simulacro</h2>
    <div class="result-grid">
      <div><strong>${correct}/80</strong><span>correctas</span></div>
      <div><strong>${percent}%</strong><span>puntaje interno</span></div>
      <div><strong>${geometry.correct}/${geometry.total}</strong><span>geometría</span></div>
      <div><strong>${Object.keys(state.answers).length}/80</strong><span>respondidas</span></div>
    </div>
    <p><strong>Temas para reforzar:</strong> ${weak.map((item) => item.text).join(" · ")}</p>
  `;
}

function finish() {
  state.review = true;
  localStorage.setItem("icfesReview", "true");
  showResults();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function reset() {
  if (!confirm("¿Reiniciar el simulacro y borrar respuestas?")) return;
  localStorage.removeItem("icfesAnswers");
  localStorage.removeItem("icfesStartTime");
  localStorage.removeItem("icfesReview");
  state.answers = {};
  state.startTime = Date.now();
  state.review = false;
  resultBox.classList.add("hidden");
  localStorage.setItem("icfesStartTime", String(state.startTime));
  render();
}

function tick() {
  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
  const remaining = Math.max(0, TOTAL_SECONDS - elapsed);
  const hours = String(Math.floor(remaining / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");
  timerLabel.textContent = `${hours}:${minutes}:${seconds}`;
  if (remaining === 0 && !state.review) finish();
}

finishBtn.addEventListener("click", finish);
resetBtn.addEventListener("click", reset);
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    render();
  });
});

render();
tick();
setInterval(tick, 1000);
