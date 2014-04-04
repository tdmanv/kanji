App = Ember.Application.create({});

App.Router.map(function() {
	this.resource('quiz');
});

App.QuizRoute = Ember.Route.extend({
});

App.QuizController = Ember.ObjectController.extend({
	answer: '',
	showAnswer: false,
	numCorrect: 0,
	numWrong: 0,
	correct: 0,
	choices: ['','','',''],
	question: '',
	randomize: function() {
		var idxs= [Math.floor(Math.random()*kanji.length), 
							 Math.floor(Math.random()*kanji.length), 
							 Math.floor(Math.random()*kanji.length), 
							 Math.floor(Math.random()*kanji.length)]


		this.set('choices', []);
		this.set('showAnswer', false);
		for (var i=0;i<4;i++) { 
			this.choices.push(kanji[idxs[i]].reading);
		}

		var correctIdx = Math.floor(Math.random()*idxs.length)
		this.set('correct', correctIdx);
		this.set('question', kanji[idxs[correctIdx]].kanji);
		this.set('answer', kanji[idxs[correctIdx]].reading + ", " + kanji[idxs[correctIdx]].meaning);
	},
  actions: {
    reset: function() {
      this.set('numCorrect', 0);
      this.set('numWrong', 0);
    },
    skip: function() {
			this.randomize()
    },
    reportCorrect: function() {
      this.incrementProperty('numCorrect');
			this.randomize()
    },

    report: function(choice) {
			var correct = this.get('choices')[this.get('correct')];
			this.set('showAnswer', true);
			if (choice == correct) {
				alert("correct!");
      	this.incrementProperty('numCorrect');
			} else {
				alert("wrong!");
      	this.incrementProperty('numWrong');
			}
    },
  }
});

/*
App.MyButtonComponent = Ember.Component.extend({
	click: function() {
		this.sendAction('action', choice);
	}
}*/


var kanji = [{
	"id": 0,
		"kanji": "\u5b66",
		"meaning": "study/learning/science",
		"reading": "\u30ac\u30af\u3001\u307e\u306a"
},
{
	"id": 1,
	"kanji": "\u4e2d",
	"meaning": "in/inside/middle/mean/center",
	"reading": "\u30c1\u30e5\u30a6\u3001\u306a\u304b"
},
{
	"id": 2,
	"kanji": "\u91d1",
	"meaning": "gold",
	"reading": "\u30ad\u30f3\u3001\u30b3\u30f3\u3001\u304b\u306d"
},
{
	"id": 3,
	"kanji": "\u4eba",
	"meaning": "person",
	"reading": "\u30b8\u30f3\u3001\u30cb\u30f3\u3001\u3072\u3068"
},
{
	"id": 4,
	"kanji": "\u4e00",
	"meaning": "one",
	"reading": "\u30a4\u30c1\u3001\u30a4\u30c4\u3001\u3072\u3068"
},
{
	"id": 5,
	"kanji": "\u5165",
	"meaning": "enter/insert",
	"reading": "\u30cb\u30e5\u30a6\u3001\u306f\u3044\u3001\u3044"
},
{
	"id": 6,
	"kanji": "\u4e07",
	"meaning": "ten thousand",
	"reading": "\u30de\u30f3\u3001\u30d0\u30f3"
},
{
	"id": 7,
	"kanji": "\u5f8c",
	"meaning": "behind/back/later",
	"reading": "\u30b4\u30a6\u3001\u30b3\u30a6\u3001\u3042\u3068\u3001\u306e\u3061\u3001\u3046\u3057\u3001\u304a\u304f"
},
{
	"id": 8,
	"kanji": "\u6771",
	"meaning": "east",
	"reading": "\u30c8\u30a6\u3001\u3072\u304c\u3057"
},
{
	"id": 9,
	"kanji": "\u898b",
	"meaning": "see/hopes/chances/idea/opinion/look at/visible",
	"reading": "\u30b1\u30f3\u3001\u307f"
},
{
	"id": 10,
	"kanji": "\u51fa",
	"meaning": "exit/leave",
	"reading": "\u30b7\u30e5\u30c4\u3001\u3067\u3001\u3060"
},
{
	"id": 11,
	"kanji": "\u672c",
	"meaning": "book/present/main/true/real/counter for long things",
	"reading": "\u30db\u30f3\u3001\u3082\u3068"
},
{
	"id": 12,
	"kanji": "\u9577",
	"meaning": "long/leader",
	"reading": "\u30c1\u30e7\u30a6\u3001\u306a\u304c"
},
{
	"id": 13,
	"kanji": "\u5341",
	"meaning": "ten",
	"reading": "\u30b8\u30e5\u30a6\u3001\u30b8\u3001\u3068\u3046\u3001\u3068"
},
{
	"id": 14,
	"kanji": "\u9593",
	"meaning": "interval/space",
	"reading": "\u30ab\u30f3\u3001\u30b1\u30f3\u3001\u3042\u3044\u3060\u3001\u307e"
},
{
	"id": 15,
	"kanji": "\u6c34",
	"meaning": "water",
	"reading": "\u30b9\u30a4\u3001\u307f\u305a"
},
{
	"id": 16,
	"kanji": "\u98df",
	"meaning": "eat/food",
	"reading": "\u30b7\u30e7\u30af\u3001\u305f\u3001\u304f"
},
{
	"id": 17,
	"kanji": "\u4e0a",
	"meaning": "above/up",
	"reading": "\u30b8\u30e7\u30a6\u3001\u3046\u3048\u3001\u3042"
},
{
	"id": 18,
	"kanji": "\u4e03",
	"meaning": "seven",
	"reading": "\u30b7\u30c1\u3001\u306a\u306a"
},
{
	"id": 19,
	"kanji": "\u4f55",
	"meaning": "what",
	"reading": "\u30ab\u3001\u306a\u306b\u3001\u306a\u3093"
},
{
	"id": 20,
	"kanji": "\u6821",
	"meaning": "exam/school/printing/proof/correction",
	"reading": "\u30b3\u30a6"
},
{
	"id": 21,
	"kanji": "\u767d",
	"meaning": "white",
	"reading": "\u30cf\u30af\u3001\u30d3\u30e3\u30af\u3001\u3057\u308d"
},
{
	"id": 22,
	"kanji": "\u56db",
	"meaning": "four",
	"reading": "\u30b7\u3001\u3088\u3001\u3088\u3063\u3001\u3088\u3093"
},
{
	"id": 23,
	"kanji": "\u53f3",
	"meaning": "right",
	"reading": "\u30e6\u30a6\u3001\u30a6\u3001\u307f\u304e"
},
{
	"id": 24,
	"kanji": "\u5de6",
	"meaning": "left",
	"reading": "\u30b5\u3001\u3072\u3060\u308a"
},
{
	"id": 25,
	"kanji": "\u524d",
	"meaning": "in front/before",
	"reading": "\u30bc\u30f3\u3001\u307e\u3048"
},
{
	"id": 26,
	"kanji": "\u6728",
	"meaning": "tree/wood",
	"reading": "\u30dc\u30af\u3001\u30e2\u30af\u3001\u304d"
},
{
	"id": 27,
	"kanji": "\u884c",
	"meaning": "going/journey",
	"reading": "\u30b3\u30a6\u3001\u30ae\u30e7\u30a6\u3001\u3044\u3001\u3086\u3001\u304a\u3053\u306a"
},
{
	"id": 28,
	"kanji": "\u4e8c",
	"meaning": "two",
	"reading": "\u30cb\u3001\u3075\u305f"
},
{
	"id": 29,
	"kanji": "\u751f",
	"meaning": "life/genuine/birth",
	"reading": "\u30bb\u30a4\u3001\u30b7\u30e7\u30a6\u3001\u3044\u3001\u3046"
},
{
	"id": 30,
	"kanji": "\u571f",
	"meaning": "soil/earth/ground/Turkey",
	"reading": "\u30c9\u3001\u30c8\u3001\u3064\u3061"
},
{
	"id": 31,
	"kanji": "\u53cb",
	"meaning": "friend",
	"reading": "\u30e6\u30a6\u3001\u3068\u3082"
},
{
	"id": 32,
	"kanji": "\u5357",
	"meaning": "south",
	"reading": "\u30ca\u30f3\u3001\u307f\u306a\u307f"
},
{
	"id": 33,
	"kanji": "\u8eca",
	"meaning": "car",
	"reading": "\u30b7\u30e3\u3001\u304f\u308b\u307e"
},
{
	"id": 34,
	"kanji": "\u5148",
	"meaning": "before/ahead/previous/future/precedence",
	"reading": "\u30bb\u30f3\u3001\u3055\u304d"
},
{
	"id": 35,
	"kanji": "\u4e09",
	"meaning": "three",
	"reading": "\u30b5\u30f3\u3001\u307f\u3063\u3001\u307f"
},
{
	"id": 36,
	"kanji": "\u5929",
	"meaning": "heavens/sky/imperial",
	"reading": "\u30c6\u30f3\u3001\u3042\u3081\u3001\u3042\u307e"
},
{
	"id": 37,
	"kanji": "\u6c17",
	"meaning": "spirit/mind",
	"reading": "\u30ad\u3001\u30b1"
},
{
	"id": 38,
	"kanji": "\u9ad8",
	"meaning": "tall/high/expensive",
	"reading": "\u30b3\u30a6\u3001\u305f\u304b"
},
{
	"id": 39,
	"kanji": "\u767e",
	"meaning": "hundred",
	"reading": "\u30d2\u30e3\u30af"
},
{
	"id": 40,
	"kanji": "\u4eca",
	"meaning": "now",
	"reading": "\u30b3\u30f3\u3001\u30ad\u30f3\u3001\u3044\u307e"
},
{
	"id": 41,
	"kanji": "\u5916",
	"meaning": "outside",
	"reading": "\u30ac\u30a4\u3001\u30b2\u3001\u305d\u3068\u3001\u307b\u304b\u3001\u306f\u305a"
},
{
	"id": 42,
	"kanji": "\u706b",
	"meaning": "fire",
	"reading": "\u30ab\u3001\u3072"
},
{
	"id": 43,
	"kanji": "\u5973",
	"meaning": "woman/female",
	"reading": "\u30b8\u30e7\u3001\u30cb\u30e7\u3001\u304a\u3093\u306a\u3001\u3081"
},
{
	"id": 44,
	"kanji": "\u8aad",
	"meaning": "read",
	"reading": "\u30c9\u30af\u3001\u30c8\u30af\u3001\u3088"
},
{
	"id": 45,
	"kanji": "\u5348",
	"meaning": "noon/sign of the horse/11AM-1PM/seventh sign of Chinese zodiac",
	"reading": "\u30b4"
},
{
	"id": 46,
	"kanji": "\u96fb",
	"meaning": "electricity",
	"reading": "\u30c7\u30f3"
},
{
	"id": 47,
	"kanji": "\u6bce",
	"meaning": "every",
	"reading": "\u30de\u30a4"
},
{
	"id": 48,
	"kanji": "\u4f11",
	"meaning": "rest/day off/retire/sleep",
	"reading": "\u30ad\u30e5\u30a6\u3001\u3084\u3059"
},
{
	"id": 49,
	"kanji": "\u66f8",
	"meaning": "write",
	"reading": "\u30b7\u30e7\u3001\u304b"
},
{
	"id": 50,
	"kanji": "\u8a71",
	"meaning": "tale/talk",
	"reading": "\u30ef\u3001\u306f\u306a\u3057\u3001\u306f\u306a"
},
{
	"id": 51,
	"kanji": "\u897f",
	"meaning": "west/Spain",
	"reading": "\u30bb\u30a4\u3001\u30b5\u30a4\u3001\u306b\u3057"
},
{
	"id": 52,
	"kanji": "\u65e5",
	"meaning": "day/sun/Japan",
	"reading": "\u30cb\u30c1\u3001\u30b8\u30c4\u3001\u3072\u3001\u304b"
},
{
	"id": 53,
	"kanji": "\u5186",
	"meaning": "circle/yen/round",
	"reading": "\u30a8\u30f3\u3001\u307e\u308b"
},
{
	"id": 54,
	"kanji": "\u56fd",
	"meaning": "country",
	"reading": "\u30b3\u30af\u3001\u304f\u306b"
},
{
	"id": 55,
	"kanji": "\u516b",
	"meaning": "eight",
	"reading": "\u30cf\u30c1\u3001\u3084\u3001\u3084\u3063\u3001\u3088\u3046"
},
{
	"id": 56,
	"kanji": "\u5b50",
	"meaning": "child/sign of the rat/11PM-1AM/first sign of Chinese zodiac",
	"reading": "\u30b7\u3001\u30b9\u3001\u3053"
},
{
	"id": 57,
	"kanji": "\u6bcd",
	"meaning": "mama/mother",
	"reading": "\u30dc\u3001\u306f\u306f\u3001\u304b\u3042"
},
{
	"id": 58,
	"kanji": "\u7537",
	"meaning": "male",
	"reading": "\u30c0\u30f3\u3001\u30ca\u30f3\u3001\u304a\u3068\u3053"
},
{
	"id": 59,
	"kanji": "\u4e94",
	"meaning": "five",
	"reading": "\u30b4\u3001\u3044\u3064"
},
{
	"id": 60,
	"kanji": "\u6642",
	"meaning": "time/hour",
	"reading": "\u30b8\u3001\u3068\u304d"
},
{
	"id": 61,
	"kanji": "\u516d",
	"meaning": "six",
	"reading": "\u30ed\u30af\u3001\u3080\u3001\u3080\u3063\u3001\u3080\u3044"
},
{
	"id": 62,
	"kanji": "\u6708",
	"meaning": "month/moon",
	"reading": "\u30b2\u30c4\u3001\u30ac\u30c4\u3001\u3064\u304d"
},
{
	"id": 63,
	"kanji": "\u5c0f",
	"meaning": "little/small",
	"reading": "\u30b7\u30e7\u30a6\u3001\u3061\u3044\u3001\u3053\u3001\u304a"
},
{
	"id": 64,
	"kanji": "\u6765",
	"meaning": "come/due/next/cause/become",
	"reading": "\u30e9\u30a4\u3001\u304f\u3001\u304d\u305f"
},
{
	"id": 65,
	"kanji": "\u5927",
	"meaning": "large/big",
	"reading": "\u30c0\u30a4\u3001\u30bf\u30a4\u3001\u304a\u304a"
},
{
	"id": 66,
	"kanji": "\u534a",
	"meaning": "half/middle/odd number/semi-/part-",
	"reading": "\u30cf\u30f3\u3001\u306a\u304b"
},
{
	"id": 67,
	"kanji": "\u96e8",
	"meaning": "rain",
	"reading": "\u30a6\u3001\u3042\u3081\u3001\u3042\u307e"
},
{
	"id": 68,
	"kanji": "\u5343",
	"meaning": "thousand",
	"reading": "\u30bb\u30f3\u3001\u3061"
},
{
	"id": 69,
	"kanji": "\u5e74",
	"meaning": "year",
	"reading": "\u30cd\u30f3\u3001\u3068\u3057"
},
{
	"id": 70,
	"kanji": "\u5ddd",
	"meaning": "stream/river",
	"reading": "\u30bb\u30f3\u3001\u304b\u308f"
},
{
	"id": 71,
	"kanji": "\u4e0b",
	"meaning": "below/down/descend/give/low/inferior",
	"reading": "\u30ab\u3001\u30b2\u3001\u3057\u305f\u3001\u304f\u3060"
},
{
	"id": 72,
	"kanji": "\u805e",
	"meaning": "hear/ask/listen",
	"reading": "\u30d6\u30f3\u3001\u30e2\u30f3\u3001\u304d"
},
{
	"id": 73,
	"kanji": "\u8a9e",
	"meaning": "word/speech/language",
	"reading": "\u30b4\u3001\u304b\u305f"
},
{
	"id": 74,
	"kanji": "\u5c71",
	"meaning": "mountain",
	"reading": "\u30b5\u30f3\u3001\u3084\u307e"
},
{
	"id": 75,
	"kanji": "\u7236",
	"meaning": "father",
	"reading": "\u30d5\u3001\u3061\u3061\u3001\u3068\u3046"
},
{
	"id": 76,
	"kanji": "\u540d",
	"meaning": "name/noted/distinguished/reputation",
	"reading": "\u30e1\u30a4\u3001\u30df\u30e7\u30a6\u3001\u306a"
},
{
	"id": 77,
	"kanji": "\u4e5d",
	"meaning": "nine",
	"reading": "\u30ad\u30e5\u30a6\u3001\u30af\u3001\u3053\u3053\u306e"
},
{
	"id": 78,
	"kanji": "\u5317",
	"meaning": "north",
	"reading": "\u30db\u30af\u3001\u304d\u305f"
} ];
