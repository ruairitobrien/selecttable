;(function ($) {
    $.fn.tableSelect = function (options) {
        
        //=======================================
        // Properties
        //=======================================
        var $scope = this;

        var tableRows;
        var lastSelectedRow; 
        var selectedRows; 

        var settings = $.extend({
            // Default options.
            //=================
            // The class to be appliead to selected rows
            selectedClass: 'selected',
            // Insert a selection menu in to the table. This is just a convenience method.
            // Any functionality used in this menu can be called externaly in a custom menu.
            addMenu: false
        }, options);

        // Initialize
        (function() {
            tableRows = $scope.find( "tbody tr" ); // Cache the last selected row. Primarily for shift key selection.
            selectedRows = 0;
            // If the addMenu flag is true, insert the menu to the top of the table.
            if (settings.addMenu) {
                var insertMenu = function () {

                };
            }
        })();

        //=======================================
        // Initialization
        //=======================================

        // Affect only rows within the table body.
        tableRows.click( function(e){
            if (e.metaKey || e.ctrlKey) {
                //Cmd+Click or Ctrl+Click
                $(this).toggleClass(settings.selectedClass);
            } else {
                if (e.shiftKey) {
                    //Shift-Click
                    if(lastSelectedRow) {
                        var currentRowIndex = tableRows.index($(this));
                        var lastRowIndex = tableRows.index(lastSelectedRow);

                        var start = lastRowIndex;
                        var end = currentRowIndex;                         
                        if (currentRowIndex < lastRowIndex) {
                            start = currentRowIndex;
                            end = lastRowIndex;
                        } 
                        var i;
                        var count = tableRows.length; 
                        for (i = start; i <= end; i++) {
                            if(i >= 0 && i < count) {
                                if(!(i === lastRowIndex)) {
                                    $(tableRows[i]).addClass(settings.selectedClass);
                                }
                            }
                        }
                    }
                } else {
                    clearTableSelection();
                }
                $(this).addClass(settings.selectedClass);
            }
            lastSelectedRow = $(this);
            updateSelectedRows();
        });

        //=======================================
        // Private functions
        //=======================================
        var updateSelectedRows = function () {
            selectedRows = tableRows.filter('.selected').length;
        };

        var insertMenu = function () {

        };
    
        //=======================================
        // Public functions
        //=======================================
        
        var clearTableSelection = function () {
            tableRows.removeClass(settings.selectedClass);
        };

        var selectAllRows = function () {
            tableRows.addClass(settings.selectedClass);
        };

        var getSelectedRows = function () {
          return selectedRows;  
        };

        var getRowCount = function () {
            return tableRows.length;
        }

        var getColumnCount = function () {
            var columnCount = 0;
            if(tableRows && tableRows.length > 0) {
                $(tableRows[0]).children('td').each(function () {
                    if ($(this).attr('colspan')) {
                        columnCount += +$(this).attr('colspan');
                    } else {
                        columnCount++;
                    }
                });
            }
            return columnCount;
        }
        
        
        return {
            clearTableSelection: clearTableSelection,
            selectAllRows: selectAllRows,
            getSelectedRows: getSelectedRows,
            getRowCount: getRowCount,
            getColumnCount: getColumnCount            
        };
        
    };
}(jQuery));
