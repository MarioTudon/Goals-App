// actions/index.js
export const agregarMeta = (meta) => ({
    type: 'AGREGAR_META',
    payload: meta
  });
  
  export const editarMeta = (meta) => ({
    type: 'EDITAR_META',
    payload: meta
  });
  
  export const borrarMeta = (id) => ({
    type: 'BORRAR_META',
    payload: id
  });
  