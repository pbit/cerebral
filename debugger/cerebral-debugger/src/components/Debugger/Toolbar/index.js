import './styles.css'
import Inferno from 'inferno'
import classNames from 'classnames'
import {connect} from 'cerebral/inferno'
import {state, signal} from 'cerebral/tags'
import signalsList from '../../../common/computed/signalsList'

export default connect({
  currentPage: state`debugger.currentPage`,
  executingSignalsCount: state`debugger.executingSignalsCount`,
  searchValue: state`debugger.searchValue`,
  isSmall: state`useragent.media.small`,
  appSignals: signalsList,
  pageChanged: signal`debugger.pageChanged`,
  searchValueChanged: signal`debugger.searchValueChanged`
},
  class Toolbar extends Inferno.Component {
    constructor (props) {
      super(props)
      this.state = {
        copiedSignals: null
      }
    }
    render () {
      return (
        <ul className='toolbar'>
          <li className='toolbar-item'>
            <ul className='toolbar-tabs'>
              <li
                className={classNames('toolbar-tab', {'toolbar-tab--active': this.props.currentPage === 'signals' || !this.props.isSmall && this.props.currentPage === 'model'})}
                onClick={() => this.props.pageChanged({page: 'signals'})}>
                <i className='icon icon-signals' /> CONTROLLER
              </li>
              <li
                className={classNames('toolbar-tab', {'toolbar-tab--active': this.props.currentPage === 'mutations'})}
                onClick={() => this.props.pageChanged({page: 'mutations'})}>
                <i className='icon icon-mutation' /> MUTATIONS
              </li>
              <li
                className={classNames('toolbar-tab', {'toolbar-tab--active': this.props.currentPage === 'components'})}
                onClick={() => this.props.pageChanged({page: 'components'})}>
                <i className='icon icon-components' /> COMPONENTS
              </li>
              <li
                className={classNames('toolbar-tabOnSmall', 'toolbar-tab', {'toolbar-tab--active': this.props.currentPage === 'model'})}
                onClick={() => this.props.pageChanged({page: 'model'})}>
                <i className='icon icon-model' /> STATE-TREE
              </li>
              <li className='toolbar-search'>
                <input
                  type='text'
                  placeholder='Search path...'
                  value={this.props.searchValue}
                  onInput={(event) => this.props.searchValueChanged({value: event.target.value})} />
              </li>
              <li className='toolbar-rightItem'>
                {this.props.executingSignalsCount ? 'executing' : 'idle'}
                <div className={classNames('toolbar-led', {
                  'toolbar-led--idle': !this.props.executingSignalsCount,
                  'toolbar-led--executing': !!this.props.executingSignalsCount
                })} />
              </li>
            </ul>
          </li>
        </ul>
      )
    }
  }
)
