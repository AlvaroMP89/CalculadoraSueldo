# Proyecto de Cálculo de Sueldo y Retención

Este proyecto realizado con **JavaScript** y **HTML** permite calcular el sueldo neto de un empleado teniendo en cuenta su sueldo bruto, las mensualidades, el número de hijos y el tipo de contrato. La aplicación toma los datos de entrada, realiza los cálculos necesarios y muestra el resultado del sueldo neto, considerando un porcentaje de retención.

## Características

- **Cálculo de Sueldo Neto**: Calcula el sueldo neto después de aplicar un porcentaje de retención basado en el sueldo bruto, el número de mensualidades, los hijos y el tipo de contrato.
- **Interactividad con el Usuario**: Entrada de datos a través de campos de texto, selección de mensualidades, el número de hijos y el tipo de contrato.
- **Resultado Dinámico**: Muestra el resultado del cálculo en tiempo real.
- **Mensajes Informativos**: Al calcular, se muestra el sueldo bruto, el número de mensualidades, el tipo de contrato y el sueldo neto.

## Tecnologías Utilizadas

- **HTML**: Para la estructura base de la página.
- **CSS**: Para el diseño y estilo de la página web.
- **JavaScript**: Para realizar los cálculos y la interactividad.

## Estructura del Proyecto

- **index.html**: Contiene la estructura base de la página con los campos de entrada para el sueldo bruto, las mensualidades, el número de hijos y el tipo de contrato.
- **style.css**: Archivo de estilos donde se define el diseño visual de la página.
- **app.js**: Script en JavaScript que maneja la lógica de cálculo y muestra los resultados dinámicamente.

## Cómo Funciona

1. El usuario ingresa su sueldo bruto en el campo de texto.
2. El usuario selecciona el número de mensualidades (12 o 14) mediante un `RadioButton`.
3. El usuario ingresa el número de hijos.
4. El usuario selecciona el tipo de contrato (por ejemplo, `Indefinido`, `Temporal`, etc.).
5. Al presionar el botón de "Calcular", se realiza el cálculo y se muestra el sueldo neto en la página.
6. El cálculo toma en cuenta un porcentaje de retención basado en el sueldo bruto, mensualidades, hijos y tipo de contrato, con la siguiente fórmula de ejemplo:
   ```javascript
   sueldo_neto = sueldo_bruto - (sueldo_bruto * porcentaje_retencion);
