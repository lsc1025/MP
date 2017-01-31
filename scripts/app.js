var app = angular.module('merchantPortalApp', ['angularUtils.directives.dirPagination']);

//app.config(function($locatinProvider) {
//    $locatinProvider.html5Mode(true);
//});



//app.run(function ($location, $window, $rootScope) {
//    $window.addEventListener('message', function (e) {
//        $rootScope.$apply(function () {
//            $location.path("/abc");
//            console.orderLog($location.path());
//        });
//    });
//});



// User login page
app.controller('loginController', ['$scope', '$location', function ($scope, $location) {
			
    //$locationProvider.html5Mode(true).hashPrefix('*');

    var para = $location.url();

    $scope.errMsg = "";

    if (para === "/auto") {
        $scope.errMsg = "Logged in!";
    }

    $scope.loginUser = function (username, password, keeplogin) {

		if (!(username === "tony" || username === "admin") || password.length < 8) {
		    console.log("Invalid Username");
		    $scope.errMsg = "Invalid username / password";
		}

		else {

            if (username === "admin") {
                location.assign("admin.html");
            } else
		        location.assign("orders.html");
		}

    };

    $scope.resetUser = function()
    {
        $scope
            .errMsg = 'An email has been sent to the email address you provided with instructions.';
    }

}]);

// View list of orders
app.controller('ordersController',
[
    '$scope', '$filter', function($scope, $filter) {

        $scope.savedOrders = sessionStorage.getItem('orders');
        $scope.savedOrderLog = sessionStorage.getItem('orderLog');
        $scope.savedAccountLog = sessionStorage.getItem('accountLog');

        $scope.orders = (sessionStorage.getItem('orders') !== null)
            ? JSON.parse($scope.savedOrders)
            : [
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412553',
                    customerName: 'Leo Russel',
                    date: new Date(2017, 0, 31),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412545',
                    customerName: 'Sam Ward',
                    date: new Date(2017, 0, 31),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412501',
                    customerName: 'David Hull',
                    date: new Date(2017, 0, 31),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412473',
                    customerName: 'Dominic Young',
                    date: new Date(2017, 0, 31),
                    orderType: 'Bank Account'
                },
               
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412113',
                    customerName: 'Renee Seaver',
                    date: new Date(2017, 0, 30),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412107',
                    customerName: 'Tad Sauvage',
                    date: new Date(2017, 0, 30),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412027',
                    customerName: 'Lottie Moses',
                    date: new Date(2017, 0, 30),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412010',
                    customerName: 'Shelia Jefferson',
                    date: new Date(2017, 0, 30),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Rejected',
                    trackId: '150411883',
                    customerName: 'Aurora Waterman',
                    date: new Date(2017, 0, 29),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411733',
                    customerName: 'Lessie Bolton',
                    date: new Date(2017, 0, 28),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Rejected',
                    trackId: '150411607',
                    customerName: 'Judi Dane',
                    date: new Date(2017, 0, 27),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411511',
                    customerName: 'Annie Varley',
                    date: new Date(2017, 0, 27),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411493',
                    customerName: 'Evette Simonson',
                    date: new Date(2017, 0, 25),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411387',
                    customerName: 'Dotty Bennet',
                    date: new Date(2017, 0, 25),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411258',
                    customerName: 'Royal Mynatt',
                    date: new Date(2017, 0, 23),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                }
            ];
        $scope.orderLog = (sessionStorage.getItem('orderLog') !== null)
            ? JSON.parse($scope.savedOrderLog)
            : [
                {
                    
                    time: new Date(2017, 0, 27, 15, 36, 07),
                    trackId: '150411607',
                    by: 'Tony',
                    ip: '10.2.124.7',
                    customerName: 'Judi Dane',
                    orderType: 'Credit Card'
                },
                {
                    time: new Date(2017, 0, 27, 16, 54, 38),
                    trackId: '15041511',
                    by: 'Tony',
                    ip: '10.2.124.122',
                    customerName: 'Annie Varley',
                    orderType: 'Credit Card'
                },
                {
                    time: new Date(2016, 0, 23, 12, 03, 54),
                    trackId: '15041007',
                    by: 'Tony',
                    ip: '10.2.124.25',
                    customerName: 'Edwina Drake',
                    orderType: 'Deposite'
                }
            ];
        $scope.accountLog = (sessionStorage.getItem('accountLog') !== null)
            ? JSON.parse($scope.savedAccountLog)
            : [
            {
                timeOn: Date.now() - 120000,
                timeOff: Date.now() - 60000,
                by: 'Tony',
                ip: '10.2.124.35',
                platfrom: 'Google Chrome 56.0'

            },
            {
                timeOn: new Date(2017, 0, 28, 16, 36, 07),
                timeOff: new Date(2017, 0, 27, 16, 45, 37),
                by: 'Tony',
                ip: '10.2.124.7',
                platfrom: 'Google Chrome 56.0'
                   
            },
            {
                timeOn: new Date(2017, 0, 27, 15, 22, 07),
                timeOff: new Date(2017, 0, 27, 15, 33, 01),
                by: 'Tony',
                ip: '10.2.124.12',
                platfrom: 'Google Chrome 56.0'
            },
            {
                timeOn: new Date(2017, 0, 27, 17, 36, 07),
                timeOff: new Date(2017, 0, 27, 17, 48, 37),
                by: 'Tony',
                ip: '10.2.124.7',
                platfrom: 'Google Chrome 56.0'
            },
            {
                timeOn: new Date(2017, 0, 27, 14, 36, 08),
                timeOff: new Date(2017, 0, 27, 14, 45, 27),
                by: 'Tony',
                ip: '10.2.124.15',
                platfrom: 'Google Chrome 56.0'
            },
            {
                timeOn: new Date(2017, 0, 25, 21, 22, 37),
                timeOff: new Date(2017, 0, 27, 21, 25, 49),
                by: 'Tony',
                ip: '70.24.254.102',
                platfrom: 'Safari 10.0.1'
            }
        ];

        sessionStorage.setItem('orderLog', JSON.stringify($scope.orderLog));
        sessionStorage.setItem('orders', JSON.stringify($scope.orders));
        sessionStorage.setItem('accountLog', JSON.stringify($scope.accountLog));

        $scope.sortBy = 'date';
        $scope.user = 'Tony';
        $scope.sortReverse = true;
        $scope.searchOrders = '';
        $scope.selectedDate = '';
        $scope.selectedType = '';
        $scope.selectedStatus = '';
        $scope.prevatt = "disabled";
        $scope.nextatt = 'waves-effect';
        $scope.orderSize = $scope.orders.length;
        $scope.pageNum = 1;
        $scope.pageSize = 10;

        
        // functions
        
        $scope.clearOrders = function() {
            var oldOrders = $scope.orders;
            $scope.orders = [];
            angular.forEach(oldOrders,
                function(order) {
                    if (!order.selected)
                        $scope.orders.push(order);
                });
            sessionStorage.setItem('orders', JSON.stringify($scope.orders));
        };

        $scope.selectAll = function(bool) {
            angular.forEach($scope.filteredOrders,
                function(order) {
                    order.selected = bool;
                });
        }

        $scope.ifSelected = function() {
            for (var i = 0; i < $scope.orders.length; i++) {
                if ($scope.orders[i].selected) {
                    return true;
                }
            }
        }

        $scope.chooseDate = function(date) {
            $scope.selectedDate = date;
        }

        $scope.chooseType = function(type) {
            $scope.selectedType = type;
        }

        $scope.chooseStatus = function(status) {
            $scope.selectedStatus = status;
        }

        $scope.showDetails = function (id) {
            if (confirm("You are accessing sensitive user data, your action will be logged.")) {
                
                var selectedOrder = $filter('filter')($scope.orders, { trackId: id })[0];
                $scope.logging(selectedOrder, $scope.user);
                sessionStorage.setItem('selectedOrder', JSON.stringify(selectedOrder));
                details = window.open('details.html');
            }
        }

        $scope.acceptSelected = function() {
            for (i = 0; i < $scope.orders.length; i++) {
                if ($scope.orders[i].selected) {
                    $scope.orders[i].status = 'Accepted';
                    $scope.orders[i].selected = false;
                }
            }
            sessionStorage.setItem('orders', JSON.stringify($scope.orders));
            $scope.bool = false;
        }

        $scope.rejectSelected = function(reason) {
            for (i = 0; i < $scope.orders.length; i++) {
                if ($scope.orders[i].selected) {
                    $scope.orders[i].status = 'Rejected';
                    $scope.orders[i].selected = false;
                }
            }
            sessionStorage.setItem('orders', JSON.stringify($scope.orders));
            $scope.bool = false;
        }

        
        $scope.logging = function (order, user) {

            var entry = {
                time: Date.now(),
                trackId: order.trackId,
                by: user,
                ip: '10.2.35.26',
                customerName: order.customerName,
                orderType: order.orderType
            }

            var savedLog = sessionStorage.getItem('orderLog');
            savedLog = JSON.parse(savedLog);
            savedLog.push(entry);
            $scope.orderLog = savedLog;
            
            sessionStorage.setItem('orderLog', JSON.stringify($scope.orderLog));
        }
        

        $scope.print = function() {
            angular.forEach($scope.filteredOrders,
                function(order, index) {
                    console.log(order.customerName + " " + index);
                });
        }

        //for (i = 0; i < $scope.orders.length; i++) {
        //	if ($scope.orders[i].status == 'Pending') {
        //		$scope.countPending = 1;
        //		$scope.countPending ++; 
        //	}
        //	else if ($scope.orders[i].status == 'Accepted') {
        //		$scope.countAccepted = 1; 
        //		$scope.countAccepted ++; 
        //	}
        //	else if ($scope.orders[i].status == 'Rejected') {
        //		$scope.countRejected = 1; 
        //		$scope.countRejected ++; 
        //	}
        //}

    }
]);


app.controller('detailsController', ['$scope', function($scope) {

	var selectedOrder = sessionStorage.getItem('selectedOrder');
	$scope.selectedOrder = JSON.parse(selectedOrder);
	$scope.selectedOrder.credit = '4505833015542447';
	$scope.selectedOrder.expiry = '07/12';
	$scope.selectedOrder.type = 'VISA';
	$scope.selectedOrder.address = '7583 Peak Drive';
	$scope.selectedOrder.city = 'Whistler';
	$scope.selectedOrder.province = 'BC';
	$scope.selectedOrder.postalCode = 'V0N 1B8';
	console.log($scope.selectedOrder);

    $scope.close = function() {
        self.close();
    }

}]);


// Filter orders by date
app.filter('filterDate', function() {
	return function(input, selectedDate) {
		if (selectedDate === '') {
			return input;
		}
		else {
			var orders = [];
			selectedDate = Date.parse(selectedDate);
			angular.forEach(input, function(obj) {
				var date = Date.parse(obj.date);
				if (date === selectedDate) {
					orders.push(obj);
				}
			});
			return orders;
		}
	};
});

app.filter('filterType', function () {
    return function (input, selectedType) {
        if (selectedType === '') {
            return input;
        }
        else {
            var orders = [];
            angular.forEach(input, function (obj) {
                var type = obj.orderType;
                if (type === selectedType) {
                    orders.push(obj);
                }
            });
            return orders;
        }
    };
});

app.filter('filterStatus', function () {
    return function (input, selectedStatus) {
        if (selectedStatus === '') {
            return input;
        }
        var orders = [];
        angular.forEach(input, function (obj) {
            if (obj.status === selectedStatus) {
                orders.push(obj);
            }
        });
        return orders;
    };
});

app.filter('filterPending', function() {
	return function(input) {
		var orders = [];
		angular.forEach(input, function(obj) {
			var date = Date.parse(obj.date);
			if (obj.status == 'Pending') {
				orders.push(obj);
			}
		});
		return orders;
	};
});

app.filter('filterRejected', function() {
	return function(input) {
		var orders = [];
		angular.forEach(input, function(obj) {
			var date = Date.parse(obj.date);
			if (obj.status == 'Rejected') {
				orders.push(obj);
			}
		});
		return orders;
	};
});

app.filter('filterAccepted', function() {
	return function(input) {
		var orders = [];
		angular.forEach(input, function(obj) {
			var date = Date.parse(obj.date);
			if (obj.status == 'Accepted') {
				orders.push(obj);
			}
		});
		return orders;
	};
});

app.filter('searchText', function () {
    return function (input, searchOrdersFilter) {
        if (searchOrdersFilter === '') {
            return input;
        }
        else {
            var orders = [];



            currentOrders.filter()
            return orders;
        }
    };
});


// Load jQuery for MaterializeCss elements
$(document).ready(function() {
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
	$('select').material_select();
	$('.collapsible').collapsible();
	var $input = $('.datepicker').pickadate({
		format: 'yyyy/mm/dd',
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15, // Creates a dropdown of 15 years to control year
		onSet: function (event) {
			if (event.select) {
			    this.close();
			}
		},
		onClose: function() {
		    $('.datepicker').blur();
		}
	});
});
