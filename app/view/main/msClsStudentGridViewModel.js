/**
 * @class msClsStudentGridViewModel
 * This class is the view model for the student grid.
 * 
 * Created By: Vaibhav Raut
 */
Ext.define('SM.view.main.msClsStudentGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.msclsstudentgridviewmodel',

    requires:[
        'SM.model.msMdlStudent'
    ],

    data:{
        baseUrl: 'http://localhost:8080/api' //Base URL of Rest API
    },

    stores: {
        //Create Store for students data
        smStrStudents: {
            model: 'SM.model.msMdlStudent', //Use model to identify fields
            autoLoad: true, //If data is not specified, and if autoLoad is true or an Object, this store's load method is automatically called after creation.
            autoSync: true, //True to automatically sync the Store with its Proxy after every edit to one of its Records.
            sorters: [
                //Sort the grid by firstname and lastname of student in grid
                {
                    property: 'firstName' //Default, DESC order
                },
                {
                    property: 'lastName' //Default, DESC DESC order
                }
            ],
            proxy: {
                type: 'rest', 
                api:{
                    read:'{baseUrl}/getStudents' //Get command to retrieve all data of students   
                },
                // url: '{baseUrl}', //If the specific URL for a given CRUD action is undefined, the CRUD action request will be directed to the configured url.
                pageParam: '', //The name of the 'page=1' parameter to send in a request.
                startParam: '', //Default 'start=0'
                limitParam: '', //Default 'limit=25'
                reader: {
                    type: 'json' //Reading data from server as JSON
                },
                listeners: { 
                    exception: function(proxy, response, operation, eOpts){
                        Ext.Msg.alert('Message', 'Server Error !!');
                    }
                }
            }
        }
    }
});