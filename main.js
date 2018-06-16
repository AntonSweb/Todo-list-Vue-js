
  new Vue({

		el: "#app",

		data: {
			newTask: "",
      newItems: [

      ],
			tasks: [
				{
					text: "Column name",
          item: [

          ]
				}
			],

			editingTask: {

			},
      editingItem: {

      }
		},

		computed: {

		},

		methods: {

			addTask: function () {
				var task = this.newTask.trim();
				if (task) {
					this.tasks.push({
             text: task,
             item: [

             ]
           });
					this.newTask = "";
				}
          // console.log(this.tasks[0].item);
			},

      addItem: function (id) {
        var task = this.newItems[id].trim();
        if (task) {
          this.tasks[id].item.push(task);
          this.newItems[id] = "";
        }
        // console.log(this.newItems);
      },

			removeTask: function (task) {
        var index = this.tasks.indexOf(task);
				this.tasks.splice(index, 1);
			},

      removeItem: function(item, id){
        var index = this.tasks[id].item.indexOf(item);
				this.tasks[id].item.splice(index, 1);
      },

			editTask: function (task) {
				this.editingTask = task;
			},

      editItem: function (item) {
        this.editingItem = item;
        // console.log(item);
      },

			endEditing: function (task) {
				this.editingTask = {};
				if (task.text.trim() === ""){
					this.removeTask(task);
				}
      },

      endEditingItem: function (item, id, index) {
        this.editingItem = {};
        this.tasks[id].item[index] = item;
      },

			clearList: function () {
				this.tasks = [

				];
			},

		}
	});
