import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { removeTodo, setCurrentTodo } from 'todosRedux/todoSlice';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => dispatch(removeTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <button onClick={() => dispatch(setCurrentTodo({ id, text }))}>
          Edit
        </button>
      </TodoWrapper>
    </>
  );
};
