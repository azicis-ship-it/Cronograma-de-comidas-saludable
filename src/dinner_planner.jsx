import React, { useState } from 'react';

const DinnerPlanner = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const dinnerPlan = [
    { day: 1, name: 'Pechuga de pollo a la parrilla', sides: 'Papas al horno + Brócoli', protein: 'Pollo', cal: 520, proteins: 35, carbs: 45, fats: 15 },
    { day: 2, name: 'Pasta con salsa de tomate casera', sides: 'Carne molida magra + Queso rallado', protein: 'Carne/Pasta', cal: 580, proteins: 32, carbs: 62, fats: 14 },
    { day: 3, name: 'Salmón a la mantequilla', sides: 'Arroz integral + Espinaca cocida', protein: 'Salmón', cal: 620, proteins: 38, carbs: 48, fats: 18 },
    { day: 4, name: 'Tacos de pollo desmenuzado', sides: 'Lechuga + Tomate + Queso', protein: 'Pollo', cal: 550, proteins: 36, carbs: 52, fats: 16 },
    { day: 5, name: 'Milanesa de ternera', sides: 'Puré de papa + Zanahorias', protein: 'Ternera', cal: 600, proteins: 40, carbs: 50, fats: 17 },
    { day: 6, name: 'Pechuga de pollo rellena de queso', sides: 'Fideos integrales + Ensalada', protein: 'Pollo/Queso', cal: 570, proteins: 38, carbs: 48, fats: 16 },
    { day: 7, name: 'Hamburguesa casera de carne magra', sides: 'Pan integral + Verduras variadas', protein: 'Carne', cal: 590, proteins: 37, carbs: 54, fats: 17 },
    { day: 8, name: 'Pechuga de pollo al limón', sides: 'Batata asada + Brócoli', protein: 'Pollo', cal: 510, proteins: 34, carbs: 46, fats: 14 },
    { day: 9, name: 'Fideos a la boloñesa', sides: 'Carne molida + Queso parmesano', protein: 'Carne/Pasta', cal: 600, proteins: 34, carbs: 65, fats: 15 },
    { day: 10, name: 'Trucha al horno', sides: 'Arroz blanco + Calabacín', protein: 'Trucha', cal: 530, proteins: 36, carbs: 44, fats: 16 },
    { day: 11, name: 'Pollo a la naranja', sides: 'Arroz integral + Judías verdes', protein: 'Pollo', cal: 540, proteins: 35, carbs: 50, fats: 15 },
    { day: 12, name: 'Carne con papas', sides: 'Cebolla + Pimiento', protein: 'Carne', cal: 610, proteins: 39, carbs: 52, fats: 18 },
    { day: 13, name: 'Filetes de pollo empanizados', sides: 'Papas al horno + Espinaca', protein: 'Pollo', cal: 580, proteins: 37, carbs: 51, fats: 17 },
    { day: 14, name: 'Pechuga de pollo rellena de jamón y queso', sides: 'Fideos + Tomate fresco', protein: 'Pollo', cal: 600, proteins: 39, carbs: 49, fats: 18 },
    { day: 15, name: 'Salmón a las hierbas', sides: 'Batata + Brócoli al vapor', protein: 'Salmón', cal: 630, proteins: 39, carbs: 47, fats: 19 },
    { day: 16, name: 'Pasta con verduras y carne', sides: 'Calabaza + Zanahoria', protein: 'Carne/Pasta', cal: 560, proteins: 33, carbs: 60, fats: 15 },
    { day: 17, name: 'Pollo desmenuzado en guiso', sides: 'Papas + Verduras variadas', protein: 'Pollo', cal: 520, proteins: 32, carbs: 55, fats: 14 },
    { day: 18, name: 'Milanesa de pollo', sides: 'Puré de papas + Ensalada fresca', protein: 'Pollo', cal: 570, proteins: 36, carbs: 50, fats: 17 },
    { day: 19, name: 'Carne a la parrilla', sides: 'Camote asado + Ensalada de lechuga', protein: 'Carne', cal: 590, proteins: 38, carbs: 48, fats: 18 },
    { day: 20, name: 'Pechuga de pollo con salsa de champiñones', sides: 'Arroz integral + Zanahoria', protein: 'Pollo', cal: 550, proteins: 35, carbs: 52, fats: 16 },
    { day: 21, name: 'Pasta a la carbonara ligera', sides: 'Ensalada verde + Queso', protein: 'Huevo/Pasta', cal: 580, proteins: 34, carbs: 58, fats: 16 },
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

  const shoppingList = {
    'Proteínas': ['Pechuga de pollo (5kg)', 'Carne molida magra (3kg)', 'Ternera (2kg)', 'Salmón (2kg)', 'Trucha (1.5kg)', 'Atún fresco (1kg)', 'Merluza (2kg)', 'Huevos (2 docenas)'],
    'Carbohidratos': ['Papas (8kg)', 'Arroz integral (4kg)', 'Fideos integrales (3kg)', 'Pan integral (8 panes)', 'Batata/Camote (4kg)'],
    'Verduras': ['Brócoli (4kg)', 'Espinaca (2kg)', 'Judías verdes (3kg)', 'Lechuga (4 unidades)', 'Tomates (5kg)', 'Cebolla (3kg)', 'Pimiento (6 unidades)', 'Zanahoria (4kg)', 'Calabacín (3 unidades)', 'Calabaza (2kg)', 'Champiñones (1kg)'],
    'Lácteos': ['Queso rallado (2kg)', 'Queso parmesano (500g)', 'Mantequilla (500g)'],
    'Otros': ['Aceite de oliva', 'Limones (8 unidades)', 'Ajo (3 bulbos)', 'Sal y pimienta', 'Hierbas aromáticas'],
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 50%, #faf5ff 100%)' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(to right, #16a34a, #2563eb)', color: 'white', padding: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px' }}>🍽️ Plan de Cenas Familiar</h1>
        <p style={{ margin: 0, opacity: 0.85 }}>Nutrición balanceada para niños deportistas (7-9 años)</p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px' }}>
        {/* Botones */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <button onClick={() => setShowShoppingList(false)} style={{ background: '#16a34a', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}>
            📅 Ver Calendario
          </button>
          <button onClick={() => setShowShoppingList(true)} style={{ background: '#2563eb', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}>
            🛒 Lista de Compras
          </button>
        </div>

        {!showShoppingList ? (
          <>
            {/* Detalle del día */}
            {selectedDay && (
              <div style={{ background: 'white', borderRadius: '16px', padding: '32px', marginBottom: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: '4px solid #16a34a' }}>
                <button onClick={() => setSelectedDay(null)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', marginBottom: '16px', fontSize: '15px' }}>
                  ← Volver al calendario
                </button>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '16px' }}>
                  Día {selectedDay.day}: {selectedDay.name}
                </h2>
                <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '12px', marginBottom: '24px' }}>
                  <p style={{ margin: 0, color: '#374151' }}><strong>Acompañamientos:</strong> {selectedDay.sides}</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                  {[
                    { label: 'Calorías', value: selectedDay.cal, unit: 'kcal', color: '#f97316' },
                    { label: 'Proteína', value: selectedDay.proteins + 'g', unit: 'por porción', color: '#ef4444' },
                    { label: 'Carbohidratos', value: selectedDay.carbs + 'g', unit: 'por porción', color: '#eab308' },
                    { label: 'Grasas', value: selectedDay.fats + 'g', unit: 'por porción', color: '#a855f7' },
                  ].map((item) => (
                    <div key={item.label} style={{ background: '#f9f9f9', padding: '16px', borderRadius: '12px', border: '1px solid #eee' }}>
                      <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#666' }}>{item.label}</p>
                      <p style={{ margin: '0 0 4px', fontSize: '22px', fontWeight: 'bold', color: item.color }}>{item.value}</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#999' }}>{item.unit}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '24px', background: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '16px', borderRadius: '8px' }}>
                  <p style={{ margin: '0 0 8px', fontWeight: 'bold', color: '#1e40af' }}>💡 Consejos:</p>
                  <p style={{ margin: 0, color: '#1e40af', fontSize: '14px' }}>✓ Cocina con poco aceite · ✓ Sirve 200-250g de proteína · ✓ Acompañar con agua o leche · ✓ Cenar 2-3 horas antes de dormir</p>
                </div>
              </div>
            )}

            {/* Calendario */}
            {!selectedDay && (
              <>
                <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '16px' }}>Calendario del Mes</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                  {dinnerPlan.map((day) => (
                    <button key={day.day} onClick={() => setSelectedDay(day)} style={{ background: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'left', border: '2px solid transparent', cursor: 'pointer', transition: 'all 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#16a34a'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ background: 'linear-gradient(to right, #16a34a, #2563eb)', color: 'white', padding: '2px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>Día {day.day}</span>
                        <span style={{ fontWeight: 'bold', color: '#f97316', fontSize: '15px' }}>{day.cal} kcal</span>
                      </div>
                      <p style={{ margin: '0 0 6px', fontWeight: 'bold', color: '#1a1a1a', fontSize: '13px' }}>{day.name}</p>
                      <p style={{ margin: '0 0 8px', color: '#666', fontSize: '12px' }}>{day.sides}</p>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <span style={{ background: '#fee2e2', color: '#dc2626', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>P: {day.proteins}g</span>
                        <span style={{ background: '#fef9c3', color: '#ca8a04', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>C: {day.carbs}g</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <button onClick={() => setShowShoppingList(false)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', marginBottom: '16px', fontSize: '15px' }}>
              ← Volver al calendario
            </button>
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
        <p style={{ margin: '0 0 8px' }}>🏃 Plan diseñado para niños activos - Ajusta porciones según necesidad</p>
        <p style={{ margin: 0, color: '#9ca3af', fontSize: '14px' }}>Consultá con tu pediatra o nutricionista para personalizaciones específicas</p>
      </div>
    </div>
  );
};

export default DinnerPlanner;
