export interface IReview {
  comment: string;
  reviewer: string;
}

export interface IProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  reviews: IReview[];
}

export const products: IProductData[] = [
  {
    id: 1,
    name: "React Router",
    description: "A Collection of navigational components that compose declaratively...",
    price: 10,
    reviews: [
      {
        comment: "for it is as if it were a great pleasure indeed for those who praise Him\ntimes in which the pain of the necessities is as it were of those who are reciting and for the wise accusing Him",
        reviewer: "Leanne Graham",
      },
      {
        comment: "If a wise man has to take up his troubles and gain the distinction of hardships, I will open up and reject him from the fact that everyone, blinded by the net, hates it",
        reviewer: "Ervin Howell",
      },
    ],
  },
  {
    id: 2,
    name: "React Redux",
    description: "A library that helps manage state across your app",
    price: 12,
    reviews: [
      {
        comment: "the avoidance of those who feel pain and abandon the exercise of the body through the devising of the body through the desire of the body is to be accepted, but what is the fault of the greater body",
        reviewer: "Clementine Bauch",
      },
      {
        comment: "he's willing to do any of his labors, so he can't do so as unfettered pleasures are called time or time and error to reject the most worthy follow-up, free but easy to escape",
        reviewer: "Patricia Lebsack",
      },
    ],
  },
  {
    id: 3,
    name: "React Apollo",
    description: "A library that helps you interact with a GraphQL backend",
    price: 20,
    reviews: [
      {
        comment: "the pain is that but the least I will open the nut of the most worthy of the accusers at the time and and or of the great annoyance that we accuse those of pleasure as pleasures\never but the master as",
        reviewer: "Chelsey Dietrich",
      },
      {
        comment: "he who hates the pleasures of our present mind does not hinder him when he who will explain some of our flights's pleasure shuns the exercise of these pleasures in times when the most worthy distinction is found in being",
        reviewer: "Mrs. Dennis Schulist",
      },
    ],
  }
];
