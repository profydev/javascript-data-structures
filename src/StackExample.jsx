import { useReducer } from "react";

const rows = [
  {
    id: "id-1",
    name: "Row 1",
  },
  {
    id: "id-2",
    name: "Row 2",
  },
  {
    id: "id-3",
    name: "Row 3",
  },
  {
    id: "id-4",
    name: "Row 4",
  },
  {
    id: "id-5",
    name: "Row 5",
  },
  {
    id: "id-6",
    name: "Row 6",
  },
];

const initialState = { rows, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "remove":
      return {
        rows: state.rows.filter(({ id }) => id !== action.id),
        history: state.history.concat({
          action,
          row: state.rows[action.index],
        }),
      };
    case "undo":
      const undo = state.history[state.history.length - 1];
      return {
        rows: [
          ...state.rows.slice(0, undo.action.index),
          undo.row,
          ...state.rows.slice(undo.action.index),
        ],
        history: state.history.slice(0, -1),
      };
    default:
      throw new Error();
  }
}

function TableUsingRemoveAndUndo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button
        onClick={() => dispatch({ type: "undo" })}
        disabled={state.history.length === 0}
      >
        Undo Last Action
      </button>

      <table style={{ marginTop: 24 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {state.rows.map(({ id, name }, index) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <button
                    onClick={() => dispatch({ type: "remove", id, index })}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TableUsingRemoveAndUndo;
