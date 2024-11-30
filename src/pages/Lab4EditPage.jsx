import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../data/AppContext';

function Lab4EditPage() {
  const { id } = useParams();
  const { items, dispatch } = useContext(AppContext);
  const item = items.find(item => item.id === parseInt(id));

  const [name, setName] = useState(item ? item.name : '');
  const [birth, setBirth] = useState(item ? item.birth : '');
  const [eyes, setEyes] = useState(item ? item.eyes : '');
  console.log(items);

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleSave = () => {
    dispatch({
      type: 'edit',
      payload: {
        id: item.id,
        name,
        birth,
        eyes
      }
    });

    const updatedItems = items.map(i =>
      i.id === item.id ? { ...i, name, birth, eyes } : i
    );
    console.log('Updated items:', updatedItems);
  };

  return (
    <div>
      <h1>Edit {item.name}</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Birth:</label>
          <input type="date" value={birth} onChange={(e) => setBirth(e.target.value)} />
        </div>
        <div>
          <label>Eyes:</label>
          <input type="text" value={eyes} onChange={(e) => setEyes(e.target.value)} />
        </div>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
}

export default Lab4EditPage;