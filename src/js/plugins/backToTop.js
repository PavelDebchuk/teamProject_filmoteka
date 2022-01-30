import { addBackToTop } from 'vanilla-back-to-top';

function backToTop() {
   
    addBackToTop({
  backgroundColor: '#ff6b018e',
  diameter: 60,
  innerHTML: '<svg id="arrow-up2" viewBox="0 0 32 32"><path d="M27.414 12.586l-10-10c-0.781-0.781-2.047-0.781-2.828 0l-10 10c-0.781 0.781-0.781 2.047 0 2.828s2.047 0.781 2.828 0l6.586-6.586v19.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-19.172l6.586 6.586c0.39 0.39 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828z"></path></svg>',
  textColor: '#ffffff',
  scrollDuration: 700,
  showWhenScrollTopIs: 100,
  cornerOffset: 30,
    });
  
};

export default backToTop;