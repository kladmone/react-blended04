import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodoList,
} from 'components';
import { EditForm } from 'components/EditForm/EditForm';
import { useSelector } from 'react-redux';
import { selectCurrentTodo, selectTodo } from 'todosRedux/selectors';

export const App = () => {
  const todos = useSelector(selectTodo);
  const currentTodo = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {currentTodo ? <EditForm /> : <SearchForm />}

          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
};
