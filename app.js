// Complete structured dataset containing templates and dynamic parameter generation rules
const curriculumData = [
    {
        unitId: 1,
        title: "Unit 1: Polynomial and Rational Functions",
        subunits: [
            {
                id: "1.1",
                title: "1.1 Change in Tandem",
                generator: () => {
                    const a = Math.floor(Math.random() * 4) + 2;
                    const b = Math.floor(Math.random() * 10) - 5;
                    const c = Math.floor(Math.random() * 10) - 5;
                    const x1 = 1, x2 = 4;
                    // y = ax^2 + bx + c
                    const y1 = a * (x1**2) + b * x1 + c;
                    const y2 = a * (x2**2) + b * x2 + c;
                    const avgRate = (y2 - y1) / (x2 - x1);
                    return {
                        question: `Let quantities $x$ and $y$ be related by the quadratic function $y = ${a}x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}$. Calculate the average rate of change of $y$ with respect to $x$ over the interval $[${x1}, ${x2}]$.`,
                        answer: `Evaluate function values at endpoints: at $x = ${x1}$, $y = ${y1}$; at $x = ${x2}$, $y = ${y2}$. Compute average rate of change $\\frac{\\Delta y}{\\Delta x} = \\frac{${y2} - (${y1})}{${x2} - ${x1}} = ${avgRate}$.`
                    };
                }
            },
            {
                id: "1.2",
                title: "1.2 Rates of Change",
                generator: () => {
                    const a = Math.floor(Math.random() * 3) + 2;
                    const n = 3;
                    return {
                        question: `Given the power function $f(x) = ${a}x^${n}$, find the average rate of change over the interval $[2, 5]$ and compare it to the instantaneous rate of change at the midpoint $x = 3.5$.`,
                        answer: `Average rate of change over $[2, 5]$ is $\\frac{f(5) - f(2)}{5 - 2} = \\frac{${a}(125) - ${a}(8)}{3} = \\frac{${a * 117}}{3} = ${a * 39}$. The derivative is $f'(x) = ${a * n}x^2$; evaluating at $x = 3.5$ yields ${a * n}(3.5)^2 = ${a * 3 * 12.25}.`
                    };
                }
            },
            {
                id: "1.3",
                title: "1.3 Rates of Change in Linear and Quadratic Functions",
                generator: () => {
                    const m = Math.floor(Math.random() * 5) + 2;
                    const c1 = Math.floor(Math.random() * 10) + 5;
                    const a = 1.5, b = Math.floor(Math.random() * 4) + 2;
                    return {
                        question: `Let $P_1(t) = ${m}t + ${c1}$ represent a linear growth model and $P_2(t) = ${a}t^2 - ${b}t + 5$ represent a quadratic model. Find the specific time $t \\ge 0$ at which the instantaneous rate of change of $P_2(t)$ equals the constant rate of change of $P_1(t)$.`,
                        answer: `The constant rate of change of $P_1(t)$ is ${m}. The instantaneous rate of change of $P_2(t)$ is $P_2'(t) = 3t - ${b}. Set $3t - ${b} = ${m}$ and solve for $t$: $3t = ${m + b} \\implies t = ${(m + b)/3}.`
                    };
                }
            },
            {
                id: "1.4",
                title: "1.4 Polynomial Functions and Rates of Change",
                generator: () => {
                    const c = Math.floor(Math.random() * 5) + 2;
                    return {
                        question: `For the cubic polynomial $f(x) = 2x^3 - 4x^2 + ${c}x - 7$, find all values of $x$ where the instantaneous rate of change equals the average rate of change over the interval $[0, 4]$.`,
                        answer: `Calculate average rate over $[0, 4]$: $\\frac{f(4) - f(0)}{4 - 0}$. Set $f'(x) = 6x^2 - 8x + ${c}$ equal to this average value and solve via quadratic formula.`
                    };
                }
            },
            {
                id: "1.5",
                title: "1.5 Polynomial Functions and Complex Zeros",
                generator: () => {
                    const k = Math.floor(Math.random() * 3) + 1;
                    return {
                        question: `Construct a polynomial of minimum degree with real coefficients having zeros at $x = ${k}$ (multiplicity 2) and $z = 1 - 2i$, passing through the point $(0, 45)$.`,
                        answer: `Since complex roots occur in conjugate pairs, roots are $x = ${k}$ (mult 2), $1-2i$, and $1+2i$. Form factors $P(x) = a(x - ${k})^2((x-1)^2 + 4)$. Solve for $a$ using $(0, 45)$.`
                    };
                }
            },
            {
                id: "1.6",
                title: "1.6 Polynomial Functions and End Behavior",
                generator: () => {
                    const lead = -(Math.floor(Math.random() * 4) + 2);
                    const deg = 5;
                    return {
                        question: `Analyze the end behavior of the polynomial function $f(x) = ${lead}x^${deg} + 7x^4 - 3x + 9$ by writing formal limit statements for $\\lim_{x \\to \\infty} f(x)$ and $\\lim_{x \\to -\\infty} f(x)$.`,
                        answer: `Because the leading term is ${lead}x^${deg} (odd degree with negative coefficient), as $x \\to \\infty$, $f(x) \\to -\\infty$, and as $x \\to -\\infty$, $f(x) \\to \\infty$.`
                    };
                }
            },
            {
                id: "1.7",
                title: "1.7 Rational Functions and End Behavior",
                generator: () => {
                    const numCoeff = Math.floor(Math.random() * 5) + 2;
                    const denCoeff = Math.floor(Math.random() * 5) + 2;
                    return {
                        question: `Consider the rational function $R(x) = \\frac{${numCoeff}x^3 - 5x + 1}{${denCoeff}x^3 + 4x^2 - 7}$. Determine its horizontal asymptote by evaluating limits at infinity.`,
                        answer: `Since degrees of numerator and denominator are equal (both degree 3), the horizontal asymptote is the ratio of leading coefficients: $y = \\frac{${numCoeff}}{${denCoeff}}$.`
                    };
                }
            },
            {
                id: "1.8",
                title: "1.8 Rational Functions and Zeros",
                generator: () => {
                    const root = Math.floor(Math.random() * 4) + 2;
                    return {
                        question: `Find all real values of $x$ for which the rational function $R(x) = \\frac{x^2 - ${root*root}}{x^2 - 5x + 6}$ equals zero, ensuring you exclude domain restrictions.`,
                        answer: `Numerator factors to $(x - ${root})(x + ${root})$. Denominator factors to $(x-2)(x-3)$. Zeros occur at $x = \\pm ${root}$, provided they do not make the denominator zero.`
                    };
                }
            },
            {
                id: "1.9",
                title: "1.9 Rational Functions and Vertical Asymptotes",
                generator: () => {
                    const va = Math.floor(Math.random() * 4) + 2;
                    return {
                        question: `Identify the vertical asymptotes of the rational function $R(x) = \\frac{2x - 4}{(x + 3)(x - ${va})}$, and evaluate the one-sided limit $\\lim_{x \\to ${va}^+} R(x)$.`,
                        answer: `Vertical asymptotes occur where the denominator is zero and numerator is non-zero: $x = -3$ and $x = ${va}$. Evaluate sign behavior approaching $${va}^+$.`
                    };
                }
            },
            {
                id: "1.10",
                title: "1.10 Rational Functions and Holes",
                generator: () => {
                    const holeX = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Given the rational function $R(x) = \\frac{(x - ${holeX})(x + 4)}{(x - ${holeX})(x - 1)}$, identify any holes and vertical asymptotes, and compute exact coordinates $(x, y)$ of the hole.`,
                        answer: `A removable discontinuity (hole) exists at $x = ${holeX}$. Simplify the expression to $\\frac{x+4}{x-1}$ and substitute $x = ${holeX}$ to find the $y$-coordinate: $\\frac{${holeX}+4}{${holeX}-1}$.`
                    };
                }
            },
            {
                id: "1.11",
                title: "1.11 Equivalent Representations of Polynomial and Rational Expressions",
                generator: () => {
                    const k = Math.floor(Math.random() * 4) + 2;
                    return {
                        question: `Perform polynomial long division to rewrite $\\frac{2x^3 - 3x^2 + 4x - 5}{x - ${k}}$ in quotient-remainder form.`,
                        answer: `Using polynomial long division or synthetic division with root $x = ${k}$, determine the quadratic quotient and constant remainder term.`
                    };
                }
            },
            {
                id: "1.12",
                title: "1.12 Transformations of Functions",
                generator: () => {
                    const scale = Math.floor(Math.random() * 3) + 2;
                    const shift = Math.floor(Math.random() * 5) + 1;
                    return {
                        question: `Given the parent function $f(x) = \\vert{}x\\vert{}$, write the equation for the transformed function $g(x) = -${scale}\\vert{}x - ${shift}\\vert{} + 3$ and describe the sequence of transformations.`,
                        answer: `Transformations: Horizontal shift right by ${shift}, vertical stretch by factor of ${scale}, reflection across the $x$-axis, and vertical shift up by 3 units.`
                    };
                }
            },
            {
                id: "1.13",
                title: "1.13 Function Model Selection and Assumption Articulation",
                generator: () => {
                    const base = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `A dataset maps time $t$ to population $P(t)$: $(0, 100), (1, ${100*base}), (2, ${100*base*base})$. Determine whether a linear, quadratic, or exponential model is most appropriate, and write the explicit function model.`,
                        answer: `Outputs grow by a constant multiplier (${base}), confirming an exponential model. The explicit function model is $P(t) = 100(${base})^t$.`
                    };
                }
            },
            {
                id: "1.14",
                title: "1.14 Function Model Construction and Application",
                generator: () => {
                    const w = 12, l = 20;
                    return {
                        question: `An open-top rectangular box is constructed from a ${w}\\text{ cm} \\times ${l}\\text{ cm}$ piece of cardboard by cutting equal squares of side length $x$ from each corner. Construct a polynomial model $V(x)$ for the volume.`,
                        answer: `Volume model: $V(x) = x(${w} - 2x)(${l} - 2x) = 4x^3 - ${2*(w+l)}x^2 + ${w*l}x$. Maximize by taking derivative and setting $V'(x) = 0$.`
                    };
                }
            }
        ]
    },
    {
        unitId: 2,
        title: "Unit 2: Exponential and Logarithmic Functions",
        subunits: [
            {
                id: "2.1",
                title: "2.1 Change in Arithmetic and Geometric Sequences",
                generator: () => {
                    const d = Math.floor(Math.random() * 3) + 3;
                    const r = Math.floor(Math.random() * 2) + 2;
                    return {
                        question: `An arithmetic sequence starts with $a_1 = 5$ and has common difference $d = ${d}$. A geometric sequence starts with $g_1 = 2$ and common ratio $r = ${r}$. Find terms or growth patterns.`,
                        answer: `Arithmetic explicit term: $a_n = 5 + ${d}(n-1)$. Geometric explicit term: $g_n = 2(${r})^{n-1}$. Compare growth rates iteratively or via logarithms.`
                    };
                }
            },
            {
                id: "2.3",
                title: "2.3 Exponential Functions",
                generator: () => {
                    const init = Math.floor(Math.random() * 200) + 100;
                    const rate = (Math.random() * 0.05 + 0.02).toFixed(2);
                    return {
                        question: `A radioactive substance decays according to $M(t) = ${init} e^{-${rate}t}$. Calculate the half-life of the substance to the nearest hundredth of a year.`,
                        answer: `Set $\\frac{${init}}{2} = ${init}e^{-${rate}t} \\implies \\ln(0.5) = -${rate}t \\implies t = \\frac{\\ln(0.5)}{-${rate}} \\approx ${(Math.LN2 / parseFloat(rate)).toFixed(2)}.`
                    };
                }
            },
            {
                id: "2.9",
                title: "2.9 Logarithmic Expressions",
                generator: () => {
                    const p = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Express $\\log_3\\left(\\frac{9x^${p}}{\\sqrt{y^3}}\\right)$ as a sum, difference, and multiple of simpler logarithms.`,
                        answer: `Apply laws of logarithms: $\\log_3(9) + p\\log_3(x) - \\frac{3}{2}\\log_3(y) = 2 + ${p}\\log_3(x) - 1.5\\log_3(y)$.`
                    };
                }
            },
            {
                id: "2.12",
                title: "2.12 Logarithmic Function Manipulation",
                generator: () => {
                    const target = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Solve the logarithmic equation $\\log_2(x) + \\log_2(x - ${target}) = 3$ for $x$, checking for extraneous solutions.`,
                        answer: `Combine logs: $\\log_2(x(x - ${target})) = 3 \\implies x^2 - ${target}x = 8 \\implies x^2 - ${target}x - 8 = 0$. Solve using quadratic formula and verify domain $x > ${target}$.`
                    };
                }
            }
        ]
    },
    {
        unitId: 3,
        title: "Unit 3: Trigonometric and Polar Functions",
        subunits: [
            {
                id: "3.1",
                title: "3.1 Periodic Phenomena",
                generator: () => {
                    const high = Math.floor(Math.random() * 4) + 10;
                    const low = Math.floor(Math.random() * 3) + 2;
                    const period = 12;
                    const amp = (high - low) / 2;
                    const midline = (high + low) / 2;
                    return {
                        question: `High tide reaches $${high}\\text{ ft}$ at midnight ($t = 0$), and low tide reaches $${low}\\text{ ft}$ ${period/2} hours later. Determine the amplitude, midline, and period of this wave.`,
                        answer: `Amplitude $A = \\frac{${high} - ${low}}{2} = ${amp}$. Midline $D = \\frac{${high} + ${low}}{2} = ${midline}$. Period = ${period} hours.`
                    };
                }
            },
            {
                id: "3.3",
                title: "3.3 Sine and Cosine Function Values",
                generator: () => {
                    return {
                        question: `Evaluate the exact value of $\\sin\\left(\\frac{7\\pi}{6}\\right)$ and $\\cos\\left(-\\frac{3\\pi}{4}\\right)$ using reference angles.`,
                        answer: `$\\sin\\left(\\frac{7\\pi}{6}\\right) = -\\frac{1}{2}$ (Quad III). $\\cos\\left(-\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$ (Quad III).`
                    };
                }
            },
            {
                id: "3.10",
                title: "3.10 Trigonometric Equations and Inequalities",
                generator: () => {
                    return {
                        question: `Find all solutions to the trigonometric equation $2\\cos^2(x) + \\sin(x) - 1 = 0$ on the interval $[0, 2\\pi)$.`,
                        answer: `Substitute $\\cos^2(x) = 1 - \\sin^2(x)$ to get $2(1 - \\sin^2(x)) + \\sin(x) - 1 = 0 \\implies 2\\sin^2(x) - \\sin(x) - 1 = 0$. Factor to solve for $\\sin(x)$.`
                    };
                }
            }
        ]
    },
    {
        unitId: 4,
        title: "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
        subunits: [
            {
                id: "4.1",
                title: "4.1 Parametric Functions",
                generator: () => {
                    const m = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Eliminate the parameter $t$ from the parametric equations $x(t) = ${m}t - 2$ and $y(t) = ${m*m}t^2 - 4$ to write an equivalent Cartesian equation.`,
                        answer: `Solve for $t$ from $x$: $t = \\frac{x + 2}{${m}}$. Substitute into $y(t)$ equation and simplify into standard polynomial form.`
                    };
                }
            },
            {
                id: "4.8",
                title: "4.8 Vectors",
                generator: () => {
                    const u1 = 3, u2 = -4, v1 = 1, v2 = 2;
                    return {
                        question: `Given vectors $\\mathbf{u} = \\langle ${u1}, ${u2} \\rangle$ and $\\mathbf{v} = \\langle ${v1}, ${v2} \\rangle$, compute the magnitude $\\|\\mathbf{u}\\|$, dot product $\\mathbf{u} \\cdot \\mathbf{v}$, and angle between them.`,
                        answer: `Magnitude $\\|\\mathbf{u}\\| = \\sqrt{3^2 + (-4)^2} = 5$. Dot product $\\mathbf{u} \\cdot \\mathbf{v} = (${u1})((${v1})) + (${u2})((${v2})) = ${u1*v1 + u2*v2}$.`
                    };
                }
            },
            {
                id: "4.10",
                title: "4.10 Matrices",
                generator: () => {
                    const a = 2, b = -1, c = 3, d = 4;
                    return {
                        question: `Let $A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 5 \\\\ -2 & 1 \\end{pmatrix}$. Compute the matrix product $AB$.`,
                        answer: `Compute row-by-column products: Row 1 $\\times$ Col 1 is $((${a})(0) + (${b})(-2)) = ${b*-2}$. Resulting matrix is evaluated accordingly.`
                    };
                }
            }
        ]
    }
];

// Application State Management
let currentUnit = null;
let currentSubunit = null;
let currentQuestionData = null;

// DOM Elements
const unitSelectionEl = document.getElementById('unit-selection');
const subunitSelectionEl = document.getElementById('subunit-selection');
const questionViewEl = document.getElementById('question-view');

const unitListEl = document.getElementById('unit-list');
const subunitListEl = document.getElementById('subunit-list');
const unitTitleEl = document.getElementById('unit-title');
const subunitTitleEl = document.getElementById('subunit-title');

const questionTextEl = document.getElementById('question-text');
const answerContainerEl = document.getElementById('answer-container');
const answerTextEl = document.getElementById('answer-text');

const showAnswerBtn = document.getElementById('show-answer-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const backToUnitsBtn = document.getElementById('back-to-units');
const backToSubunitsBtn = document.getElementById('back-to-subunits');

function init() {
    renderUnits();
    setupEventListeners();
}

function renderUnits() {
    unitListEl.innerHTML = '';
    curriculumData.forEach(unit => {
        const tile = document.createElement('div');
        tile.className = 'selector-tile';
        tile.textContent = unit.title;
        tile.onclick = () => selectUnit(unit);
        unitListEl.appendChild(tile);
    });
}

function selectUnit(unit) {
    currentUnit = unit;
    unitTitleEl.textContent = unit.title;
    subunitListEl.innerHTML = '';

    unit.subunits.forEach(sub => {
        const tile = document.createElement('div');
        tile.className = 'selector-tile';
        tile.textContent = sub.title;
        tile.onclick = () => selectSubunit(sub);
        subunitListEl.appendChild(tile);
    });

    unitSelectionEl.classList.add('hidden');
    subunitSelectionEl.classList.remove('hidden');
}

function selectSubunit(subunit) {
    currentSubunit = subunit;
    subunitTitleEl.textContent = subunit.title;
    
    subunitSelectionEl.classList.add('hidden');
    questionViewEl.classList.remove('hidden');

    loadNewQuestion();
}

function loadNewQuestion() {
    answerContainerEl.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');
    showAnswerBtn.classList.remove('hidden');

    currentQuestionData = currentSubunit.generator();
    questionTextEl.innerHTML = currentQuestionData.question;
    answerTextEl.innerHTML = currentQuestionData.answer;
}

function setupEventListeners() {
    showAnswerBtn.onclick = () => {
        answerContainerEl.classList.remove('hidden');
        showAnswerBtn.classList.add('hidden');
        nextQuestionBtn.classList.remove('hidden');
    };

    nextQuestionBtn.onclick = loadNewQuestion;

    backToUnitsBtn.onclick = () => {
        subunitSelectionEl.classList.add('hidden');
        unitSelectionEl.classList.remove('hidden');
    };

    backToSubunitsBtn.onclick = () => {
        questionViewEl.classList.add('hidden');
        subunitSelectionEl.classList.remove('hidden');
    };
}

window.onload = init;
