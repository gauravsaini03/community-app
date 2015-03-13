(function (module) {
    mifosX.controllers = _.extend(module, {
        ViewEmployeeController: function (scope, routeParams, resourceFactory) {
            scope.employee = [];
            resourceFactory.employeeResource.get({staffId: routeParams.id}, function (data) {
                scope.employee = data;
            });
            
            
            scope.map = {
                    center: {
                        latitude: 45,
                        longitude: -95
                    },
                    zoom: 3,
                    bounds: {}
            };
            
            scope.polylines = [{
                id: 1,
                path: [{
                    latitude: 45,
                    longitude: -74
                }, {
                    latitude: 30,
                    longitude: -89
                }, {
                    latitude: 37,
                    longitude: -122
                }, {
                    latitude: 60,
                    longitude: -95
                }],
                stroke: {
                    color: '#6060FB',
                    weight: 5
                },
                editable: true,
                draggable: true,
                geodesic: true,
                visible: true,
                icons: [{
                    icon: {
                        path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
                    },
                    offset: '25px',
                    repeat: '50px'
                }]
            }];
            
            
        }
    });
    mifosX.ng.application.controller('ViewEmployeeController', ['$scope', '$routeParams', 'ResourceFactory', mifosX.controllers.ViewEmployeeController]).run(function ($log) {
        $log.info("ViewEmployeeController initialized");
    });
}(mifosX.controllers || {}));
