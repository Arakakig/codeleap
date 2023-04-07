import { createSlice } from '@reduxjs/toolkit'


function generateRandomId() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  let id = '';
  for (let i = 0; i < 5; i++) {
      id += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (let i = 0; i < 5; i++) {
      id += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return id;
}

export const Comentarios = createSlice({
  name: 'comentarios',
  initialState: {
    items: [
      {
        autor: "Victor", id: "a1a3", text: `Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

      Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.`, time: "25 minutes", title: "My First Post at CodeLeap Network!"
      },
      {
        autor: "Vini", id: "a5a3", text: `Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

      Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.`, time: "55 minutes", title: "My Second Post at CodeLeap Network!"
      }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        autor: action.payload.autor,
        text: action.payload.text,
        title: action.payload.title,
        id: generateRandomId(),
        time: "30 minutes",
      };
      console.log(newItem,)
      state.items.push(newItem);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    editarItem: (state, action) => {
      const { id, title, text} = action.payload;
      console.log({ id, title, text })
      state.items = state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title: title,
            text: text
          };
        } else {
          return item;
        }
      });
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, editarItem } = Comentarios.actions

export default Comentarios.reducer
