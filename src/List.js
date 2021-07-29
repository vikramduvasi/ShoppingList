import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">

      {items.map((item) => {
        const { id, title } = item;
        return <article key={id} className="grocery-item">
          <p className="title"> {title}</p>
          <div className="btn-container">
            <div type="button" className="edit-btn" onClick={() => editItem(id)}>
              <FaEdit />
            </div>
            <div type="button" className="delete-btn" onClick={() => removeItem(id)}>
              <FaTrash />
            </div>
          </div>
        </article>

      })}
    </div>
  )
}

export default List
