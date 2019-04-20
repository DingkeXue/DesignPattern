;(function () {

    // 阻止默认行为
    function preventDefault(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            window.event.returnValue = false;
        }
        return false;
    }

    var form = document.querySelector('form');
    var table = document.querySelector('.table tbody');
    form.addEventListener('submit', function (e) {
        preventDefault(e);

        let name = form.querySelector('#name').value;
        let gender = form.querySelector('#gender').value;
        let score = form.querySelector('#score').value;
        let quality = form.querySelector('#quality').value;

        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${name}</td>  
        <td>${gender}</td>
        <td>${score}</td>
        <td>${quality}</td>
        `;
        table.appendChild(tr);

    })
})();