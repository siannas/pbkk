import React from 'react';
import Async from 'react-async';

import * as WebDataRocksReact from '../webdatarocks.react';
// import Module  from '../actions/DosenAction';

let report = (mydata) => ({
    dataSource: {
        data: mydata
    },
    slice:{
      rows: [
        {
            uniqueName: "aspek"
        },
        {
            uniqueName: "komponenAspek"
        },
        {
            uniqueName: "indikatorKinerja"
        }
      ],
      columns: [
        {
            uniqueName: "Measures"
        }
      ],
      measures: [
          {
              uniqueName: "bobot",
              aggregation: "sum"
          },
          {
              uniqueName: "target",
              aggregation: "sum"
          },
          {
              uniqueName: "capaian",
              aggregation: "sum"
          }
      ],
      expands: {
        expandAll: true,
      }
    },
    options: {
      grid: {
          showHeaders: false,
          showTotals: "off"
      }
    }
});

const getRecord = async ( { uri }  ) => {
  const res = await fetch(uri);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export class App extends React.PureComponent {
	constructor(props) {
    super(props);
    this.uri = props.uri;
	}
	
  render() {
    return (
    <div style={{width:'100%'}}>
			<Async promiseFn={getRecord} uri={this.uri}>
			{({ data, err, isLoading }) => {
                if (isLoading) return "Loading..."
                if (err) return `Something went wrong: ${err.message}`

                if (data)
                    return (
                        <WebDataRocksReact.Pivot toolbar={false} height={'calc(100vh - 10.8px)'} report={report(data)}/> 
                                    // <WebDataRocksReact.Pivot toolbar={true} height={'calc(100vh - 10.8px)'} report={report([])}/>
                    )
            }}
			</Async>
    </div>
    );
  }
}

export default App;
