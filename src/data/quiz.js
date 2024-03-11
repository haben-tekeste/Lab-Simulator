export const prequiz = {
  topic: "Pre Quiz",
  level: "Beginner",
  totalQuestions: 5,
  perQuestionScore: 5,
  questions: [
    {
      question: "What is the primary purpose of a gas absorption column?",
      choices: [
        "To generate electricity",
        "To separate gases based on their molecular weight",
        "To remove one or more components from a gas mixture",
        "To measure the pressure of a gas stream",
      ],
      type: "MCQs",
      correctAnswer: "To remove one or more components from a gas mixture",
    },
    {
      question:
        "Which factor is crucial for the efficiency of a gas absorption column?",
      choices: [
        "Temperature of the gas",
        "Diameter of the column",
        "Velocity of the gas",
        "Composition of the liquid absorbent",
      ],
      type: "MCQs",
      correctAnswer: "Composition of the liquid absorbent",
    },
    {
      question: "In gas absorption, what role does the liquid absorbent play?",
      choices: [
        "Provides heat for the process",
        "Separates gases based on boiling points",
        "Reacts with gases to form new compounds",
        "Absorbs and removes specific components from the gas stream",
      ],
      type: "MCQs",
      correctAnswer:
        "Absorbs and removes specific components from the gas stream",
    },
    {
      question:
        "What is the purpose of packing materials or trays inside a gas absorption column?",
      choices: [
        "To regulate the flow of liquid absorbent",
        "To increase the column's structural integrity",
        "To enhance mass transfer between the gas and liquid phases",
        "To measure the pressure drop across the column",
      ],
      type: "MCQs",
      correctAnswer:
        "To enhance mass transfer between the gas and liquid phases",
    },
    {
      question:
        "How does the choice of solvent in a gas absorption column affect the overall performance?",
      choices: [
        "It has no impact on the process",
        "It determines the color of the final product",
        "It affects the selectivity and efficiency of gas removal",
        "It increases the column's height for better separation",
      ],
      type: "MCQs",
      correctAnswer: "It affects the selectivity and efficiency of gas removal",
    },
  ],
};

export const postquiz = {
  topic: "Post Quiz",
  level: "Beginner",
  totalQuestions: 5,
  perQuestionScore: 5,
  questions: [
    {
      question:
        " gas absorption column has a gas flow rate (G) of 60 m³/h and a liquid-to-gas ratio (L/G) of 0.5 m³/m³. Calculate the required liquid flow rate (L)",
      choices: ["L = 30 m³/h", "L = 40 m³/h", "L = 50 m³/h", "L = 75 m³/h"],
      type: "MCQs",
      correctAnswer: "L = 40 m³/h",
    },
    {
      question:
        "The diameter of a gas absorption column is 2 meters, and the gas velocity (Vg) is 0.5 m/s. Calculate the gas flow rate (G) using the formula ( G = π *(D/2)2 *Vg).",
      choices: [
        "G = 1.57 m3/s",
        "G = 3.14 m3/s",
        "G = 4.71 m3/s",
        "G = 6.28 m3/s",
      ],
      type: "MCQs",
      correctAnswer: "G = 4.71 m3/s",
    },
    {
      question:
        "A gas absorption column has a liquid flow rate (L) of 25 m³/h and a concentration (C) of 0.6 mol/m³. Calculate the mass flow rate of the solute (m) using the formula m = L * C",
      choices: ["m = 15 mol/h", "m = 20 mol/h", "m = 30 mol/h", "m = 40 mol/h"],
      type: "MCQs",
      correctAnswer: "m = 30 mol/h",
    },
    {
      question:
        "Calculate the overall mass transfer coefficient (Kg) for a gas absorption column with a gas phase mass transfer coefficient (Kg’) of 0.04 m/s and a liquid phase mass transfer coefficient (Kl') of 0.02 m/s. Use the formula ( Kg = 1/((1/Kg') + (1/Kl').",
      choices: [
        "Kg = 0.0133 m/s",
        "Kg = 0.02 m/s",
        "Kg = 0.03 m/s",
        "Kg = 0.05 m/s",
      ],
      type: "MCQs",
      correctAnswer: "Kg = 0.0133 m/s",
    },
    {
      question:
        "A gas absorption column has 15 trays, and each tray has a liquid holdup (H) of 0.4 m. Calculate the total liquid holdup in the column using the formula (Total Liquid Holdup = Number of Trays *  Liquid Holdup per Tray)",
      choices: ["6 m", "9 m", "12 m", "8 m"],
      type: "MCQs",
      correctAnswer: "9 m",
    },
  ],
};
