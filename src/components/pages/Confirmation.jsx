import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Confirmation = () => {
  const location = useLocation();

  const [order, setOrder] = useState({});
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (location.state && location.state.order !== undefined) {
      setOrder(location.state.order);
    }

    if (location.state && location.state.orderId !== undefined) {
      setOrderId(location.state.orderId);
    }
  }, [location]);

  return (
    <div className="page-background min-h-dvh text-white">
      <h2 className="text-2xl text-center font-bold mb-5">
        {orderId !== "" ? "Orden de compra" : "No hay orden de compra"}
      </h2>
      {orderId !== "" && (
        <div className="text-left container-box">
          <p className="text-lg font-semibold">
            Nro de confirmación:{" "}
            <span className="font-normal text-base">{orderId}</span>
          </p>
          <p className="text-lg font-semibold">
            Cliente: <span className="font-normal text-base">{order.user}</span>
          </p>
          <p className="text-lg font-semibold">
            Correo: <span className="font-normal text-base">{order.email}</span>
          </p>
          <p className="text-lg font-semibold">
            Teléfono:{" "}
            <span className="font-normal text-base">{order.phone}</span>
          </p>
          <div className="mt-5 mb-5">
            <p className="font-semibold text-lg mb-2">Detalle de compra</p>
            {order.items &&
              order.items.map((item, index) => (
                <div className="mb-2">
                  <p className="block pl-4">Item {index + 1}</p>
                  <div
                    key={index}
                    className="text-white font-light text-base flex gap-5 pl-8"
                  >
                    <p>Película: {item.title}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                </div>
              ))}
          </div>
          <p className="text-lg font-semibold">
            Total de la compra:
            <span className="font-normal text-base"> ${order.total}</span>
          </p>
        </div>
      )}
    </div>
  );
};
