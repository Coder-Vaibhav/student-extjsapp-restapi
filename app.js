/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SM.Application',

    name: 'SM',

    requires: [
        // This will automatically load all classes in the SM namespace
        // so that application classes do not need to require each other.
        'SM.*'
    ]
});
