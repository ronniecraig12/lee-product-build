class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

                :host {
                    --card-background: #ffffff;
                    --primary-text-color: #333;
                    --secondary-text-color: #666;
                    --accent-color-1: #4CAF50;
                    --accent-color-2: #2196F3;
                    --accent-color-3: #FFC107;
                    --accent-color-4: #F44336;
                    --accent-color-5: #9C27B0;
                    --shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                    font-family: 'Poppins', sans-serif;
                }

                .lotto-card {
                    background-color: var(--card-background);
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: var(--shadow);
                    text-align: center;
                    max-width: 400px;
                    width: 100%;
                    transition: transform 0.3s ease;
                }
                .lotto-card:hover {
                    transform: translateY(-5px);
                }
                h2 {
                    color: var(--primary-text-color);
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                p {
                    color: var(--secondary-text-color);
                    font-size: 1rem;
                    margin-bottom: 30px;
                }
                .numbers {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 15px;
                    margin: 30px 0;
                }
                .number {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: white;
                    transition: all 0.3s ease;
                    transform: scale(0);
                    animation: popIn 0.5s ease forwards;
                }
                @keyframes popIn {
                    to {
                        transform: scale(1);
                    }
                }
                button {
                    background-image: linear-gradient(to right, #4CAF50 0%, #8BC34A  51%, #4CAF50  100%);
                    margin-top: 20px;
                    padding: 15px 45px;
                    text-align: center;
                    text-transform: uppercase;
                    transition: 0.5s;
                    background-size: 200% auto;
                    color: white;            
                    box-shadow: 0 0 20px #eee;
                    border-radius: 10px;
                    display: block;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                }

                button:hover {
                    background-position: right center; /* change the direction of the change here */
                    color: #fff;
                    text-decoration: none;
                }
            </style>
            <div class="lotto-card">
                <h2>Lotto Number Generator</h2>
                <p>Click the button to generate your lucky numbers!</p>
                <div class="numbers">
                </div>
                <button>Generate Numbers</button>
            </div>
        `;

        this.shadowRoot.querySelector('button').addEventListener('click', () => this.generateNumbers());
    }

    generateNumbers() {
        const numbersContainer = this.shadowRoot.querySelector('.numbers');
        numbersContainer.innerHTML = ''; // Clear previous numbers
        const numbers = new Set();
        while(numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a,b) => a-b);

        sortedNumbers.forEach((number, index) => {
            const numElement = document.createElement('div');
            numElement.classList.add('number');
            numElement.textContent = number;
            numElement.style.backgroundColor = this.getColor(number);
            numElement.style.animationDelay = `${index * 0.1}s`;
            numbersContainer.appendChild(numElement);
        });
    }

    getColor(number) {
        if (number <= 10) return 'var(--accent-color-4)';
        if (number <= 20) return 'var(--accent-color-3)';
        if (number <= 30) return 'var(--accent-color-2)';
        if (number <= 40) return 'var(--accent-color-1)';
        return 'var(--accent-color-5)';
    }
}

customElements.define('lotto-generator', LottoGenerator);
