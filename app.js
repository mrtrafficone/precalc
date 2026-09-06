// Complete structured dataset containing templates and dynamic parameter generation rules for Units 1-4
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
                    return {
                        question: `Given the power function $f(x) = ${a}x^3$, find the average rate of change over the interval $[2, 5]$ and compare it to the instantaneous rate of change at the midpoint $x = 3.5$.`,
                        answer: `Average rate of change over $[2, 5]$ is $\\frac{f(5) - f(2)}{5 - 2} = \\frac{${a}(125) - ${a}(8)}{3} = ${a * 39}$. The derivative is $f'(x) = ${3*a}x^2$; evaluating at $x = 3.5$ yields ${3*a}(3.5)^2 = ${3*a * 12.25}.`
                    };
                }
            },
            {
                id: "1.3",
                title: "1.3 Rates of Change in Linear and Quadratic Functions",
                generator: () => {
                    const m = Math.floor(Math.random() * 5) + 2;
                    const c1 = Math.floor(Math.random() * 10) + 5;
                    const b = Math.floor(Math.random() * 4) + 2;
                    return {
                        question: `Let $P_1(t) = ${m}t + ${c1}$ represent a linear growth model and $P_2(t) = 1.5t^2 - ${b}t + 5$ represent a quadratic model. Find the specific time $t \\ge 0$ at which the instantaneous rate of change of $P_2(t)$ equals the constant rate of change of $P_1(t)$.`,
                        answer: `The constant rate of change of $P_1(t)$ is ${m}. The instantaneous rate of change of $P_2(t)$ is $P_2'(t) = 3t - ${b}. Set $3t - ${b} = ${m}$ and solve: $3t = ${m + b} \\implies t = ${(m + b)/3}.`
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
                        answer: `Calculate average rate over $[0, 4]$: $\\frac{f(4) - f(0)}{4}$. Set $f'(x) = 6x^2 - 8x + ${c}$ equal to this average value and solve via the quadratic formula.`
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
                        answer: `Complex roots occur in conjugate pairs: roots are $x = ${k}$ (mult 2), $1-2i$, and $1+2i$. Form factors $P(x) = a(x - ${k})^2((x-1)^2 + 4)$. Solve for $a$ using $(0, 45)$.`
                    };
                }
            },
            {
                id: "1.6",
                title: "1.6 Polynomial Functions and End Behavior",
                generator: () => {
                    const lead = -(Math.floor(Math.random() * 4) + 2);
                    return {
                        question: `Analyze the end behavior of the polynomial function $f(x) = ${lead}x^5 + 7x^4 - 3x + 9$ by writing formal limit statements for $\\lim_{x \\to \\infty} f(x)$ and $\\lim_{x \\to -\\infty} f(x)$.`,
                        answer: `Because the leading term is ${lead}x^5$ (odd degree with negative coefficient), as $x \\to \\infty$, $f(x) \\to -\\infty$, and as $x \\to -\\infty$, $f(x) \\to \\infty$.`
                    };
                }
            },
            {
                id: "1.7",
                title: "1.7 Rational Functions and End Behavior",
                generator: () => {
                    const num = Math.floor(Math.random() * 5) + 2;
                    const den = Math.floor(Math.random() * 5) + 2;
                    return {
                        question: `Consider the rational function $R(x) = \\frac{${num}x^3 - 5x + 1}{${den}x^3 + 4x^2 - 7}$. Determine its horizontal asymptote by evaluating limits at infinity.`,
                        answer: `Since the numerator and denominator have equal degree (3), the horizontal asymptote is the ratio of leading coefficients: $y = \\frac{${num}}{${den}}$.`
                    };
                }
            },
            {
                id: "1.8",
                title: "1.8 Rational Functions and Zeros",
                generator: () => {
                    const root = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Find all real values of $x$ for which the rational function $R(x) = \\frac{x^2 - ${root*root}}{x^2 - 5x + 6}$ equals zero, ensuring you exclude domain restrictions.`,
                        answer: `Numerator factors to $(x - ${root})(x + ${root})$. Denominator factors to $(x-2)(x-3)$. Zeros are at $x = \\pm ${root}$, as long as they don't zero out the denominator.`
                    };
                }
            },
            {
                id: "1.9",
                title: "1.9 Rational Functions and Vertical Asymptotes",
                generator: () => {
                    const va = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Identify the vertical asymptotes of the rational function $R(x) = \\frac{2x - 4}{(x + 3)(x - ${va})}$, and evaluate the one-sided limit $\\lim_{x \\to ${va}^+} R(x)$.`,
                        answer: `Vertical asymptotes occur where denominator is zero and numerator is non-zero: $x = -3$ and $x = ${va}$. Check sign behavior approaching $${va}^+$.`
                    };
                }
            },
            {
                id: "1.10",
                title: "1.10 Rational Functions and Holes",
                generator: () => {
                    const h = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Given the rational function $R(x) = \\frac{(x - ${h})(x + 4)}{(x - ${h})(x - 1)}$, identify any holes and vertical asymptotes, and compute coordinates $(x, y)$ of the hole.`,
                        answer: `A hole exists at $x = ${h}$. Simplify to $\\frac{x+4}{x-1}$ and substitute $x = ${h}$ to find the $y$-coordinate: $\\frac{${h}+4}{${h}-1}$.`
                    };
                }
            },
            {
                id: "1.11",
                title: "1.11 Equivalent Representations of Polynomial and Rational Expressions",
                generator: () => {
                    const k = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Perform polynomial long division to rewrite $\\frac{2x^3 - 3x^2 + 4x - 5}{x - ${k}}$ in quotient-remainder form.`,
                        answer: `Use polynomial long division or synthetic division using root $x = ${k}$ to find the quotient quadratic and constant remainder.`
                    };
                }
            },
            {
                id: "1.12",
                title: "1.12 Transformations of Functions",
                generator: () => {
                    const scale = Math.floor(Math.random() * 3) + 2;
                    const shift = Math.floor(Math.random() * 4) + 1;
                    return {
                        question: `Given the parent function $f(x) = \\vert{}x\\vert{}$, write the equation for the transformed function $g(x) = -${scale}\\vert{}x - ${shift}\\vert{} + 3$ and describe the sequence of transformations.`,
                        answer: `Shifts right by ${shift}, stretches vertically by factor of ${scale}, reflects across the $x$-axis, and shifts up by 3 units.`
                    };
                }
            },
            {
                id: "1.13",
                title: "1.13 Function Model Selection and Assumption Articulation",
                generator: () => {
                    const mult = Math.floor(Math.random() * 2) + 2;
                    return {
                        question: `A dataset maps time $t$ to population $P(t)$: $(0, 100), (1, ${100*mult}), (2, ${100*mult*mult})$. Determine whether a linear, quadratic, or exponential model is most appropriate, and write the explicit function model.`,
                        answer: `Constant multiplier factor (${mult}) confirms an exponential model. Explicit model: $P(t) = 100(${mult})^t$.`
                    };
                }
            },
            {
                id: "1.14",
                title: "1.14 Function Model Construction and Application",
                generator: () => {
                    return {
                        question: `An open-top rectangular box is constructed from a $12\\text{ cm} \\times 20\\text{ cm}$ piece of cardboard by cutting equal squares of side length $x$ from each corner. Construct a polynomial model $V(x)$ for the volume.`,
                        answer: `Volume model: $V(x) = x(12 - 2x)(20 - 2x) = 4x^3 - 64x^2 + 240x$. Maximize by setting derivative $V'(x) = 0$.`
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
                        question: `An arithmetic sequence starts with $a_1 = 5$ and has common difference $d = ${d}$. A geometric sequence starts with $g_1 = 2$ and ratio $r = ${r}$. Find the formula relationship or crossing index.`,
                        answer: `Arithmetic: $a_n = 5 + ${d}(n-1)$. Geometric: $g_n = 2(${r})^{n-1}$. Compare terms iteratively or using logarithms.`
                    };
                }
            },
            {
                id: "2.2",
                title: "2.2 Change in Linear and Exponential Functions",
                generator: () => {
                    const slope = Math.floor(Math.random() * 5) + 5;
                    return {
                        question: `Compare a linear model $L(t) = ${slope}t + 50$ and an exponential model $E(t) = 50(1.2)^t$. Find average rate requirements over interval intervals.`,
                        answer: `Calculate average rate of change via $\\frac{f(t_2) - f(t_1)}{t_2 - t_1}$ and contrast constant vs multiplicative growth rates.`
                    };
                }
            },
            {
                id: "2.3",
                title: "2.3 Exponential Functions",
                generator: () => {
                    const init = Math.floor(Math.random() * 200) + 100;
                    const rate = (Math.random() * 0.04 + 0.02).toFixed(2);
                    return {
                        question: `A radioactive substance decays according to $M(t) = ${init} e^{-${rate}t}$. Calculate the half-life of the substance to the nearest hundredth of a year.`,
                        answer: `Set $\\frac{${init}}{2} = ${init}e^{-${rate}t} \\implies t = \\frac{\\ln(0.5)}{-${rate}} \\approx ${(Math.LN2 / parseFloat(rate)).toFixed(2)} years.`
                    };
                }
            },
            {
                id: "2.4",
                title: "2.4 Exponential Function Manipulation",
                generator: () => {
                    const coeff = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Rewrite the exponential expression $f(x) = ${coeff} \\cdot 2^{4x - 1}$ in the form $f(x) = a \\cdot e^{kx}$.`,
                        answer: `Convert base 2 to base $e$: $2^{4x-1} = 2^{-1} \\cdot (2^4)^x = \\frac{1}{2}(16)^x = \\frac{1}{2}e^{x \\ln(16)}$. Combine with coefficient ${coeff}.`
                    };
                }
            },
            {
                id: "2.5",
                title: "2.5 Exponential Function Context and Data Modeling",
                generator: () => {
                    const start = 500, mult = 8;
                    return {
                        question: `A bacterial culture starts with ${start} bacteria at $t = 0$, and grows to ${start*mult} at $t = 3$ hours. Construct the model $P(t) = P_0 e^{kt}$.`,
                        answer: `Substitute points: ${start*mult} = ${start}e^{3k} \\implies e^{3k} = ${mult} \\implies k = \\frac{\\ln(${mult})}{3} = \\ln(2)$. Model is $P(t) = ${start}e^{(\\ln 2)t}$.`
                    };
                }
            },
            {
                id: "2.6",
                title: "2.6 Competing Function Model Validation",
                generator: () => {
                    return {
                        question: `Model a fish population using linear and logistic growth curves. Explain which model is more valid for long-term predictions as $t \\to \\infty$ and why.`,
                        answer: `Logistic models account for environmental carrying capacity bounds ($L$), preventing infinite unbounded growth seen in linear or unconstrained exponential models.`
                    };
                }
            },
            {
                id: "2.7",
                title: "2.7 Composition of Functions",
                generator: () => {
                    const base = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Let $f(x) = ${base}^x$ and $g(x) = \\log_{${base}}(3x + 1)$. Find the explicit algebraic expression for $(f \\circ g)(x)$ and state its domain.`,
                        answer: `$(f \\circ g)(x) = f(g(x)) = ${base}^{\\log_{${base}}(3x+1)} = 3x + 1$. Domain requires $3x + 1 > 0 \\implies x > -\\frac{1}{3}$.`
                    };
                }
            },
            {
                id: "2.8",
                title: "2.8 Inverse Functions",
                generator: () => {
                    const c = Math.floor(Math.random() * 4) + 2;
                    return {
                        question: `Find the inverse of the one-to-one function $f(x) = 5x^3 - ${c}$, and verify that $f(f^{-1}(x)) = x$.`,
                        answer: `Swap $x$ and $y$: $x = 5y^3 - ${c} \\implies y = \\sqrt[3]{\\frac{x + ${c}}{5}}$. Thus $f^{-1}(x) = \\sqrt[3]{\\frac{x + ${c}}{5}}$.`
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
                        answer: `Apply log rules: $\\log_3(9) + ${p}\\log_3(x) - \\frac{3}{2}\\log_3(y) = 2 + ${p}\\log_3(x) - 1.5\\log_3(y)$.`
                    };
                }
            },
            {
                id: "2.10",
                title: "2.10 Inverses of Exponential Functions",
                generator: () => {
                    const base = Math.floor(Math.random() * 3) + 2;
                    const shift = Math.floor(Math.random() * 5) + 1;
                    return {
                        question: `Given $f(x) = 3 \\cdot ${base}^x - ${shift}$, find its inverse function $f^{-1}(x)$ and state its domain.`,
                        answer: `Swap and solve: $x = 3 \\cdot ${base}^y - ${shift} \\implies ${base}^y = \\frac{x + ${shift}}{3} \\implies f^{-1}(x) = \\log_{${base}}\\left(\\frac{x + ${shift}}{3}\\right)$. Domain: $x > -${shift}$.`
                    };
                }
            },
            {
                id: "2.11",
                title: "2.11 Logarithmic Functions",
                generator: () => {
                    const shift = Math.floor(Math.random() * 4) + 2;
                    return {
                        question: `Analyze the logarithmic function $f(x) = 4\\ln(3x - ${shift}) + 2$. Find its domain and vertical asymptote.`,
                        answer: `Set argument > 0: $3x - ${shift} > 0 \\implies x > \\frac{${shift}}{3}$. Vertical asymptote is at $x = \\frac{${shift}}{3}$.`
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
                        answer: `Combine logs: $\\log_2(x(x - ${target})) = 3 \\implies x^2 - ${target}x = 8 \\implies x^2 - ${target}x - 8 = 0$. Solve using quadratic formula and check $x > ${target}$.`
                    };
                }
            },
            {
                id: "2.13",
                title: "2.13 Exponential and Logarithmic Equations and Inequalities",
                generator: () => {
                    return {
                        question: `Solve the exponential equation $4^{x-1} = 3^{2x}$ for $x$, expressing your answer in terms of natural logarithms.`,
                        answer: `Take natural logs of both sides: $(x-1)\\ln(4) = 2x\\ln(3) \\implies x(\\ln(4) - 2\\ln(3)) = \\ln(4) \\implies x = \\frac{\\ln(4)}{\\ln(4) - \\ln(9)}`.`
                    };
                }
            },
            {
                id: "2.14",
                title: "2.14 Logarithmic Function Context and Data Modeling",
                generator: () => {
                    return {
                        question: `The sound level in decibels is defined by $\\beta = 10\\log_{10}\\left(\\frac{I}{I_0}\\right)$. Calculate the decibel level when intensity $I$ is $10^5$ times threshold intensity $I_0$.`,
                        answer: `Substitute $\\frac{I}{I_0} = 10^5$: $\\beta = 10\\log_{10}(10^5) = 10 \\cdot 5 = 50\\text{ dB}$.`
                    };
                }
            },
            {
                id: "2.15",
                title: "2.15 Semi-log Plots",
                generator: () => {
                    const intercept = (Math.random() * 2 + 1).toFixed(1);
                    const slope = (Math.random() * 0.5 + 0.1).toFixed(1);
                    return {
                        question: `A dataset plotted on a semi-log graph ($\\ln y$ vs. $t$) yields a straight line with a $y$-intercept of ${intercept} and a slope of ${slope}. Write the exponential equation $y(t)$.`,
                        answer: `Linear equation on semi-log: $\\ln y = ${slope}t + ${intercept}$. Exponentiate both sides: $y(t) = e^{${intercept}} \\cdot e^{${slope}t}$.`
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
                    return {
                        question: `High tide reaches $${high}\\text{ ft}$ at midnight ($t = 0$), and low tide reaches $${low}\\text{ ft}$ 6 hours later. Determine the amplitude, midline, and period of this wave.`,
                        answer: `Amplitude $A = \\frac{${high} - ${low}}{2} = ${(high-low)/2}$. Midline $D = \\frac{${high} + ${low}}{2} = ${(high+low)/2}$. Period = 12 hours.`
                    };
                }
            },
            {
                id: "3.2",
                title: "3.2 Sine, Cosine, and Tangent",
                generator: () => {
                    return {
                        question: `The terminal ray of an angle $\\theta$ in standard position intersects the unit circle at $\\left(-\\frac{3}{5}, \\frac{4}{5}\\right)$. Find exact values of $\\sin\\theta$, $\\cos\\theta$, and $\\tan\\theta$.`,
                        answer: `$\\cos\\theta = -\\frac{3}{5}$, $\\sin\\theta = \\frac{4}{5}$, and $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = -\\frac{4}{3}$.`
                    };
                }
            },
            {
                id: "3.3",
                title: "3.3 Sine and Cosine Function Values",
                generator: () => {
                    return {
                        question: `Evaluate the exact value of $\\sin\\left(\\frac{7\\pi}{6}\\right)$ and $\\cos\\left(-\\frac{3\\pi}{4}\\right)$ using reference angles.`,
                        answer: `$\\sin\\left(\\frac{7\\pi}{6}\\right) = -\\frac{1}{2}$ and $\\cos\\left(-\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$.`
                    };
                }
            },
            {
                id: "3.4",
                title: "3.4 Sine and Cosine Function Graphs",
                generator: () => {
                    const amp = Math.floor(Math.random() * 3) + 2;
                    return {
                        question: `Determine the amplitude, period, phase shift, and vertical shift for $y = -${amp}\\cos\\left(\\frac{\\pi}{3}x + \\pi\\right) + 5$.`,
                        answer: `Amplitude = ${amp}, Period = $\\frac{2\\pi}{\\pi/3} = 6$, Phase shift = $-3$ units, Vertical shift = up 5 units.`
                    };
                }
            },
            {
                id: "3.5",
                title: "3.5 Sinusoidal Functions",
                generator: () => {
                    const max = 15, min = 3, period = 8;
                    const amp = (max - min) / 2;
                    const midline = (max + min) / 2;
                    return {
                        question: `Write a sinusoidal function $f(t) = A\\sin(B(t - C)) + D$ given a max value of ${max}, min value of ${min}, and period of ${period}.`,
                        answer: `Amplitude $A = ${amp}$, Midline $D = ${midline}$, Frequency factor $B = \\frac{2\\pi}{${period}} = \\frac{\\pi}{4}$.`
                    };
                }
            },
            {
                id: "3.6",
                title: "3.6 Sinusoidal Function Transformations",
                generator: () => {
                    return {
                        question: `Describe the vertical shift, phase shift, amplitude change, and period change when transforming $y = \\sin(x)$ into $y = -2\\sin\\left(\\frac{1}{2}x + \\frac{\\pi}{3}\\right) + 4$.`,
                        answer: `Amplitude changes to 2 with reflection, period expands to $4\\pi$, phase shift is left by $\\frac{2\pi}{3}$, and vertical shift is up 4 units.`
                    };
                }
            },
            {
                id: "3.7",
                title: "3.7 Sinusoidal Function Context and Data Modeling",
                generator: () => {
                    return {
                        question: `Average monthly temperatures range from a low of $20^\\circ\\text{F}$ in Jan ($t = 1$) to a high of $80^\\circ\\text{F}$ in July ($t = 7$). Construct a sinusoidal model $T(t)$.`,
                        answer: `Amplitude $A = 30$, Midline $D = 50$, Period = 12 months ($B = \\frac{\\pi}{6}$). Model: $T(t) = -30\\cos\\left(\\frac{\\pi}{6}(t-1)\\right) + 50$.`
                    };
                }
            },
            {
                id: "3.8",
                title: "3.8 The Tangent Function",
                generator: () => {
                    const b = Math.floor(Math.random() * 2) + 2;
                    return {
                        question: `Determine the period, vertical asymptotes, and $x$-intercepts for $f(x) = 3\\tan\\left(${b}x - \\frac{\\pi}{4}\\right)$.`,
                        answer: `Period = $\\frac{\\pi}{${b}}$. Vertical asymptotes occur where argument equals $\\frac{\\pi}{2} + k\\pi$.`
                    };
                }
            },
            {
                id: "3.9",
                title: "3.9 Inverse Trigonometric Functions",
                generator: () => {
                    return {
                        question: `Evaluate the exact value of $\\arcsin\\left(\\sin\\left(\\frac{3\\pi}{4}\\right)\\right)$ and simplify $\\cos(\\arctan(2x))$.`,
                        answer: `$\\sin(3\\pi/4) = \\frac{\\sqrt{2}}{2}$, so $\\arcsin(\\sqrt{2}/2) = \\frac{\\pi}{4}$. For $\\cos(\\arctan(2x))$, use reference triangle yielding $\\frac{1}{\\sqrt{1 + 4x^2}}$.`
                    };
                }
            },
            {
                id: "3.10",
                title: "3.10 Trigonometric Equations and Inequalities",
                generator: () => {
                    return {
                        question: `Find all solutions to the trigonometric equation $2\\cos^2(x) + \\sin(x) - 1 = 0$ on the interval $[0, 2\\pi)$.`,
                        answer: `Substitute $\\cos^2(x) = 1 - \\sin^2(x)$ to get $2\\sin^2(x) - \\sin(x) - 1 = 0$. Factoring yields $\\sin(x) = 1$ or $-\\frac{1}{2}$.`
                    };
                }
            },
            {
                id: "3.11",
                title: "3.11 The Secant, Cosecant, and Cotangent Functions",
                generator: () => {
                    return {
                        question: `Given $f(x) = 2\\csc(3x) - 1$, find the equations of its vertical asymptotes and local minimum values within one period.`,
                        answer: `Vertical asymptotes occur where $\\sin(3x) = 0 \\implies x = \\frac{k\\pi}{3}$.`
                    };
                }
            },
            {
                id: "3.12",
                title: "3.12 Equivalent Representations of Trigonometric Functions",
                generator: () => {
                    return {
                        question: `Express the linear combination $3\\sin(t) + 4\\cos(t)$ in single-phase amplitude form $R\\sin(t + \\phi)$.`,
                        answer: `Amplitude $R = \\sqrt{3^2 + 4^2} = 5$. Phase shift $\\phi = \\arctan\\left(\\frac{4}{3}\\right)$. Form: $5\\sin(t + \\phi)$.`
                    };
                }
            },
            {
                id: "3.13",
                title: "3.13 Trigonometry and Polar Coordinates",
                generator: () => {
                    return {
                        question: `Convert the polar coordinates $\\left(4, \\frac{5\\pi}{6}\\right)$ into Cartesian coordinates $(x, y)$.`,
                        answer: `$x = 4\\cos(5\\pi/6) = 4(-\\sqrt{3}/2) = -2\\sqrt{3}$. $y = 4\\sin(5\\pi/6) = 4(1/2) = 2$. Coordinate: $(-2\\sqrt{3}, 2)$.`
                    };
                }
            },
            {
                id: "3.14",
                title: "3.14 Polar Function Graphs",
                generator: () => {
                    return {
                        question: `Analyze the polar curve $r = 3 + 3\\cos\\theta$ (a cardioid). Find its maximum radius, symmetry, and points where $r = 0$.`,
                        answer: `Max radius = 6 at $\\theta = 0$. Symmetric across polar axis. $r = 0$ when $\\theta = \\pi$.`
                    };
                }
            },
            {
                id: "3.15",
                title: "3.15 Rates of Change in Polar Functions",
                generator: () => {
                    return {
                        question: `Determine the instantaneous rate of change $\\frac{dr}{d\\theta}$ for the logarithmic spiral $r = 3e^{0.2\\theta}$ at $\\theta = \\pi$.`,
                        answer: `Differentiate with respect to $\\theta$: $\\frac{dr}{d\\theta} = 3(0.2)e^{0.2\\theta} = 0.6e^{0.2\\pi}$.`
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
                        question: `Eliminate the parameter $t$ from $x(t) = ${m}t - 2$ and $y(t) = ${m*m}t^2 - 4$ to write an equivalent Cartesian equation.`,
                        answer: `Solve for $t$ from $x$: $t = \\frac{x + 2}{${m}}$. Substitute into $y(t)$ and expand into standard polynomial form.`
                    };
                }
            },
            {
                id: "4.2",
                title: "4.2 Parametric Functions Modeling Planar Motion",
                generator: () => {
                    return {
                        question: `A particle moves with position equations $x(t) = 4\\cos(3t)$ and $y(t) = 4\\sin(3t)$. Determine the Cartesian equation of its path.`,
                        answer: `Square both equations: $x^2 + y^2 = 16(\\cos^2(3t) + \\sin^2(3t)) = 16$, representing a circle of radius 4 centered at the origin.`
                    };
                }
            },
            {
                id: "4.3",
                title: "4.3 Parametric Functions and Rates of Change",
                generator: () => {
                    return {
                        question: `For the parametric curve $x(t) = t^3 - 3t$ and $y(t) = t^2 - 2t$, find the slope of the tangent line $\\frac{dy}{dx}$ at $t = 2$.`,
                        answer: `Compute derivatives: $\\frac{dx}{dt} = 3t^2 - 3$ and $\\frac{dy}{dt} = 2t - 2$. At $t = 2$, $\\frac{dy}{dx} = \\frac{2(2)-2}{3(4)-3} = \\frac{2}{9}$.`
                    };
                }
            },
            {
                id: "4.4",
                title: "4.4 Parametrically Defined Circles and Lines",
                generator: () => {
                    return {
                        question: `Write a set of parametric equations for a circle centered at $(2, -3)$ with radius 5, using parameter $t \\in [0, 2\\pi)$.`,
                        answer: `Parametric form: $x(t) = 2 + 5\\cos(t)$ and $y(t) = -3 + 5\\sin(t)$.`
                    };
                }
            },
            {
                id: "4.5",
                title: "4.5 Implicitly Defined Functions",
                generator: () => {
                    return {
                        question: `Find the slope of the tangent line to the circle $x^2 + y^2 = 25$ at the point $(-3, 4)$ using implicit differentiation.`,
                        answer: `Differentiate implicitly: $2x + 2y \\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{x}{y}$. Evaluating at $(-3, 4)$ gives $-\\frac{-3}{4} = \\frac{3}{4}$.`
                    };
                }
            },
            {
                id: "4.6",
                title: "4.6 Conic Sections",
                generator: () => {
                    return {
                        question: `Determine the eccentricity, lengths of major/minor axes, and foci for the ellipse $\\frac{(x-2)^2}{25} + \\frac{(y+1)^2}{9} = 1$.`,
                        answer: `Semi-major axis $a = 5$, semi-minor axis $b = 3$. Focal distance $c = \\sqrt{25 - 9} = 4$. Eccentricity $e = \\frac{4}{5}$.`
                    };
                }
            },
            {
                id: "4.7",
                title: "4.7 Parametrization of Implicitly Defined Functions",
                generator: () => {
                    return {
                        question: `Construct a valid set of parametric equations $x(t)$ and $y(t)$ for the ellipse $\\frac{(x-1)^2}{16} + \\frac{(y+2)^2}{9} = 1$ for $t \\in [0, 2\\pi)$.`,
                        answer: `Using trigonometric substitution: $x(t) = 1 + 4\\cos(t)$ and $y(t) = -2 + 3\\sin(t)$.`
                    };
                }
            },
            {
                id: "4.8",
                title: "4.8 Vectors",
                generator: () => {
                    return {
                        question: `Given vectors $\\mathbf{u} = \\langle 3, -4 \\rangle$ and $\\mathbf{v} = \\langle 1, 2 \\rangle$, compute magnitude $\\|\\mathbf{u}\\|$, dot product $\\mathbf{u} \\cdot \\mathbf{v}$, and angle between them.`,
                        answer: `Magnitude $\\|\\mathbf{u}\\| = 5$. Dot product $\\mathbf{u} \\cdot \\mathbf{v} = 3(1) + (-4)(2) = -5$.`
                    };
                }
            },
            {
                id: "4.9",
                title: "4.9 Vector-Valued Functions",
                generator: () => {
                    return {
                        question: `Given the vector-valued function $\\mathbf{r}(t) = \\langle t^2 - 3t, 4\\sin(t) \\rangle$, compute the velocity vector $\\mathbf{v}(t)$ and speed at $t = 0$.`,
                        answer: `Velocity $\\mathbf{v}(t) = \\langle 2t - 3, 4\\cos(t) \\rangle$. At $t = 0$, $\\mathbf{v}(0) = \\langle -3, 4 \\rangle$. Speed is $\\|\\mathbf{v}(0)\\| = \\sqrt{(-3)^2 + 4^2} = 5$.`
                    };
                }
            },
            {
                id: "4.10",
                title: "4.10 Matrices",
                generator: () => {
                    return {
                        question: `Let $A = \\begin{pmatrix} 2 & -1 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 5 \\\\ -2 & 1 \\end{pmatrix}$. Compute the matrix product $AB$.`,
                        answer: `Matrix product row-by-column: $AB = \\begin{pmatrix} (2)(0)+(-1)(-2) & (2)(5)+(-1)(1) \\\\ (3)(0)+(4)(-2) & (3)(5)+(4)(1) \\end{pmatrix} = \\begin{pmatrix} 2 & 9 \\\\ -8 & 19 \\end{pmatrix}$.`
                    };
                }
            },
            {
                id: "4.11",
                title: "4.11 The Inverse and Determinant of a Matrix",
                generator: () => {
                    return {
                        question: `Find the determinant and inverse of the matrix $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$.`,
                        answer: `Determinant = $3(2) - 1(5) = 1$. Inverse $A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$.`
                    };
                }
            },
            {
                id: "4.12",
                title: "4.12 Linear Transformations and Matrices",
                generator: () => {
                    return {
                        question: `Find the $2 \\times 2$ standard matrix representation for a linear transformation that rotates points counterclockwise by $\\frac{\\pi}{2}$ radians about the origin.`,
                        answer: `Standard rotation matrix: $\\begin{pmatrix} \\cos(\\pi/2) & -\\sin(\\pi/2) \\\\ \\sin(\\pi/2) & \\cos(\\pi/2) \\end{pmatrix} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.`
                    };
                }
            },
            {
                id: "4.13",
                title: "4.13 Matrices as Functions",
                generator: () => {
                    return {
                        question: `Solve the matrix equation $M\\mathbf{x} = \\mathbf{b}$ where $M = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}$.`,
                        answer: `Use matrix inversion: $\\mathbf{x} = M^{-1}\\mathbf{b}$. Determinant of $M$ is 5, yielding solution vector $\\mathbf{x} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$.`
                    };
                }
            },
            {
                id: "4.14",
                title: "4.14 Matrices Modeling Contexts",
                generator: () => {
                    return {
                        question: `Set up a $2 \\times 2$ transition probability matrix for a Markov chain where state 1 has 0.8 retention and 0.2 transition, and state 2 has 0.4 retention and 0.6 transition.`,
                        answer: `Transition matrix $P = \\begin{pmatrix} 0.8 & 0.6 \\\\ 0.2 & 0.4 \\end{pmatrix}$. Steady state vector satisfies $P\\mathbf{v} = \\mathbf{v}$.`
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
