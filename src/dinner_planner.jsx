import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Info } from 'lucide-react';

const DinnerPlanner = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showShoppingList, setShowShoppingList] = useState(false);

  // Plan de cenas diseñado para niños de 7-9 años que practican deporte
  const dinnerPlan = [
    // Semana 1
    { day: 1, name: 'Pechuga de pollo a la parrilla', sides: 'Papas al horno + Brócoli', protein: 'Pollo', cal: 520, proteins: 35, carbs: 45, fats: 15 },
    { day: 2, name: 'Pasta con salsa de tomate casera', sides: 'Carne molida magra + Queso rallado', protein: 'Carne/Pasta', cal: 580, proteins: 32, carbs: 62, fats: 14 },
    { day: 3, name: 'Salmón a la mantequilla', sides: 'Arroz integral + Espinaca cocida', protein: 'Salmón', cal: 620, proteins: 38, carbs: 48, fats: 18 },
    { day: 4, name: 'Tacos de pollo desmenuzado', sides: 'Lechuga + Tomate + Queso', protein: 'Pollo', cal: 550, proteins: 36, carbs: 52, fats: 16 },
    { day: 5, name: 'Milanesa de ternera', sides: 'Puré de papa + Zanahorias', protein: 'Ternera', cal: 600, proteins: 40, carbs: 50, fats: 17 },
    { day: 6, name: 'Pechuga de pollo rellena de queso', sides: 'Fideos integrales + Ensalada', protein: 'Pollo/Queso', cal: 570, proteins: 38, carbs: 48, fats: 16 },
    { day: 7, name: 'Burguesa casera de carne magra', sides: 'Pan integral + Verduras variadas', protein: 'Carne', cal: 590, proteins: 37, carbs: 54, fats: 17 },
    
    // Semana 2
    { day: 8, name: 'Pechuga de pollo al limón', sides: 'Batata asada + Brócoli', protein: 'Pollo', cal: 510, proteins: 34, carbs: 46, fats: 14 },
    { day: 9, name: 'Fideos a la boloñesa', sides: 'Carne molida + Queso parmesano', protein: 'Carne/Pasta', cal: 600, proteins: 34, carbs: 65, fats: 15 },
    { day: 10, name: 'Trucha al horno', sides: 'Arroz blanco + Calabacín', protein: 'Trucha', cal: 530, proteins: 36, carbs: 44, fats: 16 },
    { day: 11, name: 'Pollo a la naranja', sides: 'Arroz integral + Judías verdes', protein: 'Pollo', cal: 540, proteins: 35, carbs: 50, fats: 15 },
    { day: 12, name: 'Carne con papas', sides: 'Cebolla + Pimiento', protein: 'Carne', cal: 610, proteins: 39, carbs: 52, fats: 18 },
    { day: 13, name: 'Filetes de pollo empanizados', sides: 'Papas al horno + Espinaca', protein: 'Pollo', cal: 580, proteins: 37, carbs: 51, fats: 17 },
    { day: 14, name: 'Pechuga de pollo rellena de jamón y queso', sides: 'Fideos + Tomate fresco', protein: 'Pollo', cal: 600, proteins: 39, carbs: 49, fats: 18 },
    
    // Semana 3
    { day: 15, name: 'Salmón a las hierbas', sides: 'Batata + Brócoli al vapor', protein: 'Salmón', cal: 630, proteins: 39, carbs: 47, fats: 19 },
    { day: 16, name: 'Pasta con verduras y carne', sides: 'Calabaza + Zanahoria', protein: 'Carne/Pasta', cal: 560, proteins: 33, carbs: 60, fats: 15 },
    { day: 17, name: 'Pollo desmenuzado en guiso', sides: 'Papas + Verduras variadas', protein: 'Pollo', cal: 520, proteins: 32, carbs: 55, fats: 14 },
    { day: 18, name: 'Milanesa de pollo', sides: 'Puré de papas + Ensalada fresca', protein: 'Pollo', cal: 570, proteins: 36, carbs: 50, fats: 17 },
    { day: 19, name: 'Carne a la parrilla', sides: 'Camote asado + Ensalada de lechuga', protein: 'Carne', cal: 590, proteins: 38, carbs: 48, fats: 18 },
    { day: 20, name: 'Pechuga de pollo con salsa de champiñones', sides: 'Arroz integral + Zanahoria', protein: 'Pollo', cal: 550, proteins: 35, carbs: 52, fats: 16 },
    { day: 21, name: 'Pasta a la carbonara ligera', sides: 'Ensalada verde + Queso', protein: 'Huevo/Pasta', cal: 580, proteins: 34, carbs: 58, fats: 16 },
    
    // Semana 4
    { day: 22, name: 'Atún fresco a la sartén', sides: 'Arroz + Espinaca salteada', protein: 'Atún', cal: 540, proteins: 37, carbs: 46, fats: 15 },
    { day: 23, name: 'Pechuga de pollo rellena de verduras', sides: 'Fideos integrales + Queso', protein: 'Pollo', cal: 560, proteins: 36, carbs: 51, fats: 16 },
    { day: 24, name: 'Carne molida con papas', sides: 'Cebolla + Pimiento rojo', protein: 'Carne', cal: 600, proteins: 38, carbs: 53, fats: 18 },
    { day: 25, name: 'Filete de merluza al horno', sides: 'Batata + Brócoli al vapor', protein: 'Merluza', cal: 480, proteins: 32, carbs: 44, fats: 13 },
    { day: 26, name: 'Pollo guisado con verduras', sides: 'Arroz blanco + Judías verdes', protein: 'Pollo', cal: 530, proteins: 34, carbs: 54, fats: 14 },
    { day: 27, name: 'Hamburguesa casera al horno', sides: 'Pan integral + Lechuga y tomate', protein: 'Carne', cal: 580, proteins: 36, carbs: 55, fats: 17 },
    { day: 28, name: 'Pechuga de pollo teriyaki', sides: 'Arroz integral + Brócoli', protein: 'Pollo', cal: 550, proteins: 35, carbs: 52, fats: 15 },
    { day: 29, name: 'Salmón con salsa de limón', sides: 'Papas al horno + Calabacín', protein: 'Salmón', cal: 620, proteins: 38, carbs: 49, fats: 19 },
    { day: 30, name: 'Pollo relleno de jamón y queso', sides: 'Fideos + Ensalada', protein: 'Pollo', cal: 600, proteins: 39, carbs: 50, fats: 18 },
  ];

  // Generar lista de compras
  const generateShoppingList = () => {
    const items = {
      'Proteínas': ['Pechuga de pollo (5kg)', 'Carne molida magra (3kg)', 'Ternera (2kg)', 'Salmón (2kg)', 'Trucha (1.5kg)', 'Atún fresco (1kg)', 'Merluza (2kg)', 'Huevos (2 docenas)'],
      'Carbohidratos': ['Papas (8kg)', 'Arroz integral (4kg)', 'Fideos integrales (3kg)', 'Pan integral (8 panes)', 'Batata/Camote (4kg)'],
      'Verduras': ['Brócoli (4kg)', 'Espinaca (2kg)', 'Judías verdes (3kg)', 'Lechuga (4 unidades)', 'Tomates (5kg)', 'Cebolla (3kg)', 'Pimiento (6 unidades)', 'Zanahoria (4kg)', 'Calabacín (3 unidades)', 'Calabaza (2kg)', 'Champiñones (1kg)'],
      'Lácteos': ['Queso rallado (2kg)', 'Queso parmesano (500g)', 'Mantequilla (500g)'],
      'Otros': ['Aceite de oliva', 'Limones (8 unidades)', 'Ajo (3 bulbos)', 'Sal y pimienta', 'Hierbas aromáticas'],
    };
    return items;
  };

  const shoppingList = generateShoppingList();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <style>{`
        * {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
          background: linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 50%, #faf5ff 100%);
          margin: 0;
          padding: 0;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .card {
          animation: fadeIn 0.5s ease-out;
        }
        
        .header {
          animation: slideIn 0.6s ease-out;
        }
      `}</style>

      {/* Header */}
      <div className="header bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">🍽️ Plan de Cenas Familiar</h1>
          <p className="text-green-100">Nutrición balanceada para niños deportistas (7-9 años)</p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-6xl mx-auto p-6">
        {!showShoppingList ? (
          <>
            {/* Botones de acción */}
            <div className="flex gap-4 mb-6 flex-wrap">
              <button
                onClick={() => setShowShoppingList(true)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                <ShoppingCart size={20} />
                Ver Lista de Compras
              </button>
              <button
                onClick={() => setSelectedDay(null)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                <Info size={20} />
                Ver Calendario
              </button>
            </div>

            {/* Vista de Detalle */}
            {selectedDay && (
              <div className="card bg-white rounded-2xl shadow-xl p-8 mb-6 border-l-4 border-green-500">
                <button
                  onClick={() => setSelectedDay(null)}
                  className="text-gray-500 hover:text-gray-700 mb-4 font-semibold"
                >
                  ← Volver al calendario
                </button>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Día {selectedDay.day}: {selectedDay.name}
                  </h2>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold text-gray-800">Acompañamientos:</span> {selectedDay.sides}
                    </p>
                  </div>
                </div>

                {/* Información Nutricional */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                    <p className="text-gray-600 text-sm font-semibold">Calorías</p>
                    <p className="text-2xl font-bold text-orange-600">{selectedDay.cal}</p>
                    <p className="text-xs text-gray-500">kcal</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                    <p className="text-gray-600 text-sm font-semibold">Proteína</p>
                    <p className="text-2xl font-bold text-red-600">{selectedDay.proteins}g</p>
                    <p className="text-xs text-gray-500">por porción</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                    <p className="text-gray-600 text-sm font-semibold">Carbohidratos</p>
                    <p className="text-2xl font-bold text-yellow-600">{selectedDay.carbs}g</p>
                    <p className="text-xs text-gray-500">por porción</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                    <p className="text-gray-600 text-sm font-semibold">Grasas</p>
                    <p className="text-2xl font-bold text-purple-600">{selectedDay.fats}g</p>
                    <p className="text-xs text-gray-500">por porción</p>
                  </div>
                </div>

                {/* Consejos */}
                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                  <h3 className="font-bold text-blue-900 mb-2">💡 Consejos de preparación:</h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>✓ Cocina con poco aceite para mantener baja la grasa</li>
                    <li>✓ Sirve porciones adecuadas según edad (200-250g de proteína)</li>
                    <li>✓ Acompañar siempre con agua o leche</li>
                    <li>✓ Ideal para cenar 2-3 horas antes de dormir</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Calendario de Cenas */}
            {!selectedDay && (
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Calendario Mensual</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dinnerPlan.map((day) => (
                    <button
                      key={day.day}
                      onClick={() => setSelectedDay(day)}
                      className="card bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all text-left border-2 border-gray-100 hover:border-green-500"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          Día {day.day}
                        </span>
                        <span className="text-2xl font-bold text-orange-500">{day.cal}</span>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2 text-sm">{day.name}</h3>
                      <p className="text-xs text-gray-600 mb-3">{day.sides}</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded">P: {day.proteins}g</span>
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">C: {day.carbs}g</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Lista de Compras */}
            <button
              onClick={() => setShowShoppingList(false)}
              className="mb-6 text-gray-600 hover:text-gray-800 font-semibold"
            >
              ← Volver al calendario
            </button>

            <div className="card bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">📋 Lista de Compras - Mes Completo</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(shoppingList).map(([category, items]) => (
                  <div key={category} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
                    <h3 className="text-lg font-bold text-green-700 mb-4">{category}</h3>
                    <ul className="space-y-2">
                      {items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <input type="checkbox" className="w-5 h-5 text-green-600 cursor-pointer" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <h3 className="font-bold text-purple-900 mb-3">📌 Recomendaciones de Compra:</h3>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• Compra frescos 2-3 veces a la semana para mantener la calidad</li>
                  <li>• Las proteínas congeladas son una excelente opción económica</li>
                  <li>• Elige verduras de temporada para mejor sabor y precio</li>
                  <li>• Almacena el pescado en el congelador inmediatamente</li>
                  <li>• Los granos integrales se conservan bien si se guardan secos</li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">🏃 Plan diseñado para niños activos - Ajusta porciones según necesidad</p>
          <p className="text-gray-400 text-sm">Consulta con tu pediatra o nutricionista para personalizaciones específicas</p>
        </div>
      </div>
    </div>
  );
};

export default DinnerPlanner;
