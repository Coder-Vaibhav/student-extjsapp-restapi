/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('SM.Application', {
    extend: 'Ext.app.Application',

    // The name of the initial view to create.
    mainView: 'SM.view.main.msClsViewPort'
});
