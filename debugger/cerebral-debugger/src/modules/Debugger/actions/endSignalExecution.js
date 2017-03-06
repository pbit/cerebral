function endSignalExecution ({props, state}) {
  const execution = props.data.execution
  const signalPath = state.get(`debugger.executedBySignals.${execution.executionId}`) ? (
    `debugger.executedBySignals.${execution.executionId}`
  ) : (
    `debugger.signals.${execution.executionId}`
  )

  state.set(`${signalPath}.isExecuting`, false)
  state.set('debugger.executingSignalsCount', state.get('debugger.executingSignalsCount') - 1)
}

export default endSignalExecution
