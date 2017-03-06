import './styles.css'
import Inferno from 'inferno'
import connector from 'connector'

import AddApp from './AddApp'

class Debugger extends Inferno.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPort: Object.keys(props.apps)[0]
    }
  }
  componentDidMount () {
    connector.connect(() => {
      connector.onEvent((payload) => {
        // currentController.getSignal('debugger.payloadReceived')(payload)
      })
    })
  }
  render () {
    if (!Object.keys(this.props.apps).length) {
      return <AddApp />
    }

    const currentApp = this.state.currentPort ? this.props.apps[this.state.currentPort] : null

    return (
      <div>
        <Container controller={currentApp.controller} style={{height: '100%'}}>
          <Debugger />
        </Container>
      </div>
    )
  }
}

export default Debugger
