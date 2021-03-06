function updateSignal ({props, state}) {
  const execution = props.data.execution
  const signalPath = `debugger.signals.${execution.executionId}`
  const signal = state.get(signalPath)

  if (signal.functionsRun[execution.functionIndex]) {
    state.push(`${signalPath}.functionsRun.${execution.functionIndex}.data`, execution.data)
  } else {
    state.set(`${signalPath}.functionsRun.${execution.functionIndex}`, {
      payload: execution.payload,
      data: execution.data ? [execution.data] : []
    })
  }
  if (execution.data && execution.data.type === 'mutation') {
    state.unshift('debugger.mutations', {
      executionId: execution.executionId,
      signalName: signal.name,
      data: execution.data
    })
  }
}

export default updateSignal
