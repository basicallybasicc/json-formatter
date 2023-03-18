import React, {Component} from 'react';
import './App.css';
import JSONPretty from 'react-json-pretty';
import { Button, Tooltip } from '@material-tailwind/react';
import { FiCornerRightDown } from 'react-icons/fi'
import Swal from 'sweetalert2'

interface propsIntf {}
interface stateIntf {
  unfJson: string,
  fJson: string
}

export default class App extends Component<propsIntf, stateIntf> {
  constructor (props: any) {
    super (props)

    this.state = {
      unfJson: '{"ping": "pong"}',
      fJson: '{}'
    }
  }

  _isJson = (str: string): boolean => {
    try {
      JSON.parse(str)
    } catch (e) {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid JSON',
        showConfirmButton: false,
        timer: 1500
      })
      return false
    }
    return true
  }

  _transform = (): void => {
    const { unfJson } = this.state
    
    if (this._isJson(unfJson)) {
      this.setState({
        fJson: unfJson
      }, () => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
  }

  _handleChange = (e: any): void => {
    this.setState({
      unfJson: e.target.value
    })
  }

  render () {
    const {unfJson, fJson} = this.state
    return (
      <>
        <h1 className="text-3xl text-center font-bold pt-8">
          JSON Formatter
        </h1>
        <hr  className='my-4'/>
        <div className='container mx-auto px-4'>

        <div className='grid grid-cols-1 gap-4'>
          <div>
            
          <label 
              htmlFor="json" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            UNFORMATTED JSON
          </label>
          <textarea 
              id="message" 
              rows={18}
              className="
                block p-2.5 w-full text-sm
                text-gray-700 bg-gray-50 rounded-md border
                border-gray-300
              "
              placeholder="Write your json here..."
              value={unfJson}
              onChange={e => this._handleChange(e)}
          />
          </div>
          <div>
            {
              unfJson === ""
              ?
              <div></div>
              :
              <Tooltip content="Process" placement="top">
                <Button 
                  onClick={() => this._transform()}
                >
                  <FiCornerRightDown size={20}/>
                </Button>
              </Tooltip>
            }
          </div>
          <div>
            <label 
                htmlFor="json" 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                FORMATTED JSON
            </label>
            <JSONPretty 
              data={fJson}
            />
          </div>
        </div>
        </div>
      </>
    )
  }
}
