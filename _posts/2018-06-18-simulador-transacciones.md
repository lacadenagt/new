---
layout: post
title: "BillPayments - Simulador de transacciones"
permalink: /simulador-transacciones
---
Este programa trata de simular como sería el funcionamiento de un programa para pagar cuentas, el cual maneja los pagos por medio de transacciones. La simulación incluirá solo la parte de backend del programa y tratará de mostrar la vida de una transacción, la cual deberá pasar por varios estados antes de poder indicar si se ha podido hacer el pago de la cuenta o no. En el proyecto se utiliza estructura de datos, clases y sincronizar el acceso de threads a la colas. 

<!--more-->

### Máquina de Estados:
El backend de este programa, está compuesto por una máquina de estados, la cual representá el status de una transacción en un tiempo determinado, y se compone de los siguientes estados:

<code>Estado 100:</code> La transacción se acaba de crear y está esperando a ser atendida.<br>
<code>Estado 200:</code> La transacción se empieza a atender y se está revisando que la transaccion sea válida. Para que una transaccion sea válida, tiene que tener un saldo a pagar mayor que 0.<br> 
<code>Estado 201:</code> La transacción es inválida y está en un estado de error (no tiene saldo a pagar mayor que 0)<br>    
<code>Estado 300:</code> La transacción se envió al "pagador" para hacer el pago y se está esperando por su respuesta.<br>    
<code>Estado 301:</code> El "pagador" devolvió la transacción en error.<br>    
<code>Estado 400:</code> El pago se efectuó exitosamente. 
    
La transacción se traslada de estado en estado dependiendo de qué está pasando con la misma. El "happy path" de una transacción sería el siguente: 100 -> 200 -> 300 -> 400. Sin embargo, la transacción podría detenerse en el estado 201 o en el estado 301 que son estados de error.<br>    

La simulación debe trabajar con esta máquina de estados, y con colas que guardan las transacciones en cada uno de los estados, por lo que habrán tres colas: Una para estado 100, una para estado 200 y una para estado 300. Si una transacción se va a estado 201, esta se debe guardar en una lista de transacciones en este error, las cuales pueden ser desplegadas eventualmente, lo mismo pasaría con el estado 301. 

### Procesamiento de Transacciones:
Para que la simulación sea válida, el traslado de cada transacción de un estado a otro debe hacerse en tiempos aleatorios, por lo que se deben tener varios procesos que funcionan al mismo tiempo, idependientes unos de los otros:

1. <code>Generador de Transacciones:</code> El cual se encarga de generar transacciones y colocarlas en la cola de Estado 100. Las transacciones se representan por un numero correlativo y un monto a pagar (el cual puede ser negativo o 0). Estas transacciones son generadas en tiempos aleatorios.
2. <code>Procesador de Transacciones nuevas:</code> Este saca transacciones en estado 100, una por una y las pasa a estado 200. El procesador saca transacciones cada cierto tiempo, y este es un tiempo fijo.
3. <code>Verificador de Transacciones:</code> Este procesador saca transacciones en estado 200, verifica el monto a pagar y dependiendo del resultado, inserta las transacciones al estado 300 o a estado 201. El verificador saca transacciones cada cierto tiempo, y este es un tiempo fijo.
4. <code>Payer:</code> Saca las transacciones de estado 300 y aleatoriamente (con 20% de probabilidad de entrar en error) trata de pagar la transacción, si esta queda en error la pasa a 301 y si es exitosa se despliega como 400. El payer saca transacciones cada cierto tiempo, y este tiempo es fijo. 

### Logger:
Todas las acciones de traslado de estados deben ser desplegadas en una especie de "log", tanto en pantalla como en un archivo el cual puede regresarse a ver. El log en pantalla debe desplegar el numero de transaccion y de que estado a que estado esta cambiando. En el caso del archivo, el log debe agregar la fecha y hora de el suceso además del número de transacción y de qué estado a qué estado está cambiando.En cada cambio de estado, las colas deben ser desplegadas, la transaccion deberia desplegarse en formato [id:monto], por ejemplo [5:300.00], en donde 5 corresponde al id, y 300.00 al monto a pagar.

### Terminar el programa:
El programa debe terminar al presionar la tecla q y despues ENTER vía el command line, o mediante un click en un botón en la interfaz gráfica, como se describe en el próximo párrafo. Al momento de terminar se debe desplegar las colas, las listas de cada estado, cuántas transacciones se pagaron (llegaron a 400), monto total de transacciones exitosas (llegaron a 400) y monto total de transacciones fallidas (llegaron a 301).

### Interfaz Grafica:
Despliega gráficamente (usando Frames) las colas de cada uno de los estados 100, 200, y 300, mostrando las transacciones con su id y su monto a pagar. También se debe desplegar la lista de transacciones en los diferentes tipos de error 201 o 301. Este despliegue debe ser en tiempo real, por lo que cada vez que haya un cambio en las colas se debe mostrar gráficamente. 

### <code>Formato para ejecutar el proyecto</code>
El software permite parametrizar los tiempos de generación de transacciones y atención de transacciones en cada estado. A la hora de ejecutar el programa se deben definir los siguientes tiempos:

Rango de tiempo en el que el Generador de Transacciones ingresa una nueva transación.

Tiempo en el que el Procesador de Transacciones nuevas desencola una transación del estado 100.

Tiempo en el que el Verificador de Transacciones desencola una transacción del estado 200.

Tiempo en el que el Payer desencola una transacción del estado 300. 
[![Formato ejecución](assets/posts/simulador-transacciones/1.webp)](assets/posts/simulador-transacciones/1.webp)

### <code>Simulador de transacción corriendo</code>
[![Funcionamiento de simulador de transacciones](assets/posts/simulador-transacciones/2.webp)](assets/posts/simulador-transacciones/2.webp)

[![Pausar transacción](assets/posts/simulador-transacciones/3.webp)](assets/posts/simulador-transacciones/3.webp)

[![Reanudar transacción](assets/posts/simulador-transacciones/4.webp)](assets/posts/simulador-transacciones/4.webp)

### <code>Estados actuales interfaz</code>
[![Resumen estados](assets/posts/simulador-transacciones/5.webp)](assets/posts/simulador-transacciones/5.webp)

[Código en Github](https://github.com/santoslopez/cc-2/tree/santoslopez/2018/an/interciclo/pj1-1)