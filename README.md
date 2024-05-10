# Proyecto de eCommerce de Películas con ReactJS

En este proyecto se desarrolló un eCommerce con la herramienta Vite, utilizando la librería ReactJS para la creación de todo el Frontend, React Router para la navegación entre páginas y una base de datos de Firebase para obtener las películas y toda su información a mostrar en la aplicación, las categorías y las ordenes confirmadas. Además se utiliza el local storage para almacenar el carrito de compras en caso de recargar la página web.

## Páginas

La aplicación tiene 6 páginas, de las cuales el usuario tiene acceso a navegar mediante un enlace a 5 de ellas, excepto la página de Checkout, a la cual se accede unicamente cuando se confirma una compra. Las páginas son las siguientes:

- Inicio: se muestra la lista de todas las películas
- Drama: se muestran las películas con la categoría de drama asociada
- Comedia: se muestra la lista de películas con la categoría de comedia asociada
- Acción: se muestran las películas de la categoría de acción
- Carrito de compras: muestra las películas agregadas al carrito de compras
- Checkout: muestra los detalles de la orden de compra

## Funciones

La aplicación posee las siguientes funcionalidades:

- Filtrar por categoría de películas
- Seleccionar una película para ver su información detallada
- Agregar películas al carrito
- Elegir la cantidad de películas a agregar en el carrito
- Eliminar un item del carrito de compras
- Vaciar el carrito de compras
- Confirmar los items del carrito de compras
- Ingresar los datos del cliente
- Confirmar la compra
- Generación de orden de compra con número de confirmación único, fecha de compra, estado de la orden, datos ingresados por el cliente, detalle de las películas compradas y total de la compra.

## Librerías

Se utilizaron las siguientes librerías:

- NextUI: Librería de componentes que se usó para el navbar, el dropdown menu de las categorías, las tarjetas de las películas y el modal que muestra el formulario del cliente que compra.
  [Documentación de NextUI](https://nextui.org/docs/guide/introduction)

- Lucide-React: Librería de íconos.
  [Documentación de Lucide React](https://lucide.dev/guide/)

- React Slick: Componente de carrusel para mostrar el listado de películas.
  [Documentación de React Slick](https://react-slick.neostack.com/docs/get-started)

- Sweet Alert: Librería para mostrar una alerta cuando se agrega una película al carrito y cuando se confirma la compra.
  [Documentación de Sweet Alert](https://sweetalert2.github.io/#download)
