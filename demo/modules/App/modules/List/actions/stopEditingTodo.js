function stopEditingTodo ({input, state, module}) {

  const todoPath = ['todos', input.ref];
  let todo = module.state.get(todoPath);

  if (!todo.$newTitle) {
    return;
  }

  module.state.merge(todoPath, {
    $isEditing: false
  });
  module.state.unset([...todoPath, '$newTitle']);
};

export default stopEditingTodo;