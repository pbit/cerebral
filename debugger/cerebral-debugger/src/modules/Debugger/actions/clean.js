function clean ({props, state}) {
  const initialModel = state.get('debugger.initialModel')
  const hasModel = props.data && props.data.initialModel

  if (hasModel || !initialModel) {
    state.set('debugger.signals', {})
    state.set('debugger.mutationsError', false)
    state.set('debugger.mutations', [])
    state.set('debugger.renders', [])
    state.set('debugger.currentRememberedMutationIndex', 0)
    state.set('debugger.executingSignalsCount', 0)
  } else {
    state.set('debugger.executedBySignals', {})
  }
}

export default clean
