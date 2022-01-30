const PreguntasPage = () => {
  return (
    <article className="preguntasFrecuentes">
      <h1>Preguntas Frecuentes</h1>
      <p>Aquí encontrarás todas las respuestas a tus preguntas sobre nuestra tienda online.</p>
      <p>Si todavía te quedan dudas <a href="/contacto" title="Contacto">contacta con nosotros</a>.</p>

      <h3>¿Cómo comprar desde el sitio?</h3>
      <p>Hacer click sobre el producto a comprar, seleccionar la cantidad y presionar el botón Agregar al Carrito</p>

      <h3>¿Cuáles son las formas de pago?</h3>
      <p>A través de Mercado Pago o mediante depósito bancario. En este caso, te pedimos que nos envíes el comprobante de pago escaneado por correo electrónico. No trabajamos con servicio contra reembolso.</p>

      <h3>Política de devolución</h3>
      <p>Si tu orden esta incorrecta, no fue lo que solicitaste, <a href="/contacto" title="Contacto">contáctanos</a>. Si de un producto en particular no tenemos stock, te enviaremos lo que tengamos en stock en ese momento y apenas completemos el stock te lo enviaremos. El costo de envío será cubierto por nosotros</p>
    </article>
  );
}

export default PreguntasPage;
