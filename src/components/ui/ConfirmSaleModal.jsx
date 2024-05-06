import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { createSale } from "../../utils/services";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ConfirmSaleModal = ({ contextValue }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleConfirm = () => {
    onOpen();
  };

  const handleConfirmSale = () => {
    const sale = {
      items: contextValue.cart.map((movie) => {
        return {
          movie_id: movie.movie_id,
          title: movie.title,
          price: movie.price,
        };
      }),
      total: contextValue.totalCart,
    };
    createSale(sale);
    onClose();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Compra realizada!",
      showConfirmButton: false,
      timer: 1500,
      background: "rgb(0 0 0 / 0.7)",
      color: "#ffffff",
    });
    setTimeout(() => {
      navigate("/");
    }, 1500);
    contextValue.clearCart();
  };

  return (
    <>
      <button
        onClick={() => handleConfirm()}
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
                <p>Por favor, confirme para finalizar su compra</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  className="text-white bg-lime-700"
                  onPress={() => handleConfirmSale()}
                >
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
