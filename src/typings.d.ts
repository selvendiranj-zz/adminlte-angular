/* SystemJS module definition */
declare var module: NodeModule;
declare var Morris: any;

interface NodeModule
{
    id: string;
}

interface JQuery
{
    boxRefresh: any;
    boxWidget: any;
    controlSidebar: any;
    directChat: any;
    slimScroll: any;
    layout: any;
    pushMenu: any;
    todoList: any;
    tree: any;
    sortable: any;
    wysihtml5: any;
    daterangepicker: any;
    vectorMap: any;
    sparkline: any;
    datepicker: any;
    knob: any;
    tooltip: any;
}

interface JQueryStatic
{
    widget; any;
    ui: any;
}
