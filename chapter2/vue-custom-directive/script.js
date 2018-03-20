Vue.directive('square', function (el, binding) {
    var value = binding.value;

    if (!isNaN(value)) {
        el.innerHTML = Math.pow(binding.value, 2);
    } else {
        el.innerHTML = 'Oh No :(';
    }
});

new Vue({
    el: '#app',
    data: {item: 42},
});
