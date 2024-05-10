import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { createSale, getOrder } from "../../utils/services";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ConfirmSale = ({ contextValue }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [purchaseDate, setPurchaseDate] = useState("");
  let user, email, phone;

  const handleConfirmCart = () => {
    onOpen();
  };

  const handleConfirmSale = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setPurchaseDate(formattedDate);

    const order = {
      items: contextValue.cart.map((movie) => {
        return {
          movie_id: movie.movie_id,
          title: movie.title,
          price: movie.price,
          quantity: movie.quantity,
        };
      }),
      total: contextValue.totalCart,
      user: user,
      email: email,
      phone: phone,
      date: purchaseDate,
      state: "Generada",
    };

    onClose();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Compra realizada!",
      showConfirmButton: false,
      timer: 1500,
      background: "rgb(0 0 0 / 0.9)",
      color: "#ffffff",
    });

    createSale(order).then((response) => {
      getOrder(response).then((data) => {
        navigate("/checkout", {
          state: { order: data, orderId: response },
        });
        contextValue.clearCart();
      });
    });
  };

  return (
    <>
      <button
        onClick={() => handleConfirmCart()}
        className="bg-lime-700 px-2 py-1 transition-all hover:brightness-125 rounded-lg text-right"
      >
        Confirmar
      </button>
      <Modal
        isDismissable={false}
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          body: "py-6",
          base: "bg-black/50 text-white",
          header: "border-b-[1px] border-white/50",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3>CONFIRMAR COMPRA</h3>
              </ModalHeader>
              <ModalBody>
                <h2 className="text-lg font-semibold">Datos personales</h2>
                <form onSubmit={handleConfirmSale}>
                  <div className="mb-3">
                    <label htmlFor="name" className="block mb-1">
                      Nombre
                    </label>
                    <input
                      onChange={(e) => (user = e.target.value)}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ingresa tu nombre"
                      required
                      className="p-2 rounded-xl bg-transparent border-1 border-white/50 inline-block w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="block mb-1">
                      Correo
                    </label>
                    <input
                      onChange={(e) => (email = e.target.value)}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Ingresa tu email"
                      required
                      className="p-2 rounded-xl bg-transparent border-1 border-white/50 inline-block w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="block mb-1">
                      Teléfono
                    </label>
                    <input
                      onChange={(e) => (phone = e.target.value)}
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Ingresa tu teléfono"
                      required
                      className="p-2 rounded-xl bg-transparent border-1 border-white/50 inline-block w-full"
                    />
                  </div>
                  <p className="text-lg font-semibold">
                    Por favor, confirme para finalizar su compra
                  </p>
                  <div className="flex gap-1 justify-end mt-5">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancelar
                    </Button>
                    <Button className="text-white bg-lime-700" type="submit">
                      Confirmar
                    </Button>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
