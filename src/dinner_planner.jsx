import React, { useState } from 'react';

const DinnerPlanner = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [completedDays, setCompletedDays] = useState(() => {
    try { return JSON.parse(localStorage.getItem('completedDays') || '{}'); } catch(e) { return {}; }
  });
  const [cookingMode, setCookingMode] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cookingMode') || '{}'); } catch(e) { return {}; }
  });

  const toggleDay = (dayNum, e) => {
    e.stopPropagation();
    const updated = { ...completedDays, [dayNum]: !completedDays[dayNum] };
    setCompletedDays(updated);
    try { localStorage.setItem('completedDays', JSON.stringify(updated)); } catch(e) {}
  };

  const toggleMode = (dayNum, mode, e) => {
    e.stopPropagation();
    const updated = { ...cookingMode, [dayNum]: mode };
    setCookingMode(updated);
    try { localStorage.setItem('cookingMode', JSON.stringify(updated)); } catch(e) {}
  };

  const completedCount = Object.values(completedDays).filter(Boolean).length;

  const dinnerPlan = [
    {
      day: 1, name: 'Pechuga de pollo a la parrilla', sides: 'Papas al horno + Brócoli', protein: 'Pollo', cal: 520, proteins: 35, carbs: 45, fats: 15,
      normal: {
        ingredients: ['Pechuga de pollo (800g)', 'Papas medianas (4 unidades)', 'Brócoli (1 cabeza)', 'Aceite de oliva (2 cdas)', 'Ajo (2 dientes)', 'Limón (1 unidad)', 'Sal y pimienta'],
        steps: ['Calentar la parrilla o sartén a fuego alto.', 'Condimentar la pechuga con ajo, limón, sal y pimienta.', 'Cocinar 6-7 min por lado hasta dorar.', 'Cocinar las papas en horno a 200°C por 35 min con aceite.', 'Hervir el brócoli 5 min y saltear con ajo.']
      },
      thermomix: {
        ingredients: ['Pechuga de pollo (800g)', 'Papas medianas (4 unidades)', 'Brócoli (1 cabeza)', 'Aceite de oliva (2 cdas)', 'Ajo (2 dientes)', 'Limón (1 unidad)', 'Sal y pimienta'],
        steps: ['Poner agua en el vaso hasta la marca. Colocar papas y brócoli en el Varoma.', 'Programar 25 min / Varoma / vel 1.', 'Retirar verduras. Vaciar el vaso.', 'Agregar aceite y ajo: 3 min / 120°C / vel 1.', 'Sellar la pechuga en sartén aparte 3 min por lado. Servir con verduras.']
      }
    },
    {
      day: 2, name: 'Pasta con salsa de tomate casera', sides: 'Carne molida + Queso rallado', protein: 'Carne/Pasta', cal: 580, proteins: 32, carbs: 62, fats: 14,
      normal: {
        ingredients: ['Fideos (400g)', 'Carne molida magra (500g)', 'Tomates perita (4 unidades)', 'Cebolla (1 unidad)', 'Ajo (3 dientes)', 'Queso rallado (100g)', 'Aceite de oliva', 'Sal, pimienta y orégano'],
        steps: ['Hervir los fideos según indicaciones del paquete.', 'Rehogar cebolla y ajo en aceite 5 min.', 'Agregar carne molida y dorar 8 min.', 'Incorporar tomates picados, sal, pimienta y orégano. Cocinar 15 min.', 'Mezclar con los fideos y servir con queso.']
      },
      thermomix: {
        ingredients: ['Fideos (400g)', 'Carne molida magra (500g)', 'Tomates perita (4 unidades)', 'Cebolla (1 unidad)', 'Ajo (3 dientes)', 'Queso rallado (100g)', 'Aceite de oliva', 'Sal, pimienta y orégano'],
        steps: ['Poner cebolla y ajo en el vaso: 5 seg / vel 5. Bajar restos.', 'Agregar aceite: 5 min / 120°C / vel 1.', 'Añadir tomates troceados: 10 seg / vel 4. Bajar restos.', 'Incorporar carne, sal, orégano: 10 min / 120°C / giro izq / vel cuchara.', 'Hervir fideos aparte. Servir con la salsa y queso.']
      }
    },
    {
      day: 3, name: 'Salmón a la mantequilla', sides: 'Arroz integral + Espinaca cocida', protein: 'Salmón', cal: 620, proteins: 38, carbs: 48, fats: 18,
      normal: {
        ingredients: ['Filete de salmón (700g)', 'Arroz integral (300g)', 'Espinaca fresca (400g)', 'Mantequilla (40g)', 'Limón (1 unidad)', 'Ajo (2 dientes)', 'Sal y pimienta', 'Eneldo (opcional)'],
        steps: ['Cocinar arroz integral según instrucciones (aprox 30 min).', 'Derretir mantequilla en sartén. Dorar ajo 1 min.', 'Sellar el salmón 4 min por lado con sal, pimienta y limón.', 'En otra sartén, saltear espinaca con ajo 3 min.', 'Servir el salmón sobre arroz con espinaca al lado.']
      },
      thermomix: {
        ingredients: ['Filete de salmón (700g)', 'Arroz integral (300g)', 'Espinaca fresca (400g)', 'Mantequilla (40g)', 'Limón (1 unidad)', 'Ajo (2 dientes)', 'Sal y pimienta', 'Eneldo (opcional)'],
        steps: ['Poner 600g agua en el vaso. Colocar arroz en el cestillo.', 'Poner salmón y espinaca en el Varoma.', 'Programar 30 min / Varoma / vel 2.', 'Mientras tanto, derretir mantequilla con ajo en sartén 2 min.', 'Servir el salmón bañado con la mantequilla de ajo y limón.']
      }
    },
    {
      day: 4, name: 'Tacos de pollo desmenuzado', sides: 'Lechuga + Tomate + Queso', protein: 'Pollo', cal: 550, proteins: 36, carbs: 52, fats: 16,
      normal: {
        ingredients: ['Pechuga de pollo (700g)', 'Tortillas integrales (8 unidades)', 'Lechuga (1/2 cabeza)', 'Tomates (2 unidades)', 'Queso rallado (80g)', 'Cebolla (1 unidad)', 'Pimentón, comino, sal'],
        steps: ['Hervir la pechuga 20 min con sal y especias.', 'Desmenuzar el pollo con dos tenedores.', 'Saltear el pollo desmenuzado con cebolla y especias 5 min.', 'Calentar las tortillas en sartén seca 1 min por lado.', 'Armar los tacos con todos los ingredientes.']
      },
      thermomix: {
        ingredients: ['Pechuga de pollo (700g)', 'Tortillas integrales (8 unidades)', 'Lechuga (1/2 cabeza)', 'Tomates (2 unidades)', 'Queso rallado (80g)', 'Cebolla (1 unidad)', 'Pimentón, comino, sal'],
        steps: ['Poner 500ml agua en el vaso. Colocar pechuga en el Varoma con sal y especias.', 'Programar 25 min / Varoma / vel 2.', 'Retirar pollo y desmenuzar con dos tenedores.', 'Sin lavar vaso: sofreír cebolla 5 min / 120°C / vel 1. Añadir pollo 3 min / giro / vel cuchara.', 'Calentar tortillas y armar tacos.']
      }
    },
    {
      day: 5, name: 'Milanesa de ternera', sides: 'Puré de papa + Zanahorias', protein: 'Ternera', cal: 600, proteins: 40, carbs: 50, fats: 17,
      normal: {
        ingredients: ['Ternera en milanesa (600g)', 'Papas (6 unidades)', 'Zanahorias (3 unidades)', 'Huevos (2 unidades)', 'Pan rallado (200g)', 'Leche (100ml)', 'Mantequilla (30g)', 'Sal y pimienta'],
        steps: ['Pasar las milanesas por huevo batido y pan rallado. Salar.', 'Cocinar en sartén con aceite 3-4 min por lado.', 'Hervir papas y zanahoria 20 min hasta tiernas.', 'Hacer puré con papas, mantequilla, leche, sal.', 'Servir con zanahoria hervida al lado.']
      },
      thermomix: {
        ingredients: ['Ternera en milanesa (600g)', 'Papas (6 unidades)', 'Zanahorias (3 unidades)', 'Huevos (2 unidades)', 'Pan rallado (200g)', 'Leche (100ml)', 'Mantequilla (30g)', 'Sal y pimienta'],
        steps: ['Cocer papas y zanahorias en Varoma: 25 min / Varoma / vel 1 con agua en vaso.', 'Vaciar el vaso. Poner papas, mantequilla, leche y sal: 20 seg / vel 4. Reservar puré.', 'Preparar milanesas: pasar por huevo y pan rallado.', 'Cocinar milanesas en sartén aparte 3-4 min por lado.', 'Servir milanesas con puré y zanahoria.']
      }
    },
    {
      day: 6, name: 'Pechuga rellena de queso', sides: 'Fideos integrales + Ensalada', protein: 'Pollo/Queso', cal: 570, proteins: 38, carbs: 48, fats: 16,
      normal: {
        ingredients: ['Pechuga de pollo (700g)', 'Queso en lonchas (100g)', 'Fideos integrales (350g)', 'Lechuga (1 cabeza)', 'Tomate (2 unidades)', 'Aceite de oliva', 'Sal, pimienta y orégano'],
        steps: ['Abrir la pechuga en libro, rellenar con queso, cerrar con palillos.', 'Sellar en sartén con aceite 5 min por lado hasta dorar.', 'Terminar en horno 180°C 15 min.', 'Hervir fideos según paquete.', 'Armar ensalada con lechuga y tomate.']
      },
      thermomix: {
        ingredients: ['Pechuga de pollo (700g)', 'Queso en lonchas (100g)', 'Fideos integrales (350g)', 'Lechuga (1 cabeza)', 'Tomate (2 unidades)', 'Aceite de oliva', 'Sal, pimienta y orégano'],
        steps: ['Abrir la pechuga en libro, rellenar con queso y cerrar con palillos.', 'Poner agua en el vaso. Colocar pechugas en Varoma.', 'Programar 30 min / Varoma / vel 2.', 'Hervir fideos aparte según paquete.', 'Dorar las pechugas en sartén 2 min por lado para terminar. Servir con ensalada.']
      }
    },
    {
      day: 7, name: 'Hamburguesa casera', sides: 'Pan integral + Verduras variadas', protein: 'Carne', cal: 590, proteins: 37, carbs: 54, fats: 17,
      normal: {
        ingredients: ['Carne molida magra (600g)', 'Pan integral (4 unidades)', 'Lechuga (1/2 cabeza)', 'Tomate (2 unidades)', 'Cebolla (1 unidad)', 'Queso (4 lonchas)', 'Huevo (1 unidad)', 'Sal y pimienta'],
        steps: ['Mezclar carne con huevo, sal y pimienta. Formar 4 hamburguesas.', 'Cocinar en sartén o parrilla 4-5 min por lado.', 'Agregar queso encima en el último minuto.', 'Tostar el pan en sartén seca.', 'Armar con lechuga, tomate y cebolla.']
      },
      thermomix: {
        ingredients: ['Carne molida magra (600g)', 'Pan integral (4 unidades)', 'Lechuga (1/2 cabeza)', 'Tomate (2 unidades)', 'Cebolla (1 unidad)', 'Queso (4 lonchas)', 'Huevo (1 unidad)', 'Sal y pimienta'],
        steps: ['Poner cebolla en vaso: 5 seg / vel 5. Bajar restos.', 'Añadir carne, huevo, sal y pimienta: 20 seg / giro izq / vel 4.', 'Formar 4 hamburguesas con las manos.', 'Cocinar en sartén o parrilla 4-5 min por lado. Agregar queso al final.', 'Armar con pan tostado, lechuga y tomate.']
      }
    },
    {
      day: 8, name: 'Pechuga al limón', sides: 'Batata asada + Brócoli', protein: 'Pollo', cal: 510, proteins: 34, carbs: 46, fats: 14,
      normal: {
        ingredients: ['Pechuga de pollo (700g)', 'Batata (2 unidades grandes)', 'Brócoli (1 cabeza)', 'Limones (2 unidades)', 'Aceite de oliva', 'Ajo (3 dientes)', 'Tomillo', 'Sal y pimienta'],
        steps: ['Cortar batatas en cubos, mezclar con aceite y sal. Hornear 200°C 30 min.', 'Marinar pechuga con limón, ajo, tomillo, sal 10 min.', 'Cocinar pechuga en sartén 6-7 min por lado.', 'Hervir brócoli 5 min y saltear con ajo.', 'Servir todo junto.']
      },
      thermomix: {
        ingredients: ['Pechuga de pollo (700g)', 'Batata (2 unidades grandes)', 'Brócoli (1 cabeza)', 'Limones (2 unidades)', 'Aceite de oliva', 'Ajo (3 dientes)', 'Tomillo', 'Sal y pimienta'],
        steps: ['Colocar batata en cubos y brócoli en el Varoma. Poner agua en el vaso.', 'Programar 25 min / Varoma / vel 1.', 'Marinar la pechuga con limón, ajo y tomillo mientras tanto.', 'Cocinar pechuga en sartén 6-7 min por lado.', 'Servir pechuga con las verduras del Varoma.']
      }
    },
    {
      day: 9, name: 'Fideos a la boloñesa', sides: 'Carne molida + Queso parmesano', protein: 'Carne/Pasta', cal: 600, proteins: 34, carbs: 65, fats: 15,
      normal: {
        ingredients: ['Fideos (400g)', 'Carne molida (500g)', 'Tomates perita (5 unidades)', 'Cebolla (1 unidad)', 'Zanahoria (1 unidad)', 'Queso parmesano (80g)', 'Vino tinto (50ml, opcional)', 'Aceite, sal, orégano'],
        steps: ['Rehogar cebolla y zanahoria picadas en aceite 5 min.', 'Añadir carne y dorar 8 min revolviendo.', 'Agregar tomates y vino. Cocinar 20 min a fuego bajo.', 'Hervir fideos según paquete.', 'Servir con salsa boloñesa y parmesano rallado.']
      },
      thermomix: {
        ingredients: ['Fideos (400g)', 'Carne molida (500g)', 'Tomates perita (5 unidades)', 'Cebolla (1 unidad)', 'Zanahoria (1 unidad)', 'Queso parmesano (80g)', 'Vino tinto (50ml, opcional)', 'Aceite, sal, orégano'],
        steps: ['Poner cebolla y zanahoria: 5 seg / vel 5. Bajar restos.', 'Añadir aceite: 5 min / 120°C / vel 1.', 'Agregar tomates troceados: 10 seg / vel 4. Bajar restos.', 'Añadir carne, sal, orégano, vino: 15 min / 120°C / giro izq / vel cuchara.', 'Hervir fideos aparte. Servir con salsa y parmesano.']
      }
    },
    {
      day: 10, name: 'Trucha al horno', sides: 'Arroz blanco + Calabacín', protein: 'Trucha', cal: 530, proteins: 36, carbs: 44, fats: 16,
      normal: {
        ingredients: ['Trucha filetes (700g)', 'Arroz blanco (300g)', 'Calabacín (2 unidades)', 'Limón (2 unidades)', 'Aceite de oliva', 'Ajo (2 dientes)', 'Perejil', 'Sal y pimienta'],
        steps: ['Precalentar horno a 200°C.', 'Colocar trucha en asadera con limón, ajo, perejil, sal y aceite.', 'Hornear 18-20 min.', 'Hervir arroz 18 min.', 'Saltear calabacín en rodajas con ajo y aceite 5 min.']
      },
      thermomix: {
        ingredients: ['Trucha filetes (700g)', 'Arroz blanco (300g)', 'Calabacín (2 unidades)', 'Limón (2 unidades)', 'Aceite de oliva', 'Ajo (2 dientes)', 'Perejil', 'Sal y pimienta'],
        steps: ['Poner 600g agua en el vaso. Colocar arroz en cestillo.', 'Poner trucha y calabacín en Varoma con limón, ajo y sal.', 'Programar 20 min / Varoma / vel 2.', 'Verificar que el arroz esté listo (si no, 5 min más).', 'Servir todo junto con perejil fresco.']
      }
    },
    {
      day: 11, name: 'Pollo a la naranja', sides: 'Arroz integral + Judías verdes', protein: 'Pollo', cal: 540, proteins: 35, carbs: 50, fats: 15,
      normal: {
        ingredients: ['Pollo (800g)', 'Naranjas (3 unidades)', 'Arroz integral (300g)', 'Judías verdes (400g)', 'Miel (2 cdas)', 'Ajo (2 dientes)', 'Sal y pimienta'],
        steps: ['Cocinar arroz integral 30 min.', 'Dorar el pollo en sartén con aceite 5 min por lado.', 'Añadir jugo de naranja, miel y ajo. Cocinar 20 min a fuego medio.', 'Hervir judías verdes 8 min.', 'Servir pollo con la salsa de naranja y guarniciones.']
      },
      thermomix: {
        ingredients: ['Pollo (800g)', 'Naranjas (3 unidades)', 'Arroz integral (300g)', 'Judías verdes (400g)', 'Miel (2 cdas)', 'Ajo (2 dientes)', 'Sal y pimienta'],
        steps: ['Poner jugo de naranja, miel, ajo y sal en el vaso: 2 min / 100°C / vel 2.', 'Colocar arroz integral en cestillo. Pollo y judías en Varoma.', 'Programar 35 min / Varoma / vel 2.', 'Bañar el pollo con la salsa del vaso.', 'Servir todo junto.']
      }
    },
    {
      day: 12, name: 'Carne con papas', sides: 'Cebolla + Pimiento', protein: 'Carne', cal: 610, proteins: 39, carbs: 52, fats: 18,
      normal: {
        ingredients: ['Carne para guiso (600g)', 'Papas (5 unidades)', 'Cebolla (2 unidades)', 'Pimiento rojo (1 unidad)', 'Pimiento verde (1 unidad)', 'Tomate (2 unidades)', 'Caldo de carne (200ml)', 'Pimentón, sal, pimienta'],
        steps: ['Dorar la carne en trozos con aceite 5 min.', 'Rehogar cebolla y pimientos 5 min.', 'Añadir tomate, pimentón y caldo. Mezclar.', 'Incorporar papas en cubos. Cocinar 25 min tapado.', 'Rectificar sal y servir.']
      },
      thermomix: {
        ingredients: ['Carne para guiso (600g)', 'Papas (5 unidades)', 'Cebolla (2 unidades)', 'Pimiento rojo (1 unidad)', 'Pimiento verde (1 unidad)', 'Tomate (2 unidades)', 'Caldo de carne (200ml)', 'Pimentón, sal, pimienta'],
        steps: ['Poner cebolla y pimientos: 5 seg / vel 5. Bajar restos.', 'Añadir aceite: 5 min / 120°C / vel 1.', 'Agregar tomate y pimentón: 5 min / 120°C / giro / vel cuchara.', 'Añadir carne, papas y caldo: 30 min / 100°C / giro izq / vel cuchara.', 'Rectificar sal y servir.']
      }
    },
    {
      day: 13, name: 'Filetes de pollo empanizados', sides: 'Papas al horno + Espinaca', protein: 'Pollo', cal: 580, proteins: 37, carbs: 51, fats: 17,
      normal: {
        ingredients: ['Pechuga en filetes (700g)', 'Pan rallado (200g)', 'Huevos (2 unidades)', 'Papas (4 unidades)', 'Espinaca (300g)', 'Ajo en polvo', 'Aceite', 'Sal y pimienta'],
        steps: ['Cortar papas en gajos, mezclar con aceite y sal. Hornear 200°C 30 min.', 'Pasar filetes por huevo y pan rallado condimentado.', 'Freír en aceite caliente 3-4 min por lado.', 'Saltear espinaca con ajo en sartén 3 min.', 'Servir todo junto.']
      },
      thermomix: {
        ingredients: ['Pechuga en filetes (700g)', 'Pan rallado (200g)', 'Huevos (2 unidades)', 'Papas (4 unidades)', 'Espinaca (300g)', 'Ajo en polvo', 'Aceite', 'Sal y pimienta'],
        steps: ['Cocer papas en gajos en Varoma: 25 min / Varoma / vel 1 con agua en vaso.', 'Pasar filetes por huevo y pan rallado mientras tanto.', 'Freír filetes en sartén aparte 3-4 min por lado.', 'Saltear espinaca en sartén con ajo 3 min.', 'Servir todo junto.']
      }
    },
    {
      day: 14, name: 'Pechuga rellena de jamón y queso', sides: 'Fideos + Tomate fresco', protein: 'Pollo', cal: 600, proteins: 39, carbs: 49, fats: 18,
      normal: {
        ingredients: ['Pechuga de pollo (700g)', 'Jamón cocido (100g)', 'Queso en lonchas (100g)', 'Fideos (350g)', 'Tomates cherry (200g)', 'Palillos', 'Aceite', 'Sal y pimienta'],
        steps: ['Abrir pechugas en libro, rellenar con jamón y queso. Cerrar con palillos.', 'Sellar en sartén con aceite 5 min por lado.', 'Terminar en horno 180°C 15 min.', 'Hervir fideos según paquete.', 'Servir con tomates cherry cortados.']
      },
      thermomix: {
        ingredients: ['Pechuga de pollo (700g)', 'Jamón cocido (100g)', 'Queso en lonchas (100g)', 'Fideos (350g)', 'Tomates cherry (200g)', 'Palillos', 'Aceite', 'Sal y pimienta'],
        steps: ['Rellenar pechugas con jamón y queso. Cerrar con palillos.', 'Poner agua en el vaso. Colocar pechugas en Varoma.', 'Programar 30 min / Varoma / vel 2.', 'Dorar en sartén 2 min por lado para terminar.', 'Hervir fideos aparte. Servir con tomates cherry.']
      }
    },
    {
      day: 15, name: 'Salmón a las hierbas', sides: 'Batata + Brócoli al vapor', protein: 'Salmón', cal: 630, proteins: 39, carbs: 47, fats: 19,
      normal: {
        ingredients: ['Filete de salmón (700g)', 'Batata (2 unidades)', 'Brócoli (1 cabeza)', 'Eneldo fresco', 'Perejil', 'Limón (1 unidad)', 'Aceite de oliva', 'Sal y pimienta'],
        steps: ['Hornear batata en cubos 200°C 30 min con aceite y sal.', 'Cocinar salmón en sartén con aceite 4 min por lado.', 'Condimentar con eneldo, perejil, limón y pimienta.', 'Hervir brócoli al vapor 6 min.', 'Servir salmón con batata y brócoli.']
      },
      thermomix: {
        ingredients: ['Filete de salmón (700g)', 'Batata (2 unidades)', 'Brócoli (1 cabeza)', 'Eneldo fresco', 'Perejil', 'Limón (1 unidad)', 'Aceite de oliva', 'Sal y pimienta'],
        steps: ['Colocar batata en cubos en la base del Varoma y brócoli arriba.', 'Poner salmón condimentado encima del brócoli.', 'Poner agua en el vaso: 30 min / Varoma / vel 2.', 'Rociar con limón, eneldo y perejil al servir.', 'Acompañar con un hilo de aceite de oliva.']
      }
    },
    {
      day: 16, name: 'Pasta con verduras y carne', sides: 'Calabaza + Zanahoria', protein: 'Carne/Pasta', cal: 560, proteins: 33, carbs: 60, fats: 15,
      normal: {
        ingredients: ['Fideos (400g)', 'Carne molida (400g)', 'Calabaza (300g)', 'Zanahoria (2 unidades)', 'Cebolla (1 unidad)', 'Tomate (3 unidades)', 'Queso rallado (80g)', 'Aceite, sal, orégano'],
        steps: ['Rehogar cebolla en aceite 5 min.', 'Añadir carne y dorar 8 min.', 'Incorporar calabaza, zanahoria y tomate. Cocinar 15 min.', 'Hervir fideos según paquete.', 'Mezclar todo y servir con queso.']
      },
      thermomix: {
        ingredients: ['Fideos (400g)', 'Carne molida (400g)', 'Calabaza (300g)', 'Zanahoria (2 unidades)', 'Cebolla (1 unidad)', 'Tomate (3 unidades)', 'Queso rallado (80g)', 'Aceite, sal, orégano'],
        steps: ['Poner cebolla: 5 seg / vel 5. Bajar restos. Aceite: 3 min / 120°C / vel 1.', 'Añadir zanahoria y calabaza troceadas: 5 seg / vel 4.', 'Agregar tomate, carne, sal, orégano: 15 min / 120°C / giro / vel cuchara.', 'Hervir fideos aparte.', 'Mezclar y servir con queso rallado.']
      }
    },
    {
      day: 17, name: 'Pollo desmenuzado en guiso', sides: 'Papas + Verduras variadas', protein: 'Pollo', cal: 520, proteins: 32, carbs: 55, fats: 14,
      normal: {
        ingredients: ['Pechuga de pollo (700g)', 'Papas (4 unidades)', 'Zanahoria (2 unidades)', 'Arvejas (100g)', 'Cebolla (1 unidad)', 'Tomate (2 unidades)', 'Caldo de pollo (300ml)', 'Sal, pimentón, comino'],
        steps: ['Hervir pechuga 20 min. Desmenuzar.', 'Rehogar cebolla y zanahoria 5 min.', 'Añadir tomate, papas y caldo. Cocinar 15 min.', 'Incorporar el pollo desmenuzado y arvejas. 5 min más.', 'Rectificar sal y servir.']
      },
      thermomix: {
        ingredients: ['Pechuga de pollo (700g)', 'Papas (4 unidades)', 'Zanahoria (2 unidades)', 'Arvejas (100g)', 'Cebolla (1 unidad)', 'Tomate (2 unidades)', 'Caldo de pollo (300ml)', 'Sal, pimentón, comino'],
        steps: ['Poner cebolla: 5 seg / vel 5. Aceite: 3 min / 120°C / vel 1.', 'Añadir tomate: 5 seg / vel 4. Bajar restos.', 'Agregar pechuga entera, papas, zanahoria, caldo y especias: 30 min / 100°C / giro / vel cuchara.', 'Retirar pechuga y desmenuzar. Volver al vaso con arvejas: 5 min / 100°C / giro / vel cuchara.', 'Servir el guiso con el pollo encima.']
      }
    },
    {
      day: 18, name: 'Milanesa de pollo', sides: 'Puré de papas + Ensalada fresca', protein: 'Pollo', cal: 570, proteins: 36, carbs: 50, fats: 17,
      normal: {
        ingredients: ['Pechuga en milanesa (700g)', 'Papas (5 unidades)', 'Lechuga (1 cabeza)', 'Tomate (2 unidades)', 'Huevos (2 unidades)', 'Pan rallado (200g)', 'Leche (100ml)', 'Mantequilla (30g)'],
        steps: ['Hervir papas 20 min hasta tiernas.', 'Pasar milanesas por huevo batido y pan rallado.', 'Freír en aceite caliente 3-4 min por lado.', 'Hacer puré con papas, mantequilla, leche y sal.', 'Armar ensalada con lechuga y tomate.']
      },
      thermomix: {
        ingredients: ['Pechuga en milanesa (700g)', 'Papas (5 unidades)', 'Lechuga (1 cabeza)', 'Tomate (2 unidades)', 'Huevos (2 unidades)', 'Pan rallado (200g)', 'Leche (100ml)', 'Mantequilla (30g)'],
        steps: ['Cocer papas en el Varoma: 25 min / Varoma / vel 1.', 'Hacer puré: papas + mantequilla + leche + sal: 20 seg / vel 4. Reservar.', 'Pasar milanesas por huevo y pan rallado.', 'Freír en sartén aparte 3-4 min por lado.', 'Servir con puré y ensalada fresca.']
      }
    },
    {
      day: 19, name: 'Carne a la parrilla', sides: 'Camote asado + Ensalada de lechuga', protein: 'Carne', cal: 590, proteins: 38, carbs: 48, fats: 18,
      normal: {
        ingredients: ['Carne para parrilla (700g)', 'Camote (2 unidades)', 'Lechuga (1 cabeza)', 'Tomate (2 unidades)', 'Cebolla (1 unidad)', 'Aceite de oliva', 'Sal gruesa', 'Limón (1 unidad)'],
        steps: ['Cortar camote en rodajas, mezclar con aceite y sal. Hornear 200°C 35 min.', 'Calentar parrilla o sartén al máximo.', 'Salar la carne y cocinar 4-5 min por lado según gusto.', 'Armar ensalada con lechuga, tomate y cebolla.', 'Servir carne con camote y ensalada.']
      },
      thermomix: {
        ingredients: ['Carne para parrilla (700g)', 'Camote (2 unidades)', 'Lechuga (1 cabeza)', 'Tomate (2 unidades)', 'Cebolla (1 unidad)', 'Aceite de oliva', 'Sal gruesa', 'Limón (1 unidad)'],
        steps: ['Colocar camote en rodajas en el Varoma. Poner agua en el vaso.', 'Programar 25 min / Varoma / vel 1.', 'Cocinar la carne en parrilla o sartén aparte 4-5 min por lado.', 'Armar ensalada con lechuga, tomate y cebolla.', 'Servir todo junto con limón.']
      }
    },
    {
      day: 20, name: 'Pollo con salsa de champiñones', sides: 'Arroz integral + Zanahoria', protein: 'Pollo', cal: 550, proteins: 35, carbs: 52, fats: 16,
      normal: {
        ingredients: ['Pechuga de pollo (700g)', 'Champiñones (300g)', 'Arroz integral (300g)', 'Zanahoria (2 unidades)', 'Crema light (100ml)', 'Cebolla (1 unidad)', 'Ajo (2 dientes)', 'Sal y pimienta'],
        steps: ['Cocinar arroz integral 30 min.', 'Dorar pechuga en sartén 6 min por lado. Reservar.', 'En la misma sartén, rehogar cebolla, ajo y champiñones 8 min.', 'Añadir crema, sal y pimienta. Cocinar 3 min.', 'Servir pollo con salsa de champiñones, arroz y zanahoria hervida.']
      },
      thermomix: {
        ingredients: ['Pechuga de pollo (700g)', 'Champiñones (300g)', 'Arroz integral (300g)', 'Zanahoria (2 unidades)', 'Crema light (100ml)', 'Cebolla (1 unidad)', 'Ajo (2 dientes)', 'Sal y pimienta'],
        steps: ['Poner cebolla y ajo: 5 seg / vel 5. Aceite: 3 min / 120°C / vel 1.', 'Añadir champiñones laminados: 5 min / 120°C / giro / vel cuchara.', 'Agregar crema, sal y pimienta: 3 min / 90°C / giro / vel cuchara. Reservar salsa.', 'Poner arroz en cestillo y zanahoria + pechuga en Varoma: 35 min / Varoma / vel 2.', 'Servir pollo con la salsa y el arroz.']
      }
    },
    {
      day: 21, name: 'Pasta a la carbonara ligera', sides: 'Ensalada verde + Queso', protein: 'Huevo/Pasta', cal: 580, proteins: 34, carbs: 58, fats: 16,
      normal: {
        ingredients: ['Fideos (400g)', 'Huevos (4 unidades)', 'Panceta magra (150g)', 'Queso parmesano (100g)', 'Lechuga (1 cabeza)', 'Ajo (2 dientes)', 'Pimienta negra', 'Sal'],
        steps: ['Hervir fideos al dente, reservar 1 taza del agua de cocción.', 'Dorar panceta con ajo en sartén seca 5 min.', 'Batir huevos con parmesano, sal y pimienta.', 'Mezclar fideos calientes con panceta y la mezcla de huevo fuera del fuego.', 'Agregar agua de cocción si queda seco. Servir con ensalada.']
      },
      thermomix: {
        ingredients: ['Fideos (400g)', 'Huevos (4 unidades)', 'Panceta magra (150g)', 'Queso parmesano (100g)', 'Lechuga (1 cabeza)', 'Ajo (2 dientes)', 'Pimienta negra', 'Sal'],
        steps: ['Dorar panceta con ajo en sartén aparte 5 min. Reservar.', 'Rallar parmesano en el vaso: 10 seg / vel 10. Reservar.', 'Batir huevos con parmesano, sal y pimienta en bowl.', 'Hervir fideos aparte al dente.', 'Mezclar fideos calientes con panceta y huevo fuera del fuego. Servir con ensalada.']
      }
    },
    {
      day: 22, name: 'Atún fresco a la sartén', sides: 'Arroz + Espinaca salteada', protein: 'Atún', cal: 540, proteins: 37, carbs: 46, fats: 15,
      normal: {
        ingredients: ['Atún fresco (600g)', 'Arroz (300g)', 'Espinaca fresca (400g)', 'Limón (2 unidades)', 'Sésamo (2 cdas)', 'Ajo (2 dientes)', 'Aceite de oliva', 'Sal y pimienta'],
        steps: ['Hervir arroz 18 min.', 'Rebozar atún en sésamo, sal y pimienta.', 'Sellar en sartén muy caliente 2-3 min por lado (que quede rosado adentro).', 'Saltear espinaca con ajo en aceite 3 min.', 'Servir atún con arroz y espinaca. Rociar limón.']
      },
      thermomix: {
        ingredients: ['Atún fresco (600g)', 'Arroz (300g)', 'Espinaca fresca (400g)', 'Limón (2 unidades)', 'Sésamo (2 cdas)', 'Ajo (2 dientes)', 'Aceite de oliva', 'Sal y pimienta'],
        steps: ['Poner agua en el vaso. Colocar arroz en cestillo y espinaca en Varoma.', 'Programar 20 min / Varoma / vel 2.', 'Rebozar atún en sésamo, sal y pimienta mientras tanto.', 'Sellar atún en sartén muy caliente 2-3 min por lado.', 'Servir con arroz, espinaca y limón.']
      }
    },
    {
      day: 23, name: 'Pechuga rellena de verduras', sides: 'Fideos integrales + Queso', protein: 'Pollo', cal: 560, proteins: 36, carbs: 51, fats: 16,
      normal: {
        ingredients: ['Pechuga de pollo (700g)', 'Pimiento rojo (1 unidad)', 'Espinaca (100g)', 'Queso (100g)', 'Fideos integrales (350g)', 'Aceite de oliva', 'Palillos', 'Sal y pimienta'],
        steps: ['Abrir pechugas en libro. Rellenar con pimiento, espinaca y queso. Cerrar con palillos.', 'Sellar en sartén con aceite 5 min por lado.', 'Terminar en horno 180°C 15 min.', 'Hervir fideos integrales según paquete.', 'Servir con queso rallado encima.']
      },
      thermomix: {
        ingredients: ['Pechuga de pollo (700g)', 'Pimiento rojo (1 unidad)', 'Espinaca (100g)', 'Queso (100g)', 'Fideos integrales (350g)', 'Aceite de oliva', 'Palillos', 'Sal y pimienta'],
        steps: ['Rellenar pechugas con pimiento, espinaca y queso. Cerrar con palillos.', 'Poner agua en el vaso. Colocar pechugas en Varoma.', 'Programar 30 min / Varoma / vel 2.', 'Hervir fideos aparte.', 'Dorar pechugas en sartén 2 min por lado. Servir con queso.']
      }
    },
    {
      day: 24, name: 'Carne molida con papas', sides: 'Cebolla + Pimiento rojo', protein: 'Carne', cal: 600, proteins: 38, carbs: 53, fats: 18,
      normal: {
        ingredients: ['Carne molida (600g)', 'Papas (5 unidades)', 'Cebolla (2 unidades)', 'Pimiento rojo (2 unidades)', 'Tomate (2 unidades)', 'Ajo (3 dientes)', 'Pimentón dulce', 'Sal y pimienta'],
        steps: ['Rehogar cebolla, pimiento y ajo en aceite 5 min.', 'Añadir carne y dorar 8 min.', 'Agregar tomate y pimentón. Mezclar.', 'Incorporar papas en cubos y 200ml agua. Cocinar 20 min tapado.', 'Rectificar sal y servir.']
      },
      thermomix: {
        ingredients: ['Carne molida (600g)', 'Papas (5 unidades)', 'Cebolla (2 unidades)', 'Pimiento rojo (2 unidades)', 'Tomate (2 unidades)', 'Ajo (3 dientes)', 'Pimentón dulce', 'Sal y pimienta'],
        steps: ['Poner cebolla, pimiento y ajo: 5 seg / vel 5. Aceite: 5 min / 120°C / vel 1.', 'Añadir tomate y pimentón: 5 seg / vel 4. Bajar restos.', 'Incorporar carne: 5 min / 120°C / giro / vel cuchara.', 'Añadir papas en cubos y 200ml agua: 20 min / 100°C / giro / vel cuchara.', 'Rectificar sal y servir.']
      }
    },
    {
      day: 25, name: 'Filete de merluza al horno', sides: 'Batata + Brócoli al vapor', protein: 'Merluza', cal: 480, proteins: 32, carbs: 44, fats: 13,
      normal: {
        ingredients: ['Merluza en filetes (700g)', 'Batata (2 unidades)', 'Brócoli (1 cabeza)', 'Limón (2 unidades)', 'Aceite de oliva', 'Ajo (2 dientes)', 'Perejil', 'Sal y pimienta'],
        steps: ['Hornear batata en cubos 200°C 30 min.', 'Colocar merluza en asadera con limón, ajo, perejil y aceite.', 'Hornear 180°C 20 min.', 'Hervir brócoli al vapor 6 min.', 'Servir todo junto.']
      },
      thermomix: {
        ingredients: ['Merluza en filetes (700g)', 'Batata (2 unidades)', 'Brócoli (1 cabeza)', 'Limón (2 unidades)', 'Aceite de oliva', 'Ajo (2 dientes)', 'Perejil', 'Sal y pimienta'],
        steps: ['Colocar batata en cubos en la base del Varoma, brócoli en la bandeja.', 'Poner merluza condimentada encima del brócoli.', 'Poner agua en el vaso: 30 min / Varoma / vel 2.', 'Rociar con limón y perejil al servir.', 'Acompañar con un hilo de aceite de oliva.']
      }
    },
    {
      day: 26, name: 'Pollo guisado con verduras', sides: 'Arroz blanco + Judías verdes', protein: 'Pollo', cal: 530, proteins: 34, carbs: 54, fats: 14,
      normal: {
        ingredients: ['Pollo trozado (800g)', 'Arroz blanco (300g)', 'Judías verdes (400g)', 'Tomate (3 unidades)', 'Cebolla (1 unidad)', 'Zanahoria (1 unidad)', 'Caldo de pollo (200ml)', 'Pimentón, sal, laurel'],
        steps: ['Dorar el pollo con aceite 5 min por lado.', 'Rehogar cebolla y zanahoria 5 min.', 'Añadir tomate, caldo, pimentón y laurel. Mezclar.', 'Cocinar tapado 25 min a fuego medio.', 'Servir con arroz y judías verdes hervidas.']
      },
      thermomix: {
        ingredients: ['Pollo trozado (800g)', 'Arroz blanco (300g)', 'Judías verdes (400g)', 'Tomate (3 unidades)', 'Cebolla (1 unidad)', 'Zanahoria (1 unidad)', 'Caldo de pollo (200ml)', 'Pimentón, sal, laurel'],
        steps: ['Poner cebolla y zanahoria: 5 seg / vel 5. Aceite: 5 min / 120°C / vel 1.', 'Añadir tomate: 5 seg / vel 4. Bajar restos.', 'Agregar pollo, caldo, pimentón y laurel: 30 min / 100°C / giro / vel cuchara.', 'Colocar arroz en cestillo y judías en Varoma los últimos 20 min.', 'Servir todo junto.']
      }
    },
    {
      day: 27, name: 'Hamburguesa casera al horno', sides: 'Pan integral + Lechuga y tomate', protein: 'Carne', cal: 580, proteins: 36, carbs: 55, fats: 17,
      normal: {
        ingredients: ['Carne molida magra (600g)', 'Pan integral (4 unidades)', 'Lechuga (1/2 cabeza)', 'Tomate (2 unidades)', 'Cebolla (1 unidad)', 'Queso (4 lonchas)', 'Mostaza (opcional)', 'Sal y pimienta'],
        steps: ['Mezclar carne con sal, pimienta y un huevo. Formar hamburguesas.', 'Hornear en asadera 180°C 20 min dando vuelta a mitad.', 'Agregar queso encima los últimos 3 min.', 'Tostar el pan en sartén seca.', 'Armar con lechuga, tomate y cebolla.']
      },
      thermomix: {
        ingredients: ['Carne molida magra (600g)', 'Pan integral (4 unidades)', 'Lechuga (1/2 cabeza)', 'Tomate (2 unidades)', 'Cebolla (1 unidad)', 'Queso (4 lonchas)', 'Mostaza (opcional)', 'Sal y pimienta'],
        steps: ['Poner cebolla: 5 seg / vel 5. Añadir carne, sal y pimienta: 15 seg / giro / vel 4.', 'Formar hamburguesas y colocar en Varoma.', 'Poner agua en el vaso: 25 min / Varoma / vel 2.', 'Agregar queso encima al retirar. Tostar pan en sartén seca.', 'Armar con lechuga, tomate y cebolla.']
      }
    },
    {
      day: 28, name: 'Pechuga de pollo teriyaki', sides: 'Arroz integral + Brócoli', protein: 'Pollo', cal: 550, proteins: 35, carbs: 52, fats: 15,
      normal: {
        ingredients: ['Pechuga de pollo (700g)', 'Arroz integral (300g)', 'Brócoli (1 cabeza)', 'Salsa de soja (4 cdas)', 'Miel (2 cdas)', 'Jengibre rallado (1 cdita)', 'Ajo (2 dientes)', 'Sésamo (1 cda)'],
        steps: ['Cocinar arroz integral 30 min.', 'Mezclar soja, miel, jengibre y ajo para la salsa teriyaki.', 'Marinar pechuga 10 min en la salsa.', 'Cocinar en sartén 6-7 min por lado, añadiendo el resto de la salsa.', 'Servir con brócoli al vapor y espolvorear sésamo.']
      },
      thermomix: {
        ingredients: ['Pechuga de pollo (700g)', 'Arroz integral (300g)', 'Brócoli (1 cabeza)', 'Salsa de soja (4 cdas)', 'Miel (2 cdas)', 'Jengibre rallado (1 cdita)', 'Ajo (2 dientes)', 'Sésamo (1 cda)'],
        steps: ['Mezclar soja, miel, jengibre y ajo en el vaso: 2 min / 80°C / vel 2. Reservar salsa.', 'Marinar pechuga 10 min en la salsa.', 'Poner agua en el vaso. Colocar arroz en cestillo y brócoli + pechuga en Varoma.', 'Programar 35 min / Varoma / vel 2.', 'Bañar con la salsa reservada y espolvorear sésamo.']
      }
    },
    {
      day: 29, name: 'Salmón con salsa de limón', sides: 'Papas al horno + Calabacín', protein: 'Salmón', cal: 620, proteins: 38, carbs: 49, fats: 19,
      normal: {
        ingredients: ['Filete de salmón (700g)', 'Papas medianas (4 unidades)', 'Calabacín (2 unidades)', 'Limones (3 unidades)', 'Mantequilla (30g)', 'Alcaparras (1 cda, opcional)', 'Eneldo', 'Sal y pimienta'],
        steps: ['Hornear papas en gajos 200°C 30 min con aceite y sal.', 'Cocinar salmón en sartén con mantequilla 4 min por lado.', 'Hacer salsa: jugo de limón + mantequilla + alcaparras en la misma sartén 2 min.', 'Saltear calabacín en rodajas 4 min.', 'Servir salmón con salsa, papas y calabacín.']
      },
      thermomix: {
        ingredients: ['Filete de salmón (700g)', 'Papas medianas (4 unidades)', 'Calabacín (2 unidades)', 'Limones (3 unidades)', 'Mantequilla (30g)', 'Alcaparras (1 cda, opcional)', 'Eneldo', 'Sal y pimienta'],
        steps: ['Preparar salsa en el vaso: jugo de limón + mantequilla + alcaparras: 4 min / 90°C / vel 2. Reservar.', 'Colocar papas y calabacín en Varoma. Salmón encima.', 'Poner agua en vaso: 25 min / Varoma / vel 2.', 'Bañar el salmón con la salsa de limón.', 'Servir todo junto con eneldo fresco.']
      }
    },
    {
      day: 30, name: 'Pollo relleno de jamón y queso', sides: 'Fideos + Ensalada', protein: 'Pollo', cal: 600, proteins: 39, carbs: 50, fats: 18,
      normal: {
        ingredients: ['Pechuga de pollo (700g)', 'Jamón cocido (100g)', 'Queso en lonchas (100g)', 'Fideos (350g)', 'Lechuga (1 cabeza)', 'Tomate cherry (150g)', 'Aceite de oliva', 'Sal y pimienta'],
        steps: ['Abrir pechugas en libro, rellenar con jamón y queso. Cerrar con palillos.', 'Sellar en sartén con aceite 5 min por lado.', 'Terminar en horno 180°C 15 min.', 'Hervir fideos según paquete.', 'Servir con ensalada de lechuga y tomates cherry.']
      },
      thermomix: {
        ingredients: ['Pechuga de pollo (700g)', 'Jamón cocido (100g)', 'Queso en lonchas (100g)', 'Fideos (350g)', 'Lechuga (1 cabeza)', 'Tomate cherry (150g)', 'Aceite de oliva', 'Sal y pimienta'],
        steps: ['Rellenar pechugas con jamón y queso. Cerrar con palillos.', 'Poner agua en el vaso. Colocar pechugas en Varoma.', 'Programar 30 min / Varoma / vel 2.', 'Dorar en sartén 2 min por lado para terminar.', 'Hervir fideos aparte. Servir con ensalada.']
      }
    },
  ];

  const shoppingList = {
    'Proteínas': ['Pechuga de pollo (5kg)', 'Carne molida magra (3kg)', 'Ternera (2kg)', 'Salmón (2kg)', 'Trucha (1.5kg)', 'Atún fresco (1kg)', 'Merluza (2kg)', 'Huevos (2 docenas)'],
    'Carbohidratos': ['Papas (8kg)', 'Arroz integral (4kg)', 'Fideos integrales (3kg)', 'Pan integral (8 panes)', 'Batata/Camote (4kg)'],
    'Verduras': ['Brócoli (4kg)', 'Espinaca (2kg)', 'Judías verdes (3kg)', 'Lechuga (4 unidades)', 'Tomates (5kg)', 'Cebolla (3kg)', 'Pimiento (6 unidades)', 'Zanahoria (4kg)', 'Calabacín (3 unidades)', 'Calabaza (2kg)', 'Champiñones (1kg)'],
    'Lácteos': ['Queso rallado (2kg)', 'Queso parmesano (500g)', 'Mantequilla (500g)'],
    'Otros': ['Aceite de oliva', 'Limones (8 unidades)', 'Ajo (3 bulbos)', 'Sal y pimienta', 'Hierbas aromáticas', 'Salsa de soja', 'Miel'],
  };

  const getMode = (dayNum) => cookingMode[dayNum] || 'normal';

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 50%, #faf5ff 100%)' }}>
      <div style={{ background: 'linear-gradient(to right, #16a34a, #2563eb)', color: 'white', padding: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px' }}>🍽️ Plan de Cenas Familiar</h1>
        <p style={{ margin: '0 0 12px', opacity: 0.85 }}>Nutrición balanceada para niños deportistas (7-9 años)</p>
        <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '20px', height: '10px', width: '100%', maxWidth: '400px' }}>
          <div style={{ background: 'white', borderRadius: '20px', height: '10px', width: `${(completedCount / 30) * 100}%`, transition: 'width 0.4s ease' }} />
        </div>
        <p style={{ margin: '6px 0 0', fontSize: '13px', opacity: 0.9 }}>
          {completedCount} de 30 cenas completadas {completedCount === 30 ? '🎉' : ''}
        </p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <button onClick={() => { setShowShoppingList(false); setSelectedDay(null); }} style={{ background: '#16a34a', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}>📅 Calendario</button>
          <button onClick={() => { setShowShoppingList(true); setSelectedDay(null); }} style={{ background: '#2563eb', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}>🛒 Lista del Mes</button>
        </div>

        {/* CALENDARIO */}
        {!showShoppingList && !selectedDay && (
          <>
            <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '16px' }}>Calendario del Mes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '12px' }}>
              {dinnerPlan.map((day) => {
                const done = completedDays[day.day];
                const mode = getMode(day.day);
                return (
                  <div key={day.day} onClick={() => setSelectedDay(day)}
                    style={{ background: done ? '#f0fdf4' : 'white', padding: '14px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: done ? '2px solid #16a34a' : '2px solid transparent', position: 'relative', cursor: 'pointer' }}>
                    {/* Tilde */}
                    <button onClick={(e) => toggleDay(day.day, e)}
                      style={{ position: 'absolute', top: '10px', right: '10px', width: '26px', height: '26px', borderRadius: '50%', border: done ? 'none' : '2px solid #d1d5db', background: done ? '#16a34a' : 'white', color: 'white', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                      {done ? '✓' : ''}
                    </button>
                    <span style={{ background: 'linear-gradient(to right, #16a34a, #2563eb)', color: 'white', padding: '2px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>Día {day.day}</span>
                    <p style={{ margin: '8px 0 4px', fontWeight: 'bold', color: done ? '#15803d' : '#1a1a1a', fontSize: '13px', textDecoration: done ? 'line-through' : 'none', paddingRight: '30px' }}>{day.name}</p>
                    <p style={{ margin: '0 0 10px', color: '#666', fontSize: '11px' }}>{day.sides}</p>
                    {/* Toggle Normal / Thermomix */}
                    <div onClick={(e) => e.stopPropagation()} style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb', marginBottom: '10px' }}>
                      <button onClick={(e) => toggleMode(day.day, 'normal', e)}
                        style={{ flex: 1, padding: '5px 4px', border: 'none', background: mode === 'normal' ? '#1f2937' : '#f9fafb', color: mode === 'normal' ? 'white' : '#6b7280', fontSize: '11px', cursor: 'pointer', fontWeight: mode === 'normal' ? 'bold' : 'normal' }}>
                        🍳 Normal
                      </button>
                      <button onClick={(e) => toggleMode(day.day, 'thermomix', e)}
                        style={{ flex: 1, padding: '5px 4px', border: 'none', borderLeft: '1px solid #e5e7eb', background: mode === 'thermomix' ? '#7c3aed' : '#f9fafb', color: mode === 'thermomix' ? 'white' : '#6b7280', fontSize: '11px', cursor: 'pointer', fontWeight: mode === 'thermomix' ? 'bold' : 'normal' }}>
                        🤖 Thermomix
                      </button>
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ background: '#fee2e2', color: '#dc2626', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>P: {day.proteins}g</span>
                      <span style={{ background: '#fef9c3', color: '#ca8a04', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>{day.cal} kcal</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* DETALLE DEL DÍA */}
        {!showShoppingList && selectedDay && (() => {
          const mode = getMode(selectedDay.day);
          const recipe = selectedDay[mode];
          return (
            <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: `4px solid ${mode === 'thermomix' ? '#7c3aed' : '#16a34a'}` }}>
              <button onClick={() => setSelectedDay(null)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', marginBottom: '16px', fontSize: '15px' }}>← Volver</button>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>Día {selectedDay.day}: {selectedDay.name}</h2>
                <button onClick={(e) => toggleDay(selectedDay.day, e)}
                  style={{ background: completedDays[selectedDay.day] ? '#16a34a' : 'white', color: completedDays[selectedDay.day] ? 'white' : '#16a34a', border: '2px solid #16a34a', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px', whiteSpace: 'nowrap' }}>
                  {completedDays[selectedDay.day] ? '✅ Completada' : '○ Marcar como hecha'}
                </button>
              </div>

              {/* Toggle modo en detalle */}
              <div style={{ display: 'flex', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e5e7eb', marginBottom: '20px', maxWidth: '300px' }}>
                <button onClick={(e) => toggleMode(selectedDay.day, 'normal', e)}
                  style={{ flex: 1, padding: '10px', border: 'none', background: mode === 'normal' ? '#1f2937' : '#f9fafb', color: mode === 'normal' ? 'white' : '#6b7280', fontSize: '14px', cursor: 'pointer', fontWeight: mode === 'normal' ? 'bold' : 'normal' }}>
                  🍳 Normal
                </button>
                <button onClick={(e) => toggleMode(selectedDay.day, 'thermomix', e)}
                  style={{ flex: 1, padding: '10px', border: 'none', borderLeft: '1px solid #e5e7eb', background: mode === 'thermomix' ? '#7c3aed' : '#f9fafb', color: mode === 'thermomix' ? 'white' : '#6b7280', fontSize: '14px', cursor: 'pointer', fontWeight: mode === 'thermomix' ? 'bold' : 'normal' }}>
                  🤖 Thermomix
                </button>
              </div>

              <div style={{ background: '#f0fdf4', padding: '14px', borderRadius: '12px', marginBottom: '20px' }}>
                <p style={{ margin: 0, color: '#374151' }}><strong>Acompañamientos:</strong> {selectedDay.sides}</p>
              </div>

              {/* Nutrición */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px', marginBottom: '24px' }}>
                {[
                  { label: 'Calorías', value: selectedDay.cal + ' kcal', color: '#f97316' },
                  { label: 'Proteína', value: selectedDay.proteins + 'g', color: '#ef4444' },
                  { label: 'Carbohidratos', value: selectedDay.carbs + 'g', color: '#eab308' },
                  { label: 'Grasas', value: selectedDay.fats + 'g', color: '#a855f7' },
                ].map((item) => (
                  <div key={item.label} style={{ background: '#f9f9f9', padding: '12px', borderRadius: '10px', border: '1px solid #eee' }}>
                    <p style={{ margin: '0 0 4px', fontSize: '11px', color: '#666' }}>{item.label}</p>
                    <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: item.color }}>{item.value}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {/* Ingredientes */}
                <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '12px', padding: '20px' }}>
                  <h3 style={{ margin: '0 0 14px', color: '#92400e', fontSize: '16px' }}>
                    🛒 Ingredientes {mode === 'thermomix' ? '· Thermomix' : '· Normal'} <span style={{ fontSize: '12px', fontWeight: 'normal' }}>(4 personas)</span>
                  </h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {recipe.ingredients.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#374151', fontSize: '14px', marginBottom: '8px' }}>
                        <span style={{ color: '#d97706', fontWeight: 'bold', minWidth: '12px' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pasos */}
                <div style={{ background: mode === 'thermomix' ? '#faf5ff' : '#f0f9ff', border: `1px solid ${mode === 'thermomix' ? '#e9d5ff' : '#bae6fd'}`, borderRadius: '12px', padding: '20px' }}>
                  <h3 style={{ margin: '0 0 14px', color: mode === 'thermomix' ? '#6b21a8' : '#0369a1', fontSize: '16px' }}>
                    {mode === 'thermomix' ? '🤖 Pasos Thermomix' : '🍳 Pasos de preparación'}
                  </h3>
                  <ol style={{ margin: 0, paddingLeft: '20px' }}>
                    {recipe.steps.map((step, idx) => (
                      <li key={idx} style={{ color: '#374151', fontSize: '14px', marginBottom: '10px', lineHeight: '1.5' }}>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          );
        })()}

        {/* LISTA DEL MES */}
        {showShoppingList && (
          <>
            <button onClick={() => setShowShoppingList(false)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', marginBottom: '16px', fontSize: '15px' }}>← Volver</button>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>📋 Lista de Compras - Mes Completo</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {Object.entries(shoppingList).map(([category, items]) => (
                  <div key={category} style={{ background: '#f0fdf4', padding: '20px', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                    <h3 style={{ color: '#15803d', marginBottom: '12px', fontSize: '16px' }}>{category}</h3>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                      {items.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#374151', fontSize: '14px' }}>
                          <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div style={{ background: '#1f2937', color: 'white', padding: '32px', marginTop: '48px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 8px' }}>🏃 Plan diseñado para niños activos · Porciones para 4 personas</p>
        <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>Consultá con tu pediatra o nutricionista para personalizaciones específicas</p>
      </div>
    </div>
  );
};

export default DinnerPlanner;
