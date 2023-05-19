

const ToyUpdateModal = (props) => {
    const { closeModal, handleUpdate, selectedProduct } = props;
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
        <div className="modal-container bg-white w-1/2 max-w-3xl mx-auto rounded shadow-lg z-50">
          <div className="modal-content p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
              <button
                className="text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <svg
                  className="fill-current w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    className="heroicon-ui"
                    d="M6.293 6l5.5-5.5a1 1 0 111.414 1.414L7.414 6l5.793 5.793a1 1 0 01-1.414 1.414L6.293 7l-5.5 5.5a1 1 0 11-1.414-1.414L4.586 6 .293 1.707A1 1 0 011.707.293L6 4.586 11.293.293a1 1 0 111.414 1.414L7.414 6z"
                  />
                </svg>
              </button>
            </div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-40 h-40 rounded-md mb-4"
            />
            <p className="mb-2">Price: {selectedProduct.price}</p>
            <p className="mb-2">Category: {selectedProduct.category}</p>
            <p className="mb-2">Seller: {selectedProduct.seller}</p>
            <p className="mb-2">
              Available Quantity: {selectedProduct.quantity}
            </p>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
              onClick={() => handleUpdate(selectedProduct)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    );
};

export default ToyUpdateModal;