import 'prismjs'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import './common/icons.css'
import Inferno from 'inferno'
import {Controller} from 'cerebral'
import {Container} from 'cerebral/inferno'
import UserAgent from 'cerebral-module-useragent'
import Devtools from 'cerebral/devtools'
import DebuggerModule from './modules/Debugger'
import Debugger from './components/Debugger'
import jsonStorage from 'electron-json-storage'

jsonStorage.get('ports', (err, ports) => {
  const apps = Object.keys(ports).reduce((apps, port) => {
    apps[port] = Object.assign(ports[port], {
      controller: Controller({
        modules: {
          debugger: DebuggerModule,
          useragent: UserAgent({
            media: {
              small: '(max-width: 1270px)'
            }
          })
        }
      })
    })
  }, {})

  document.body.removeChild(document.querySelector('#error'))
  Inferno.render((
    <Debugger apps={apps} />
  ), document.getElementById('root'))
})
