import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';
// import { number } from 'yup';

interface ModalEditFoodProps {
  setIsOpen: () => void,
  handleUpdateFood: (data: FormData) => void,
  isOpen: boolean,
  editingFood: {}
}

interface FormData {
  id: number,
  image: string,
  name: string,
  price: number,
  description: string,
  available?: boolean
}

function ModalEditFood(props: ModalEditFoodProps) {
  const formRef = createRef<FormHandles>()
  const { isOpen, setIsOpen, handleUpdateFood, editingFood } = props;

  async function handleSubmit(data: FormData) {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
