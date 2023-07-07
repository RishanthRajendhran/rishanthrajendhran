import './App.css';
import React, {Component} from "react";
import Welcome from "./Welcome.js";
import Main from "./Main.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "Rishanth Rajendhran",
      authorInTamil: "ரிஷாந்த் ராஜேந்திரன்",
      curLoc: "Salt Lake City, USA",
      hometown: "Chennai, Tamil Nadu, India",
      email: "rishanthrajendhran@outlook.com",
      linkedin: "https://www.linkedin.com/in/rishanth-rajendhran-11b436191/",
      github: "https://github.com/RishanthRajendhran",
      eduHistory: [
        {
          "name": "University of Utah",
          "program": "MSCS",
          "start": "2022",
          "end": "present"
        },
        {
          "name": "IIT Madras",
          "program": "BTech in CSE",
          "start": "2018",
          "end": "2022"
        },
      ],
      experience: [
        {
          title: "Research Assistant",
          desc: "LLMs for explanation generation",
          org: "UtahNLP, University of Utah",
          supervisor: "Prof. Ana Marasovic",
          start: "May 23",
          end: "Present",
        },
        {
          title: "Teaching Assistant",
          desc: "Database Systems",
          org: "University of Utah",
          supervisor: "Prof. Daniel Kopta",
          start: "Jan 23",
          end: "May 23",
        },
        {
          title: "Student Researcher",
          desc: "Evaluating consistency of large-scale finetuned models",
          org: "University of Utah",
          supervisor: "Prof. Ana Marasovic",
          start: "Nov 22",
          end: "May 23",
        },
        {
          title: "Teaching Assistant",
          desc: "Natural Language Processing",
          org: "University of Utah",
          supervisor: "Prof. Ellen Riloff",
          start: "Aug 22",
          end: "Dec 22",
        },
        {
          title: "Student Researcher",
          desc: "Unconstrained ML models",
          org: "SENAI, IIT Madras",
          supervisor: "Prof. Ragupathy Rengaswamy",
          start: "Jul 21",
          end: "Feb 22",
        },
        {
          title: "Instructor",
          desc: "App Development Workshop",
          org: "Shaastra, IIT Madras Tech Fest",
          supervisor: "",
          start: "Jan 22",
          end: "Jan 22",
        },
        {
          title: "Web Developer",
          desc: "",
          org: "TechLary",
          supervisor: "",
          start: "Jun 21",
          end: "Jul 21",
        },
        {
          title: "Attendee",
          desc: "ML Summer School",
          org: "Amazon",
          supervisor: "",
          start: "Jul 21",
          end: "Jul 21",
        },
        {
          title: "Attendee",
          desc: "Deep Learning Workshop",
          org: "NVIDIA",
          supervisor: "",
          start: "Jul 21",
          end: "Jul 21",
        },
        {
          title: "Web Developer",
          desc: "",
          org: "EduVisory",
          supervisor: "Dr. Ravi Dadsena",
          start: "Jun 20",
          end: "Jan 21",
        },
        {
          title: "App Developer",
          desc: "Product Design Club",
          org: "Centre For Innovation, IIT Madras",
          supervisor: "",
          start: "Jul 20",
          end: "Dec 20",
        },
        {
          title: "Coordinator",
          desc: "Institute WebOps Team",
          org: "IIT Madras",
          supervisor: "",
          start: "Jul 20",
          end: "Feb 21",
        }
      ],
      githubRepos: [
        {
          title: "Relation Extraction",
          desc: "Relation extraction using distant supervision",
          link: "https://github.com/RishanthRajendhran/relationExtraction",
        },
        {
          title: "visualQA",
          desc: "Visual Question Answering",
          link: "https://github.com/RishanthRajendhran/visualQA",
        },
        {
          title: "STaRC",
          desc: "Self Taught Reasoner with Certainty",
          link: "https://github.com/RishanthRajendhran/STaRC",
        },
        {
          title: "ZARAC",
          desc: "Zero-shot Augmented Rationale Answer pairs with Certainty",
          link: "https://github.com/RishanthRajendhran/ZARAC",
        },
        {
          title: "FLANT5",
          desc: "Evaluation of consistency and self-consistency of large-scale finetuned models",
          link: "https://github.com/RishanthRajendhran/flant5",
        },
        {
          title: "EigenGame",
          desc: "This is an implementation of the EigenGame proposed in the paper 'EigenGame: PCA as a Nash Equilibrium' by Gemp et. al..",
          link: "https://github.com/RishanthRajendhran/EigenGame",
        },
        {
          title: "CS6350",
          desc: "Lightweight Machine Learning Library developed for CS6350 at UofU",
          link: "https://github.com/RishanthRajendhran/CS6350",
        },
        {
          title: "InfoRetrievalSystem",
          desc: "Lightweight information retrieval system developed for CS6370 at IITM",
          link: "https://github.com/RishanthRajendhran/InformationRetrievalSystem",
        },
        {
          title: "TransliterationUsingRNNs",
          desc: "Transliteration from Tamil to English using RNNs",
          link: "https://github.com/RishanthRajendhran/transliterationUsingRNNs",
        },
        {
          title: "ImageClassifcationUsingCNNs",
          desc: "Image classification using CNNs",
          link: "https://github.com/RishanthRajendhran/imageClassificationUsingCNNs",
        },
        {
          title: "CPP",
          desc: "Solutions to several DSA questions in C++",
          link: "https://github.com/RishanthRajendhran/cpp",
        }
      ],
      credo: "Nothing worth having comes easy ",
      credoInTamil: " நல்லதே நடக்கட்டும்",
      description: "I am a Computer Science graduate from IIT Madras, currently pursuing a master’s at The University of Utah. I am interested primarily in Natural Language Processing applications such as question answering, event extraction and grammar correction and broadly interested in machine learning and deep learning. Over the years, I have coded in several programming languages such as C++, Python, Javascript and have used several frameworks and tools such as PyTorch, Pandas, Numpy, Tensorflow, React Native, Express and WandB, to name a few.",
      researchInterests: [
        {
          title: "Robustness of large-scale language models",
          desc: "Few-shot in-context learning helps to directly use a pretrained LLM for some application such as question answering without fine-tuning. While LLMs perform reasonably well in this setting, they are not robust to perturbations. Contrastive evaluation of LLMs would help understand how well models understand constructs such as negation in text."
        },
        {
          title: "Expressing uncertainty during explanation generation",
          desc: "With the advent of ChatGPT, language models have become the talk of the town not just in academic cirlces but also among general public. A lot of work in the recent past, such as the work in common-sense reasoning, view language models as a large repository of human world knowledge. Sooner or later LLMs would be in employed across domains. One such application would be its use in the clinical setting: a chatbot app that converses with a patient, comes up with a prognosis and suggests possible treatment plans. Such an application could also be used by heaalthcare professionals to hasten healthcare delivery given the ever-growing demand. However, the application of LLMs to such domains should be done cautiously as these models are known to hallucinate. The explantions generated by these models could be false but highly credible after aa cursory glance. It is therefore important that the model also conveys the epistemic confidennce it has over claims it makes. Some work focusses on leveraging the underlying probabilities to infer model confidence but Lin et al. argue that such an approach is inherently flawed: token probabilities only reflect how likely one token is to appear given the context; it does not represent veracity of what is being said. For example, the sentence: 'When pigs fly' would probably have a low perpllexity but that does not mean that pigs fly! Given the safety-critical nature of the clinical domain, it is important that the model only conveys things it is confident about and state explicitly when it is unsure of something it says."
        }
      ],
      paperTakeaways: [
        {
          title: "Large Language Models Encode Clinical Knowledge",
          authors: "Singhal et al.",
          link: "https://arxiv.org/pdf/2212.13138.pdf",
          desc: [
            {
              "heading": "Key Contributions",
              "content": [
                "MultiMedQA",
                "Instruction prompt-tuned version of Flan-PALM - MedPALM, achieves SoT performance in MultiMedQA tasks",
              ],
            },
            {
              "heading": "Why is this important?",
              "content": [
                "Biomedicine is a safety-critical domain",
              ],
            },
            {
              "heading": "What's missing in previous approaches using LMs",
              "content": [
                "Not very expressive/interactive",
                "Does not adapt to different tasks",
              ],
            },
            {
              "heading": "Risks",
              "content": [
                "LLMs may produce generations which are misaligned with clinical and societal values",
                "Hallucination",
                "Convincing misinformation and bias",
              ],
            },
            {
              "heading": "Goals",
              "content": [
                "A system than can comprehend medical texts, recall appropriate medical knowledge and reason with obtained information",
              ],
            },
            {
              "heading": "Motivations",
              "content": [
                "Flan-PALM struggles with consumer medical search queries, domain-agnostic instruction fine-tuning not sufficient",
              ],
            },
            {
              "heading": "Prior Work",
              "content": [
                "Galactica by Taylor et al., an LLM for science",
                "Lievin et al. used CoT prompting to improve performance of GPT-3 in medical question answering",
              ],
            },
            {
              "heading": "Problems with some existing datasets",
              "content": [
                "Explanations to answers in datasets too concise as they were not written with the objective of being as explicit as possible",
                "Want LLM to fully lay-out the inference paths it took",
                "Cannot directly do a BLEU-style evaluation",
                "Obtained standardized responses from a group of three clinicians",
              ],
            },
            {
              "heading": "Discussion",
              "content": [
                "The following results were w.r.t. Flan-PaLM and not Med-PaLM",
                "Authors claim they couldn’t complete their investigations with Med-PaLM using CoT and SC",
                "Transfer learning and domain adaptation would require fine-tuning with large amounts of data",
                "Scarcity of high-quality medical data poses a problem",
                "Prompting introduced by Brown et al.",
                "CoT introduced by Wei et al.",
                "Self-consistency introduced by Wang et al.",
                "Prompt tuning introduced by Lester et al.",
                "Prompt tuning involved learning “soft” prompt vectors through backpropagation while keeping the rest of the LLM frozen",
                "Related approach: Prefix-tuning",
              ],
            },
            {
              "heading": "Instruction Prompt Tuning",
              "content": [
                "Prompt tuning: prompt has its own set of parameters (unlike in GPT3 where the prompt token were parameterized by the model parameters); Prompt tokens are prefixed to the input and the concatenated representation is fed to the architecture as usual but only the prompt parameters are updated during backpropagation.",
                "One difference between prompt design and prompt tuning is that prompt design involves finding prompt tokens from a fixed vocabulary with fixed embeddings, prompt tuning involves having a fixed prompt of some special tokens where only the embeddings of these tokens can be updated.",
                "Instead of using soft-prompts as a proxy for human-engineered prompts, soft prompts prepended to the human-engineering prompts (which could be task-specific instructions or few-shot exemplars)",
                "A type of hard-soft hybrid prompt tuning",
              ],
            },
            {
              "heading": "Axes of Evaluation",
              "content": [
                "Scientific consensus",
                "Extent of possible harm",
                "Likelihood of possible harm",
                "Evidence of correct comprehension", 
                "Evidence of correct retrieval",
                "Evidence of correct reasoning",
                "Evidence of incorrect comprehension", 
                "Evidence of incorrect retrieval", 
                "Evidence of incorrect reasoning",
                "Inappropriate/incorrect content",
                "Missing content",
                "Possibility of bias",
              ],
            },
            {
              "heading": "Results",
              "content": [
                  "Instruction fine-tuning helps considerably (Flan-PALM does better than PALM at same scale)",
                  "Scaling improves performance; strong performance on medical question answering an emergent ability of language models",
                  "However, scale alone is insufficient as even the largest PaLM model does not does not do as well as the fine-tuned variant",
                  "Mixed results with CoT: led to no improvement, sometimes hurt performance",
                  "Mixed results with Self-consistency: Improvement over few shot in some cases, hurt performance in some other cases (read datasets)",
                  "Results with SC largely consistent with the claim by Wang et al.: Self consistency helps where CoT hurts performance",
                  "Instruction prompt-tuning hurts when base model generates incorrect information and helps in cases where the base model omits important information",
                  "This could be because instruction prompt tuning encourages the model to produce longer and more detailed explanations than the base model",
              ],
            },
            {
              "heading": "Expressing uncertainty",
              "content": [
                "Uncertain generations need to be withheld as domain is safety-critical",
                "Use number of decodes matching a given answer as a proxy for certainty",
                "Greater the deferring fraction, more confident the model is in its answers, higher the performance on questions it answers",
              ],
            },
            {
              "heading": "Potential caveat",
              "content": [
                "PaLM could have memorized its training data which included high quality medical content which would explain the better performance of the largest model (540B params)",
                "Chowdhery et al. suggests memorisation alone cannot explain the better performance",
              ],
            },
            {
              "heading": "Possible Improvements",
              "content": [
                "Continual learning of LLMs from an evolving corpus to combat outdated information retrieval", 
                "Exhaustive axes of evaluation that better reflects real world clinical workflows",
                "Multi-lingual datasets",
                "Datasets inherently simpler than real-world situations: multiple-choice questions mostly have a widely accepted answer, real-world  situations may have more than one accepted approach (no single best approach)",
              ],
            },              
          ],
        },
        {
          title: "Teaching models to express their uncertainty in words",
          authors: "Lin et al.",
          link: "https://arxiv.org/pdf/2205.14334.pdf",
          desc: [
            {
              "heading": "Key Contributions",
              "content": [
                "Finetune GPT3 models to express epistemic uncertainty over claims in natural language",
                "CalibratedMath, a test suite of arithmetic tasks for calibration",
              ],
            },
            {
              "heading": "Need for calibration of large-scale language models",
              "content": [
                "LLMs are prone to generating misinformation and hallucinations ",
                "Calibrated uncertainty conveyed by models can be an indicate of their truthfulness; particularly useful when there is no ground truth (eg. weather forecasting)",
                "If a model predicts an event with p*100% confidence and it turns out that the empirical probability of that event is p, then we can say that the model is well calibrated. (Think of this in-terms of the confidence score being calibrated i.e. if the model says that it is 30% (say) confident about the answer to a particular type of question. If we randomly select some 100 questions of that question type and manually check the answers predicted by the model only to find that the model’s accuracy on that question type is 30%, then we can say that the model is well calibrated.)",
                "Why not use logits to measure uncertainty?",
                "Logits represent uncertainty over tokens and not the epistemic uncertainty over the claims made by stringing together those tokens.",
              ],
            },
            {
              "heading": "Three kinds of probabilities for calibration",
              "content": [
                "Verbalized probabilities: express uncertainty using natural language (eg. low, medium, 72%, 41% etc); can be used for any model that outputs natural language text (and not just oneness that output logits as is the case with answer and indirect logits)",
                "Answer logit: normalized log-probability of the answer token serves as the confidence score ",
                "Indirect logit: Append True/False to the models token based on the log-probabilities of True and False tokens when appended to the model’s output (Here the log-probability of the True token would be the confidence score)",
              ],
            },
            {
              "heading": "CalibratedMath",
              "content": [
                "Train on Add-subtract and evaluate on Multi-answer or Multiply-divide",
                "Models such as GPT3 struggle with multiply-divide, especially when numbers are large",
                "Multi-answer should be simpler than add-subtract as there are many correct answers ",
                "These shifts in task difficulties between train and evaluation sets would help observe if calibration generalizes under distribution shifts",
              ],
            },{
              "heading": "Metrics",
              "content": [
                "Mean Squared Error (MSE)",
                "Mean Absolute Deviation Calibration Error (MAD)",
                "other reinforcement learning metrics (not discussed in this paper)",
              ],
            },{
              "heading": "Training using supervised learning",
              "content": [
                "In case of using indirect logits, we can directly use ground truth to mark whether the model’s answer was right or wrong",
                "In case of verbalized probability, for every question type q, sample 100 questions of that question type, prompt GPT3 for an answer, manually verify answers and calculate empirical accuracy, assign that as the confidence score for all questions of the question type q",
                "In case we want the confidence scores to discrete bins: split 0 to 1 into 5 bins each with a width of 0.2",
                "Interestingly, using random words with inherent ordering such as Tom, Dick and Harry got slightly better calibration than using meaningful words such as low, medium and high.",
              ],
            },{
              "heading": "Calibration plots",
              "content": [
                "The ideal calibration plot (Model probability (x) vs Model accuracy (y)) is the identity line i.e. if the model is well calibrated and it predicts p% confidence for a particular question type, the model accuracy for that question type is p% too",
                "If points on the calibration plot are below the ideal line, it means that the model overestimates (i.e. it is overconfident)",
                "If points on the calibration plot are above the ideal line, it means that the model underestimates (i.e. it is underconfident)",
                "The performance of the model was similar irrespective of whether we used numbers/words in verbalized probabilities",
                "Verbalized probabilities generalizes moderately well on both evaluation sets (other models appear to be better calibrated on multiply-divide?)",
                "Verbalized probability overfits to train set more than other two setups",
                "Indirect logits generalizes quite well to multiply-divide",
              ],
            },{
              "heading": "Discussion",
              "content": [
                "Verbalized probabilities generalize better than answer logits => GPT3 can simply not be learning to output logits (if that was the case, the performances would have matched!)",
                "Experiments also showed that it is doing better than when using simply heuristics such as number of digits in integers in question, operator, number format etc",
                "Few-shot experiments give a possible explanation: Performance improves at k=25 and beyond: GPT3 has latent representations for questions and answers that relate to calibrated confidence and once it has seen enough few-shot examples, it is able to locate the task (or in some sense activate that latent power it had)  (Reynolds et al.)",
              ],
            },{
              "heading": "Taking it forward",
              "content": [
                "Use a more flexible approach of reinforcement learning (Stiennon et al.) ",
                "Train an auxiliary calibrator to predict whether the primary model’s answer is correct (Kamath et al.); Can be useful in cases where model is overconfident on out-of-domain examples",
              ],
            },{
              "heading": "GPT3’s quirk",
              "content": [
                "It was observed that GPT3 outputs a verbal probability (eg. 13%) only if the precise token (13%) was seen by it during training",            
              ],
            },
          ],
        },{
          title: "Did Aristotle use a laptop? A question answering benchmark with implicit reasoning strategies",
          authors: "Geva et al.",
          link: "https://arxiv.org/pdf/2101.02235.pdf",
          desc: [{
          "heading": "Key Contributions",
          "content": [
            "StrategyQA, a QA dataset (question, decomposition and evidence paragraphs from wikipedia) with implicit multi-step reasoning",
            "Data collection procedure to reduce lexical overlap b/w question and passage and repetitive strategies",
          ],
        },{
          "heading": "Motivation",
          "content": [
            " Need for dataset to build models that reason over multiple parts of their input",
            " Previous benchmarks make use of language that explicitly states the reasoning path to take. Reasoning steps contain text snippets from context which simplifies the problem; good performance on such benchmarks may not mean that models reason well. Reasoning can involve elements not explicitly stated in the context.",
          ],
        },{
          "heading": "Challenges for models with implicit reasoning",
          "content": [
            "  Strategy refers to the ability to  infer atomic sub-questions from a question",
            " Models need to infer strategy in case of implicit language",
            " Strategies in StrategyQA not limit to predefined set of decomposition patterns",
            " Decomposing strategy questions requires implicit knowledge",
          ],
        },{
          "heading": "Challenges in data collection",
          "content": [
            " Low creativity of annotators leads to a high lexical overlap b/w questions and contexts which in-turn leads to reasoning shortcuts",
          ],
        },{
          "heading": "Explicit vs Implicit questions",
          "content": [
            " Question decomposition can be written using language from questions => explicit",
            " New content words need to to be introduced to describe the reasoning process => implicit",
          ],
        },{
          "heading": "Decomposition",
          "content": [
            " A sequence of n steps required for answering a question q",
            " Each step corresponds to a single atomic question which may include references to a previous steps",
            " Last decomposition step returns final answer",
            " Two steps: Retrieval and Operation",
          ],
        },{
          "heading": "Data collection pipeline",
          "content": [
          ],
        },{
          "heading": "Creative question writing",
          "content": [
          ],
        },{
          "heading": "Problems",
          "content": [
            " When generating many instances annotators use recurring patterns leading to bias in data",
            " When given long  context, annotators tend to use a lot of the vocabulary in the content for their questions and explanations",
          ],
        },{
          "heading": "Solutions",
          "content": [
            " Prime works with keywords from Wikipedia",
            " Use a large number of annotators",
            " Model-in-the-loop evaluation (Train an  adversarial model and only accept questions which fool the model) to filter out questions that use patterns seen before",
          ],
        },{
          "heading": "Strategy Question Decomposition",
          "content": [
          ],
        },{
          "heading": "Problems",
          "content": [
            " Potential bias stemming from looking at context",
            " Undesirable explicit decompositions",
          ],
        },{
          "heading": "Solutions",
          "content": [
            " Annotate decompositions before evidence matching",
            " Use facts written in CQW phase showing strategy of question author to guide decomposition",
          ],
        },{
          "heading": "Evidence Matching",
          "content": [
            " Pick paragraphs from wikipedia  to support every step of decomposition",
          ],
        },{
          "heading": "Evidence Verification",
          "content": [
            " Decomposition structure to form a DAG with no cycles",
            " Check if decomposition can be carried out with marked evidence paragraphs alone",
          ],
        },{
          "heading": "Performance",
          "content": [
            " Human performance not necessarily an upper bound as machines are probably more efficient at finding relevant paragraphs than humans from large corpora",
            " Humans use very low number of searches to come up with decomposition/answer => humans use background knowledge that language models might lack",
            " Models trained on auxiliary datasets such as DROP, MNLI, BoolQ as reasoning in StrategyQA requires external knowledge outside of StrategyQA",
            " Models equipped with high quality retrieval effectively reasons over StrategyQA",
            " Models trained on gold decompositions perform much better than models trained on predicted decompositions => need for models good at decompositions",
            " Predicted decompositions well-structured and grammatical but wrongly applied to questions",
            " Decompositions also help human retrieval => decompositions are useful for finding evidence",
            " Failures in retrieval probably due to shallow pattern matching done by BM25 => need for advances in neural retrieval",
          ],
        },{
          "heading": "Possible improvements",
          "content": [
            " StrategyQA only involves yes/no questions; this task is easier than questions with free-form answers as chance of randomly guessing correct answer is significantly large",
          ],
        },
      ]
    },{
      title: "Measuring and narrowing the compositionality gap in language models",
      authors: "Press et al.",
      link: "https://arxiv.org/pdf/2210.03350.pdf",
      desc: [
        {
          "heading": "Key Contributions",
          "content": [
            " Ability of models to perform compositional reasoning tasks investigated",
            " As model size increases, single-hop reasoning performance increases but multi-hop reasoning performance does not increase at the same rate",
            " Compositionality gap roughly a constant (~40%) at all model sizes",
            " Elicitive prompting helps narrow compositionality gap",
            " Self-ask, a new elicitive prompting technique which can be easily integrated with a search engine for retrieval",
            " No models were fine-tuned, only need pretrained language models",
            " Compositional Celebrities, an automatically created dataset with 2-hop reasoning questions",
            " Bamboogle, a manually created small dataset with 2-hop reasoning questions which cannot be answered by search engines",
          ],
        },{
          "heading": "Motivation",
          "content": [
            " Rote memorization cannot help with compositional reasoning",
            " Strong question answering performance by LLMs may be due to memorization of huge corpora and not necessarily due to proper reasoning",
          ],
        },{
          "heading": "Compositionality gap",
          "content": [
            " Fraction of compositional questions that the model answers incorrectly out of all the compositional questions for which the model answers the sub-questions correctly",
            " Larger scale pretraining is effective at teaching models to memorize facts but not at how to compose them",
            " Higher the LM confidence about a certain fact (measured using perplexity), greater than probability that it can compose it with other facts to correctly answer compositional questions about it [Lower preplexity => model can retrieve 1-hop facts more confidently => model can properly combine facts to answer compositional question correctly]",
          ],
        },{
          "heading": "Why elicitive prompting works?",
          "content": [
            " Lets the model “think through” before answering, provides model more computational steps which could be useful when reasoning about tough questions",
          ],
        },{
          "heading": "Datasets",
          "content": [
            " 2WikiMultiHopQA and Musique",
            " Compositional Celebrities (fixed set of 17 patterns used to compose questions)",
            " Bamboogle (smaller than CC but much more variation in strategies employed and language)",
            " While the LM is very likely to have seen the individual facts separately, the combination of facts is sufficiently unnatural for it to have seen it during pretraining/training",
            " Unlike in StrategyQA where all answers were yes/no, for most questions the answer domain is large => lower chance of model randomly guessing correctly",
          ],
        },{
          "heading": "Prompting techniques",
          "content": [
            " Direct answer prompting",
            " Elicitive prompting",
            " Chain of Thought",
            " Scratchpad",
            " “Lets think step-by-step” (Konjima et al - 2022)",
            " Self-ask",
            " Prompt the model to explicitly state follow-up questions it wants to ask and answer before answering the original question",
            " Completely automatic: model executes the entire process by itself, including deciding the number of sub-questions to ask",
            " Advantage over CoT",
            " Disentangles decomposition of the full question by formulating sub-questions explicitly",
            " Unlike CoT which outputs full sentences in certain cases, Self-ask presents the answer in a concise and an easily parsable manner",
            " Clear demarcation of start and end of every sub-question",
          ],
        },{
          "heading": "Experiments",
          "content": [
            " Answer type specified immediately before outputting the final answer in CoT experiments as it was empirically found to improve performance (but not in Self-ask)",
            " Search Engine < Direct prompting < Search engine + LM post-processing to extract out answer < CoT < Self-ask < Self-ask + Search Engine",
            " The superior performance of Self-ask when combined with a search engine would indicate that improvements in the retrieval process can benefit QA performance",
          ],
        },{
          "heading": "Shortcomings",
          "content": [
            " Datasets other than CC were not tested with elicitive prompts due to lack of sub-questions for those datasets",
          ],
        },{
          "heading": "Possible future work",
          "content": [
            " Reporting perplexities assigned to correct answers a better measure than accuracy as it reflects the model’s confidence on the answer (Lin et al. would disagree, can be seen as a proxy but it is not the same as the epistemic certainty over the claim)",
          ],
        }
      ],
    },{
      title: "Answering Questions by Meta-Reasoning over Multiple Chains of Thought",
      authors: "Yoran et al.",
      link: "https://arxiv.org/pdf/2304.13007.pdf",
      desc: [
        {
          "heading": "Main Contributions",
          "content": [
            " MCR (Multi-Chain Reasoning): prompt LLMs to meta-reason over multiple CoTs rather than aggregating their results (as in self-consistency)",
            " Take into consideration the relations between intermediate steps across chains to provide a unified explanation for the predicted answer",
          ],
        },{
          "heading": "Prior Work",
          "content": [
            " CoT, SC: useful in reasoning-heavy settings",
            " Problem: When space of possible answers is large, each reasoning chain my lead to a different output with no clear majority",
            " Why focus only on the final answer? Why not consider the intermediate steps?",
            " Problem of interpretability in SC: Which explanation to use as the final explanation?",
          ],
        },{
          "heading": "MCR",
          "content": [
            " Sampled reasoning chains are used to collect pieces of evidence to arrive at the final prediction using a meta-reasoner model, a separate LLM",
            " Three main components: decomposition model, retriever, meta-reasoner",
            " MCR consistently outperforms other methods while also generating high-quality explanations",
            " Bottoline: Reasoning over reasoning chains helps",
        ],
      }
      ],
    },{
      title: "Navigating the Gray Area: Expressions of Overconfidence and Uncertainty in Language Models",
      authors: "Zhou et al.",
      link: "https://arxiv.org/pdf/2302.13439.pdf",
      desc: [
        {
          "heading": "Major Contributions",
          "content": [
            " How expressions of uncertainty interact with LLMs",
            " Typology of expressions of uncertainty",
            " Effect of expressions of uncertainty on model accuracy",
            " Test GPT3’s calibration on expressions of uncertainty",
          ],
        },{
          "heading": "Motivation",
          "content": [
            " Expressions of uncertainty aid human decision making by providing confidence, source and limitations of information",
          ],
        },{
          "heading": "Questions to answer",
          "content": [
            " Do some expressions of uncertainty have systematic effects on a model's behaviour?",
            " Does the degree of uncertainty play a role in the accuracy of the model?",
            " How much certainty causes performance degradation?",
            " How does model performance change when models learn to emit their own expressions of uncertainty?",
          ],
        },{
          "heading": "Limitations of prior work",
          "content": [
            " Prior work focussed on learning a mapping between internal probabilities and model confidence in the form of a verbal or numerical ordinal output",
            " Current work seeks to explore non-uni-dimensional linguistic features, such as hedges and evidential markers, and their impact on NLG by LLMs",
          ],
        },{
          "heading": "Linguistic Markers",
          "content": [
            " Weakeners are hedges that weaken or modify category membership of a predicate or a nominal",
            " Eg. Approximators (somewhat, kind of),, Plausibility shields (I think, I believe)",
            " Strengtheners mark certainty",
            " Eg. Boosters/Intensifiers (Undoubtedly, I am certain), Factive verbs(know, realize, understand)",
            " Evidential markers indicate the source of information",
            " Eg. Quotative markers",
            " Personal pronouns can be used to mark subjectivity and uncertainty (I think)",
          ],
        },{
          "heading": "Results",
          "content": [
            " GPT3 is sensitive to uncertainty cues and these cues improve accuracy of model",
            " Weakeners perform between than strengtheners (This is probably because the use of weakeners  distributes probability more evenly across each of the possible options excluding the top choice)",
            " Factive verbs lead to lower accuracy",
            " Confident  prompt templates lead to worse generations",
            " Evidential markers significantly improve performance",
            " Numerical uncertainties are poorly calibrated",
            " Certainty hurts model accuracy at extremes (0% or 100%)",
            " This is probably due to hyperbolic or exaggerated language in the training set; maybe models recognize such idiomatic non-literal uses of extreme values)",
            " Skewed  distribution of numerical frequencies in model training data",
            " Eg. 95% confidence interval",
            " Humans tend to exaggerate values or use colloquial terms to describe confidence",
            " Eg. “I am 100% sure” only means that it is a strong belief and not necessarily a fact",
            " GPT3 has a limited ability to learn naturalistic expressions of uncertainty in a calibrated manner",
            " Eg. When the model emits a strengthener, the answer is not any more likely to be correct!",
            " Underlying entropy of the probability distribution of the generated answer is well-calibrated to the expressions of uncertainty",
            " When emitting weakeners, the model places more consideration on alternative answers (evidenced by higher entropy of the distribution of potential generations) and less when emitting strengtheners",
          ],
        },{
          "heading": "Bottomline",
          "content": [
            " Teaching models to only emit expressions of uncertainty when they are unsure rather than when they are sure is a safer design choice for HCI",
          ],
        },{
          "heading": "Challenges",
          "content": [
            " The use of weakeners in spoken language  will vary greatly from that of written language",
            " Vocal disfluencies could impact model’s interpretation and generation of uncertainties",
            " Arbitrary attribute generation can lead to false but highly credible attributions",
            " Remains to be seen how humans interpret expressions of model uncertainty",
        ],
      }
      ],
    },{
      title: "STaR: Self-Taught Reasoner, Bootstrapping reasoning with reasoning",
      authors: "Zelikman et al.",
      link: "https://arxiv.org/pdf/2203.14465.pdf",
      desc: [
        {
          "heading": "Contributions",
          "content": [
            " A technique  to iteratively leverage a small number of rationale examples and a large datasets without rationales",
            " Bootstrap the ability to successively perform more complex reasoning",
          ],
        },{
          "heading": "Motivation",
          "content": [
            " Inducing LM rationale generation requires large rationale datasets or sacrificing accuracy by performing few-shot evaluation",
            " Rationales (explicit intermediate reasoning) can help attain perfect in-distribution performance and strong out-of-distribution generalization",
          ],
        },{
          "heading": "STaR",
          "content": [
            " A scalable bootstrapping method allowing models to learn to generate their own rationales, while also learning to solve increasingly complex problems",
            " This method allows us to effectively translate a small number of few-shot prompts into a large rationale dataset",
            " Rationale generation is augmented with rationalization to prevent stagnation during training by providing training signals on rationales that lead to wrong answer (i.e. failed examples)",
          ],
        },{
          "heading": "Assumption",
          "content": [
            " Correct answer => correct rationale (Possibly noisy data)",
          ],
        },{
          "heading": "Why does rationalization help?",
          "content": [
            " While rationale generation samples rationales from the distribution p(r|x) provided by the model, rationalization conditions on the answer, giving the model access to an alternative distribution p(r|x,y) which may be a better search space for rationales",
            " Better than temperature sampling which is constrained my the sequential nature of text generation by LLMs",
            " Empirically found that higher temperatures improve accuracy but lead to poor quality rationales compared to rationalization",
          ],
        },{
          "heading": "Limitations",
          "content": [
            " The model used must have better than chance few-shot performance in the first iteration i.e. model must have sufficient reasoning capabilities for STaR to work",
            " Rationales generated by STaR in settings of very high level of chance performance are poor",
        ],
      }
      ],
    },{
      title: "Generation Probabilities are not enough: Exploring the effectiveness of uncertainty highlighting in AI-powered code generation",
      authors: "Vasconceles et al.",
      link: "https://arxiv.org/abs/2302.07248#:~:text=14%20Feb%202023%5D-,Generation%20Probabilities%20Are%20Not%20Enough%3A%20Exploring%20the%20Effectiveness%20of%20Uncertainty,in%20AI%2DPowered%20Code%20Completions&text=Abstract%3A%20Large%2Dscale%20generative%20models,assist%20programmers%20in%20writing%20code.",
      desc: [
        {
          "heading": "Contribution",
          "content": [
            " How helpful is highlighting uncertain tokens in generated text?",
            " How do we quantify uncertainty in text generation?",
            " How do we report/represent/display uncertainty to the end-user?",
          ],
        },{
          "heading": "Motivation",
          "content": [
            " LLMs are unable to distinguish correct answers from outputs that are seemingly coherent and plausible; LMs can be confidently wrong! (hallucination)",
            " Usage of  AI has led to automation bias, automation-induced complacency and overreliance",
            " Eg. Lank et al. without highlights, errors go undetected; highlighting errors slows user down",
            " Computing uncertainty for text generations is more difficult than doing it for classification/categorical output setting where the output is atomic and structured unlike in text generation where the outputs are unstructured and of varying length",
            " Uncertainty scores may improve task performance, trust and user experience",
          ],
        },{
          "heading": "Quantifying uncertainty",
          "content": [
            " Generation probability",
            " Not in line with programmer’s intuition",
            " Edit model",
            " Models likelihood that a programmer would need to modify/delete a token to solve a problem",
            " Cannot be obtained directly from generative models",
            " Need to build a model based on programmers’ logs",
          ],
        },{
          "heading": "Problems with using generation probabilities for uncertainty",
          "content": [
            " Many possible variable names, model may be uncertain which one to pick, not a real problem",
            " Many correct ways of implementing a function, model cannot be certain of all possible ways",
            " Typical highlights",
            " Variable names",
            " Start and end of new sequences (eg. class, loop etc)",
            " Comparators (eg. ==, <= etc)",
          ],
        },{
          "heading": "Representing uncertainty",
          "content": [
            " Gauges, percentages, highlights, discretization, deferring to the user (eg. withholding uncertain predictions)",
            " Post-hoc calibration models and auxiliary models to improve uncertainty scores",
            " Absolute numbers can be confusing without context, even distracting; Shading/underlining preferred",
            " Could show alternative outputs for uncertain regions of text",
            " Explanation for why the model is uncertain",
            " Different levels of uncertainty, helps prioritize",
            " Keep suggestions short and crisp",
            " Too many uncertain regions a problem, better to not display an output in such cases?",
            " Dimensions: uncertainty granularity, specificity, interactivity",
          ],
        },{
          "heading": "Results",
          "content": [
            " Using generation probabilities to compute uncertainty not any better than not highlighting errors at all",
            " Edit model better in some aspects; feasibility of building one in an open-world setting is a question",
          ],
        },{
          "heading": "Bottomline",
          "content": [
            " Does error highlighting lead to a transfer of overreliance on generated text to highlighted errors?",
            " How many unhighlighted errors get noticed by user?",
            " How likely is a token to survive if it gets highlighted?",
            " Highlights at very fine granularity can be annoying, block-level/sentence-level highlighting ideal",
            " Users must be clearly communicated the notion of uncertainty as potential errors",
            " Highlighted text not necessarily wrong",
            " No highlights does not mean no errors",
            " Highlighting cannot help in case of missing content",
            " Need to focus on other  aspects besides correctness such as maintainability and security (in the context of AI-powered code completion)",
        ],
      }
      ],
    },{
      title: "What Comes Next? Evaluating uncertainty in neural text generators against human production variability",
      authors: "Giulianelli et al.",
      link: "https://arxiv.org/abs/2305.11707",
      desc: [
        {
          "heading": "Motivation",
          "content": [
            " Do LLMs exhibit production variability that humans do?",
            " Humans exhibit varied linguistic realizations of communicative goals even when the context and the communicative goals are fixed",
          ],
        },{
          "heading": "Eg. Translation",
          "content": [
            " Want NLG systems to mimic humans",
          ],
        },{
          "heading": "Contribution",
          "content": [
            " Natural language generator’s calibration to human production variability regarded as aleatoric uncertainty",
            " Instance-level reference-based evaluation helps build trust in generator’s ability to produce human-like texts in specific linguistic contexts",
          ],
        },{
          "heading": "Production Probes",
          "content": [
            " Do not have access to an explicit representation of the distribution underlying human production, but can produce conditional samples",
            " Production probes help understand how given an input how the output of a language process relates to the output of another language process",
            " Probes along linguistically interpretable dimensions",
            " Lexical",
            " Fraction of common n-grams in two texts",
            " Syntactic",
            " Fraction of common part-of-speech tag n-grams in two texts",
            " Semantic",
            " Cosine similarity between sentence embeddings of two texts",
          ],
        },{
          "heading": "Results",
          "content": [
            " NLG models overestimate production variability in open-ended tasks such as open-domain dialogue  generation and story generation",
            " NLG models underestimate  production variability in more constrained tasks such as machine translation and text simplification",
            " Most popular decoding algorithms (temperature sampling, nucleus sampling, top-k sampling) have limited effect on the generator’s ability to reproduce human variability",
        ],
      }
      ],
    },{
      title: "In search of verifiability: Explanations rarely enable complementary performance in AAI-advised decision making",
      authors: "Fok et al.",
      link: "https://arxiv.org/abs/2305.07722",
      desc: [
        {
          "heading": "Motivation",
          "content": [
            " Do AI explanations aid verifiability?",
            " Explanations are only useful as long as they enable a human to verify the answer given by the AI",
            " What about contexts such as factoid answering where verifiability is inherently difficult?",
            " Reduce cognitive load, increase cognitive engagement",
          ],
        },{
          "heading": "Problem of explanations",
          "content": [
            " Explanations can increase over-reliance and blind-trust on AI irrespective of the quality of these explanations",
            " Explanations not very helpful in determining how much to trust the AI’s recommendation",
            " Explanations can lead to anchoring bias and confirmation bias",
            " Do decision makers cognitively engage with AI explanations?",
            " What constitutes a useful explanation is task-dependent",
          ],
        },{
          "heading": "Complementary performance",
          "content": [
            " Human-AI systems outperform both the human alone and AI alone",
          ],
        },{
          "heading": "Verifiability",
          "content": [
            " Explanations may reduce cognitive load by lowering the cost of verification enough to yield complimentary performance",
            " Usefulness of explanations is also limited by the stochasticity of the task",
            " Human behavior is highly stochastic and hence difficult to predict",
            " Explanations can be useful to identify fatal flaws in the AI’s reasoning thereby encouraging rejecting the AI’s recommendation",
            " Unfortunately, more often than not the model makes mistakes for plausible reasons thereby making it difficult to the human to identify",
            " Decision maker needs to have sufficient task-specific knowledge to characterize solutions",
          ],
        },{
          "heading": "Reliance",
          "content": [
            " (Outcome-graded) Appropriate reliance",
            " Accept AI’s outcome when it is right and reject it when it is wrong",
            " Post-hoc",
            " Non-deterministic: Same inputs to AI and same recommendation made, maybe appropriate to accept AI’s recommendation in one case and reject in another case",
            " Strategy-graded reliance",
            " Accept AI’s outcome when it is expect to outperform human and reject it when it is not expected to outperform human",
            " How to compute this expectation?",
            " Past performance",
            " Current context",
            " AI’s recommendation",
            " AI’s explanation",
          ],
        },{
          "heading": "Alternative approaches for Human-XAI",
          "content": [
            " Cognitive forcing",
            " Interactive XAI",
            " Evaluative AI",
            " Human-AI delegation",
        ],
      }
      ],
    },
    // {
    //   title: "",
    //   authors: " et al.",
    //   link: "",
    //   desc: [
    //   ],
    // }
    //   ],
    // },
      ],
      // nonAcademicInterests: ""
    }
  }

  componentDidMount() {
    setTimeout(function() {
      var welcomeDiv = document.getElementById("welcomeDiv");
      if(welcomeDiv) {
        welcomeDiv.style.animation = "fadeIntoOblivion 3s linear";
        setTimeout(function() {
          welcomeDiv.style.display = "none";
          var mainPage = document.getElementById("mainPage");
          if(mainPage) {
            mainPage.style.display = "flex";
          }
        }, 3000)
      }
    }, 5000);
  }

  render() {
    return (
      <div className="App">
          <Welcome showMainPage={this.showMainPage} author={this.state.author} authorInTamil={this.state.authorInTamil}/>
          <Main 
            author={this.state.author} 
            authorInTamil={this.state.authorInTamil} 
            eduHistory={this.state.eduHistory}
            experience={this.state.experience}
            curLoc={this.state.curLoc}
            hometown={this.state.hometown}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
            credo={this.state.credo}
            credoInTamil={this.state.credoInTamil}
            description={this.state.description}
            githubRepos={this.state.githubRepos}
            researchInterests={this.state.researchInterests}
            paperTakeaways={this.state.paperTakeaways}
          />
      </div>
    );
  }
}

export default App;

// def format(inp):
//   for line in inp.split("\n"):
//     if len(line)==0:
//       continue
//     line = line.strip()
//     if not line.startswith("-") and not line.startswith("*"):
//       print("\t],\n},{\n\t\"heading\": \""+line+"\",\n\t\"content\": [")
//     else:
//       print("\t\t\"{}\",".format(line[1:]))