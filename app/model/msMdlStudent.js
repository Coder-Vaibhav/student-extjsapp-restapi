/**
 * @class msMdlStudent
 * This model class created to represent fields of students
 * 
 * Created By: Vaibhav Raut
 */
Ext.define('SM.model.msMdlStudent', {
    extend: 'Ext.data.Model',

    fields: [
        {
            type: 'string',
            name: 'firstName'
        },
        {
            type: 'string',
            name: 'lastName'
        },
        {
            type: 'string',
            name: 'city'
        },
        {
            type: 'string',
            name: 'state'
        },
        {
            type: 'string',
            name: 'email'
        },
        {
            type: 'string',
            name: 'address'
        }
    ]
});