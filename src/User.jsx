import React from 'react';

const User = ({ id, name, surname, age }) => {
  return (
    <div>
      <h2>{name} {surname}</h2>
      <p>Возраст: {age}</p>
    </div>
  );
};

export default User;