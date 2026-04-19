class PartnershipForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    max-width: 400px;
                }
                .form-card {
                    background-color: var(--card-background, #ffffff);
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: var(--shadow);
                    transition: transform 0.3s ease, background-color 0.3s ease;
                }
                h2 {
                    color: var(--primary-text-color, #333);
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    text-align: center;
                }
                .form-group {
                    margin-bottom: 15px;
                }
                label {
                    display: block;
                    color: var(--secondary-text-color, #666);
                    font-size: 0.9rem;
                    margin-bottom: 5px;
                }
                input, textarea {
                    width: 100%;
                    padding: 12px;
                    border: 2px solid #eee;
                    border-radius: 10px;
                    font-family: inherit;
                    font-size: 0.9rem;
                    box-sizing: border-box;
                    background-color: var(--background-color);
                    color: var(--primary-text-color);
                    transition: border-color 0.3s ease;
                }
                input:focus, textarea:focus {
                    outline: none;
                    border-color: var(--accent-color-2);
                }
                textarea {
                    height: 100px;
                    resize: vertical;
                }
                button {
                    width: 100%;
                    background-image: linear-gradient(to right, #2196F3 0%, #00BCD4 51%, #2196F3 100%);
                    padding: 15px;
                    text-align: center;
                    text-transform: uppercase;
                    transition: 0.5s;
                    background-size: 200% auto;
                    color: white;            
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    border-radius: 10px;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    margin-top: 10px;
                }
                button:hover {
                    background-position: right center;
                    transform: scale(1.02);
                }
            </style>
            <div class="form-card">
                <h2>제휴 문의</h2>
                <form action="https://formspree.io/f/mojywykq" method="POST">
                    <div class="form-group">
                        <label for="name">성함/업체명</label>
                        <input type="text" id="name" name="name" required placeholder="홍길동">
                    </div>
                    <div class="form-group">
                        <label for="email">이메일 주소</label>
                        <input type="email" id="email" name="_replyto" required placeholder="example@email.com">
                    </div>
                    <div class="form-group">
                        <label for="message">문의 내용</label>
                        <textarea id="message" name="message" required placeholder="문의하실 내용을 입력해주세요."></textarea>
                    </div>
                    <button type="submit">문의하기</button>
                </form>
            </div>
        `;
    }
}

customElements.define('partnership-form', PartnershipForm);

class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    max-width: 400px;
                }

                .lotto-card {
                    background-color: var(--card-background, #ffffff);
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: var(--shadow);
                    text-align: center;
                    width: 100%;
                    transition: transform 0.3s ease, background-color 0.3s ease;
                }
                .lotto-card:hover {
                    transform: translateY(-5px);
                }
                h2 {
                    color: var(--primary-text-color, #333);
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    transition: color 0.3s ease;
                }
                p {
                    color: var(--secondary-text-color, #666);
                    font-size: 1rem;
                    margin-bottom: 30px;
                    transition: color 0.3s ease;
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
                    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                }
                @keyframes popIn {
                    to {
                        transform: scale(1);
                    }
                }
                button {
                    background-image: linear-gradient(to right, #4CAF50 0%, #8BC34A  51%, #4CAF50  100%);
                    margin: 20px auto 0;
                    padding: 15px 45px;
                    text-align: center;
                    text-transform: uppercase;
                    transition: 0.5s;
                    background-size: 200% auto;
                    color: white;            
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    border-radius: 10px;
                    display: block;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                }

                button:hover {
                    background-position: right center;
                    transform: scale(1.05);
                }
                button:active {
                    transform: scale(0.95);
                }
            </style>
            <div class="lotto-card">
                <h2>Lotto Numbers</h2>
                <p>Try your luck today!</p>
                <div class="numbers">
                </div>
                <button id="generate">Generate Numbers</button>
            </div>
        `;

        this.shadowRoot.querySelector('#generate').addEventListener('click', () => this.generateNumbers());
    }

    generateNumbers() {
        const numbersContainer = this.shadowRoot.querySelector('.numbers');
        numbersContainer.innerHTML = ''; 
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

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});
