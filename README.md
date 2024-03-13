# Examen Filtro JavaScript

### Estudiante:

- Duván Camilo Arenas Rodríguez

Se plantea lo siguiente:

La empresa de desarrollo GBP desea construir una aplicación que le permita cotizar el desarrollo de las diferentes aplicaciones móviles que se desarrollan en la empresa. El departamento de diseño le hace entrega a usted como desarrollador una interfaz con los siguientes requisitos:

- Pagina principal: Se muestra información relevante incluyendo un botón para iniciar el proceso.
- Nivel de calidad: Este contiene las siguientes opciones:
  - Nivel de calidad óptimo, donde el precio es de $ 300000
  - Buena relación calidad/precio, donde el precio es de $ 380000
  - No me importa tanto la calidad, donde el precio es $ 200000
- Tipo de App que necesita el usuario: Este contiene las siguientes opciones:
  - Aplicación Android, donde el precio es de $ 2000000
  - Aplicación iOS, donde el precio es de $ 3000000
  - Aplicación Windows Phone, donde el precio es de $ 800.000
  - Aplicación Android + iOS, donde el precio es de $ 3500.000
- Diseño que el usuario quiere que tenga la App: Este contiene las siguientes opciones
  - Interfaz sencilla, donde el precio es de $ 500.000
  - Interfaz personalizada, donde el precio es de $ 1000.000
  - Interfaz replicada de la web, donde el precio es de $ 800.000
  - No necesito diseño, donde el precio es de $ 300.000
- Monetización de la App: Contiene las siguientes opciones:
  - Aplicación gratuita con publicidad, donde el precio es de $ 600.000
  - Aplicación de pago, donde el precio es de $ 1000.000
  - Compras dentro de la app, donde el precio es de $ 2000.000
  - Otros / No lo sé todavía, donde el precio es de $ 3500.000
- Sistema de Autenticación de usuarios: Contiene las siguientes opciones:
  - Sí, con redes sociales y email, donde el precio es de $ 2000.000
  - Sí, con email, donde el precio es de $ 1500.000
  - No, donde el precio es de $ 0
  - No lo sé todavía, donde el precio es de $ 3500.000

Por último, se muestra el costo de la cotización realizada con la opción de "Terminar"

Cuando el usuario seleccione "Terminar", Se almacenarán los datos respectivos, los cuales son:

- Nombre del cliente
- Número de contacto
- Email de contacto
- Valor total de la cotización

### Funcionamiento:

Cuando el usuario dé click en el botón de iniciar, una serie de opciones le serán mostradas, las cuales corresponden a los requisitos mencionados previamente.

Cada vez que el cliente seleccione una a de las opciones de cada módulo o componente, se irá almacenando un precio por defecto, el cual se sumará a un monto total que será mostrado al usuario una vez realizado el proceso. 

Los datos ingresados serán almacenados en un servidor para consultar dicha información más adelante. Las funciones empleadas para llevar a cabo esta tarea son las de CRUD para consultar y almacenar nueva información.