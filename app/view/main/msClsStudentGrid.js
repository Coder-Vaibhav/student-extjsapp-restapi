/**
 * @class msClsStudentGrid
 * This class created to represent students data in grid
 * 
 * Created By: Vaibhav Raut
 */
Ext.define('SM.view.main.msClsStudentGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'msWtStudentGrid',

    requires: [
        'SM.view.main.msClsStudentGridViewModel'
    ],
    viewModel: 'msclsstudentgridviewmodel',

    title: 'Student data connected with Rest API', //Set grid panel title
    scrollable: 'vertical', //Only able to scroll vertical if data goes above 80% of viewport height
    height: '80%',
    margin: '10 200 0 200',
    bind: {
        store: '{smStrStudents}' //Bind store of students to sync data in grid
    },
    viewConfig: {
        emptyText: 'No records found' //To show empty message if no record found
    },

    //Columns to show on grid
    columns: [
        {
            text: 'Firstname',
            dataIndex: 'firstName'
        },
        {
            text: 'Lastname',
            dataIndex: 'lastName'
        },
        {
            text: 'City',
            dataIndex: 'city'
        },
        {
            text: 'State',
            dataIndex: 'state'
        },
        {
            text: 'Email',
            dataIndex: 'email',
            width: 250
        },
        {
            text: 'Address',
            dataIndex: 'address',
            flex: 1
        }
    ]
});


