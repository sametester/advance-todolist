import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm />
      </div>
      <TodoContainer />
      <TodoList />

      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 6 to 10 of 12 entries</small>
        {/* ********** PAGINATION ********** */}
        <ul className="pagination pagination-sm mb-0">
          <li className="page-item">
            <button className="page-link">
              <i className="fa-solid fa-angle-left small" />
            </button>
          </li>
          <li className="page-item">
            <button className="page-link">1</button>
          </li>
          <li className="page-item active">
            <button className="page-link">2</button>
          </li>
          <li className="page-item">
            <button className="page-link">3</button>
          </li>
          <li className="page-item">
            <button className="page-link">
              <i className="fa-solid fa-angle-right small" />
            </button>
          </li>
        </ul>
        {/* ********** END PAGINATION ********** */}
      </div>
    </div>
  );
}

export default App;
