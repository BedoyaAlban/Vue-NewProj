var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue !"
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "Vous avez affiché cette page le " + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Apprendre JavaScript" },
      { text: "Apprendre Vue" },
      { text: "Créer quelque chose de génial" }
    ]
  }
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js !"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue !"
  }
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Légumes" },
      { id: 1, text: "Fromage" },
      { id: 2, text: "Tout ce que les humains sont supposés manger" }
    ]
  }
});

var data = { a: 1 };
var vm = new Vue({
  el: "#example",
  data: data
});

vm.$data === data; // => true
vm.$el === document.getElementById("example"); // => true

// $watch est une méthode de l'instance
vm.$watch("a", function(newVal, oldVal) {
  // cette fonction de rappel sera appelée quand `vm.a` changera
});

var app8 = new Vue({
  el: "#app-8",
  data: {
    msg: "Value of msg!"
  }
});

var app9 = new Vue({
  el: "#app-9",
  data: {
    rawHtml: "<h1>hello</h1>"
  }
});

var vm1 = new Vue({
  el: "#example2",
  data: {
    message: "Bonjour"
  },
  computed: {
    // un accesseur (getter) calculé
    reversedMessage: function() {
      // `this` pointe sur l'instance vm
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    reverseMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

var vm = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: "Foo Bar"
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
    }
  }
});

var vm = new Vue({
  el: "#demo2",
  data: {
    firstName: "Foo",
    lastName: "Bar"
  },
  computed: {
    fullName: {
      // accesseur
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      // mutateur
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
});

var watchExampleVM = new Vue({
  el: "#watch-example",
  data: {
    question: "",
    answer:
      "Je ne peux pas vous donner une réponse avant que vous ne posiez une question !"
  },
  watch: {
    // à chaque fois que la question change, cette fonction s'exécutera
    question: function(newQuestion, oldQuestion) {
      this.answer = "J'attends que vous arrêtiez de taper...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    // _.debounce est une fonction fournie par lodash pour limiter la fréquence
    // d'exécution d'une opération particulièrement coûteuse.
    // Dans ce cas, nous voulons limiter la fréquence d'accès à
    // yesno.wtf/api, en attendant que l'utilisateur ait complètement
    // fini de taper avant de faire la requête ajax. Pour en savoir
    //  plus sur la fonction `_.debounce` (et sa cousine
    // `_.throttle`), visitez : https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer =
          "Les questions contiennent généralement un point d'interrogation. ;-)";
        return;
      }
      this.answer = "Je réfléchis...";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Erreur ! Impossible d'accéder à l'API." + error;
        });
    }
  }
});

var example1 = new Vue({
  el: "#example-1",
  data: {
    counter: 0
  }
});

var example2 = new Vue({
  el: "#example-2",
  data: {
    name: "Vue.js"
  },
  // Définissez les méthodes de l'objet
  methods: {
    greet: function(event) {
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      alert("Bonjour " + this.name + " !");
      // `event` est l'évènement natif du DOM
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
});

var exmaple3 = new Vue({
  el: "#example-3",
  methods: {
    say: function(message) {
      alert(message);
    }
  }
});

Vue.component("button-counter", {
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">Vous m\'avez cliqué {{ count }} fois.</button>'
});

new Vue({ el: "#components-demo" });
