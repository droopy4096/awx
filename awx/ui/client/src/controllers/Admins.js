/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

 /**
 * @ngdoc overview
 * @name controllers
 * @description These are all the controllers that are used throughout the application
 *
*/
/**
 * @ngdoc function
 * @name controllers.function:Admins
 * @description This controller's for administrators
 *  Admins.js
 *
 *  Controller functions for ading Admins to an Organization.
 *
*/


export function AdminsList($scope, $rootScope, $location, $log, $stateParams, Rest, Alert, AdminList, GenerateList,
    Prompt, SearchInit, PaginateInit, ReturnToCaller, GetBasePath, SelectionInit) {

    var list = AdminList,
        defaultUrl = GetBasePath('organizations') + $stateParams.organization_id + '/users/',
        generator = GenerateList,
        mode = 'select',
        url = GetBasePath('organizations') + $stateParams.organization_id + '/admins/';

    generator.inject(AdminList, { mode: mode, scope: $scope });

    SelectionInit({ scope: $scope, list: list, url: url, returnToCaller: 1 });

    SearchInit({ scope: $scope, set: 'admins', list: list, url: defaultUrl });

    PaginateInit({ scope: $scope, list: list, url: defaultUrl });

    $scope.search(list.iterator);
}

AdminsList.$inject = ['$scope', '$rootScope', '$location', '$log', '$stateParams', 'Rest', 'Alert', 'AdminList', 'generateList',
    'Prompt', 'SearchInit', 'PaginateInit', 'ReturnToCaller', 'GetBasePath', 'SelectionInit'
];
