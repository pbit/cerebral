function setInitialPayload ({props, state}) {
  state.set('debugger.initialModel', props.data && props.data.initialModel ? props.data.initialModel : null)
  state.set('debugger.model', props.data && props.data.initialModel ? props.data.initialModel : null)
}

export default setInitialPayload
