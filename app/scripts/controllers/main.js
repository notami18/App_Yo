'use strict';

/**
 * @ngdoc function
 * @name appYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appYoApp
 */
angular.module('appYoApp')
  .controller('MainCtrl', function ($scope) {
	var baseURL='http://lorempixel.com/960/450/';
	$scope.myInterval=5000;

	$scope.noWrapSlides = false;
	$scope.active = 0;
	var slides = $scope.slides = [];
	var currIndex = 0;

	$scope.addSlide = function() {
    var newWidth = 960 + slides.length + 1;
    slides.push({
	      image: 'http://lorempixel.com/' + newWidth + '/450/nature/',
	      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
	      id: currIndex++
	    });
  	};

  	$scope.randomize = function() {
	    var indexes = generateIndexesArray();
	    assignNewIndexesToSlides(indexes);
  	};

	for (var i = 0; i < 4; i++) {
		$scope.addSlide();
	}

  	// Randomize logic below

	function assignNewIndexesToSlides(indexes) {
		for (var i = 0, l = slides.length; i < l; i++) {
		  slides[i].id = indexes.pop();
		}
	}

	function generateIndexesArray() {
		var indexes = [];
		for (var i = 0; i < currIndex; ++i) {
		  indexes[i] = i;
		}
		return shuffle(indexes);
	}

  	// http://stackoverflow.com/questions/962802#962890
	function shuffle(array) {
		var tmp, current, top = array.length;

		if (top) {
		  while (--top) {
		    current = Math.floor(Math.random() * (top + 1));
		    tmp = array[current];
		    array[current] = array[top];
		    array[top] = tmp;
		  }
		}

		return array;
	}

 //  	$scope.slides = [
	//    {
	// 		title:'Aprende a mantenerte en forma',
	// 		image:baseURL+'sports/',
	// 		text:'¡Practica algún deporte todos los días'
	//    },
	//    {
	// 		title:'Buena alimentación',
	// 		image:baseURL+'food/',
	// 		text:'¡La importancia de frutas y verduras en la dieta!'
	//    },
	//    {
	// 		title:'En contacto con la naturaleza',
	// 		image:baseURL+'nature/',
	// 		text:'¡Mantente en armonía con la naturaleza!'
	//    }
 //    ];

	// Modelo para los tres bloques de contenidos
	var baseURL='http://lorempixel.com/200/200/'
	$scope.contenido = [
		{
		   img:baseURL+'people',
		   title:'Sobre Nosotros',
		   sumario:'Somos una empresa comprometida con la vida sana'
		},
		{
		   img:baseURL+'business',
		   title:'Nuestros Servicios',
		   sumario:'Ofrecemos asesoría profesional para mantenerse Sanos, buena alimentación, cuales son los mejores ejercicios para tí, etc.'
		},
		{
		   img:baseURL+'transport',
		   title:'Contáctanos',
		   sumario:'#333, Buena vida Online, Plaza Central, Durance, Zip-432167'
		}
	]
});
