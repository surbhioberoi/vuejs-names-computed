var app = new Vue({
    el: '#app',
    data: {
        first: '',
        last: ''
    },
    computed: {
        fullname: function() {
            return this.first + " " + this.last
        }
    }
})
