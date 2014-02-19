eventApp.controller('EventController',
        function EventController($scope) {

            $scope.snippet = '<span style="color:red">hi there</span>'
            $scope.boolValue = true;
            $scope.BoldThis = { fontWeight: 'bold' };
            $scope.disableButton = true;
            $scope.sortorder = 'name';
            $scope.saveEvent = function (event, newEventForm) {
                console.log(newEventForm);
                if (newEventForm.$valid) {
                    alert(event.name + ' is saved');
                }
                else {
                    alert('not saved');
                }
            };

            $scope.event = {
                name: 'Angular test',
                date: 1359781015626,
                time: '10:20 am',
                location: {
                    address: "my address",
                    city: "dallas"
                },
                imageUrl: '/images/bullet.png',
                sessions: [
                    {
                        name: 'Master class',
                        difficulty: 'advanced',
                        duration: 1,
                        upVoteCount: 0
                    },
                    {
                        name: 'Junior class',
                        difficulty: 'introductory',
                        duration: 3,
                        upVoteCount: 0
                    },
                    {
                        name: 'Advanced class',
                        difficulty: 'advanced',
                        duration: 1,
                        upVoteCount: 0
                    },
                    {
                        name: 'Miscellaneous',
                        difficulty: 'intermediate',
                        duration: 4,
                        upVoteCount: 0
                    }
                    ]
            }

            $scope.event.name = 'Updated Angular Name';
            $scope.upVoteSession = function (session) {
                session.upVoteCount++;
            };
            $scope.downVoteSession = function (session) {
                session.upVoteCount--;
            };

            $scope.Reset = function () {
                alert('hello');
            }
        }
);