var data = {
    items: [
        {text: 'banana', checked: true},
        {text: 'apple', checked: true},
    ],
    title: 'My Shopping List',
    newItem: ''
};

new Vue({
    el: '#app',
    data: data,
    methods: {
        addItem: function () {
            var text;

            text = this.newItem.trim();
            if (text) {
                this.items.push({
                    text: text,
                    checked: false
                });

                this.newItem = '';
            }
        }
    }
});

console.log("Vue Version " + Vue.version);
