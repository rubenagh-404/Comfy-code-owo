        // model
        let secretNumber;
        let userNumber;

        // view
        updateView();
        function updateView() {
            let feedback = '';
            if (userNumber == secretNumber) feedback = 'Riktig!';
            else if (userNumber < secretNumber) feedback = 'For lavt';
            else if (userNumber > secretNumber) feedback = 'For høyt';

            document.getElementById('app').innerHTML = /*HTML*/`
                <h4>Tipp et tall</h4>
                <div>${feedback}</div>
                <input 
                    type="number" min="1" max="100" step="1"
                    oninput="userNumber=this.valueAsNumber"
                    value="${userNumber || ''}"
                    />
                <button onclick="updateView()">Gjett</button>
            `;

        }

        // controller        
        init();
        function init() {
            secretNumber = createRandomNumber(1, 100);
            updateView();
        }

        function createRandomNumber(min, max) {
            let diff = max - min + 1;
            return min + Math.floor(Math.random() * diff);
        }