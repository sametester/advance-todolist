function TodoForm() {
  return (
    <div className="my-4">
      {/* ********** ADD TODO FORM ********** */}
      <form>
        <div className="input-group">
          <input type="text" className="form-control" />
          <button className="btn btn-primary">
            <i className="fa-solid fa-check" />
          </button>
          <button className="btn btn-outline-secondary">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        {/* <small className="text-danger">Title is required.</small> */}
      </form>
      {/* ********** END ADD TODO FORM ********** */}
    </div>
  );
}

export default TodoForm;
