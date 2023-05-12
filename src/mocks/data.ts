export const images = [
  {
    id: 1,
    src: `${process.env.NODE_ENV === 'production' ? '/react-food-app/images/adobo.jpg' : '/images/adobo.jpg'}`,
    caption: "Filipino Adobo",
  },
  {
    id: 2,
    src: `${process.env.NODE_ENV === 'production' ? '/react-food-app/images/caldereta.jpg' : '/images/caldereta.jpg'}`,
    caption: "My specialty Caldereta",
  },
  {
    id: 3,
    src: `${process.env.NODE_ENV === 'production' ? '/react-food-app/images/scrambled-egg.jpg' : '/images/scrambled-egg.jpg'}`,
    caption: "Scrambled Egg",
  },
  {
    id: 4,
    src: `${process.env.NODE_ENV === 'production' ? '/react-food-app/images/afritada.jpg' : '/images/afritada.jpg'}`,
    caption: "Afritada na Masarap",
  },
  {
    id: 5,
    src: `${process.env.NODE_ENV === 'production' ? '/react-food-app/images/kinilaw.jpg' : '/images/kinilaw.jpg'}`,
    caption: "Kinilaw na Isda",
  },
];
 