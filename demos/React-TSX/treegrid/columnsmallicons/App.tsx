import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
  private myTreeGrid = React.createRef<JqxTreeGrid>();

  constructor(props: {}) {
    super(props);

    const employees: any[] = [{ "Address": "908 W. Capital Way", "BirthDate": "1952-02-19 00:00:00", "City": "Tacoma", "Country": "USA", "EmployeeID": 2, "FirstName": "Andrew", "HireDate": "1992-08-14 00:00:00", "LastName": "Fuller", "Title": "Vice President, Sales", "children": [{ "EmployeeID": 8, "icon": "./../images/woman.png", "FirstName": "Laura", "LastName": "Callahan", "Country": "USA", "Title": "Inside Sales Coordinator", "HireDate": "1994-03-05 00:00:00", "BirthDate": "1958-01-09 00:00:00", "City": "Seattle", "Address": "4726 - 11th Ave. N.E." }, { "EmployeeID": 1, "icon": "./../images/woman.png", "FirstName": "Nancy", "LastName": "Davolio", "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-05-01 00:00:00", "BirthDate": "1968-12-08 00:00:00", "City": "Seattle", "Address": "507 - 20th Ave. E.Apt. 2A" }, { "EmployeeID": 3, "icon": "./../images/woman.png", "FirstName": "Janet", "LastName": "Leverling", "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-04-01 00:00:00", "BirthDate": "1963-08-30 00:00:00", "City": "Kirkland", "Address": "722 Moss Bay Blvd." }, { "EmployeeID": 4, "icon": "./../images/woman.png", "FirstName": "Margaret", "LastName": "Peacock", "Country": "USA", "Title": "Sales Representative", "HireDate": "1993-05-03 00:00:00", "BirthDate": "1967-09-19 00:00:00", "City": "Redmond", "Address": "4110 Old Redmond Rd." }, { "EmployeeID": 5, "icon": "./../images/boss.png", "FirstName": "Steven", "LastName": "Buchanan", "Country": "UK", "Title": "Sales Manager", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1955-03-04 00:00:00", "City": "London", "Address": "14 Garrett Hill", "expanded": "true", "children": [{ "EmployeeID": 6, "icon": "./../images/asian.png", "FirstName": "Michael", "LastName": "Suyama", "Country": "UK", "Title": "Sales Representative", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1963-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." }, { "EmployeeID": 7, "icon": "./../images/person.png", "FirstName": "Robert", "LastName": "King", "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-01-02 00:00:00", "BirthDate": "1960-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" }, { "EmployeeID": 9, "icon": "./../images/woman.png", "FirstName": "Anne", "LastName": "Dodsworth", "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1966-01-27 00:00:00", "City": "London", "Address": "7 Houndstooth Rd." }] }, { "EmployeeID": 10, "icon": "./../images/asian.png", "FirstName": "Fumi", "LastName": "Jinushi", "Country": "UK", "Title": "Sales Manager", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1954-02-03 00:00:00", "City": "London", "Address": "14 Garrett Hill", "children": [{ "EmployeeID": 11, "icon": "./../images/person.png", "FirstName": "Michael", "LastName": "Davidson", "Country": "UK", "Title": "Sales Representative", "HireDate": "1996-10-17 00:00:00", "BirthDate": "1973-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." }, { "EmployeeID": 12, "icon": "./../images/person.png", "FirstName": "Peter", "LastName": "Smith", "Country": "UK", "Title": "Sales Representative", "HireDate": "1998-01-02 00:00:00", "BirthDate": "1970-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" }] }, { "EmployeeID": 13, "icon": "./../images/person.png", "FirstName": "Chris", "LastName": "Ferguson", "Country": "USA", "Title": "Sales Representative", "HireDate": "2009-05-03 00:00:00", "BirthDate": "1967-09-19 00:00:00", "City": "Redmond", "Address": "4115 Old Redmond Rd." }, { "EmployeeID": 14, "icon": "./../images/person.png", "FirstName": "Antoni", "LastName": "Brooke", "Country": "USA", "Title": "Sales Representative", "HireDate": "2010-05-03 00:00:00", "BirthDate": "1985-09-19 00:00:00", "City": "Redmond", "Address": "4210 Old Redmond Rd." }], "expanded": "true", "icon": "./../images/oldboss.png" }];

    const source: any = {
      dataFields: [
        { name: 'EmployeeID', type: 'number' },
        { name: 'FirstName', type: 'string' },
        { name: 'LastName', type: 'string' },
        { name: 'Country', type: 'string' },
        { name: 'City', type: 'string' },
        { name: 'Address', type: 'string' },
        { name: 'Title', type: 'string' },
        { name: 'icon', type: 'string' },
        { name: 'HireDate', type: 'date' },
        { name: 'children', type: 'array' },
        { name: 'expanded', type: 'bool' },
        { name: 'BirthDate', type: 'date' }
      ],
      dataType: 'json',
      hierarchy:
      {
        root: 'children'
      },
      id: 'EmployeeID',
      localData: employees
    };

    const dataAdapter: any = new jqx.dataAdapter(source);

    this.state = {
      columns: [
        { dataField: 'FirstName', text: 'FirstName', width: 200 },
        { dataField: 'LastName', text: 'LastName', width: 200 },
        { dataField: 'Title', text: 'Title', width: 200 },
        { cellsFormat: 'd', dataField: 'BirthDate', text: 'Birth Date', width: 120 },
        { cellsFormat: 'd', dataField: 'HireDate', text: 'Hire Date', width: 120 },
        { dataField: 'Address', text: 'Address', width: 250 },
        { dataField: 'City', text: 'City', width: 100 },
        {
          cellsRenderer: (rowKey: number, dataField: any, value: any, data: any) => {
            switch (value) {
              case "USA":
                return "<div style='margin: 0px 20px;'><img style='margin-top: 2px;' width='16' height='16' src='./../images/usa.png'/></div>";
              case "UK":
                return "<div style='margin: 0px 20px;'><img style='margin-top: 2px;' width='16' height='16' src='./../images/uk.png'/></div>";
              default:
                return '';
            }
          },
          dataField: 'Country',
          text: 'Country',
          width: 63
        },
      ],
      ready: (): void => {
        setTimeout(() => {
          this.myTreeGrid.current!.expandRow(2);
        }, 0);
      },
      source: dataAdapter
    }
  }

  public render() {
    return (
      <JqxTree theme={'material-purple'}Grid ref={this.myTreeGrid}
        // @ts-ignore
        width={'100%'}
        source={this.state.source}
        icons={true}
        columns={this.state.columns}
        ready={this.state.ready}
      />
    );
  }
}

export default App;
