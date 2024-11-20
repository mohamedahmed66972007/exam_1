const questions = [
    // أسئلة المصطلحات
    { question: "حركة الجسم على مسار دائري حول مركز دوران، مع المحافظة على مسافة ثابتة منه", answer: "الحركة الدائرية", type: "text" },
    { question: "طول القوس المقطوع خلال وحدة الزمن", answer: "السرعة الخطية", type: "text" },
    { question: "مقدار الزاوية التي يمسحها نصف القطر في وحدة الزمن", answer: "السرعة الزاوية", type: "text" },
    { question: "تغير السرعة الزاوية خلال الزمن", answer: "العجلة الزاوية", type: "text" },
    { question: "الزمن الذي يستغرقه الجسم ليدور دورة كاملة على محيط دائرة الحركة", answer: "الزمن الدوري", type: "text" },
    { question: "تغير السرعة المتجهة بالنسبة للزمن", answer: "العجلة الخطية", type: "text" },
    { question: "تغير السرعة الزاوية خلال الزمن", answer: "العجلة الزاوية", type: "text" },
    { question: "الأجسام التي تُطلق أو تُقذف في الهواء وتتعرض لقوة الجاذبية الأرضية", answer: "القذيفة", type: "text" },
    { question: "علاقة بين المركبة الأفقية ومركبة الحركة الرأسية خالية من متغير الزمن", answer: "معادلة المسار", type: "text" },
    { question: "المسافة الأفقية التي تقطعها القذيفة بين نقطة الانطلاق ونقطة الوصول على الخط الأفقي المار بنقطة الإطلاق", answer: "المدى الأفقي", type: "text" },
          
// أسئلة صح وخطأ
    { question: "مركبة حركة القذيفة في الاتجاه الأفقي تكون منتظمة السرعة (عند إهمال الاحتكاك)", answer: "صح", type: "trueFalse" },
    { question: "إذا كانت زاوية الإطلاق لقذيفة بالنسبة إلى المحور الأفقي تساوي (90°) فإن شكل المسار يكون نصف قطع مكافئ", answer: "خطأ", type: "trueFalse" },
    { question: "عند غياب تأثير الهواء على حركة القذيفة لا يتغير شكل مسارها ومقدار المدى الأفقي", answer: "صح", type: "trueFalse" },
    { question: "عند إطلاق قذيفة بزاوية تساوي صفر فإن ذلك يعني أن سرعتها الأفقية الابتدائية فقط أفقية", answer: "صح", type: "trueFalse" },
    { question: "قذف جسم إلى أعلى بزاوية مقدارها (30°)، فإذا كانت مركبة سرعته في الاتجاه الأفقي تساوي (8√3 م/ث) فإن السرعة التي قذف بها تساوي (16 م/ث)", answer: "صح", type: "trueFalse" },
    { question: "يتغير شكل مسار القذيفة وتتباطأ سرعتها نتيجة الاحتكاك مع الهواء", answer: "صح", type: "trueFalse" },
    { question: "يتناقص مدى القذيفة ويصبح المسار قطعًا مكافئًا غير حقيقي عند إهمال مقاومة الهواء", answer: "خطأ", type: "trueFalse" },
    { question: "إذا قذف جسم بسرعة ابتدائية مقدارها (20 م/ث) في اتجاه يصنع مع الأفق زاوية مقدارها (30°) فإن مركبة سرعته الابتدائية في الاتجاه الرأسي تساوي (14 م/ث)", answer: "خطأ", type: "trueFalse" },
    { question: "عند إطلاق عدة قذائف بالسرعة نفسها ومن نفس نقطة القذف، وبإهمال مقاومة الهواء فإن كل قذيفتين يصلان للمدى نفسه عند إطلاقهما بزاويتين مجموعهما (90°)", answer: "صح", type: "trueFalse" },
    { question: "المركبة الرأسية للسرعة التي يقذف بها الجسم المقذوف بزاوية مع الأفق هي التي تحدد الارتفاع الرأسي وزمن التحليق", answer: "صح", type: "trueFalse" },
    { question: "يكون اتجاه المركبة الرأسية لسرعة مقذوف بعد مروره بالنقطة التي تمثل أقصى ارتفاع إلى أسفل", answer: "صح", type: "trueFalse" },
    { question: "مركبتا الحركة الأفقية للقذيفة والحركة الرأسية مترابطتين", answer: "خطأ", type: "trueFalse" },
    { question: "أثناء دوران أسطوانة التسجيل الموضحة بالشكل المقابل حول المحور الرأسي، تكون السرعة الخطية للعلبتين الموضوعتين على سطحها متساويتين.", answer: "خطأ", type: "trueFalse" },
    { question: "أثناء دوران أسطوانة التسجيل الموضحة بالشكل المقابل حول المحور الرأسي، تكون السرعة الزاوية للعلبتين الموضوعتين على سطحها متساويتين.", answer: "صح", type: "trueFalse" },
    { question: "تنعدم السرعة الخطية (المماسية) عند مركز المسطح الدائري والعمودي مع محوره، ولا تتلاشى السرعة الزاوية.", answer: "صح", type: "trueFalse" },
    { question: "يتحرك جسم على مسار دائري منتظم نصف قطره (20 سم)، فإذا كان زمنه الدوري يساوي (2 ثانية)، فإن سرعته الخطية تساوي بوحدة (متر/ثانية) (0.4).", answer: "خطأ", type: "trueFalse" },
    { question: "يتحرك جسم حركة دائرية منتظمة بحيث يعمل دورة واحدة كل ثانية فإن سرعته الزاوية (2π راديان/ثانية) تساوي.", answer: "صح", type: "trueFalse" },
    { question: "الجسم المتحرك على مسار دائري حركة دائرية منتظمة تكون حركته بعجلة ثابتة المقدار وفي اتجاه مركز الحركة دائمًا.", answer: "صح", type: "trueFalse" },
    { question: "الجسم المتحرك على مسار دائري حركة دائرية منتظمة تكون عجلته المماسية تساوي صفرًا مع مربع سرعته المماسية.", answer: "صح", type: "trueFalse" },
    { question: "العجلة المركزية لجسم يتحرك على مسار دائري ثابت نصف القطر تتناسب طرديًا مع مربع سرعته المماسية.", answer: "صح", type: "trueFalse" },
    { question: "الجسم المتحرك على مسار دائري حركة دائرية منتظمة تكون عجلته الزاوية تساوي صفرًا مع تردده.", answer: "صح", type: "trueFalse" },
    { question: "مركبة حركة القذيفة في الاتجاه الأفقي تكون منتظمة السرعة (عند إهمال الاحتكاك)", answer: "صح", type: "trueFalse" },
    { question: "إذا كانت زاوية الإطلاق لقذيفة بالنسبة إلى المحور الأفقي تساوي (90°) فإن شكل المسار يكون نصف قطع مكافئ", answer: "خطأ", type: "trueFalse" },

    // أسئلة الاختيارات
    { question: "1. قذف حجر من ارتفاع (80 m) عن سطح الأرض بسرعة أفقية، وكانت إزاحة الجسم الأفقية تساوي (40 m)، فإن مقدار السرعة الأفقية بوحدة m/s تساوي: ", options: ["40", "20", "10", "5"], answer: "10", type: "choice" },
    { question: "2. يكون شكل مسار قذيفة أطلقت بزاوية مع المحور الأفقي على شكل مسار نصف قطع مكافئ عندما تكون الزاوية بالدرجات مساوية", options: ["90", "60", "45", "0"], answer: "0", type: "choice" },
    { question: "3. أطلقت قذيفة بزاوية (30°) مع المحور الأفقي وبسرعة ابتدائية 40m/s، فإن الزمن الذي تستغرقه القذيفة للوصول إلى أقصى ارتفاع بوحدة الثانية يساوي", options: ["4", "3.46", "1.732", "2"], answer: "2", type: "choice" },
    { question: "4. في السؤال السابق، يكون أقصى ارتفاع تصل إليه القذيفة بوحدة m يساوي", options: ["40", "20", "10", "5"], answer: "20", type: "choice" },
    { question: "5. في السؤال السابق، يكون المدى الأفقي الذي تبلغه القذيفة عند اصطدامها بالأرض عند نقطة تقع على الخط المار بنقطة القذف بوحدة m يساوي", options: ["346.41", "138.56", "160", "80"], answer: "138.56", type: "choice" },
    { question: "6. أطلقت قذيفتان بسرعة ابتدائية متساوية من نفس النقطة، الأولى بزاوية (30°) والثانية بزاوية (60°)، فتكون المركبة الرأسية لسرعة القذيفة الأولى", options: ["مساوية للمركبة الرأسية لسرعة القذيفة الثانية.", "مثلي المركبة الرأسية لسرعة القذيفة الثانية.", "أكبر من المركبة الرأسية لسرعة القذيفة الثانية.", "أصغر من المركبة الرأسية لسرعة القذيفة الثانية."], answer: "أصغر من المركبة الرأسية لسرعة القذيفة الثانية.", type: "choice" },
    { question: "7. أطلقت قذيفتان بسرعة ابتدائية متساوية، الأولى بزاوية (60°) والثانية بزاوية (30°)، فتكون المركبة الأفقية لسرعة القذيفة الأولى", options: ["مساوية للمركبة الأفقية لسرعة القذيفة الثانية.", "مثلي المركبة الأفقية لسرعة القذيفة الثانية.", "أكبر من المركبة الأفقية لسرعة القذيفة الثانية.", "أصغر من المركبة الأفقية لسرعة القذيفة الثانية."], answer: "أكبر من المركبة الأفقية لسرعة القذيفة الثانية.", type: "choice" },
    { question: "8. للحصول على أكبر مدى أفقي ممكن لقذيفة تطلق من مدفع، يجب أن تكون زاوية القذف مع المحور الأفقي مساوية بالدرجات", options: ["0", "60", "45", "30"], answer: "45", type: "choice" },
    { question: "9. أطلقت قذيفة بزاوية 45° مع المحور الأفقي وبسرعة ابتدائية مقدارها 2√20 m/s، فإن مقدار سرعة القذيفة لحظة اصطدامها بسطح الأرض بوحدة m/s تساوي", options: ["56.56", "28.28", "20", "14.14"], answer: "28.28", type: "choice" },
    { question: "10. أطلقت قذيفتان كتلتهما m و 2m بنفس السرعة الابتدائية وبزاوية θ، فيكون الارتفاع الرأسي الذي تبلغه القذيفة 2m", options: ["مساوياً للارتفاع الرأسي الذي تبلغه القذيفة m.", "ربع الارتفاع الرأسي الذي تبلغه القذيفة m.", "نصف الارتفاع الرأسي الذي تبلغه القذيفة m.", "مثلي الارتفاع الرأسي الذي تبلغه القذيفة m."], answer: "مساوياً للارتفاع الرأسي الذي تبلغه القذيفة m.", type: "choice" },
    { question: "11. أطلقت قذيفتان بنفس السرعة الابتدائية، وبزاويتي إطلاق مختلفتين: الأولى بزاوية 30° والثانية بزاوية 60°، فإن المدى الأفقي للقذيفتين", options: ["مساوياً للمدى الأفقي للقذيفة 2m", "نصف المدى الأفقي للقذيفة الأولى", "أربعة أمثال المدى الأفقي للقذيفة الثانية", "مثلي المدى الأفقي للقذيفة الأولى"], answer: "مساوياً للمدى الأفقي للقذيفة m.", type: "choice" },
    { question: "12. كرتان قذفت إحداهما أفقياً والأخرى أسقطت رأسياً في نفس الوقت. بإهمال مقاومة الهواء، فإن", options: ["الكرتين تصلان إلى سطح الأرض في نفس اللحظة.", "الكرة التي تقذف أفقياً تصل أولاً.", "الكرة التي أسقطت رأسياً تصل أولاً.", "الكرة التي تقذف أفقياً تستغرق نصف زمن الكرة التي أسقطت رأسياً"], answer: "الكرتين تصلان إلى سطح الأرض في نفس اللحظة.", type: "choice" },
    { question: "13. قذفت كرة بزاوية 45° مع المحور الأفقي، وكانت مركبة سرعتها الأفقية 20 فتكون قيمة هذه السرعة على ارتفاع  2m/s بوحدة m/s", options: ["صفر", "10", "40", "20"], answer: "20", type: "choice" },
    { question: "14. إذا دار جسم على مسار دائري، ومسح نصف قطره زاوية مقدارها 30°، فإن مقدار هذه الزاوية بالرديان يساوي", options: ["8/π", "6/π", "4/π", "2/π"], answer: "6/π", type: "choice" },
    { question: "15. نعيش على أحد كواكب المجموعة الشمسية وهو كوكب الأرض، وهو في حركة دائمة ينتج عنها كثير من الظواهر الطبيعية مثل ظاهرة تعاقب الليل والنهار التي تسببها حركة الأرض:", options: ["خطية", "اهتزازية", "مدارية", "مغزلية"], answer: "مغزلية", type: "choice" },
    { question: "16. إذا كان طول القوس 2.093 m، لجسم يتحرك حركة دائرية نصف قطر مساره 1 m، فإن الإزاحة الزاوية بوحدة الرديان تساوي:", options: ["4/π", "2π/3", "4/3π", "2/π"], answer: "2π/3", type: "choice" },
    { question: "17. يدور (اللاعب تزلج) على الجليد في مسار دائري نصف قطره 10 m وبسرعة زاوية مقدارها 0.6 s/rad، فإن سرعته المماسية بوحدة s/m تساوي:", options: ["16.6", "6", "0.6", "0.06"], answer: "6", type: "choice" },
    { question: "18. في الحركة الدائرية المنتظمة تكون السرعة المماسية للجسم:", options: ["ثابتة المقدار واتجاه", "ثابتة المقدار ومتغيرة الاتجاه", "متغيرة المقدار واتجاه", "متغيرة المقدار وثابتة الاتجاه"], answer: "ثابتة المقدار ومتغيرة الاتجاه", type: "choice" },
    { question: "19. حجر مربوط في طرف خيط طوله 0.5 m ويدور في مستوى أفقي بحركة دائرية منتظمة محدثا خلال 5 ثواني، فإن السرعة الزاوية للحجر بوحدة s/rad تساوي:", options: ["314", "31.4", "3.14", "0.314"], answer: "31.4", type: "choice" },
    { question: "20. يتحرك جسم (حركة دائرية منتظمة) في مسار دائري منتظم نصف قطره 100 cm بحيث كان زمنه الدوري يساوي 2 s، فإن سرعته الخطية بوحدة s/m وبدلالة π تساوي:", options: ["10π", "2π", "π", "0.5π"], answer: "π", type: "choice" },
    { question: "21. عندما تدور مروحة بسرعة زاوية مقدارها Rad/s (60π) ، فإن زمنها الدوري بالثانية يساوي:", options: ["30", "1/60", "1/30", "1/20"], answer: "1/30", type: "choice" },
    { question: "22. يتحرك جسم على محيط دائرة نصف قطرها  (1m) بسرعة مماسية قدرها (2m/s)، فإن عجلته المركزية بوحدة m/s² تساوي:", options: ["2", "3/2", "6", "4"], answer: "4", type: "choice" },
    { question: "23. ربط حجر في خيط طوله (0.4m) وأدار في وضع أفقي فكان زمنه الدوري(0.2s) ، فإن عجلته المركزية بوحدة m/s² تساوي:", options: ["40π²", "40π", "20π", "20π²"], answer: "40π²", type: "choice" }
]





let startTime;



document.getElementById('start-test-btn').addEventListener('click', () => {
    document.getElementById('start-section').style.display = 'none';
    document.getElementById('quiz-form').style.display = 'block';
    startTime = new Date();
    loadQuestions();
});

document.getElementById('submit-btn').addEventListener('click', () => {
    const form = document.getElementById('quiz-form');
    let score = 0;
    let unanswered = 0;

    questions.forEach((q, index) => {
        const questionDiv = document.getElementById(`question-${index}`);
        const answerElements = form.querySelectorAll(`[name="question-${index}"]`);
        let userAnswer;

        // إعادة تعيين التأثيرات السابقة
        answerElements.forEach(input => {
            input.classList.remove('correct', 'wrong');
        });

        if (q.type === 'text') {
            userAnswer = answerElements[0]?.value.trim();
            if (userAnswer === "") {
                unanswered++;
                const unansweredText = document.createElement('p');
                unansweredText.textContent = 'غير محلول';
                unansweredText.style.color = 'red';
                questionDiv.appendChild(unansweredText);
            } else {
                const normalizedUserAnswer = userAnswer.replace(/أ/g, 'ا').replace(/ة/g, 'ه');
                const normalizedCorrectAnswer = q.answer.replace(/أ/g, 'ا').replace(/ة/g, 'ه');

                if (normalizedUserAnswer.toLowerCase() === normalizedCorrectAnswer.toLowerCase()) {
                    score++;
                    const inputField = answerElements[0];
                    inputField.classList.add('correct');
                    const correctText = document.createElement('p');
                    correctText.textContent = 'إجابة صحيحة';
                    correctText.style.color = 'green';
                    questionDiv.appendChild(correctText);
                } else {
                    const inputField = answerElements[0];
                    inputField.classList.add('wrong');
                    const wrongText = document.createElement('p');
                    wrongText.textContent = 'إجابة خاطئة';
                    wrongText.style.color = 'red'; // اللون الأحمر
                    questionDiv.appendChild(wrongText);
                    const correctAnswerText = document.createElement('p');
                    correctAnswerText.className = 'correct-answer';
                    correctAnswerText.textContent = `الإجابة الصحيحة: ${q.answer}`;
                    correctAnswerText.style.color = 'red'; // اللون الأحمر
                    questionDiv.appendChild(correctAnswerText);
                }
            }
        } else {
            userAnswer = Array.from(answerElements).find(el => el.checked)?.value;
            if (!userAnswer) {
                unanswered++;
                const unansweredText = document.createElement('p');
                unansweredText.textContent = 'غير محلول';
                unansweredText.style.color = 'red';
                questionDiv.appendChild(unansweredText);
            } else {
                if (userAnswer === q.answer) {
                    score++;
                    const correctOption = Array.from(answerElements).find(el => el.value === userAnswer);
                    correctOption.classList.add('correct');
                    const correctText = document.createElement('p');
                    correctText.textContent = 'إجابة صحيحة';
                    correctText.style.color = 'green';
                    questionDiv.appendChild(correctText);
                } else {
                    const wrongOption = Array.from(answerElements).find(el => el.value === userAnswer);
                    wrongOption.classList.add('wrong');
                    const wrongText = document.createElement('p');
                    wrongText.textContent = 'إجابة خاطئة';
                    wrongText.style.color = 'red'; // اللون الأحمر
                    questionDiv.appendChild(wrongText);
                    const correctAnswerText = document.createElement('p');
                    correctAnswerText.className = 'correct-answer';
                    correctAnswerText.textContent = `الإجابة الصحيحة: ${q.answer}`;
                    correctAnswerText.style.color = 'green'; // اللون الأحمر
                    questionDiv.appendChild(correctAnswerText);
                }
            }
        }
    });

    // عرض النتائج
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('result-score').textContent = `عدد الإجابات الصحيحة: ${score}/${questions.length}`;
    
    // حساب الوقت المستغرق
    const endTime = new Date();
    const timeTakenInSeconds = Math.floor((endTime - startTime) / 1000); // الوقت بالثواني
    const minutes = Math.floor(timeTakenInSeconds / 60);
    const seconds = timeTakenInSeconds % 60;
    document.getElementById('result-time').textContent = `الوقت المستغرق: ${minutes} دقيقة و ${seconds} ثانية`;
    
    // تعطيل الإدخالات
    form.querySelectorAll('input').forEach(input => input.disabled = true);
});


// إعادة تعيين الحقول عند إعادة المحاولة
document.getElementById('retry-btn').addEventListener('click', () => {
    location.reload(); // إعادة تحميل الصفحة
});


function loadQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = ''; // تنظيف المحتوى الحالي قبل التحميل

    // نص التعليمات للمصطلحات
    const termInstruction = document.createElement('p');
    termInstruction.className = 'instruction';
    termInstruction.textContent = 'اكتب المصطلح العلمي فيما يلي';
    container.appendChild(termInstruction);

    let hasChoiceQuestions = false;
    let hasTrueFalseQuestions = false;

    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.id = `question-${index}`;
        div.className = 'question';

        // إضافة السؤال
        div.innerHTML = `<p class="question-text">${q.question}</p>`;

        // إنشاء حاوية للإجابة
        const inputContainer = document.createElement('div');
        inputContainer.className = 'input-container';

        if (q.type === 'choice') {
            // إذا كان هناك سؤال اختيار، نحدد المتغير ليظهر التعليمات مرة واحدة فقط
            if (!hasChoiceQuestions) {
                const choiceInstruction = document.createElement('p');
                choiceInstruction.className = 'instruction';
                choiceInstruction.textContent = 'اختار الإجابة الصحيحة فيما يلي';
                container.appendChild(choiceInstruction);
                hasChoiceQuestions = true; // تعيين المتغير إلى true بعد إضافة التعليمات
            }

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';
            q.options.forEach(option => {
                optionsDiv.innerHTML += `
                    <label class="answer-option">
                        <input type="radio" name="question-${index}" value="${option}">${option}
                    </label>
                `;
            });
            inputContainer.appendChild(optionsDiv);
        } else if (q.type === 'trueFalse') {
            // إذا كان هناك سؤال صح وخطأ، نحدد المتغير ليظهر التعليمات مرة واحدة فقط
            if (!hasTrueFalseQuestions) {
                const trueFalseInstruction = document.createElement('p');
                trueFalseInstruction.className = 'instruction';
                trueFalseInstruction.textContent = 'اختار الإجابة الصحيحة فيما يلي';
                container.appendChild(trueFalseInstruction);
                hasTrueFalseQuestions = true; // تعيين المتغير إلى true بعد إضافة التعليمات
            }

            const trueFalseDiv = document.createElement('div');
            trueFalseDiv.className = 'trueFalse';
            trueFalseDiv.innerHTML = `
                <label class="answer-option">
                    <input type="radio" name="question-${index}" value="صح"> صح
                </label>
                <label class="answer-option">
                    <input type="radio" name="question-${index}" value="خطأ"> خطأ
                </label>
            `;
            inputContainer.appendChild(trueFalseDiv);
        } else if (q.type === 'text') {
            inputContainer.innerHTML += `<input type="text" name="question-${index}" class="small-input" placeholder="" autocomplete="off">`;
        }

        div.appendChild(inputContainer);
        container.appendChild(div);
    });
}

document.getElementById('retry-btn').addEventListener('click', () => {
    location.reload();
});

// إعادة تعيين الأجوبة عند إعادة تحميل الصفحة
window.onload = function () {
    loadQuestions();
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => (radio.checked = false));
    const textInputs = document.querySelectorAll('input[type="text"]');
    textInputs.forEach(input => (input.value = '')); // مسح جميع الحقول النصية
};
