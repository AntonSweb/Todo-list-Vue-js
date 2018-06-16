new Vue({
    el: "#app",
	data: {
        newTask: "",
		newItems: [],
		tasks: [
			{
				text: "Column name",
                item: []
			}
		],
		editingTask: {},
		editingItem: {}
		},
		methods: {
            addTask: function () {
				var task = this.newTask.trim();
				if (task) {
					this.tasks.push({
                         text: task,
                         item: []
                    });
					this.newTask = "";
				}
			},
            addItem: function (id) {
                var task = this.newItems.trim();
                if (task) {
                  this.tasks[id].item.push(task);
                  this.newItems = "";
                }
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
				this.tasks = [];
			}
		}
	});
