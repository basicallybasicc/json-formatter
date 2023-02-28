import React, {Component} from 'react';
import './App.css';
import JSONPretty from 'react-json-pretty';
import { Button } from '@material-tailwind/react';

interface propsInf {}
interface stateInf {
  json: string,
  jsonPretty: string
}

export default class App extends Component<propsInf, stateInf> {
  constructor (props: any) {
    super (props)

    this.state = {
      json: '{"hello": "world"}',
      jsonPretty: '{}'
    }
  }

  _transform = (): void => {
    this.setState({
      jsonPretty: this.state.json
    })
  }

  _handleChange = (e: any): void => {
    this.setState({
      json: e.target.value
    })
  }

  render () {
    const {json, jsonPretty} = this.state
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
              JSON
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
              value={json}
              onChange={e => this._handleChange(e)}
          />
          </div>
          <div>
            <Button onClick={() => this._transform()}>Proccess</Button>
          </div>
          <div>
            <JSONPretty 
              data={jsonPretty}
            />
          </div>
        </div>
        </div>
      </>
    )
  }
}
