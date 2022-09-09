/**
 * @class msClsViewPort
 * This class created to show main component of app in viewport 
 * 
 * Created By: Vaibhav Raut
 */

Ext.define('SM.view.main.msClsViewPort', {
    extend: 'Ext.container.Viewport',

    style: {
        background: '#fffeee' //Apply background color for the viewport
    },

    items: [
        {
            xtype: 'msWtStudentGrid' //Students grid
        }
    ]
});