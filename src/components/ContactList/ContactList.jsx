import s from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              className={s.btn}
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
