import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    constructor(props: {}) {
        super(props);

        const sampleData: any[] = [
            { a: 35, b: 40 },
            { a: 10, b: 25 },
            { a: 20, b: 20 },
            { a: 30, b: 25 },
            { a: 40, b: 17 },
            { a: 45, b: 20 },
            { a: 20, b: 30 }
        ];

        this.state = {
            description: 'Logarithmic base 2',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsMaxWidth: 50,
                    series: [
                        { dataField: 'a', displayText: 'A' },
                        { dataField: 'b', displayText: 'B', summary: 'c' }
                    ],
                    type: 'stackedwaterfall'                  
                }
            ],
            source: sampleData,
            title: 'Stacked waterfall series with logarithmic axis',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                labels: {
                    formatSettings: { decimalPlaces: 0 },
                    horizontalAlignment: 'right'
                },
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                title: { text: 'Value<br>' }
            },
            xAxis: {
                gridLines: { visible: true },
                tickMarks: { visible: true }
            }
        };
    }

    public render() {
        return (
            <JqxChart theme={'material-purple'} style={{ width: '850px', height: '500px' }}
                title={this.state.title} description={this.state.description}
                padding={this.state.padding} titlePadding={this.state.titlePadding}
                source={this.state.source} xAxis={this.state.xAxis}
                valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} />
        );
    }
}

export default App;