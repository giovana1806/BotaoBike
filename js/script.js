function ModalBag(){
    Swal.fire({
        title: "Item adicionado!",
        text: "Item foi adicionado ao seu carrinho!",
        icon: "success"
      });
}

function ModalCompra(){
    Swal.fire({
        title: "Finalizar compra",
        text: "Deseja finalizar a compra?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, finalizar!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Finalizada!",
            text: "Compra finalizada com sucesso!",
            icon: "success"
          });
        }
      });
}