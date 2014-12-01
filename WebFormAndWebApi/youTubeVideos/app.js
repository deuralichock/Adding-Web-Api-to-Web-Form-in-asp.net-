/// <reference path="../Scripts/angular.js" />


var youTubePlayerModuel = angular.module("youTubePlayerModuel", []);

youTubePlayerModuel.controller("YouTubeCtrl", ['$scope', function ($scope) {


    $scope.yt = {
        width: 600,
        height: 480,
        videoid: "AtW70KfS-wE",
    };

    $scope.myYouTubeVideos = [
                                    { Title: "Captcha Image Tutorial on asp net mvc 5 Part I ", Code: "oXz_6Ylgcso" },
                                    { Title: "Captcha Image Tutorial on asp net mvc 5 Part II ", Code: "oXz_6Ylgcso" },
                                    { Title: "Captcha Image Tutorial on asp net mvc 5 Part III ", Code: "AtW70KfS-wE" },

                             ];

}]);

youTubePlayerModuel.constant('YT_event', {
    STOP: 0,
    PLAY: 1,
    PAUSE: 2
});


youTubePlayerModuel.directive('youtube', function ($window) {
    return {
        restrict: "E",

        scope: {
            height: "@",
            width: "@",
            videoid: "@"
        },

        template: '<div></div>',

        link: function (scope, element) {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player;

            $window.onYouTubeIframeAPIReady = function () {

                player = new YT.Player(element.children()[0], {
                    playerVars: {
                        autoplay: 0,
                        html5: 1,
                        theme: "light",
                        modesbranding: 0,
                        color: "white",
                        iv_load_policy: 3,
                        showinfo: 1,
                        controls: 1
                    },

                    height: scope.height,
                    width: scope.width,
                    videoId: scope.videoid,
                });
            }

            scope.$watch('videoid', function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                player.cueVideoById(scope.videoid);

            });

            scope.$watch('height + width', function (newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                player.setSize(scope.width, scope.height);

            });

            scope.$on(YT_event.STOP, function () {
                player.seekTo(0);
                player.stopVideo();
            });

            scope.$on(YT_event.PLAY, function () {
                player.playVideo();
            });

            scope.$on(YT_event.PAUSE, function () {
                player.pauseVideo();
            });
        }
    };
});

