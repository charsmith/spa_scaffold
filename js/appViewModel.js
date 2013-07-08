// Main viewmodel class
define(['jquery', 'knockout', 'pager'], function($, ko, pager) {
    $(function() {
        function appViewModel() {
            this.currentTab = ko.observable('#');
            this.firstName = ko.observable('Bert');
            this.firstNameCaps = ko.computed(function() {
                return this.firstName().toUpperCase();
            }, this);
        };
        var viewModel = new appViewModel();
        pager.extendWithPage(viewModel);
        ko.applyBindings(viewModel);
        pager.start();

        pager.page.find('main').currentChildPage().subscribe(function(newValue) {
            if (newValue) {
               viewModel.currentTab(newValue.path$()());
            }
        });
    });
});
