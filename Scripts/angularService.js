eventsApp.factory('addressData', function () {
    return {
        address: {
            state: 'Texas',
            city: 'Dallas',
            time: '10:20 am'
        }
    }
});

eventsApp.factory('addressBuilder', function () {
    return {
        buildAddress: function (city, state) {
            return city + ', ' + state;
        }
    }
});

eventsApp.factory('callService', function ($http, $log) {
    return {
        getEvent: function (successb) {
            $http({ method: 'GET', url: '/angularservice/angularservice/1' }).
            success(function (data, status, headers, config) {
                $log.info(data, status, headers(), config);
                successb(data);
            }).
            error(function (data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });
        }
    };
});

eventsApp.factory('callResource', function ($resource) {
    return {
        getEvent: function () {
            return $resource('/angularservice/angularservice/:id', { id: '@id' }).get({ id: 100 });
        }
    };
});