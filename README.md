# Calculadora de Envíos

<br>    
El principio de este simulador es calcular el valor de un envío, para después integrarlo a un e-commerce. El envío puede ser de uno o varios productos. Su funcionamiento se basa en elegir la tarifa según el tipo de envío y las dimensiones o peso de los productos ingresados, para después sumarle el seguro el cual es opcional.

Para el cálculo, el simulador tiene dos tarifas:

1. Envío Terrestre: USD 5 por kg.
2. Envío Aéreo: USD 8 por kg.

De acuerda a la tarifa elegida, el simulador se encargará de multiplicarla por lo que sea mayor entre el peso y el peso volumétrico (de acuerdo a las dimensiones ingresadas por el usuario) total de los productos.

Posteriormente, solicitará al usuario si quiere asegurar el envío, el cual será el equivalente al 10% del valor total de los productos en USD.

Finalmente, mostrará el resultado con el valor del envío, seguro y fecha máxima de entrega, según sea el caso.