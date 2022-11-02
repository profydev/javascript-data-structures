import { useState } from "react";

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

function TableUsingMap() {
  const [idToSelected, setIdToSelected] = useState(new Map());

  const handleOnChange = (id) => {
    const updatedIdToSelected = new Map(idToSelected);
    if (updatedIdToSelected.get(id)) {
      updatedIdToSelected.delete(id);
    } else {
      updatedIdToSelected.set(id, true);
    }
    setIdToSelected(updatedIdToSelected);
  };

  return (
    <table>
      <thead>
        <tr>
          <th />
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>
        {rows.map(({ id, name }) => {
          return (
            <tr key={id}>
              <td>
                <input
                  type="checkbox"
                  checked={!!idToSelected.get(id)}
                  onChange={() => handleOnChange(id)}
                />
              </td>
              <td>{id}</td>
              <td>{name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableUsingMap;
