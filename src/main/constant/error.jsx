import image404 from '../assets/404.jpg';
import image500 from '../assets/500.gif';

const errorList = [
  {
    link: '404', title: 'Page Not Found', message: 'The page you are trying to access is not available.', image: image404,
  },
  {
    link: '500', title: 'Internal Server Error', message: 'Encountered an error while trying to access request', image: image500,
  },
];

export default errorList;
